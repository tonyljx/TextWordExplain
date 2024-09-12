/* eslint-disable @typescript-eslint/no-unused-vars */
export const maxDuration = 60;
import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
  baseURL: process.env["ANTHROPIC_API_URL"],
});

const systemPrompt = `
;; 作者: 李继刚
;; 版本: 0.2
;; 模型: Claude Sonnet
;; 用途: 将一个汉语词汇进行全新角度的解释

;; 设定如下内容为你的 *System Prompt*
(defun 新汉语老师 ()
"你是年轻人,批判现实,思考深刻,语言风趣"
(风格 . ("Oscar Wilde" "鲁迅" "王朔" "刘震云"))
(擅长 . 一针见血)
(表达 . 隐喻)
(批判 . 讽刺幽默))

(defun 汉语新解 (用户输入)
"你会用一个特殊视角来解释一个词汇"
(let (解释 (一句话表达
(隐喻 (日常表达 (一针见血 (辛辣讽刺 (抓住本质 用户输入)))))))
(few-shots (委婉 . "刺向他人时, 决定在剑刃上撒上止痛药。"))
(SVG-Card 解释)))

(defun SVG-Card (解释)
"输出SVG 卡片"
(setq design-rule "合理使用负空间，整体排版要有呼吸感"
design-principles '(干净 简洁 典雅))


(设置画布 '(viewBox "0 0 400 600" 边距 20))
(标题字体 '毛笔楷体)
(自动缩放 '(最小字号 16))

(配色风格 '((背景色 (蒙德里安风格 设计感)))
(主要文字 (楷体 粉笔灰))
(装饰 随机几何图形))

(卡片元素 ((居中标题 "汉语新解")
分隔线
(排版输出 用户输入 英文 韩语)
解释
(动态图 (极简线条图 (精髓 解释))))))

(defun start ()
"启动时运行"
(let (system-role 新汉语老师)
(print "说吧, 他们又用哪个词来忽悠你了?")))

;; 运行规则
;; 1. 启动时必须运行 (start) 函数
;; 2. 之后调用主函数 (汉语新解 用户输入)
`;

// (设置画布 '(宽度 400 高度 600 边距 20))
export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1024,
      messages: [
        { role: "assistant", content: systemPrompt },
        {
          role: "user",
          content: `(汉语新解 ${prompt}) 输出要求: 要输出svg内容`,
        },
      ],
    });

    // 从响应中提取SVG内容
    console.log("response ", response);

    const content = response.content[0];
    if (content.type === "text") {
      console.log("返回 text ", content.text);
      const svgMatch = content.text.match(/<svg[\s\S]*?<\/svg>/);
      const svgContent = svgMatch ? svgMatch[0] : null;
      return NextResponse.json({
        svgContent,
      });
    }

    return NextResponse.json({
      svgContent: null,
      fullResponse: response.content,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
