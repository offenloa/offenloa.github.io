import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

interface ThemedAppProps {
  children: ReactNode; // Define the type for children
}

function ThemedApp({ children }: ThemedAppProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default ThemedApp;