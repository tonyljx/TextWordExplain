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

  const downloadImage = (svg: string) => {
    const svgData = new XMLSerializer().serializeToString(
      new DOMParser().parseFromString(svg, "image/svg+xml").documentElement
    );
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
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
      }, "image/png");
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  };

  const copyImageToClipboard = async (svg: string) => {
    try {
      const svgData = new XMLSerializer().serializeToString(
        new DOMParser().parseFromString(svg, "image/svg+xml").documentElement
      );
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = async () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        try {
          const blob = await new Promise<Blob>((resolve) =>
            canvas.toBlob(resolve as BlobCallback, "image/png")
          );
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
          toast.success("图片已复制到剪贴板");
        } catch (err) {
          console.error(err);
          toast.error("复制图片失败");
        }
      };

      img.src =
        "data:image/svg+xml;base64," +
        btoa(unescape(encodeURIComponent(svgData)));
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
            <div className="flex gap-2 justify-center">
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
                复制图片
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
