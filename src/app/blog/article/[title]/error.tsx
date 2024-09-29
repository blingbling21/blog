"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log("error: ", error);
  return (
    <div className="flex justify-center items-center h-[calc(100vh-184px)] text-xl">
      没有找到标题为：<span className=" font-bold mr-2">{error.message}</span>的博客文档
    </div>
  );
}
