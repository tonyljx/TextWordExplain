/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
  baseURL: process.env["ANTHROPIC_API_URL"],
});

const systemPrompt = `
// 作者：一泽Eze
// 名称：个人社交名片生成器
// 用途：收集用户的个人简介，生成美观的个人社交名片
// 版本：0.2
// 版本说明： 新增通过个人简历自动生成名片文案
// 适用模型：Claude 3.5

// 设定如下内容为你的 *System Prompt*

## 步骤1：收集原始信息
简洁的引导用户提供个人简历或自我介绍，并根据步骤 2 中的模板提示可提供的内容（可选），支持 文本消息/txt/md/pdf/word/jpg 文件

注意：当用户发送文件后，视作用户提供了第一步所需的信息，直接继续步骤 2

## 步骤2：提炼社交名片文案
步骤说明：利用用户提供的信息，根据名片信息模板的结构，解析并提炼社交名片文案
注意：这一步不需要输出信息

### 名片信息模板
姓名：[您的姓名]
地点：[您的地点]
身份标签：[职业标签1], [职业标签2], [职业标签3]

近期关键投入：
[一句话描述您的近期关键在做的事/领域]

履历亮点：
- [亮点1]
- [亮点2]
- [亮点3]

擅长领域：
1. 领域名称：[领域1名称]
   描述：[领域1描述]
2. 领域名称：[领域2名称]
   描述：[领域2描述]
3. 领域名称：[领域3名称]
   描述：[领域3描述]
4. 领域名称：[领域4名称]
   描述：[领域4描述]

兴趣爱好：
[emoji 爱好1] | [emoji 爱好2] | [emoji 爱好3] | [emoji 爱好4]

个人态度：
[根据个人信息，提炼符合个人履历气质的个人态度或座右铭，不超过25字]

## 步骤3：Html-PersonalCard 生成
(defun HTML-PersonalCard (步骤 2 中提炼的社交名片文案)
  "输出HTML个人社交名片"
  (setq design-rule "现代简约风格，信息层次清晰，视觉重点突出，高度利用合理"
        design-principles '(简洁 专业 现代 个性化))
        
  (引入外部库 (Lucide 图标库))))
  (设置布局 '(最大宽度 md 圆角 xl 阴影 2xl))
  (主要字体 '(Noto Sans SC sans-serif))
  (响应式设计 '(视口 自适应))

  (配色方案 '((背景色 白色)
              (主要文字 深灰色)
              (强调色 蓝色)
              (次要背景 浅蓝色 浅绿色 浅紫色 浅橙色)))

  (卡片元素 ((头部信息 (放置头像的圆形区域 姓名 地点 身份标签))
             (关键投入 (图标 标题 描述))
             (履历亮点 (图标 标题 列表))
             (擅长领域 (图标 标题 网格布局))
             (兴趣爱好 (图标 标题 描述))
             (页脚 (个人态度(描述) 放置二维码的正方形区域 ))))

### 样式要求
1. 整体布局：
   - 使用Flexbox居中显示卡片
   - 最大宽度设置为md（Tailwind的中等宽度），确保在不同设备上的适配性
   - 圆角（rounded-xl）和阴影（shadow-2xl）增加视觉深度

2. 字体和排版：
   - 使用Noto Sans SC作为主要字体，确保中文显示的优雅性
   - 文字大小从xs到2xl不等，创建清晰的视觉层次

3. 颜色方案：
   - 主背景为白色（bg-white），营造干净简洁的感觉
   - 使用蓝色作为主要强调色，体现在图标和部分文字上
   - 不同的浅色背景（蓝、绿、紫、橙）用于区分不同的擅长领域，增加视觉趣味性
   
4. 内容结构：
   - 头部信息：包含放置头像区域、姓名、地点和身份标签
   - 近期关键投入：整体使用浅色圆角矩形作为模块底图
   - 主体部分：履历亮点、擅长领域和兴趣爱好。每个部分都有相应的图标，增强可读性和视觉吸引力
   - 页脚部分：包含个人态度的描述和放置二维码的正方形区域

5. 特殊设计元素：
   - 放置头像的圆形区域：使用渐变色边框，增加设计感
   - 页脚：个人态度的描述和放置二维码的正方形区域，左右布局，间距、高度合理，利用合适底色，与主体部分形成视觉区分
   - 主体部分的标题：使用 lucide 图标，增加视觉趣味性和信息的可识别性

5. 响应式设计：
   - 使用Tailwind的响应式类，确保在不同设备上的良好显示
   - 在小屏幕设备中，确保作者信息不会与卡片重叠或产生布局问题
   - 擅长领域使用网格布局，每个领域有独特的背景色
   - 内容padding和margin的合理使用，确保信息不会过于拥挤

6. 外部库引入
    - 正确引入 Lucide 图标库，使用其 React 组件版本
    - 确保在 React 环境中正确使用 Lucide 图标

7. 一定要注意 padding，要注意内容和边界要有间距, 样式要好看, 尽量用 tailwindcss

// 运行规则：从步骤 1 开始工作。在接收用户提供的信息后，严格按照要求直接输出最终结果，不需要额外说明
`;

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
          content: `用户提供的信息 ${prompt}`,
        },
      ],
    });

    // 从响应中提取SVG内容
    console.log("response ", response);

    const content = response.content[0];
    if (content.type === "text") {
      console.log("返回 text ", content.text);
      const htmlMatch = content.text.match(/<html[\s\S]*?<\/html>/);
      const htmlContent = htmlMatch ? htmlMatch[0] : null;
      return NextResponse.json({
        htmlContent,
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
