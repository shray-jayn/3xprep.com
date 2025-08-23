import { Skeleton } from "@/components/ui/skeleton";

export const PackagesSkeleton = () => {
  return (
    <section className="py-20">
      <div className="container max-w-screen-lg">
        {/* Title and test selector */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <Skeleton className="h-10 w-80 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          
          {/* Test selector skeleton */}
          <Skeleton className="h-12 w-64 mx-auto" />
        </div>
        
        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-6 p-6 border rounded-2xl">
              {/* Hours */}
              <Skeleton className="h-6 w-20" />
              
              {/* Price */}
              <Skeleton className="h-8 w-24" />
              
              {/* Payment plan */}
              <Skeleton className="h-4 w-32" />
              
              {/* Features */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              
              {/* CTA button */}
              <Skeleton className="h-12 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};