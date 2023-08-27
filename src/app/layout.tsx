import "../styles/globals.css";
// import { Metadata } from 'next';
import Footer from "../components/footer";
import NavBar from "@/components/navbar2";

// export const metadata: Metadata = {
//   title: {
//     default: 'Next.js App Router',
//     template: '%s | Next.js App Router',
//   },
//   description:
//     'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
//   openGraph: {
//     title: 'Next.js App Router Playground',
//     description:
//       'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
//     images: [`/api/og?title=Next.js App Router`],
//   },
//   twitter: {
//     card: 'summary_large_image',
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div className="h-full w-full bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
          <NavBar />
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
