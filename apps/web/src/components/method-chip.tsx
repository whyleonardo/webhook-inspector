import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const methodChipVariants = cva(
	"shrink-0 rounded-md border text-center font-mono font-semibold text-xs uppercase",
	{
		variants: {
			variant: {
				GET: "border-blue-400/20 bg-blue-950 text-blue-400",
				POST: "border-emerald-400/20 bg-emerald-950 text-emerald-400",
				PUT: "border-amber-400/20 bg-amber-950 text-amber-400",
				DELETE: "border-rose-400/20 bg-rose-950 text-rose-400",
				PATCH: "border-orange-400/20 bg-orange-950 text-orange-400",
				OPTIONS: "border-indigo-400/20 bg-indigo-950 text-indigo-400",
			},
			size: {
				default: "px-2 py-px",
				md: "px-2 py-0.5",
			},
		},
		defaultVariants: {
			variant: "GET",
			size: "default",
		},
	}
);

type MethodChipProps = Omit<ComponentProps<"div">, "children"> &
	VariantProps<typeof methodChipVariants>;

export const MethodChip = ({
	className,
	size,
	variant,
	...rest
}: MethodChipProps) => (
	<span
		className={cn(methodChipVariants({ className, size, variant }))}
		{...rest}
	>
		{variant}
	</span>
);
