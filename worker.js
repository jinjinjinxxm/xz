// 👇 你以后只需要改这一行引号里的文字
const myText = "你好呀，这是我会定期更新的内容。";

export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的分享页</title>
  <style>
    body {
      font-size: 16px;
      line-height: 1.6;
      font-family: system-ui, -apple-system, sans-serif;
      margin: 40px;
      color: #333;
    }
  </style>
</head>
<body>
  <main>${myText}</main>
</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
