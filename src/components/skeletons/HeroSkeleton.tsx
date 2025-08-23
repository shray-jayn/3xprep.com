import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Headline skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-1/2" />
            </div>
            
            {/* Subheadline skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-4/5" />
            </div>
            
            {/* CTA buttons skeleton */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
          
          {/* Image skeleton */}
          <div className="lg:order-last">
            <Skeleton className="w-full h-[400px] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};