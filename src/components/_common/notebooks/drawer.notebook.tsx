"use client";

import { BadgeIcon } from "@/src/components/_common/badge-icon";
import { buttonVariants } from "@/src/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/src/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/ui/drawer";
import { cn } from "@/src/lib/utils";
import {
  BookOpenIcon,
  DownloadSimpleIcon,
  FileIcon,
  XIcon,
} from "@phosphor-icons/react";

const notebookList = [
  {
    id: "001_Exploration",
    title: "Exploration",
    description:
      "Panorama des données, faisabilité d’un modèle, et marché vu en direct.",
    htmlHref: "/notebooks/001_exploration.html",
    pdfHref: "/notebooks/001_exploration.html",
  },
] as const;

export type NotebookId = (typeof notebookList)[number]["id"];

const DrawerNotebook = ({ notebookId }: { notebookId: NotebookId }) => {
  const notebook = notebookList.find((item) => item.id === notebookId);

  if (!notebook) {
    return null;
  }

  return (
    <Card className="h-full min-w-0">
      <CardContent className="flex min-w-0 items-start gap-3">
        <BadgeIcon className="shrink-0">
          <FileIcon
            weight="bold"
            className="size-8 text-primary sm:size-10"
          />
        </BadgeIcon>
        <div className="min-w-0">
          <CardTitle className="text-sm font-bold">{notebook.title}</CardTitle>
          <CardDescription className="mt-1 text-pretty">
            {notebook.description}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Drawer>
          <DrawerTrigger
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            <BookOpenIcon weight="bold" />
            Lire
          </DrawerTrigger>
          <DrawerContent className="data-[swipe-axis=y]:[--drawer-content-max-height:96dvh] data-[swipe-axis=y]:[--drawer-height:96dvh]">
            <iframe
              src={notebook.htmlHref}
              title={notebook.title}
              className="block h-full min-h-0 w-full flex-1 border-0 bg-background"
            />
          </DrawerContent>
        </Drawer>
        <a
          href={notebook.pdfHref}
          download
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          <DownloadSimpleIcon />
          Télécharger
        </a>
      </CardFooter>
    </Card>
  );
};

export default DrawerNotebook;
