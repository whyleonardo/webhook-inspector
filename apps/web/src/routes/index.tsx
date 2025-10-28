import { createFileRoute } from "@tanstack/react-router";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { SectionDataTable } from "@/components/section-data-table";
import { SectionTitle } from "@/components/section-title";
import { Sidebar } from "@/components/sidebar";
import { CodeBlock } from "@/components/ui/code-block";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WebhookDetailHeader } from "@/components/webhook-detail-header";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

const overviewData = [
	{ key: "Method", value: "GET" },
	{ key: "Status Code", value: "200" },
	{ key: "Content-Type", value: "application/json" },
	{ key: "Content-Length", value: "28263 bytes" },
];

function RouteComponent() {
	return (
		<div className="h-screen bg-zinc-900">
			<PanelGroup direction="horizontal">
				<Panel defaultSize={20} maxSize={40} minSize={15}>
					<Sidebar />
				</Panel>

				<PanelResizeHandle className="w-px bg-zinc-700 transition-colors duration-150 hover:bg-zinc-600" />

				<Panel defaultSize={80} minSize={60}>
					<div className="flex h-full flex-col">
						<WebhookDetailHeader />

						<ScrollArea className="h-[calc(100dvh-5.5rem)] w-full flex-1">
							<div className="overflow-y-auto">
								<div className="space-y-6 p-6">
									<div className="space-y-4">
										<SectionTitle>Request Overview</SectionTitle>
										<SectionDataTable data={overviewData} />
									</div>

									<div className="space-y-4">
										<SectionTitle>Query Parameters</SectionTitle>

										<SectionDataTable data={overviewData} />
									</div>

									<div className="space-y-4">
										<SectionTitle>Headers</SectionTitle>

										<SectionDataTable data={overviewData} />
									</div>

									<div className="space-y-4">
										<SectionTitle>Request Body</SectionTitle>

										<CodeBlock
											code={JSON.stringify(overviewData, null, 2).trim()}
										/>
									</div>
								</div>
							</div>
						</ScrollArea>
					</div>
				</Panel>
			</PanelGroup>
		</div>
	);
}
