import { useStore } from "@/store";
import * as Form from "@radix-ui/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignInContainer() {
  const loginBtn=useStore((state)=>state.login)
  const router=useRouter()
  

  const [userData,setUserData]=useState({
    email:''
  })

  const handleLogin=(e)=>{
    e.preventDefault()
    loginBtn(userData)
    // router.push('/')
  }
  return (
    <div>
      <Form.Root >
        <Form.Field className="FormField" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel text-anovatext1">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="email" required onChange={(e)=>setUserData({email:e.target.value})} value={userData.email}/>
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
            <Form.Label className="FormLabel text-anovatext1">
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
            <input className="Input" type="password" required />
          </Form.Control>
        </Form.Field>
        <Link className="text-sm" href="/">
          Forgot your password?
        </Link>
        <Form.Submit asChild>
          <button onClick={handleLogin}
            className="w-full text-center bg-green-600 text-white hover:bg-green-800 px-2 py-2 rounded"
            style={{ marginTop: 10 }}
          >
            Sign In
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
