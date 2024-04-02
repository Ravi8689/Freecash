"use client"
import { useStore } from '@/store'
import React from 'react'
import shallow from 'zustand/shallow'

const FoodItem = () => {
  const items=useStore((state)=>state.food)
  const number=useStore((state)=>state.count)
  const count=useStore((state)=>state.increaseCount)
  const countdecrease=useStore((state)=>state.decreaseCount)
  const countReset=useStore((state)=>state.countReset)
  const datas=useStore((state)=>({food:state.food, product:state.product}),shallow)
  console.log(items)
  
  const useLogin=useStore((state)=>state.isAuthenticated)
  const useLoginButtton=useStore((state)=>state.login)
  const useLogout=useStore((state)=>state.logout)
  return (
    <div className='flex flex-col'>FoodItem: {items} {number} <br/>
    <button onClick={count}>Add</button>
    <button onClick={countdecrease}>Subtract</button>
    <button onClick={countReset}>Reset</button>
    <p>{useLogin ? 'User is currently login' : 'No user'}</p>
    <button className='bg-blue-600 text-center' onClick={useLoginButtton}>Login In</button>
    <button className='bg-blue-600 text-center mt-5' onClick={useLogout}>Logout</button>
    </div>
  )
}

export default FoodItem