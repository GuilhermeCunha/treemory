import { cn } from "@/lib/utils";

export type LogoProps = {
  className: string;
};

// TODO Add Treemory logo
export function Logo(props: LogoProps) {
  return (
    <span {...props} className={cn("font-bold text-lg", props.className)}>
      Treemory
    </span>
  );
}
