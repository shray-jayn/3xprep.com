import { Skeleton } from "@/components/ui/skeleton";

export const LocationListSkeleton = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero skeleton */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/20">
        <div className="container max-w-screen-xl">
          <div className="text-center space-y-6">
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
        </div>
      </section>
      
      {/* Locations grid skeleton */}
      <section className="py-20">
        <div className="container max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-8 border rounded-2xl space-y-4">
                {/* Badge number */}
                <Skeleton className="h-8 w-8 rounded-full" />
                
                {/* City name */}
                <Skeleton className="h-8 w-40" />
                
                {/* Description */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                
                {/* CTA */}
                <Skeleton className="h-12 w-48" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};