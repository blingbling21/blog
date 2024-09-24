import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getBlogsData } from "@/utils";
import ListItem from "./listItem";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Search() {
  const list = await getBlogsData();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="mr-5">
            搜索...
            <MagnifyingGlassIcon className="ml-3" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] p-0">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="搜索内容..." />
            <CommandList className="max-h-[600px] h-[600px]">
              <CommandEmpty className="h-[600px] flex justify-center items-center text-gray-400">
                没有找到数据
              </CommandEmpty>
              <CommandGroup>
                <ScrollArea className="h-[592px]">
                {list.map((item) => (
                  <CommandItem key={item.frontMatter.title} className="w-full">
                    <ListItem
                      title={item.frontMatter.title}
                      datetime={item.frontMatter.datetime}
                      summary={item.frontMatter.summary}
                    />
                  </CommandItem>
                ))}
                </ScrollArea>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
