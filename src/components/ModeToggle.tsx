import { Moon, Sun } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const [theme, setThemeState] = React.useState<"light" | "dark">("dark");

	React.useEffect(() => {
		const isLightMode = document.documentElement.classList.contains("light");
		setThemeState(isLightMode ? "light" : "dark");
	}, []);

	React.useEffect(() => {
		document.documentElement.classList[theme === "light" ? "add" : "remove"](
			"light",
		);
	}, [theme]);

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() =>
				setThemeState((theme) => (theme === "light" ? "dark" : "light"))
			}
			className="cursor-pointer"
		>
			<Sun
				className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				onClick={() => setThemeState("dark")}
			/>
			<Moon
				className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				onClick={() => setThemeState("light")}
			/>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
