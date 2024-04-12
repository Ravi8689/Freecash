import { create } from "zustand";
import { products } from "./db/products";
import { users } from "./db/users";
import { promotion } from "./db/promotion";
import { cryptoCurrency } from "./db/cryptoCurrency";
import { getUser } from "./db/getUser";
import { messages } from "./db/messages";
import { getTableData } from "./db/getTableData";
import { supabase } from "./supabase";

const store = (set) => ({
  // food:'Momo',
  // product:'Mobile',
  // count:0,
  // increaseCount:()=>set((state)=>({count: state.count + 1})),
  // decreaseCount:()=>set((state)=>({count: state.count - 1})),
  // countReset:()=>set({count:0}),
  currencies: cryptoCurrency,

  currency:[],
  getCurrency:async()=>{
    const {data,error}=await supabase.from('cryptoslider').select('*')
    if(data){
      set({currency: data || []})
    }else{
      console.log('Error while fetching data',error.message)
    }
  },

  products:[],
  getProducts:async()=>{
    const {data,error}=await supabase.from('products').select('*')
    if(data){
      set({products: data})
    }else{
      console.log(error.message)
    }
  },

  banners:[],
  getBanners:async()=>{
    const {data,error}=await supabase.from('banner').select('*')
    if(data){
      set({banners: data})
    }else{
      console.log(error.message)
    }
  },

  promotion:promotion,
  
  // All Products
  // products:products,

  //Table Data
  getTableData:getTableData,
 
  // UserLists
  users:users,

  // Get One User
  getOneUser:getUser,

  messages: messages,
  addMessage:(newMessage)=>set((state)=>({messages:[newMessage,...state.messages]})),
  removeMessage:(messageId)=>set((state)=>({messages:state.messages.filter((item)=>item.id !== messageId)})),
  
  // user:null,
  // isAuthenticated: false,
  // login: (userData)=>set({user:userData, isAuthenticated:true}),
  // logout: () => set({ isAuthenticated: false }),

  user:null,
  isAuthenticated: false,
  signup:async(email, password)=>{
    const {data,error}=await supabase.auth.signUp({
      email,
      password
    })
    if(data){
      set({user: data.user, isAuthenticated:true})
    }else{
      console.log('Login Failed',error)
    }
  },

  userLogin:async()=>{
    const {data,error}=await supabase.auth.signInWithPassword({
      email,password
    })
    try{
      set({user:data.user,isAuthenticated:true})
    }catch(error){
      console.log('Login Failed',error)
    }
  },

  userLogout:async()=>{
    try{
      await supabase.auth.signOut()
      set({user:null,error:null})
    }catch(error){
      console.log("User is logged out",error)
    }
    
  }
});

export const useStore=create(store)


