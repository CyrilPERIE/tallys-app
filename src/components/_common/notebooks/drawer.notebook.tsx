"use client";

import { Card } from "@/src/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/src/ui/drawer";
import { DownloadIcon, FileIcon } from "@phosphor-icons/react";

const notebookList = [
  {
    id: "001_Exploration",
    title: "Exploration",
    html_link: "/notebooks/001_exploration.html",
    pdf_link: "/notebooks/001_exploration.html",
  },
];

export type NotebookId = {
  "001_Exploration": "001_Exploration";
};

const ShowNotebook = ({ notebookId }: { notebookId: NotebookId }) => {
  const notebook = notebookList.find(
    (notebook) => notebook.id === notebookId.toString(),
  );

  if (!notebook) {
    return null;
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <Card className="flex w-fit cursor-pointer items-center gap-2 p-6">
          <FileIcon size={30} weight="bold" />
          <p className="text-sm">{notebook.title}</p>
        </Card>
      </DrawerTrigger>
      <DrawerContent className="data-[swipe-axis=y]:[--drawer-content-max-height:96dvh] data-[swipe-axis=y]:[--drawer-height:96dvh]">
        <DrawerHeader className="flex-row items-center justify-between gap-3 text-left">
          <p className="text-sm font-medium">{notebook.title}</p>
          <a
            href={notebook.pdf_link}
            download
            className="text-foreground"
            aria-label={`Télécharger ${notebook.title}`}
          >
            <DownloadIcon />
          </a>
        </DrawerHeader>
        <iframe
          src={notebook.html_link}
          title={notebook.title}
          className="block h-full min-h-0 w-full flex-1 border-0 bg-background"
        />
      </DrawerContent>
    </Drawer>
  );
};

export default ShowNotebook;
