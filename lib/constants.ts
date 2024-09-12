export const SITE_NAME = "TextHuman";

export const presetPrompts = ["国足", "程序员", "独立开发者"];

export const presetTemplates = [
  {
    prompt: "国足",
    svg: `<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
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
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
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
     <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
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
  {
    prompt: "内卷",
    svg: `
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#F0EAD6"/>
  
  <text x="200" y="50" font-family="STKaiti, KaiTi, SimKai" font-size="32" fill="#4A4A4A" text-anchor="middle">汉语新解</text>
  
  <line x1="50" y1="70" x2="350" y2="70" stroke="#4A4A4A" stroke-width="2"/>
  
  <text x="200" y="110" font-family="STKaiti, KaiTi, SimKai" font-size="24" fill="#4A4A4A" text-anchor="middle">内卷</text>
  <text x="200" y="140" font-family="Arial, sans-serif" font-size="16" fill="#6B8E23" text-anchor="middle">Involution</text>
  <text x="200" y="170" font-family="Malgun Gothic, sans-serif" font-size="16" fill="#6B8E23" text-anchor="middle">내권</text>
  
  <text x="50" y="220" font-family="STKaiti, KaiTi, SimKai" font-size="18" fill="#4A4A4A">
    <tspan x="50" dy="0">内卷：一场精心设计的社会游戏，</tspan>
    <tspan x="50" dy="30">参与者们在狭小的跑步机上奋力狂奔，</tspan>
    <tspan x="50" dy="30">却始终原地踏步。</tspan>
    <tspan x="50" dy="30">这是一出现代版的西西弗斯神话，</tspan>
    <tspan x="50" dy="30">只不过我们推的不是巨石，</tspan>
    <tspan x="50" dy="30">而是永无止境的焦虑与虚荣。</tspan>
  </text>
  
  <circle cx="100" cy="450" r="30" fill="none" stroke="#4A4A4A" stroke-width="2"/>
  <rect x="250" y="420" width="60" height="60" fill="none" stroke="#4A4A4A" stroke-width="2"/>
  <line x1="50" y1="530" x2="350" y2="530" stroke="#4A4A4A" stroke-width="2" stroke-dasharray="5,5"/>
</svg>
    `,
  },
  {
    prompt: "躺平",
    svg: `
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#FAFAFA"/>
  
  <!-- Geometric decorations -->
  <circle cx="30" cy="30" r="20" fill="#FFD700" opacity="0.5"/>
  <rect x="350" y="550" width="40" height="40" fill="#4169E1" opacity="0.5"/>
  
  <!-- Title -->
  <text x="200" y="50" font-family="KaiTi, serif" font-size="24" fill="#333" text-anchor="middle">汉语新解</text>
  
  <!-- Divider -->
  <line x1="40" y1="70" x2="360" y2="70" stroke="#333" stroke-width="1"/>
  
  <!-- Input word -->
  <text x="200" y="100" font-family="KaiTi, serif" font-size="28" fill="#555" text-anchor="middle">躺平</text>
  <text x="200" y="130" font-family="Arial, sans-serif" font-size="16" fill="#777" text-anchor="middle">Tang Ping</text>
  <text x="200" y="155" font-family="Malgun Gothic, sans-serif" font-size="16" fill="#777" text-anchor="middle">탕핑</text>
  
  <!-- Interpretation -->
  <text x="40" y="200" font-family="KaiTi, serif" font-size="18" fill="#444">
    <tspan x="40" dy="0">躺平：当代青年对社会压力的</tspan>
    <tspan x="40" dy="30">优雅反抗，用水平姿势对抗</tspan>
    <tspan x="40" dy="30">垂直的阶级固化。是一种不</tspan>
    <tspan x="40" dy="30">费力气的革命，用惰性对抗</tspan>
    <tspan x="40" dy="30">内卷，以静制动的现代智慧。</tspan>
  </text>
  
  <!-- Minimalist line drawing -->
  <path d="M100 450 Q200 400 300 450" stroke="#333" stroke-width="2" fill="none"/>
  <circle cx="200" cy="450" r="5" fill="#333"/>
</svg>
    `,
  },
  {
    prompt: "996",
    svg: `
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#FAFAFA"/>
  
  <!-- Background geometric shapes -->
  <circle cx="50" cy="550" r="30" fill="#F0F0F0" opacity="0.5"/>
  <rect x="320" y="20" width="60" height="60" fill="#E0E0E0" opacity="0.5"/>
  <polygon points="200,580 220,560 240,580" fill="#D0D0D0" opacity="0.5"/>

  <!-- Title -->
  <text x="200" y="50" font-family="KaiTi, serif" font-size="24" fill="#333333" text-anchor="middle">汉语新解</text>
  
  <!-- Divider -->
  <line x1="40" y1="70" x2="360" y2="70" stroke="#999999" stroke-width="1"/>
  
  <!-- Input word -->
  <text x="200" y="110" font-family="KaiTi, serif" font-size="28" fill="#555555" text-anchor="middle">996</text>
  <text x="200" y="140" font-family="Arial, sans-serif" font-size="16" fill="#777777" text-anchor="middle">Nine-Nine-Six</text>
  <text x="200" y="160" font-family="Malgun Gothic, sans-serif" font-size="16" fill="#777777" text-anchor="middle">구구육</text>
  
  <!-- Interpretation -->
  <text x="40" y="220" font-family="KaiTi, serif" font-size="18" fill="#444444">
    <tspan x="40" dy="0">现代社畜的魔咒数字，</tspan>
    <tspan x="40" dy="30">用工时来衡量生命价值的荒谬公式。</tspan>
    <tspan x="40" dy="30">把人当机器，</tspan>
    <tspan x="40" dy="30">把生活当牢笼，</tspan>
    <tspan x="40" dy="30">用加班的鞭子抽打着梦想和青春。</tspan>
  </text>
  
  <!-- Minimalist line drawing -->
  <path d="M100 450 Q200 350 300 450" stroke="#666666" stroke-width="2" fill="none"/>
  <circle cx="100" cy="450" r="5" fill="#666666"/>
  <circle cx="300" cy="450" r="5" fill="#666666"/>
  <text x="200" y="500" font-family="KaiTi, serif" font-size="14" fill="#666666" text-anchor="middle">生命曲线被工作拉直</text>
</svg>
    
    `,
  },
  {
    prompt: "鸡娃",
    svg: `
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#F0EAD6"/>
  
  <text x="200" y="50" font-family="楷体" font-size="24" fill="#4A4A4A" text-anchor="middle">汉语新解</text>
  
  <line x1="50" y1="70" x2="350" y2="70" stroke="#4A4A4A" stroke-width="2"/>
  
  <text x="200" y="100" font-family="楷体" font-size="20" fill="#4A4A4A" text-anchor="middle">鸡娃</text>
  <text x="200" y="130" font-family="Arial" font-size="16" fill="#4A4A4A" text-anchor="middle">Chicken baby</text>
  <text x="200" y="160" font-family="Malgun Gothic" font-size="16" fill="#4A4A4A" text-anchor="middle">치킨 베이비</text>
  
  <text x="50" y="220" font-family="楷体" font-size="18" fill="#4A4A4A">
    <tspan x="50" dy="0">用教育的高压锅</tspan>
    <tspan x="50" dy="30">把孩子炖成一只</tspan>
    <tspan x="50" dy="30">金光闪闪的童年无忧鸡</tspan>
  </text>
  
  <path d="M100 400 Q200 300 300 400" fill="none" stroke="#4A4A4A" stroke-width="2"/>
  <circle cx="200" cy="350" r="30" fill="none" stroke="#4A4A4A" stroke-width="2"/>
  <rect x="170" y="390" width="60" height="60" fill="none" stroke="#4A4A4A" stroke-width="2"/>
</svg>
    
    `,
  },
];
