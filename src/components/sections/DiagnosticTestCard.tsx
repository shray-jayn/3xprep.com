import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Target } from "lucide-react";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

interface DiagnosticTestCardProps {
  test: {
    name: string;
    title: string;
    description: string;
    duration: string;
    features: string;
    subjects: string[];
  };
  onTakeTest: () => void;
}

export const DiagnosticTestCard = ({ test, onTakeTest }: DiagnosticTestCardProps) => {
  useConsoleTrace("DiagnosticTestCard", { testName: test.name });

  return (
    <Card className="transition-all duration-200 hover:shadow-hover hover:-translate-y-1">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
          <BookOpen className="h-8 w-8 text-accent" />
        </div>
        <CardTitle className="text-2xl font-playfair text-navy-deep">
          {test.title}
        </CardTitle>
        <CardDescription>{test.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{test.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-muted-foreground" />
            <span>{test.features}</span>
          </div>
        </div>

        <div className="space-y-2">
          {test.subjects.map((subject) => (
            <Badge key={subject} variant="outline" className="text-xs mr-1 mb-1">
              {subject}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="default" size="lg" className="w-full" onClick={onTakeTest}>
          Take {test.name} Diagnostic
        </Button>
      </CardFooter>
    </Card>
  );
};