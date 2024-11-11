---
title: "替换Contentlayer"
datetime: "2024-09-24 16:40:00"
summary: "Contentlayer和Next.js 14不兼容，所以进行了替换。"
---

## 替换的原因

开发过程中发现Contentlayer和Next.js 14不兼容，[并且似乎不准备解决了](https://github.com/contentlayerdev/contentlayer/issues/575)，只支持13，因为不想降Next.js的版本，所以选择替换Contentlayer。

## 替换的技术

现在使用[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)来解析md文件。
