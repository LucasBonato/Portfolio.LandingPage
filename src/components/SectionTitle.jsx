export default function SectionTitle({ title }) {
    return (
        <h2 className="mb-12 font-mono text-4xl font-bold sm:text-5xl">
            <span className="text-primary">//</span> {title}
        </h2>
    );
}