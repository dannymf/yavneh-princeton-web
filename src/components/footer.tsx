import "../styles/globals.css";
import Link from "next/link";

export default function Footer(): React.ReactElement {
  return (
    <div className="relative bottom-0 flex w-full bg-orange-800">
      <ul className="flex w-full flex-col items-center text-gray-400">
        <li>
          <Link href="/" className="">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/" className="">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
