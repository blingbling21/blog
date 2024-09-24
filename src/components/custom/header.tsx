import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import HeaderNav from "./headerNav";
import Search from "./search";

interface HeaderProps {
  navList: {
    title: string;
    path: string;
  }[];
}

/**
 * @description 这个组件是博客的头部，包含了头像和导航栏
 * @author cakeroll
 * @param {Array} navList - 导航列表
 */
export default function Header({ navList }: HeaderProps) {
  return (
    <div className="flex justify-between items-center w-full h-full py-3">
      <Avatar className="w-10 h-10 rounded-full">
        <AvatarImage
          className="rounded-full"
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback className="rounded-full">header</AvatarFallback>
      </Avatar>
      <div className="flex justify-between items-center">
        <Search />
        <nav>
          {navList.map((item) => (
            <HeaderNav key={item.path} path={item.path} title={item.title} />
          ))}
        </nav>
      </div>
    </div>
  );
}
