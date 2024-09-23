"use client";

import { usePathname } from "next/navigation";

interface HeaderNavProps {
  path: string;
  title: string;
}

/**
 * @description 这个组件是博客的头部导航栏item，当pathname和path相同时，会高亮显示
 * @author cakeroll
 * @param {string} path - 导航路径
 * @param {string} title - 导航标题
 */ 
export default function HeaderNav({ path, title }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <a
      key={path}
      href={path}
      className={`hover:bg-gray-200 rounded px-3 py-2 ml-1 ${
        pathname === path ? "bg-gray-200" : ""
      }`}
    >
      <span className="font-bold text-sm">{title}</span>
    </a>
  );
}
