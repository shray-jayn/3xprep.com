import { Skeleton } from "@/components/ui/skeleton";

export const TestimonialsSkeleton = () => {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl">
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <Skeleton className="h-10 w-80 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-6 border rounded-2xl space-y-4">
              {/* Quote */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              
              {/* Author info */}
              <div className="flex items-center gap-3 pt-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};