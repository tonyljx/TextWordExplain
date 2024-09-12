export const SITE_NAME = "TextHuman";

export const presetPrompts = ["国足", "程序员", "独立开发者"];

export const presetTemplates = [
  {
    prompt: "国足",
    svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#FAFAFA"/>
  
  <!-- Background geometric shapes -->
  <circle cx="50" cy="550" r="30" fill="#FFD700" opacity="0.3"/>
  <rect x="320" y="20" width="60" height="60" fill="#4169E1" opacity="0.3"/>
  <polygon points="200,10 220,50 180,50" fill="#32CD32" opacity="0.3"/>

  <!-- Title -->
  <text x="200" y="50" font-family="STKaiti, Kaiti SC, SimKai" font-size="32" fill="#333" text-anchor="middle">汉语新解</text>
  
  <!-- Divider -->
  <line x1="40" y1="70" x2="360" y2="70" stroke="#333" stroke-width="1"/>

  <!-- Input word -->
  <text x="200" y="120" font-family="STKaiti, Kaiti SC, SimKai" font-size="28" fill="#555" text-anchor="middle">国足</text>
  <text x="200" y="150" font-family="Arial, sans-serif" font-size="16" fill="#777" text-anchor="middle">National Football Team</text>
  <text x="200" y="175" font-family="Malgun Gothic, sans-serif" font-size="16" fill="#777" text-anchor="middle">국가 축구팀</text>

  <!-- Interpretation -->
  <text x="40" y="230" font-family="STKaiti, Kaiti SC, SimKai" font-size="20" fill="#333">
    <tspan x="40" dy="0">"国足"是一个让中国人集体练习</tspan>
    <tspan x="40" dy="30">失望的社会实验，每场比赛都在</tspan>
    <tspan x="40" dy="30">考验我们的心理承受能力。</tspan>
  </text>

  <!-- Minimalist line drawing -->
  <path d="M150 400 Q200 350 250 400 T350 400" fill="none" stroke="#333" stroke-width="2"/>
  <circle cx="150" cy="400" r="5" fill="#333"/>
  <circle cx="350" cy="400" r="5" fill="#333"/>
</svg>`,
  },
  {
    prompt: "程序员",
    svg: `
    <svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#F0EAD6" />
  
  <!-- Geometric decorations -->
  <rect x="20" y="20" width="360" height="560" fill="none" stroke="#D2B48C" stroke-width="2" />
  <circle cx="200" cy="300" r="150" fill="none" stroke="#D2B48C" stroke-width="1" opacity="0.5" />
  
  <!-- Title -->
  <text x="200" y="80" font-family="KaiTi, serif" font-size="32" fill="#4A4A4A" text-anchor="middle">汉语新解</text>
  
  <!-- Separator line -->
  <line x1="50" y1="100" x2="350" y2="100" stroke="#4A4A4A" stroke-width="1" />
  
  <!-- Input word -->
  <text x="200" y="150" font-family="KaiTi, serif" font-size="24" fill="#4A4A4A" text-anchor="middle">程序员</text>
  <text x="200" y="180" font-family="Arial, sans-serif" font-size="16" fill="#4A4A4A" text-anchor="middle">Programmer</text>
  <text x="200" y="210" font-family="Malgun Gothic, sans-serif" font-size="16" fill="#4A4A4A" text-anchor="middle">프로그래머</text>
  
  <!-- Explanation -->
  <text x="50" y="260" font-family="KaiTi, serif" font-size="18" fill="#4A4A4A">
    <tspan x="50" dy="0">现代社会的数字僧侣，</tspan>
    <tspan x="50" dy="30">用咖啡因驱动的大脑，</tspan>
    <tspan x="50" dy="30">在二进制的修道院里，</tspan>
    <tspan x="50" dy="30">编织着虚拟世界的经文。</tspan>
    <tspan x="50" dy="30">他们用键盘念咒，用代码布道，</tspan>
    <tspan x="50" dy="30">却常被世俗的bug折磨得痛不欲生。</tspan>
  </text>
  
  <!-- Minimalist line drawing -->
  <g transform="translate(200, 480)" stroke="#4A4A4A" stroke-width="2" fill="none">
    <path d="M0,0 L-20,-40 L0,-80 L20,-40 Z" />
    <path d="M-30,0 L30,0" />
    <circle cx="0" cy="-90" r="10" />
  </g>
</svg>`,
  },
  {
    prompt: "打工人",
    svg: `
     <svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#F0EAD6"/>
  
  <text x="200" y="50" font-family="STKaiti, Kaiti SC, SimKai" font-size="24" fill="#555" text-anchor="middle">汉语新解</text>
  
  <line x1="50" y1="70" x2="350" y2="70" stroke="#888" stroke-width="1"/>
  
  <text x="200" y="100" font-family="STKaiti, Kaiti SC, SimKai" font-size="20" fill="#333" text-anchor="middle">打工人</text>
  <text x="200" y="130" font-family="Arial, sans-serif" font-size="16" fill="#666" text-anchor="middle">Wage Earner</text>
  <text x="200" y="160" font-family="Malgun Gothic, sans-serif" font-size="16" fill="#666" text-anchor="middle">임금 노동자</text>
  
  <text x="50" y="220" font-family="STKaiti, Kaiti SC, SimKai" font-size="18" fill="#444" text-anchor="start">
    <tspan x="50" dy="0">现代社会的自愿奴隶，</tspan>
    <tspan x="50" dy="30">用青春换取房贷的勇士，</tspan>
    <tspan x="50" dy="30">在996的战场上</tspan>
    <tspan x="50" dy="30">为梦想加班的斗士。</tspan>
  </text>
  
  <circle cx="320" cy="500" r="50" fill="none" stroke="#888" stroke-width="2"/>
  <line x1="270" y1="500" x2="370" y2="500" stroke="#888" stroke-width="2"/>
  <line x1="320" y1="450" x2="320" y2="550" stroke="#888" stroke-width="2"/>
</svg> 
    
    `,
  },
];
