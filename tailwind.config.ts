import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        // 内容宽
        "1100p": "1100px",
        // logo宽
        "290p": "290px",
        // 搜索宽
        "170p": "170px",
        // cart宽
        "36p": "36px",
        // 轮播图宽
        "480p": "480px",
        // 商品图片宽
        "263p": "263px",
        // 底部高度
        "160p": "160px",
      },
      height: {
        // 导航栏高
        "73p": "73px",
        // logo 高
        "70p": "70px",
        // 搜索高 , 推荐栏高
        "300p": "300px",
        // cart宽
        "36p": "36px",
        // 轮播图高
        "320p": "320px",
        // 分类栏高
        "80p": "80px",
        // 商品图片高
        "263p": "263px",
        "118p": "118px",
      },
      fontSize: {
        "12p": "12px",
        "14p": "14px",
      },
      colors: {
        textTitleColor: "#333333",
        textSubColor: "#999",
        textRedColor: "#d74d45",
        priceColor: "#d33a31",
        defaultColor: "#fff",
        grayColor: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
export default config;
