import * as React from "react";

import { NavMain } from "../components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../components/ui/sidebar";
import { sideBarItemsMock } from "../mocks/sideBarItemsMock";

import { NavMailCategories } from "./nav-mail-categories";
import { Avatar, AvatarImage } from "./ui/avatar";

export interface FolderCounts {
  inbox: number;
  drafts: number;
  sent: number;
  junk: number;
  trash: number;
  archive: number;
}

export interface CategoriesCounts {
  work: number;
  personal: number;
  travel: number;
  family: number;
  others: number;
}
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  folderCounts: FolderCounts;
  categoriesCount: CategoriesCounts;
}

export function AppSidebar({
  folderCounts,
  categoriesCount,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div>
            <div>{sideBarItemsMock.user.name}</div>
            <div className="text-sm text-gray-500">
              {sideBarItemsMock.user.email}
            </div>
          </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain folderCounts={folderCounts} items={sideBarItemsMock.navMain} />
        <NavMailCategories
          categoriesCount={categoriesCount}
          categories={sideBarItemsMock.categories}
        />
      </SidebarContent>
      <SidebarFooter>
        <p>by Laura Arcidiacono</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
