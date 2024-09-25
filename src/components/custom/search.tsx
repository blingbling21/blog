"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import ListItem from "./listItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";

interface SearchPrama {
  list: {
    source: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, unknown>
    >;
    frontMatter: {
      [key: string]: string;
    };
  }[];
}

export default function Search({ list }: SearchPrama) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="secondary"
        className="mr-5"
        onClick={() => setOpen(true)}
      >
        搜索...
        <MagnifyingGlassIcon className="ml-3" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="搜索内容..." />
        <CommandList className="max-h-[600px] h-[600px]">
          <CommandEmpty className="h-[592px] flex justify-center items-center text-gray-400">
            没有找到数据
          </CommandEmpty>
          <CommandGroup>
            <ScrollArea
              className={`h-[592px] ${list.length > 0 ? "block" : "hidden"}`}
            >
              {list.map((item) => (
                <CommandItem
                  key={item.frontMatter.title}
                  className="w-full py-0 data-[selected=true]:bg-white"
                >
                  <div className="w-full" onClick={() => setOpen(false)}>
                    <ListItem
                      title={item.frontMatter.title}
                      datetime={item.frontMatter.datetime}
                      summary={item.frontMatter.summary}
                    />
                  </div>
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
