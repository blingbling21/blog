---
title: "使用next-mdx-remote在build时报错的问题"
datetime: "2024-10-17 22:48:42"
summary: "在使用next-mdx-remote渲染markdown文档的时候，一直在yarn build时报错，这里记录下解决方法。"
---

## 问题

在构建静态页面时一直报错，提示导出的组件名称是undefined，chatgpt的回答是可能是组件的导出和导入方式不一致，但我看了下是一样的。

```jsx
export default function MdRender({ source }: MdRenderProps) {
  return (
    <div className={styles.mdRenderWrapper}>
      // <MDXRemote source={source} />
    </div>
  );
}
```

像上面这样注释后，构建就可以成功。

## 解决方法

之前的`source`是用`serialize()`处理过的。

```jsx
import { serialize } from "next-mdx-remote/serialize";

const source = await serialize(content);
```

`content`是用gray-matter处理后得到的md文档的内容。

现在不用`serialize()`，改成下面这样：

```jsx
const source = content;
```

再把用到的组件props的类型跟着改下，就能构建成功了。
