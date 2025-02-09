import {
  Command,
  InboxIcon,
  SendIcon,
  ArchiveXIcon,
  Trash2Icon,
  ArchiveIcon,
  BriefcaseBusinessIcon,
  CircleUserIcon,
  BabyIcon,
  PlaneIcon,
  PenBoxIcon,
} from "lucide-react";

import { MailTag } from "~/components/ui/message-card";

import { NavMainItem } from "../components/nav-main";

export const sideBarItemsMock = {
  user: {
    name: "Laura Arcidiacono",
    email: "mlaura.arcidiacono@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      folder: "inbox",
      title: "Inbox",
      url: "/mail/inbox",
      icon: InboxIcon,
      isActive: true,
    },
    {
      folder: "drafts",
      title: "Drafts",
      url: "/mail/drafts",
      icon: PenBoxIcon,
    },
    {
      folder: "sent",
      title: "Sent",
      url: "/mail/sent",
      icon: SendIcon,
    },
    {
      folder: "junk",
      title: "Junk",
      url: "/mail/junk",
      icon: ArchiveXIcon,
    },
    {
      folder: "trash",
      title: "Trash",
      url: "/mail/trash",
      icon: Trash2Icon,
    },
    {
      folder: "archive",
      title: "Archive",
      url: "/mail/archive",
      icon: ArchiveIcon,
    },
  ] as NavMainItem[],
  categories: [
    {
      name: "work" as MailTag,
      url: "#",
      icon: BriefcaseBusinessIcon,
    },
    {
      name: "personal" as MailTag,
      url: "#",
      icon: CircleUserIcon,
    },
    {
      name: "family" as MailTag,
      url: "#",
      icon: BabyIcon,
    },
    {
      name: "travel" as MailTag,
      url: "#",
      icon: PlaneIcon,
    },
    {
      name: "others" as MailTag,
      url: "#",
      icon: Command,
    },
  ],
};
