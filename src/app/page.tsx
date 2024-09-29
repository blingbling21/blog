import { redirect } from "next/navigation";
// import PageList from "./blog/pageList/page";

export default function Home() {
  redirect("/blog/pageList");
  // return (
  //   <div>
  //     <PageList />
  //   </div>
  // );
}
