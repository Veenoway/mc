import { cn } from "@/utils/cn";

type FontProps = {
  children: React.ReactNode;
  className?: string;
};

export const ExtraLargeFont = ({ children, className }: FontProps) => {
  return (
    <h1
      className={cn(
        "text-90 text-[72px] font-bold tracking-tighter",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const SmallFont = ({ children, className }: FontProps) => {
  return (
    <p className={cn("text-90 text-base tracking-tight", className)}>
      {children}
    </p>
  );
};

export const MediumFont = ({ children, className }: FontProps) => {
  return (
    <p className={cn("text-90 text-xl tracking-tight", className)}>
      {children}
    </p>
  );
};

export const LargeFont = ({ children, className }: FontProps) => {
  return (
    <h2 className={cn("text-90 text-3xl tracking-tighter", className)}>
      {children}
    </h2>
  );
};
