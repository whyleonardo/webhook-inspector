import { Link } from "@tanstack/react-router";
import { Trash2Icon } from "lucide-react";
import { MethodChip } from "@/components/method-chip";
import { Checkbox } from "@/components/ui/checkbox";
import { IconButton } from "@/components/ui/icon-button";

export const WebhooksListItem = () => (
	<div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
		<div className="flex items-start gap-3 px-4 py-2.5">
			<Link className="flex min-w-0 flex-1 items-start gap-3" to="/">
				<Checkbox />

				<MethodChip variant="POST" />

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
