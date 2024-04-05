'use client'

import { useStore } from "@/store";
import * as Form from "@radix-ui/react-form";
import Link from "next/link";
import { useState } from "react";

export default function SignUpContainer() {
  const [details,setDetails]=useState({
    fullname:'',
    email:'',
    password:''
  })

  const createUser=useStore((state)=>state.addUser)

  const handleSubmit=()=>{
    if(details){
      createUser({
        fullname:details.fullname,
        email:details.email,
        password:details.password
      })
  
      console.log('Successful')
    }else{
      console.log('Not Saved')
    }

  }

  return (
    <Form.Root>
      <Form.Field className="FormField" name="text">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel text-anovatext1 text-xs md:text-sm">
            Fullname
          </Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your fullname
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid fullname
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required value={details.fullname} onChange={(e)=>setDetails({ ...details,fullname:e.target.value})}/>
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="text">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel text-anovatext1 text-xs md:text-sm">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" required value={details.email} onChange={(e)=>setDetails({ ...details,email:e.target.value})}/>
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="password">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel text-anovatext1 text-xs md:text-sm">
            password
          </Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your password
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="password" required value={details.password} onChange={(e)=>setDetails({ ...details,password:e.target.value})}/>
        </Form.Control>
      </Form.Field>
      <Link className="text-sm" href="/">
        Forgot your password?
      </Link>
      <Form.Submit asChild>
        <button onClick={handleSubmit}
          className="w-full text-center bg-green-600 text-white hover:bg-green-800 px-2 py-2 rounded"
          style={{ marginTop: 10 }}
        >
          Register
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
