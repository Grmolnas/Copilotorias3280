import { ReactNode } from "react";
import { CardElevated, CardElevatedContent } from "./ui/card-elevated";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <CardElevated className="transition-all duration-300 hover:scale-[1.03]">
      <CardElevatedContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="font-serif text-xl font-medium text-gray-900">{title}</h3>
          <p className="text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
      </CardElevatedContent>
    </CardElevated>
  );
};

export default FeatureCard;
