import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export default function Indexpage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 p-8 md:p-12">
        <div className="container flex flex-col item-center gap-4 max-w-[64rem] mx-auto text-center">
          <Link
            href={siteConfig.links.x}
            className="bg-muted w-fit mx-auto px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal mx-auto max-w-[42rem]">
            このアプリケーションはNext.js App
            Routerで作られたものです。ユーザーは自由にポストをすることができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
