import { WebhooksListItem } from "./webhooks-list-item";

export const WebhooksList = () => (
	<div className="flex-1 overflow-y-auto">
		<div className="space-y-1 p-2">
			<WebhooksListItem />
		</div>
	</div>
);
