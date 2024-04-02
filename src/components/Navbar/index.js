"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import "./navbar.css";

import Logo from "@/components/Logo";
import AnimatedSearchBar from "../AnimatedSearchBar";
import DeviceSelectDropDown from "../DeviceSelectDropDown";
import SignSignUpModal from "../SignSignUpModal";
import Wallet from "./Wallet";
import ProfileAvatar from "./ProfileAvatar";
import Link from "next/link";
import { FaBell } from "react-icons/fa6";
import { BiSolidJoystick } from "react-icons/bi";
import { useStore } from "@/store";



const Navbar = () => {
  const isAuthenticated=useStore((state)=>state.isAuthenticated)

  const onClickSidebar = () => {
    const dom1 = document.getElementsByClassName("list-menu");
    const dom2 = document.getElementsByClassName("sidebar-main-justify-center");
    for (let i = 0; i < dom1.length; i++) {
      if (dom1[i].style.display === "none") {
        dom1[i].style.display = "block";
        for (let j = 0; j < dom2.length; j++) {
          dom2[j].style.justifyContent = "start";
        }
      } else {
        for (let j = 0; j < dom2.length; j++) {
          dom2[j].style.justifyContent = "center";
        }
        dom1[i].style.display = "none";
      }
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-anovanavbar flex justify-between items-center py-3 px-4">
      <div className="navbar_group1 flex gap-4">
        <Logo onClickSidebar={onClickSidebar}/>
        <AnimatedSearchBar />
      </div>
    
      <div className="navbar_group2 flex gap-2">
      {isAuthenticated ? 
      <>
        <Wallet />
        <ProfileAvatar />
        <DeviceSelectDropDown />

        <div className="flex items-center gap-5 text-xl mx-3">
          <Link className="text-anovatext1" href="/">
            <FaBell />
          </Link>
          <Link className="text-anovatext1" href="/">
            <BiSolidJoystick />
          </Link>
        </div>
        </>
        : ''}
        <div className="signin-group">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button className="bg-green-600">Sign In</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent bg-anova3 text-white">
                <SignSignUpModal />
                <Dialog.Close asChild>
                  <Button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </Button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
