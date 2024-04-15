import { cn } from "@/utils/cn";

type FontProps = {
  children: React.ReactNode;
  className?: string;
};

export const ExtraLargeFont = ({ children, className }: FontProps) => {
  return (
    <h1 className={cn("text-90 text-[72px] font-bold", className)}>
      {children}
    </h1>
  );
};

export const SmallFont = ({ children, className }: FontProps) => {
  return <p className={cn("text-90 text-base", className)}>{children}</p>;
};

export const MediumFont = ({ children, className }: FontProps) => {
  return <p className={cn("text-90 text-xl", className)}>{children}</p>;
};

export const LargeFont = ({ children, className }: FontProps) => {
  return <h2 className={cn("text-90 text-4xl", className)}>{children}</h2>;
};
