import { CopyButton } from "./ui/copy-button";
import { WebhooksList } from "./webhooks-list";

export const Sidebar = () => {
	const url = "http://localhost:3000";

	return (
		<div className="flex h-screen flex-col">
			<div className="flex items-center justify-between border-zinc-700 border-b px-4 py-5">
				<div className="flex items-baseline">
					<span className="font-semibold text-zinc-100">webhook</span>
					<span className="font-normal text-zinc-400">.inspector</span>
				</div>
			</div>

			<div className="flex items-center gap-2 border-zinc-700 border-b bg-zinc-800 px-4 py-2.5">
				<div className="flex min-w-0 flex-1 items-center justify-between gap-1 truncate font-mono text-xs text-zinc-400">
					<span className="truncate">{url}</span>

					<CopyButton content={url} size="sm" />
				</div>
			</div>

			<WebhooksList />
		</div>
	);
};
