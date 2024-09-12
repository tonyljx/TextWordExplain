/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Copy, Download } from "lucide-react";
import { toast } from "react-toastify";

const presetPrompts = ["国足", "程序员", "打工人"];

export default function SvgGenerator() {
  const [text, setText] = useState("");
  const [svg, setSvg] = useState("");
  const [loading, setLoading] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);

  const onSubmit = async () => {
    if (!text) {
      toast.error("请输入内容");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });

      const data = await response.json();

      if (data.svgContent) {
        setSvg(data.svgContent);
        toast.success("SVG 生成成功");
      } else {
        toast.error("无法生成 SVG");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("生成过程中出现错误");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current.querySelector("svg");
    if (!svgElement) {
      toast.error("SVG 元素未找到");
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svgElement);
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

  const copyImageToClipboard = async () => {
    if (!svgRef.current) return;

    try {
      const svgElement = svgRef.current.querySelector("svg");
      if (!svgElement) throw new Error("SVG element not found");

      const svgData = new XMLSerializer().serializeToString(svgElement);
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
    <div className="container  p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardContent className="space-y-6 p-6">
              <h2 className="text-2xl font-bold mb-4">
                汉语新解 | 给汉语一个全新的解释
              </h2>
              <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="输入一个汉语词汇"
                className="text-lg"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  推荐词汇
                </h3>
                <div className="flex flex-wrap gap-2">
                  {presetPrompts.map((prompt) => (
                    <Button
                      key={prompt}
                      variant="outline"
                      onClick={() => setText(prompt)}
                      className="text-sm"
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>
              <Button
                onClick={onSubmit}
                className="w-full text-lg"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                ) : (
                  "生成汉语解释"
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/2">
          {loading ? (
            <Card className="h-full">
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
          ) : svg ? (
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  ref={svgRef}
                  dangerouslySetInnerHTML={{ __html: svg }}
                  className="mb-6"
                />
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    // onClick={() => {
                    //   const blob = new Blob([svg], { type: "image/svg+xml" });
                    //   const url = URL.createObjectURL(blob);
                    //   const a = document.createElement("a");
                    //   a.href = url;
                    //   a.download = "generated.svg";
                    //   a.click();
                    //   URL.revokeObjectURL(url);
                    // }}
                    onClick={downloadImage}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    下载图片
                  </Button>
                  <Button variant="outline" onClick={copyImageToClipboard}>
                    <Copy className="w-4 h-4 mr-2" />
                    复制图片
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full">
              <CardContent className="flex items-center justify-center h-full text-gray-500">
                生成的 SVG 将显示在这里
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
