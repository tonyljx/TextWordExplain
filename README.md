# 汉语新解 (Chinese Reinterpretation)

在线体验地址: [https://texthuman.ai](https://texthuman.ai)

**项目预览**
![首页图 1](https://imgc.cc/2024/09/12/66e2c95e09711.jpg)

![首页图2](https://imgc.cc/2024/09/12/66e2c954bc46c.jpg)

## 项目简介

汉语新解根据李继刚的 Prompt 模板, 对中文名词进行二次翻译, 并且生成美观图像的项目。

## 主要特性

- 智能词汇解释：输入任何汉语词汇，获得 AI 生成的新颖解释
- SVG 图像生成：每个解释都配有独特的 SVG 图像，视觉化呈现解释内容
- 预设模板：提供多个预设词汇模板，展示系统的创意能力
- 图像下载与复制：支持 SVG 和 PNG 格式的图像下载和复制功能
- 响应式设计：适配各种设备屏幕，提供流畅的用户体验

## 技术栈

- 前端框架：Next.js
- UI 组件：Tailwind CSS, ShadcnUI
- AI 集成：Anthropic Claude API

## 快速开始

1. 克隆仓库：

   ```
   git clone https://github.com/your-username/chinese-reinterpretation.git
   ```

2. 安装依赖：

   ```
   pnpm install
   ```

3. 设置环境变量：
   创建 `.env.local` 文件并添加以下内容：

   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ANTHROPIC_API_URL=your_url_here
   ```

4. 运行开发服务器：

   ```
   pnpm dev
   ```

5. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 使用指南

1. 在输入框中输入任何汉语词汇。
2. 点击"生成汉语解释"按钮。
3. 等待系统生成新的解释和配图。
4. 查看生成的 SVG 图像和解释文本。
5. 使用提供的按钮下载或复制图像。

## 贡献

我们欢迎任何形式的贡献！如果您有任何改进意见或发现了 bug，请创建 issue 或提交 pull request。

## 参考

- [李继刚的 Prompt 模板](https://web.okjike.com/u/752D3103-1107-43A0-BA49-20EC29D09E36)
