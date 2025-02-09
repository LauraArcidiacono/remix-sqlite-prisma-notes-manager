"use client";

import { type LucideIcon } from "lucide-react";

import { Collapsible } from "../components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";

import { FolderCounts } from "./app-sidebar";
import { MailFolder } from "./ui/message-card";

export interface NavMainItem {
  folder: MailFolder;
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export function NavMain({
  items,
  folderCounts,
}: {
  items: NavMainItem[];
  folderCounts: FolderCounts;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>E-mails</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <div className="ml-auto">{folderCounts[item.folder]}</div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
