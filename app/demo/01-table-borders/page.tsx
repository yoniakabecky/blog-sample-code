import { Example1 } from "./example1";

export default function TableBorder() {
  return (
    <article className="flex-grow p-8">
      <h1 className="text-4xl font-bold mb-10">
        Table Double Borders on Capture
      </h1>

      <div className="grid lg:grid-cols-2 gap-4">
        <Example1 />
      </div>
    </article>
  );
}
