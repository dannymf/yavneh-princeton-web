import Image from "next/image";
import ceej from "/public/ceej.jpg";
import ceej2 from "/public/ceej2.jpg";
import Card from "@/components/card";
import Twitter from "@/components/twitter";
import Balancer from "react-wrap-balancer";
import { getAllPosts } from "@/lib/getPosts";

type Post = {
  slug: string;
  title: string;
  content: string;
};

export default function Page() {
  const allPosts = getAllPosts(["title", "slug", "content"]) as Post[];

  return (
    <div className="w-full space-y-5 p-4">
      {/* <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 space-y-10 self-center"> */}
      <a
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className="animate-fade-up mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <Twitter className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">
          Introducing Precedent
        </p>
      </a>
      <h1
        className="animate-fade-up font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-3xl font-bold text-transparent drop-shadow-sm"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>
          The Orthodox Jewish community at Princeton University
        </Balancer>
      </h1>
      <p
        className="animate-fade-up mt-6 text-center text-gray-500 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Yavneh is committed to fostering a community of Jewish practice, Torah
          learning, <em>tefillah</em> (prayer), open discussion, and friendship.
        </Balancer>
      </p>

      <div className="animate-fade-up flex w-full flex-col justify-center space-y-10 px-6 lg:px-72">
        {features.map(({ title, description, image, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            image={image}
            large={large}
          />
        ))}
        <Card
          key={allPosts[1].title}
          title={allPosts[1].title}
          description={allPosts[1].content}
          image={ceej}
          large={true}
        />
      </div>
      {allPosts.map((post) => (
        <div key={post.slug}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    title: "Daily Minyanim",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
    image: ceej,
  },
  {
    title: "Torah Learning",
    description:
      "In addition to daily _minyanim_ (prayer services) and various Torah learning opportunities, Yavneh also hosts social events such as study breaks, _Oneg Shabbat_ gatherings, and holiday programs.",
    large: true,
    image: ceej2,
  },
  {
    title: "Social Events",
    description:
      "In addition to daily _minyanim_ (prayer services) and various Torah learning opportunities, Yavneh also hosts social events such as study breaks, _Oneg Shabbat_ gatherings, and holiday programs.",
    large: true,
    image: ceej2,
  },
];
