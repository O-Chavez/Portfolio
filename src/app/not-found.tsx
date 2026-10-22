import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { buttonStyles } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[60vh] max-w-[1120px] flex-col items-center justify-center px-5 py-[clamp(72px,10vw,128px)] text-center">
        <p className="font-mono text-[13px] text-ink-4">404</p>
        <h1 className="mt-3 text-[clamp(38px,5.6vw,68px)] leading-[1.04] font-bold tracking-[-0.04em]">
          Nothing here.
        </h1>
        <p className="mt-4 max-w-[460px] text-lg leading-normal text-ink-3">
          That page doesn’t exist, or it moved in the redesign.
        </p>
        <Link href="/" className={`${buttonStyles.primary} mt-8`}>
          Back to the homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
