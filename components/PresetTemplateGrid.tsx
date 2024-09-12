/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import { toast } from "react-toastify";

interface Template {
  prompt: string;
  svg: string;
}

interface PresetTemplateGridProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

const PresetTemplateGrid: React.FC<PresetTemplateGridProps> = ({
  templates,
  onSelect,
}) => {
  const svgRef = useRef<HTMLDivElement>(null);

  const getSvgDimensions = (svgElement: SVGSVGElement) => {
    const viewBox = svgElement.getAttribute("viewBox");
    const width = svgElement.getAttribute("width");
    const height = svgElement.getAttribute("height");

    if (viewBox) {
      const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
      return { width: vbWidth, height: vbHeight };
    }

    if (width && height) {
      return { width: parseFloat(width), height: parseFloat(height) };
    }

    // 如果没有viewBox和明确的宽高，使用SVG的自然尺寸
    const bbox = svgElement.getBBox();
    return { width: bbox.width, height: bbox.height };
  };

  const processImage = (
    svgString: string,
    callback: (canvas: HTMLCanvasElement) => void
  ) => {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
    const svgElement = svgDoc.documentElement as unknown as SVGSVGElement;

    const { width, height } = getSvgDimensions(svgElement);

    // 设置更高的分辨率
    const scale = 4;
    const scaledWidth = width * scale;
    const scaledHeight = height * scale;

    // 创建一个新的SVG元素，设置正确的尺寸
    const newSvg = svgElement.cloneNode(true) as SVGSVGElement;
    newSvg.setAttribute("width", `${scaledWidth}`);
    newSvg.setAttribute("height", `${scaledHeight}`);

    const svgData = new XMLSerializer().serializeToString(newSvg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
        callback(canvas);
      }
      URL.revokeObjectURL(svgUrl);
    };
    img.src = svgUrl;
  };

  const downloadImage = (svgString: string) => {
    processImage(svgString, (canvas) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            toast.error("无法创建图片");
            return;
          }
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "generated.png";
          a.click();
          URL.revokeObjectURL(url);
        },
        "image/png",
        1.0
      );
    });
  };

  const copyImageToClipboard = async (svgString: string) => {
    try {
      processImage(svgString, async (canvas) => {
        try {
          const blob = await new Promise<Blob>((resolve) =>
            canvas.toBlob(resolve as BlobCallback, "image/png", 1.0)
          );
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
          toast.success("高清图片已复制到剪贴板");
        } catch (err) {
          console.error(err);
          toast.error("复制图片失败");
        }
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("复制图片失败");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {templates.map((template, index) => (
        <Card
          key={index}
          className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <CardContent className="p-4">
            <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center mx-auto">
              <div
                ref={svgRef}
                dangerouslySetInnerHTML={{ __html: template.svg }}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
              {template.prompt}
            </h3>
            <div className="flex flex-col md:flex-row gap-2 justify-center">
              <Button
                variant="outline"
                onClick={() => downloadImage(template.svg)}
              >
                <Download className="w-4 h-4 mr-2" />
                下载图片
              </Button>
              <Button
                variant="outline"
                onClick={() => copyImageToClipboard(template.svg)}
              >
                <Copy className="w-4 h-4 mr-2" />
                复制图片 (PC端)
              </Button>
              <Button
                variant="outline"
                onClick={async () => {
                  await navigator.clipboard.writeText(template.svg);
                  toast.success("SVG 已复制到剪贴板");
                }}
              >
                <Copy className="w-4 h-4 mr-2" />
                复制 SVG
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PresetTemplateGrid;
