import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Logo({onClickSidebar}) {

  
  return (
    <div className="navbar_group1_subgroup_1 flex items-center gap-2">
    <FaBars
      onClick={onClickSidebar}
      className="sidebar-toggle mr-2 cursor-pointer text-white hidden md:block"
    />

    <Link href="/" className="flex items-center">
      <Image
        className="navbar-logo"
        width={20}
        height={20}
        alt="logo"
        src="/images/logo.png"
      />
      <span className="ml-2 text-green-600 font-bold hidden md:block">
        FreeCash
      </span>
    </Link>
  </div>
  );
}
