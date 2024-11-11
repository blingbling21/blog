---
title: "tauri 1.x版本中使用invoke和listen时，编译报错的问题"
datetime: "2024-11-11 16:05:24"
summary: "在tauri项目中的前端部分使用invoke调用rust函数，或使用listen监听rust的事件时，会报一些错误，在这里记录下解决方法。"
---

## 版本

出现问题的 tauri 版本是 1.x。

## 具体的问题

### invoke

下面的代码会报错`navigator is not defined`。

```ts
import { invoke } from "@tauri-apps/api";

await invoke("xxx");
```

解决方法是修改`invoke`的导入为下面的方式：

```ts
import { invoke } from "@tauri-apps/api/tauri";

await invoke("xxx");
```

### listen

下面的代码会报错`window is not defined`。

```ts
import { listen } from "@tauri-apps/api/event";

listen("xxx", () => {
  ...
});
```

解决方法是增加一个对 window 的判断：

```ts
import { listen } from "@tauri-apps/api/event";

const listenEvent = () => {
  if (typeof window === "undefined") return;
  listen("xxx", () => {
    ...
  });
}

listenEvent();
```
