interface OverviewData {
	key: string;
	value: string;
}

export const SectionDataTable = ({ data }: { data: OverviewData[] }) => (
	<div className="overflow-hidden rounded-lg border border-zinc-700">
		<table className="w-full">
			{data.map((item) => (
				<tr className="border-zinc-700 border-b last:border-0" key={item.key}>
					<td className="border-zinc-700 border-r bg-zinc-800/40 p-3 font-medium text-sm text-zinc-400">
						{item.key}
					</td>
					<td className="p-3 font-mono text-sm text-zinc-300">{item.value}</td>
				</tr>
			))}
		</table>
	</div>
);
