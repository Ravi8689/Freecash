"use client";
import Chat from "@/components/Chat/Chat";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "../globals.css";
import { useStore } from "@/store";



const ProtectedLayout = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <Theme
      appearance=""
      accentColor="grass"
      grayColor="sand"
      radius="large"
      scaling="95%"
    >
      <Navbar />
      {/* {isAuthenticated ? ( */}
        <div className="grid grid-cols-7 justify-between gap-2 text-white">
          <div className="col-span-1 z-40 lg:block">
            <Sidebar />
          </div>

          <div className="col-span-7 ml-10 md:ml-12 lg:ml-0 lg:col-span-6 xl:col-span-4 px-2">
      
            {children}
          </div>

          <div className="col-span-2 hidden xl:grid justify-items-end">
            <Chat />
          </div>
        </div>
      {/* // ) : (
      //   <h2 className="text-white text-center mt-40 text-4xl">Please click to Sign in to vist the page</h2>
      // )} */}
    </Theme>
  );
};

export default ProtectedLayout;
