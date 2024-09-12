/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Copy, Download } from "lucide-react";
import { toast } from "sonner";
import { presetTemplates } from "@/lib/constants";
import PresetTemplateGrid from "./PresetTemplateGrid";
import { toPng } from "html-to-image";

const presetPrompts = [
  "一个喜欢打篮球的程序员",
  "喜欢唱,跳,Rap,篮球,足球的健身教练",
];

export default function SocialCardGenerator() {
  const [text, setText] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);

  const onSubmit = async () => {
    if (!text) {
      toast.error("请输入内容");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });

      const data = await response.json();

      if (data.htmlContent) {
        setHtmlContent(data.htmlContent);
        toast.success("HTML 内容生成成功");
      } else {
        toast.error("无法生成 HTML 内容");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("生成过程中出现错误");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!htmlContent) {
      toast.error("没有可下载的内容");
      return;
    }

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
      btoa(unescape(encodeURIComponent(htmlContent)));
  };

  const copyImageToClipboard = async () => {
    if (!svgRef.current) return;

    try {
      const dataUrl = await toPng(svgRef.current);
      const blob = await (await fetch(dataUrl)).blob();

      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);

      toast.success("图片已复制到剪贴板");
    } catch (error) {
      console.error("Error:", error);
      toast.error("复制图片失败");
    }
  };

  const handleTemplateSelect = (template: { prompt: string; svg: string }) => {
    setText(template.prompt);
    setHtmlContent(template.svg);
    toast.success("模板已加载");
  };

  return (
    <div className="md:container  p-4 md:p-8 min-h-[63vh]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-blue-300">
            <CardContent className="space-y-6 p-6">
              <h2 className="text-2xl font-bold mb-4">社交卡片生成器</h2>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-600">
                  社交卡片输入
                </h3>
                <Input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="提供一些描述细节, 方便模型理解"
                  className="text-lg focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <h3 className="text-sm font-semibold text-gray-600">例子</h3>
              <div className="flex flex-wrap gap-2">
                {presetPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => {
                      setText(prompt);
                    }}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>

              <Button
                onClick={onSubmit}
                className="w-full text-lg bg-blue-600 hover:bg-blue-700 text-white"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                ) : (
                  "生成社交卡片"
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/2">
          {loading ? (
            <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-blue-300">
              <CardContent className="flex items-center justify-center h-full">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-300 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-300 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : htmlContent ? (
            <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-blue-300">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  ref={svgRef}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                  className="mb-6"
                />
                <div className="flex gap-2">
                  {/* <Button variant="outline" onClick={downloadImage}>
                    <Download className="w-4 h-4 mr-2" />
                    下载图片
                  </Button>
                  <Button variant="outline" onClick={copyImageToClipboard}>
                    <Copy className="w-4 h-4 mr-2" />
                    复制图片
                  </Button> */}

                  <Button
                    variant="outline"
                    onClick={async () => {
                      //copySVG
                      await navigator.clipboard.writeText(htmlContent);
                      toast.success("HTML 已复制到剪贴板");
                    }}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    复制 HTML
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full py-8 md:py-10">
              <CardContent className="flex items-center justify-center h-full text-gray-500">
                生成的 社交卡片 将显示在这里
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
