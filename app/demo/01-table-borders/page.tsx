import { Example1 } from "./example1";
import { Example2 } from "./example2";
import { Example3 } from "./example3";

export default function TableBorder() {
  return (
    <article className="flex-grow p-8">
      <h1 className="text-4xl font-bold mb-10">
        Table Double Borders on Capture
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    </article>
  );
}
