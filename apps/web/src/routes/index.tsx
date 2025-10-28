import { createFileRoute } from "@tanstack/react-router";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Sidebar } from "@/components/sidebar";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen bg-zinc-900">
			<PanelGroup direction="horizontal">
				<Panel defaultSize={20} maxSize={40} minSize={15}>
					<Sidebar />
				</Panel>

				<PanelResizeHandle className="w-px bg-zinc-700 transition-colors duration-150 hover:bg-zinc-600" />

				<Panel defaultSize={80} minSize={60}>
					Main Content
				</Panel>
			</PanelGroup>
		</div>
	);
}
