import { create } from "zustand";
import { products } from "./db/products";
import { users } from "./db/users";
import { promotion } from "./db/promotion";
import { cryptoCurrency } from "./db/cryptoCurrency";
import { getUser } from "./db/getUser";
import { messages } from "./db/messages";
import { getTableData } from "./db/getTableData";


const store = (set) => ({
  // food:'Momo',
  // product:'Mobile',
  // count:0,
  // increaseCount:()=>set((state)=>({count: state.count + 1})),
  // decreaseCount:()=>set((state)=>({count: state.count - 1})),
  // countReset:()=>set({count:0}),
  currencies: cryptoCurrency,

  promotion:promotion,
  
  // All Products
  products:products,

  //Table Data
  getTableData:getTableData,
 
  // UserLists
  users:users,

  // Get One User
  getOneUser:getUser,

  messages: messages,
  addMessage:(newMessage)=>set((state)=>({messages:[newMessage,...state.messages]})),
  removeMessage:(messageId)=>set((state)=>({messages:state.messages.filter((item)=>item.id !== messageId)})),
  
  user:null,
  isAuthenticated: false,
  login: (userData)=>set({user:userData, isAuthenticated:true}),
  logout: () => set({ isAuthenticated: false }),
});

export const useStore=create(store)


