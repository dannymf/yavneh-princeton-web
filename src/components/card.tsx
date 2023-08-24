import ReactMarkdown from "react-markdown";
import Image, { StaticImageData } from "next/image";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
  image,
  large,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  large?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "" : ""
      }`}
    >
      {/* /* <div className="flex h-60 items-center justify-center">{demo}</div> */}
      <div className="mx-auto max-w-md space-y-5 p-2 text-center">
        <h2 className="font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        {/* <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose"> */}
        <Balancer>
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                //   <code
                //     {...props}
                //     // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                //     inline="true"
                //     className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                //   />
                <></>
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </Balancer>
        {/* </div> */}
        <div className="rounded-3xl">
          <Image
            src={image}
            alt=""
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0.75rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
