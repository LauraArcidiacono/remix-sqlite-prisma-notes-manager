import { type LucideIcon } from "lucide-react";

import { CategoriesCounts } from "./app-sidebar";
import { MailTag } from "./ui/message-card";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export function NavMailCategories({
  categories,
  categoriesCount,
}: {
  categories: {
    name: MailTag;
    url: string;
    icon: LucideIcon;
  }[];
  categoriesCount: CategoriesCounts;
}) {
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Categories</SidebarGroupLabel>
      <SidebarMenu>
        {categories.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                {item.icon && <item.icon />}
                <span>{capitalize(item.name)}</span>
                <div className="ml-auto">{categoriesCount[item.name]}</div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
