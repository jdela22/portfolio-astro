import type * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { SideMenu } from "./SideMenu";

export const Header: React.FC<React.ComponentProps<typeof NavigationMenu>> = (
  props,
) => {
  return (
    <NavigationMenu
      className="w-full justify-end md:pr-20 pr-5 sticky top-0 z-50 bg-[var(--background)] py-1"
      {...props}
      viewport={false}
    >
      <NavigationMenuList className="md:flex hidden">
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/StuffIUse">Stuff I use</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/ThisSite">This Site</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/Reading">Reading</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem> */}
        {/*   <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}> */}
        {/*     <a href="/docs">Docs</a> */}
        {/*   </NavigationMenuLink> */}
        {/* </NavigationMenuItem> */}
      </NavigationMenuList>
      <NavigationMenuList className="block md:hidden">
        <NavigationMenuItem>
          <SideMenu />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
