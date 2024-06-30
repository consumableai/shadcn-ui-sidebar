"use client";

import { cn } from "../../@/lib/utils";
import { useStore } from "../../hooks/use-store";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { useSidebarToggle } from "../../hooks/use-sidebar-toggle";

export default function AdminPanelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar.isOpen === false ? "lg:ml-[-20px] mr-[-120px]" : "lg:ml-[178px] mr-[-105px]"
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar.isOpen === false ? "lg:ml-[-21px] h-0 mt-[-10px] w-[111%]" : "lg:ml-44 mt-[-10px] h-0 w-full"
        )}
      >
        <Footer />
      </footer>
    </>
  );
}
