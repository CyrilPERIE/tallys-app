"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/src/ui/drawer";
import { BookIcon, DownloadIcon } from "@phosphor-icons/react";

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
    <Card className="flex w-full cursor-pointer items-center gap-2 p-4 sm:w-fit sm:p-6">
      <CardHeader>
        <CardTitle>{notebook.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Drawer>
          <DrawerTrigger className="w-full sm:w-auto">
            <BookIcon size={24} />
          </DrawerTrigger>
          <DrawerContent className="data-[swipe-axis=y]:[--drawer-content-max-height:96dvh] data-[swipe-axis=y]:[--drawer-height:96dvh]">
            <iframe
              src={notebook.html_link}
              title={notebook.title}
              className="block h-full min-h-0 w-full flex-1 border-0 bg-background"
            />
          </DrawerContent>
        </Drawer>
      </CardContent>
      <CardFooter>
        <a
          href={notebook.pdf_link}
          download
          className="text-foreground"
          aria-label={`Télécharger ${notebook.title}`}
        >
          <DownloadIcon />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ShowNotebook;
