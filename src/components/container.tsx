import { cn } from "@/lib/utils";

type TContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("px-[20px]  w-full max-w-[1230px] mx-auto ", className)}>
      {children}
    </div>
  );
};

export default Container;
