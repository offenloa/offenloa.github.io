import { useNavigate, Outlet } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col align-center bg-orange-50 dark:bg-gray-700 text-black dark:text-white">
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <h1 className="flex-1">Ayden Offenloch</h1>
        <nav className="flex-1 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md">
          <NavigationMenu className="w-full justify-center">
            <NavigationMenuList className="flex justify-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => navigate("/home")}
                  className="cursor-pointer px-4 py-2 rounded-md bg-white text-black dark:bg-gray-900 dark:text-white font-medium">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => navigate("/about")}
                  className="cursor-pointer px-4 py-2 rounded-md bg-white text-black dark:bg-gray-900 dark:text-white font-medium">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 rounded-md bg-white text-black dark:bg-gray-900 dark:text-white font-medium">
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent align="center">
                  <NavigationMenuLink
                    onClick={() => navigate("/projects")}
                    className="block p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div className="cursor-pointer bg-white text-black dark:bg-gray-900 dark:text-white rounded-md">
                  <ModeToggle />
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex-1"></div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;