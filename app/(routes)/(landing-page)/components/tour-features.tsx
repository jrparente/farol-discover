import SanityImage from "@/components/SanityImage";
import { Check } from "lucide-react";

interface TourFeaturesProps {
  items?: string[];
  title?: string;
  icon?: any;
}

export default function TourFeatures({
  icon,
  title,
  items,
}: TourFeaturesProps) {
  return (
    <div className="bg-muted rounded-lg p-6 mb-6 md:mb-0">
      <div className="flex flex-col items-start gap-2 mb-4">
        {icon && (
          <SanityImage
            source={icon}
            className={`w-20 h-20 text-primary bg-primary/10 rounded-sm p-4`}
          />
        )}
        {title && <h3 className="text-2xl font-semibold">{title}</h3>}
      </div>
      <div>
        <ul className="list-disc list-inside text-muted-foreground">
          {items &&
            items.length > 0 &&
            items.map((item, i) => (
              <li key={i} className="flex items-start gap-1 mb-1">
                <Check className="w-5 h-5 bg-primary/10 text-primary rounded-lg p-1 mt-1" />{" "}
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
