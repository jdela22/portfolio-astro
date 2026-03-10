import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export const SideMenu: React.FC<React.ComponentProps<typeof Sheet>> = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Jared Delapasse</SheetTitle>
					<SheetDescription>Software Engineer</SheetDescription>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min gap-6 px-4">
					<a href="/StuffIUse" className="grid gap-3">
						Stuff I use
					</a>
					<a href="/Reading" className="grid gap-3">
						Reading
					</a>
					<a href="/ThisSite" className="grid gap-3">
						This site
					</a>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button variant="outline">Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};
