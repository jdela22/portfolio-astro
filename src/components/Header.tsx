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
import logoRaw from "../assets/logo_final.svg?raw";

export const Header: React.FC<React.ComponentProps<typeof NavigationMenu>> = (
  props,
) => {
  return (
    <NavigationMenu
      className="w-full md:pr-20 pr-5 sticky top-0 z-50 bg-[var(--background)] py-1 flex justify-end"
      {...props}
      viewport={false}
    >
      <div className="justify-between items-center w-full md:flex hidden">
        <NavigationMenuList className="flex">
          <NavigationMenuItem className="pl-10 cursor-pointer">
            <a href="/">
              <div
                dangerouslySetInnerHTML={{ __html: logoRaw }}
                className="size-8 flex items-center justify-center"
              />
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex">
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/StuffIUse">Stuff I use</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/ThisSite">This Site</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/Reading">Reading</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* <NavigationMenuItem> */}
          {/*   <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}> */}
          {/*     <a href="/docs">Docs</a> */}
          {/*   </NavigationMenuLink> */}
          {/* </NavigationMenuItem> */}
        </NavigationMenuList>
      </div>
      <div className="flex justify-between w-full md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem className="pl-5 cursor-pointer">
            <a href="/">
              <div
                dangerouslySetInnerHTML={{ __html: logoRaw }}
                className="size-8 flex items-center justify-center"
              />
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <SideMenu />
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};
