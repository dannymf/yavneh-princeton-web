"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/use-scroll";
import { MenuIcon } from "@heroicons/react/solid";
// import UserDropdown from "./user-dropdown";
// import { Session } from "next-auth";

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
        <div className="grid grid-flow-col px-5 py-3">
          <Link href="/" className="flex items-center text-2xl">
            <div className="rounded-full bg-orange-500 bg-opacity-25 p-2">
              <Image
                src="/yavnehlogo.png"
                alt="Precedent logo"
                width="15"
                height="24"
              ></Image>
            </div>
            <p className="px-2 font-serif text-orange-700 text-opacity-70">
              Yavneh of Princeton
            </p>
          </Link>
          <MenuIcon
            className="h-10 justify-self-end rounded-full border-2 border-black border-opacity-30 hover:bg-orange-400"
            aria-hidden="true"
          />
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
      </div>
    </>
  );
}
