"use client";
import Chat from "@/components/Chat/Chat";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "../globals.css";
import "../../../static/css/sidebar.css";
import { useStore } from "@/store";
import MobileNavigation from "@/components/MobileNavigation/MobileNavigation";
import Image from "next/image";
const ProtectedLayout = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <Theme
      appearance="dark"
      accentColor="grass"
      grayColor="sand"
      radius="large"
      scaling="95%"
    >
      <Navbar />

       {/*{isAuthenticated ? ( */}
      <div className="flex justify-between gap-2 text-white">
        <div className="z-40 hidden md:block">
          <Sidebar />
        </div>
        <div className="md:hidden">
          <MobileNavigation/>
        </div>

        <div
          className="height-content overflow-y-scroll px-2"
          style={{ width: "100%" }}
        >
          {children}
        </div>

        <div className=" hidden xl:block">
          <Chat />
        </div>
      </div>

 
         {/*  ) : (
        <div className="flex flex-col justify-center items-center h-screen">
         <div> <Image width={280} alt='no' height={280} src='/images/login.svg'/></div>
         <div> <h2 className="text-white text-center mt-10 text-4xl">Please click to Sign in to vist the page</h2></div>

        </div>
         )} */}
    </Theme>
  );
};

export default ProtectedLayout;
