import { cn } from "@/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  url?: string;
  className?: string;
  [x: string]: any;
};

export const Button = ({ children, className, url, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "text-white flex items-center justify-center text-lg bg-berry h-[40px] w-fit px-2.5 rounded-lg border border-base-border hover:bg-berry-dark transition-colors duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {url ? <a href="url">{children}</a> : children}
    </button>
  );
};
