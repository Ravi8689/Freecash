import React from 'react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { LuContainer } from 'react-icons/lu'
import { BiSolidCategory } from 'react-icons/bi'
import { MdContactPage, MdMedicalInformation } from 'react-icons/md'
import './MobileNavigation.css'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'


const MobileNavigation = () => {
    const pathname=usePathname()
  return (
    <div className='fixed z-50 bg-anova3 left-0 right-0 bottom-0 py-3 px-4 main-mobile-menu'>
        <ul className='flex justify-between items-center'>
                <li><Link href='/' className={`{ ${pathname === '/' ? 'active-menu' : ''} flex flex-col rounded-lg sidebar-main-justify-center items-center text-anovatext1 hover:text-green-600}`}><FaHome className='mobile-menu-icon'/><span className="mobile-menu">Home</span></Link></li>
                <li><Link href='/products' className={`{ ${pathname === '/products' ? 'active-menu' : ''} flex flex-col rounded-lg sidebar-main-justify-center items-center text-anovatext1 hover:text-green-600}`}><LuContainer /><span className="mobile-menu">Product</span></Link></li>
                <li><Link href='#' className={`{ ${pathname === '#' ? 'active-menu' : ''} flex flex-col rounded-lg sidebar-main-justify-center items-center text-anovatext1 hover:text-green-600}`}><BiSolidCategory /><span className="mobile-menu">Category</span></Link></li>
                <li><Link href='#' className={`{ ${pathname === '#' ? 'active-menu' : ''} flex flex-col rounded-lg sidebar-main-justify-center items-center text-anovatext1 hover:text-green-600}`}><MdMedicalInformation /><span className="mobile-menu">About</span></Link></li>
                <li><Link href='/profile' className={`{ ${pathname === '/profile' ? 'active-menu' : ''} flex flex-col rounded-lg sidebar-main-justify-center items-center text-anovatext1 hover:text-green-600}`}><MdContactPage /><span className="mobile-menu">Profile</span></Link></li>
            </ul>
    </div>
  )
}

export default MobileNavigation