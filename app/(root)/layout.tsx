import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) return redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-0.5">
          <Image
            src="/ai-avatar-2.png"
            alt="MockMate Logo"
            width={50}
            height={50}
          />
          <h2 className="text-primary-100">Hms HR</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
