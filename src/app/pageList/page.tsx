import path from "path";
import fs from "fs";
import matter from "gray-matter";
import ListItem from "../ListItem";
import { serialize } from "next-mdx-remote/serialize";

const blogsDir = path.join(process.cwd(), "data/blogs");

async function getBlogsData() {
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
    return new Date(b.frontMatter.datetime).getTime() - new Date(a.frontMatter.datetime).getTime();
  });
  return allBlogsData;
}

/**
 * @description 这个页面是用来展示所有博客的列表的
 * @author cakeroll
 */
export default async function PageList() {
  const list = await getBlogsData();
  return (
    <>
      {list.map((item) => (
        <ListItem
          key={item.frontMatter.title}
          title={item.frontMatter.title}
          datetime={item.frontMatter.datetime}
          summary={item.frontMatter.summary}
        />
      ))}
    </>
  );
}
