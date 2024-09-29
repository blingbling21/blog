import ListItem from "@/components/custom/listItem";
import { getBlogsData } from "@/utils";

export const revalidate = 60;

/**
 * @description 这个页面是用来展示所有博客的列表的
 * @author cakeroll
 */
export default async function PageList() {
  const list = await getBlogsData();
  return (
    <>
      {list.map((item) => (
        <div className="w-full mb-5" key={item.frontMatter.title}>
          <ListItem
            title={item.frontMatter.title}
            datetime={item.frontMatter.datetime}
            summary={item.frontMatter.summary}
          />
        </div>
      ))}
    </>
  );
}
