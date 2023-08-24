"use client";

import "../styles/globals.css";
import Link from "next/link";
import Dropdown from "./dropdown";
import useWindowSize from "@/utils/useWindow";

export default function Navbar(): React.ReactElement {
  const size = useWindowSize();
  return size.width > 640 ? (
    <div className="bg-yellow-500">
      <ul className="text-1xl flex w-full flex-col p-3 text-center font-bold text-black sm:flex-row lg:justify-between">
        <li className="mx-2 flex-grow p-2 hover:text-gray-400">
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li className="mx-2 flex-grow p-2 hover:text-gray-400">
          <Link href="/" className="">
            About
          </Link>
        </li>
        <li className="mx-2 flex-grow p-2 hover:text-gray-400">
          <Link href="/" className="">
            Board
          </Link>
        </li>
        <li className="mx-2 flex-grow p-2 hover:text-gray-400">
          <Link href="/" className="">
            Minyan
          </Link>
        </li>
        <li className="mx-2 flex-grow p-2 hover:text-gray-400">
          <Link href="/" className="">
            Eruv
          </Link>
        </li>
        <li className="mx-2 flex-grow p-2 hover:text-gray-400">
          <Link href="/" className="">
            Donate!
          </Link>
        </li>
        <li className="mx-2 flex-grow p-1 hover:text-gray-400">
          <Dropdown />
        </li>
      </ul>
    </div>
  ) : (
    <div>
      <p>Too small to display, better luck next time</p>
    </div>
  );
}
