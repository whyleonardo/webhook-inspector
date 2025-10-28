import { ClockIcon, GlobeIcon } from "lucide-react";
import { MethodChip } from "@/components/method-chip";

export const WebhookDetailHeader = () => (
	<div className="space-y-2 border-zinc-700 border-b px-6 py-4">
		<div className="flex items-center gap-3">
			<MethodChip size="md" variant="POST" />

			<span className="font-medium text-lg text-zinc-300">/video/status</span>
		</div>
		<div className="flex items-center gap-2 font-mono">
			<div className="flex items-center gap-1.5 text-sm text-zinc-400">
				<GlobeIcon className="size-3.5 text-zinc-500" />
				<span>123.456.789.10</span>
			</div>

			<div className="h-4 w-px bg-zinc-700" />

			<div className="flex items-center gap-1.5 text-sm text-zinc-400">
				<ClockIcon className="size-3.5 text-zinc-500" />
				<span>06:37:21 PM</span>
			</div>
		</div>
	</div>
);
