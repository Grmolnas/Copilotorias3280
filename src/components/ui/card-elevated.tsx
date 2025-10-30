import * as React from "react";
import { cn } from "@/lib/utils";

const CardElevated = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] p-8 md:p-10",
        className
      )}
      {...props}
    />
  )
);
CardElevated.displayName = "CardElevated";

const CardElevatedHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 mb-6", className)} {...props} />
  )
);
CardElevatedHeader.displayName = "CardElevatedHeader";

const CardElevatedTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-serif text-2xl md:text-3xl font-medium leading-tight", className)} {...props} />
  )
);
CardElevatedTitle.displayName = "CardElevatedTitle";

const CardElevatedDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-base text-gray-600 leading-relaxed", className)} {...props} />
  )
);
CardElevatedDescription.displayName = "CardElevatedDescription";

const CardElevatedContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />
);
CardElevatedContent.displayName = "CardElevatedContent";

const CardElevatedFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center mt-6", className)} {...props} />
  )
);
CardElevatedFooter.displayName = "CardElevatedFooter";

export {
  CardElevated,
  CardElevatedHeader,
  CardElevatedFooter,
  CardElevatedTitle,
  CardElevatedDescription,
  CardElevatedContent,
};
