import { Skeleton } from "@/components/ui/skeleton";

export const NavbarSkeleton = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo skeleton */}
        <div className="mr-6 flex">
          <Skeleton className="h-8 w-24" />
        </div>

        {/* Desktop nav skeleton */}
        <nav className="hidden md:flex flex-1 items-center space-x-6">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-18" />
        </nav>

        {/* Desktop actions skeleton */}
        <div className="hidden md:flex items-center space-x-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Mobile skeleton */}
        <div className="flex md:hidden ml-auto items-center space-x-2">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
        </div>
      </div>
    </header>
  );
};