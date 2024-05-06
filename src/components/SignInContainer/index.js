import { useStore } from "@/store";
import * as Form from "@radix-ui/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {login} from '@/actions/auth/index'

export default function SignInContainer() {
  const loginBtn = useStore((state) => state.userLogin);
  const router = useRouter();

  const [details,setDetails]=useState({
    email:'',
    password:''
  })

  const handleLogin=async (e)=>{
    e.preventDefault()
    try{
      await login(details)
      loginBtn(details.email,details.password)

      router.push('/profile')
      console.log('Successful')
    }catch(error){
      console.log(error,'Not Saved')
    }

  }

  return (
    <div>
      <Form.Root onSubmit={handleLogin} method="POST">
        <Form.Field className="FormField" name="email">
          <div className="flex justify-between items-baseline" >
            <Form.Label className="FormLabel text-anovatext1 text-xs md:text-sm">
              Email
            </Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="Input"
              type="email"
              required
              onChange={(e) => setDetails({email:e.target.value})}
              value={details.email}
              autoComplete='email'
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="password">
          <div className="flex justify-between items-baseline">
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
            <input
              className="Input"
              type="password"
              required
              value={details.password}
              onChange={(e) => setDetails({password:e.target.value})}
              name="password"
              data-valid="true"
              autoComplete="current-password"
            />
          </Form.Control>
        </Form.Field>
        <Link className="text-sm" href="/">
          Forgot your password?
        </Link>
        <Form.Submit asChild>
          <button
            type="submit"
            className="w-full text-center bg-green-600 text-white hover:bg-green-800 px-2 py-2 rounded mt-4"
           
          >
            Sign In
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
