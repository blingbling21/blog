import { getBlogsData } from "@/utils";
import MdRender from "./mdRender";

interface BlogParams {
  params: {
    title: string;
  };
}

export async function generateStaticParams() {
  const list = await getBlogsData();
  const res: BlogParams["params"][] =
    list.map((item) => ({ title: item?.frontMatter?.title ?? "" })) ?? [];
  return res;
}

export default async function Blog({ params }: BlogParams) {
  const list = await getBlogsData();
  const decodedTitle = decodeURIComponent(params.title);
  const blog = list.find((item) => item.frontMatter.title === decodedTitle);
  if (!blog) {
    throw new Error(decodedTitle);
  }
  return (
    <div>
      <div className="mb-5">
        <div className="text-3xl">{blog?.frontMatter?.title}</div>
        <div className="text-sm text-gray-400">{blog?.frontMatter?.datetime}</div>
      </div>
      {blog ? <MdRender source={blog.source} /> : <></>}
    </div>
  );
}
