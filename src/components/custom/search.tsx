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
import { useState } from "react";
import styles from "./search.module.scss";
import { FrontMatter } from "@/utils";

interface SearchPrama {
  list: {
    source: string;
    frontMatter: FrontMatter;
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
                  className={`w-full  data-[selected=true]:bg-white ${styles.searchItemPadding}`}
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
