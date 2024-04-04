import Products from '@/components/Pages/Products/Products'
import React from 'react'
import "../../../../../static/css/main.css";

export const metadata={
  title:'Product Page'
}

const page = () => {
  return (
    <div className='text-white'>
        <Products/>
    </div>
  )
}

export default page