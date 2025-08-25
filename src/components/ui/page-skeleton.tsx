import { Skeleton } from "./skeleton";
import { Section } from "./section";

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <Section variant="gradient" className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
          <Skeleton className="h-[400px] w-full rounded-3xl" />
        </div>
      </Section>

      {/* Content Skeleton */}
      <Section>
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};