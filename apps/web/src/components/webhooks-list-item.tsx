import { Link } from "@tanstack/react-router";
import { cva } from "class-variance-authority";
import { Trash2Icon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";

const methodsVariants = cva("", {
	variants: {
		variant: {
			GET: "bg-sky-950 text-sky-400",
			POST: "bg-emerald-950 text-emerald-400",
			PUT: "bg-amber-950 text-amber-400",
			DELETE: "bg-rose-950 text-rose-400",
			PATCH: "bg-orange-950 text-orange-400",
			OPTIONS: "bg-indigo-950 text-indigo-400",
		},
	},
});

export const WebhooksListItem = () => (
	<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
		<div className="flex items-start gap-3 px-4 py-2.5">
			<Link className="flex min-w-0 flex-1 items-start gap-3" to="/">
				<Checkbox />

				<span
					className={cn(
						"w-12 shrink-0 rounded-md text-center font-mono font-semibold text-xs",
						methodsVariants({ variant: "POST" })
					)}
				>
					POST
				</span>

				<div className="min-w-0 flex-1">
					<p className="truncate font-mono text-xs text-zinc-200 leading-tight">
						/video/status
					</p>

					<p className="mt-1 font-medium text-xs text-zinc-500">1 minute ago</p>
				</div>

				<IconButton
					className="opacity-0 transition-opacity group-hover:opacity-100"
					icon={<Trash2Icon className="size-3.5 text-zinc-400" />}
				/>
			</Link>
		</div>
	</div>
);
