import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left panel */}
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 flex flex-col items-center justify-center">
            <Skeleton className="h-32 w-32 rounded-full bg-gray-800 mb-6" />
            <Skeleton className="h-8 w-48 bg-gray-800 mb-2" />
          </div>

          {/* Right panel */}
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 flex flex-col items-center justify-center">
            <Skeleton className="h-32 w-32 rounded-full bg-gray-800 mb-6" />
            <Skeleton className="h-8 w-48 bg-gray-800 mb-2" />
          </div>
        </div>

        {/* Call button */}
        <div className="flex justify-center mt-8">
          <Skeleton className="h-12 w-32 rounded-full bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
