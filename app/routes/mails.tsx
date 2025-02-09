import type { MetaFunction } from "@remix-run/node";

import Header from "~/components/header";

import { AppSidebar } from "../components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { messagesMock } from "../mocks/messagesMock";
import InboxListPage from "../views/InboxListPage";
import MailDetailPage from "../views/MailDetailPage";

export const meta: MetaFunction = () => [
  { title: "E-mails Manager" },
  {
    name: "author",
    content: "Laura Arcidiacono",
  },
  {
    name: "description",
    content: "Easily manage your notes with CRUD features.",
  },
  {
    name: "og:title",
    content: "Contacts Manager App",
  },
  {
    name: "og:description",
    content: "Easily manage your notes with CRUD features.",
  },
  {
    name: "og:image",
    content: "../public/assets/app-image.png",
  },
  {
    name: "og:url",
    content:
      "https://github.com/LauraArcidiacono/remix-sqlite-prisma-notes-manager",
  },
];

export function counter() {
  const folderCounts = {
    inbox: messagesMock.filter((message) => message.folder === "inbox").length,
    drafts: messagesMock.filter((message) => message.folder === "drafts")
      .length,
    sent: messagesMock.filter((message) => message.folder === "sent").length,
    junk: messagesMock.filter((message) => message.folder === "junk").length,
    trash: messagesMock.filter((message) => message.folder === "trash").length,
    archive: messagesMock.filter((message) => message.folder === "archive")
      .length,
  };

  const categoriesCount = {
    work: messagesMock.filter((message) => message.tags.includes("work"))
      .length,
    personal: messagesMock.filter((message) =>
      message.tags.includes("personal"),
    ).length,
    travel: messagesMock.filter((message) => message.tags.includes("travel"))
      .length,
    family: messagesMock.filter((message) => message.tags.includes("family"))
      .length,
    others: messagesMock.filter((message) => message.tags.includes("others"))
      .length,
  };
  return { folderCounts, categoriesCount };
}

export default function MailsPage() {
  const { folderCounts, categoriesCount } = counter();

  return (
    <>
      <Header page="mails" title="E-Mails" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <SidebarProvider>
            <AppSidebar
              folderCounts={folderCounts}
              categoriesCount={categoriesCount}
            />
            <SidebarInset className="flex flex-col overflow-auto px-4 py-6">
              <div className="mx-auto flex w-full max-w-[800px] flex-col space-y-6 p-4">
                <SidebarTrigger />
                <div className="flex flex-row space-x-6">
                  <InboxListPage />
                  <MailDetailPage emailId={"1"} />
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </div>
    </>
  );
}
