import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TESTS, type TestType } from "@/data/site";

interface TestSelectorProps {
  value: TestType;
  onValueChange: (value: TestType) => void;
  className?: string;
}

export function TestSelector({ value, onValueChange, className }: TestSelectorProps) {
  return (
    <Tabs
      value={value}
      onValueChange={(newValue) => onValueChange(newValue as TestType)}
      className={className}
    >
      <TabsList className="grid w-full grid-cols-3 bg-muted/50 h-12">
        {TESTS.map((test) => (
          <TabsTrigger
            key={test}
            value={test}
            className="text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-200"
            aria-controls={`${test}-packages`}
            aria-label={`Select ${test} test packages`}
          >
            {test}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}