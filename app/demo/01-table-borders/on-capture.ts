import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

export const onCaptureWithHtml2Canvas = async (elementId: string) => {
  const element = document.querySelector(`#${elementId}`) as HTMLElement;
  if (!element) return;

  await html2canvas(element).then((canvas) => {
    saveAs(canvas.toDataURL("image/png"), `${elementId}.png`);
  });
};
