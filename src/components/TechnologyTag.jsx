export default function TechnologyTag({ name }) {
    return (
        <span
            key={name}
            className="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:border-primary hover:shadow-sm hover:shadow-primary/20"
        >
            {name}
        </span>
    );
}