interface ListItemProps {
  title: string;
  datetime: string;
  summary: string;
}

/**
 * @description 这个组件是博客列表的单个博客项，它包含了左侧的时间轴和右侧的博客信息
 * @author cakeroll
 * @param {string} title - 博客标题
 * @param {string} datetime - 博客发布时间
 * @param {string} summary - 博客摘要
 */

export default function ListItem({
  title,
  datetime,
  summary,
}: ListItemProps) {
  return (
    <div className="grid gap-1 bg-white p-4 mb-1 rounded-md hover:shadow-md hover:bg-gray-100 cursor-pointer transition-all duration-200">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="text-sm text-gray-500">{datetime}</div>
      <div className="line-clamp-2 text-ellipsis overflow-hidden">{summary}</div>
    </div>
  );
}
