import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = (dirname: string) =>
  join(process.cwd(), "src", "markdown", dirname);

export function getPostSlugs(dirname: string) {
  return fs.readdirSync(postsDirectory(dirname));
}

export function getPostBySlug(
  dirname: string,
  slug: string,
  fields: string[] = []
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory(dirname), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(dirname: string, fields: string[] = []) {
  const slugs = getPostSlugs(dirname);
  const posts = slugs
    .map((slug) => getPostBySlug(dirname, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
