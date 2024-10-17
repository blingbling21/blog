---
title: "archlinux下chromium不能输入中文的问题"
datetime: "2024-10-17 23:35:12"
summary: "记录下解决archlinux下chromium切不了输入法的问题的方法。"
---

## 解决方法

打开文件`/usr/share/applications/chromium.desktop`，找到`Exec=/usr/bin/chromium %U`，改成下面这样：

```zsh
Exec=/usr/bin/chromium %U --gtk-version=4
```

然后再重启chromium应该就可以了。
