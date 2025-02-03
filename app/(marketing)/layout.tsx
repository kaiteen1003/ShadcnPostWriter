import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Mainnav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <Mainnav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "mx-4 "
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
