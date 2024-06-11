"use client";

import { ComplexTable } from "./complex-table";
import {
  onCaptureWithHtml2Canvas,
  onCaptureWithHtmlDomToImage,
  onCaptureWithHtmlDomToImageMore,
  onCaptureWithHtmlToImage,
} from "./on-capture";

export const Example3 = () => {
  return (
    <section>
      <h2 className="text-xl mb-2">Example 3: Complex table</h2>

      <div id="example3" className="p-2 bg-white">
        <ComplexTable />
      </div>

      <div className="flex mt-2 space-x-2">
        <button
          className="rounded px-2 py-1 bg-fuchsia-50/50 hover:bg-fuchsia-50/60"
          onClick={() => onCaptureWithHtml2Canvas("example3")}
        >
          Html2canvas
        </button>
        <button
          className="rounded px-2 py-1 bg-fuchsia-50/50 hover:bg-fuchsia-50/60"
          onClick={() => onCaptureWithHtmlDomToImage("example3")}
        >
          DomToImage
        </button>
      </div>
      <div className="flex mt-2 space-x-2">
        <button
          className="rounded px-2 py-1 bg-fuchsia-50/50 hover:bg-fuchsia-50/60"
          onClick={() => onCaptureWithHtmlDomToImageMore("example3")}
        >
          DomToImageMore
        </button>
        <button
          className="rounded px-2 py-1 bg-fuchsia-50/50 hover:bg-fuchsia-50/60"
          onClick={() => onCaptureWithHtmlToImage("example3")}
        >
          HtmlToImage
        </button>
      </div>
    </section>
  );
};
