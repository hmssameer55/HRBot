import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full" disabled>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robot-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 flex flex-col items-center justify-center">
                <Skeleton className="h-32 w-32 rounded-full bg-gray-800 mb-6" />
                <Skeleton className="h-8 w-48 bg-gray-800 mb-2" />
              </div>

              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 flex flex-col items-center justify-center">
                <Skeleton className="h-32 w-32 rounded-full bg-gray-800 mb-6" />
                <Skeleton className="h-8 w-48 bg-gray-800 mb-2" />
              </div>

              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 flex flex-col items-center justify-center">
                <Skeleton className="h-32 w-32 rounded-full bg-gray-800 mb-6" />
                <Skeleton className="h-8 w-48 bg-gray-800 mb-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
