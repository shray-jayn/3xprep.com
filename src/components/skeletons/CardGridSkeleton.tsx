import { Skeleton } from "@/components/ui/skeleton";

interface CardGridSkeletonProps {
  cards?: number;
  title?: boolean;
}

export const CardGridSkeleton = ({ cards = 3, title = true }: CardGridSkeletonProps) => {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl">
        {title && (
          <div className="text-center space-y-4 mb-16">
            <Skeleton className="h-10 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: cards }).map((_, i) => (
            <div key={i} className="space-y-4">
              {/* Icon placeholder */}
              <div className="flex justify-center">
                <Skeleton className="h-16 w-16 rounded-2xl" />
              </div>
              
              {/* Title */}
              <Skeleton className="h-6 w-3/4 mx-auto" />
              
              {/* Description */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
              
              {/* CTA */}
              <div className="pt-4">
                <Skeleton className="h-10 w-32 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};