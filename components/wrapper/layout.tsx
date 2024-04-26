import React from "react";

// components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen">
      <Sidebar />

      <div className="grid w-full">
        <Navbar />

        <div className="overflow-y-scroll">
          <div className="mx-auto w-full max-w-[1200px] p-6">{children}</div>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Layout;
