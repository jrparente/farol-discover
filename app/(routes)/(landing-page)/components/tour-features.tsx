import { Check, LucideIcon } from "lucide-react";

interface TourFeaturesProps {
  items: string[];
  title: string;
  icon: LucideIcon;
}

export default function TourFeatures({
  icon: Icon,
  title,
  items,
}: TourFeaturesProps) {
  return (
    <div className="bg-muted rounded-lg p-6 mb-6 md:mb-0">
      <div className="flex flex-col items-start gap-2 mb-4">
        <Icon
          className={`w-20 h-20 text-primary bg-primary/10 rounded-sm p-4`}
        />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <ul className="list-disc list-inside text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1 mb-1">
              <Check className="w-5 h-5 bg-primary/10 text-primary rounded-lg p-1" />{" "}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
