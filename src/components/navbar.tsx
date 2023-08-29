"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/use-scroll";
import { ChevronDownIcon, MenuIcon } from "@heroicons/react/solid";
// import UserDropdown from "./user-dropdown";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 h-16 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="grid grid-flow-col px-6 py-3">
          <Link
            href="/"
            className={`flex items-center ${
              scrolled ? "text-xl md:text-2xl" : "text-4xl md:text-6xl"
            } transition-all`}
          >
            <div className="rounded-full bg-orange-500 bg-opacity-25 p-2">
              <Image
                src="/yavnehlogo.png"
                alt="Precedent logo"
                width={scrolled ? 15 : 30}
                height={scrolled ? 24 : 48}
              ></Image>
            </div>
            <p className="px-2 font-serif text-orange-700 text-opacity-70">
              Yavneh of Princeton
            </p>
          </Link>
          {scrolled ? (
            <div className="hidden justify-end space-x-16 pr-3 align-top text-xl font-bold text-slate-600 md:flex">
              <Link
                href="/about"
                className="transition-all hover:text-orange-500"
              >
                About
              </Link>
              <Link
                href="/board"
                className=" transition-all hover:text-orange-500"
              >
                Board
              </Link>
              <Link
                href="/minyan"
                className="transition-all hover:text-orange-500"
              >
                Minyan
              </Link>
              <Link
                href="/donate"
                className="transition-all hover:text-orange-500"
              >
                Donate!
              </Link>
              <Link
                href="/more"
                className="font-extrabold transition-all hover:text-orange-500"
              >
                More <ChevronDownIcon className="inline-block h-6 w-6" />
              </Link>
            </div>
          ) : (
            ""
          )}
          <MenuIcon
            className={`${
              scrolled ? "md:hidden" : ""
            } h-8 justify-self-end rounded-full hover:bg-orange-400`}
            aria-hidden="true"
          />
        </div>

        {/* <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div> */}
      </div>
    </>
  );
}
