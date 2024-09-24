import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

// blog文档地址
const blogsDir = path.join(process.cwd(), "data/blogs");

/**
 * @description 读取data/blogs目录中所有md文件，得到frontMatter数据和博客内容，并根据日期进行倒序排序
 * @author cakeroll
 */
export async function getBlogsData() {
  const fileNames: string[] = fs.readdirSync(blogsDir);
  const blogsData = fileNames.map(async (fileName: string) => {
    const fullPath = path.join(blogsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    const mdSrouce = await serialize(content);
    return {
      source: mdSrouce,
      frontMatter: data,
    };
  });
  const allBlogsData = await Promise.all(blogsData);
  allBlogsData.sort((a, b) => {
    return (
      new Date(b.frontMatter.datetime).getTime() -
      new Date(a.frontMatter.datetime).getTime()
    );
  });
  return allBlogsData;
}
