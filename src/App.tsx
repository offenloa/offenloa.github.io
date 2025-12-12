import { Router } from "lucide-react";
import { ModeToggle } from "./components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./components/ui/navigation-menu";

function App() {
  return (
    <div className="min-h-screen flex flex-col align-center bg-orange-500 dark:bg-gray-700 text-black dark:text-white">
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <h1 className="flex-1">Ayden Offenloch</h1>
        <nav className="flex-1 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md">
          <NavigationMenu className="w-full justify-center">
            <NavigationMenuList className="flex justify-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 rounded-md bg-white text-black dark:bg-gray-900 dark:text-white font-medium">
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent align="center">
                  <NavigationMenuLink className="block p-3">Home</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 rounded-md bg-white text-black dark:bg-gray-900 dark:text-white font-medium">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent align="center">
                  <NavigationMenuLink className="block p-3">About</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 rounded-md bg-white text-black dark:bg-gray-900 dark:text-white font-medium">
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent align="center">
                  <NavigationMenuLink className="block p-3">Projects</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div className="cursor-pointer">
                  <ModeToggle />
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex-1"></div>
      </div>

    </div>
  );
}

export default App;