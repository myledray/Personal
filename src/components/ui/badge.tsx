import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLDivElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return <div className={cn("inline-flex items-center justify-center text-xs font-medium", className)} {...props} />;
}
