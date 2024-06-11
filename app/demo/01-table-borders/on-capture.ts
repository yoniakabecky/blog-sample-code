import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import domtoimage2 from "dom-to-image-more";
import * as htmlToImage from "html-to-image";
import html2canvas from "html2canvas";

export const onCaptureWithHtml2Canvas = async (elementId: string) => {
  const element = document.querySelector(`#${elementId}`) as HTMLElement;
  if (!element) return;

  await html2canvas(element, {
    scale: 1,
  }).then((canvas) => {
    saveAs(canvas.toDataURL("image/png"), `${elementId}.png`);
  });
};

export const onCaptureWithHtmlDomToImage = async (elementId: string) => {
  const element = document.querySelector(`#${elementId}`) as HTMLElement;
  if (!element) return;

  await domtoimage
    .toBlob(element, {
      width: element.clientWidth,
      height: element.clientHeight,
    })
    .then((blob: Blob) => {
      saveAs(blob, `${elementId}.png`);
    });
};

export const onCaptureWithHtmlDomToImageMore = async (elementId: string) => {
  const element = document.querySelector(`#${elementId}`) as HTMLElement;
  if (!element) return;

  await domtoimage2.toBlob(element).then((blob: Blob) => {
    saveAs(blob, `${elementId}.png`);
  });
};

export const onCaptureWithHtmlToImage = (elementId: string) => {
  const element = document.querySelector(`#${elementId}`) as HTMLElement;
  if (!element) return;

  htmlToImage
    .toBlob(element, {
      canvasWidth: element.clientWidth / 2,
      canvasHeight: element.clientHeight / 2,
    })
    .then((blob) => {
      if (!blob) return;
      saveAs(blob, `${elementId}.png`);
    });
};
