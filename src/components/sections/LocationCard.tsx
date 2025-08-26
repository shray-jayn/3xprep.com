import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

interface LocationCardProps {
  location: {
    id: number;
    city: string;
    slug: string;
    phone: string;
  };
}

export const LocationCard = ({ location }: LocationCardProps) => {
  useConsoleTrace("LocationCard", { city: location.city });

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-2 border-border/50">
      <div className="absolute top-4 right-4">
        <Badge
          variant="secondary"
          className="bg-secondary text-secondary-foreground font-semibold"
        >
          #{location.id}
        </Badge>
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/10 rounded-lg">
            <MapPin className="h-6 w-6 text-accent" />
          </div>
          <div>
            <CardTitle className="text-2xl font-playfair text-navy-deep">
              {location.city}
            </CardTitle>
            <CardDescription className="text-base">
              3X Prep of {location.city}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <a
              href={`tel:${location.phone}`}
              className="hover:text-accent transition-colors"
            >
              {location.phone}
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">
            Available Tests:
          </p>
          <div className="flex gap-2">
            {["SAT", "LSAT", "MCAT"].map((test) => (
              <Badge key={test} variant="outline" className="text-xs">
                {test}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-200"
            asChild
          >
            <Link
              to={`/mcat-lsat-sat-prep-tutoring/${location.city
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-")}`}
              state={{ cityName: location.city }}
            >
              View {location.city} Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
