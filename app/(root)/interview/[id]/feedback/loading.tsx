import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full bg-gray-800" />
          <Skeleton className="h-6 w-24 bg-gray-800" />
        </div>
        <Skeleton className="h-9 w-24 rounded-full bg-gray-800" />
      </div>

      {/* Title */}
      <div className="mb-6">
        <Skeleton className="h-10 w-full max-w-2xl mx-auto bg-gray-800 mb-8" />

        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 bg-gray-800" />
            <Skeleton className="h-5 w-32 bg-gray-800" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 bg-gray-800" />
            <Skeleton className="h-5 w-40 bg-gray-800" />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-10 max-w-4xl mx-auto">
        <Skeleton className="h-4 w-full bg-gray-800 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-800 mb-2" />
        <Skeleton className="h-4 w-3/4 bg-gray-800" />
      </div>

      {/* Breakdown */}
      <div className="mb-10 max-w-4xl mx-auto">
        <Skeleton className="h-8 w-64 bg-gray-800 mb-6" />

        {/* Interview categories */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="mb-8">
            <Skeleton className="h-6 w-72 bg-gray-800 mb-3" />
            <Skeleton className="h-4 w-full bg-gray-800 mb-2" />
            <Skeleton className="h-4 w-5/6 bg-gray-800" />
          </div>
        ))}
      </div>

      {/* Strengths */}
      <div className="mb-10 max-w-4xl mx-auto">
        <Skeleton className="h-8 w-40 bg-gray-800 mb-4" />
        <Skeleton className="h-4 w-full bg-gray-800 mb-2" />
        <Skeleton className="h-4 w-2/3 bg-gray-800" />
      </div>

      {/* Areas for Improvement */}
      <div className="mb-12 max-w-4xl mx-auto">
        <Skeleton className="h-8 w-64 bg-gray-800 mb-4" />

        {/* Bullet points */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-start gap-2 mb-3">
            <Skeleton className="h-4 w-4 rounded-full bg-gray-800 mt-1 flex-shrink-0" />
            <Skeleton className="h-4 w-full bg-gray-800" />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto">
        <Skeleton className="h-12 w-full sm:w-1/2 rounded-md bg-gray-800" />
        <Skeleton className="h-12 w-full sm:w-1/2 rounded-md bg-gray-800" />
      </div>
    </div>
  );
}
