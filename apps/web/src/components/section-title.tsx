interface SectionTitleProps {
	children: string;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
	<h3 className="font-semibold text-base text-zinc-100">{children}</h3>
);
