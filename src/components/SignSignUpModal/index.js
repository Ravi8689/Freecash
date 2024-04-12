import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import SignInContainer from "../SignInContainer";
import SignUpContainer from "../SignUpContainer";


export default function SignSignUpModal() {

  return (
    <>
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger
            className="TabsTrigger font-semibold text-sm"
            value="tab1"
          >
            Sign In
          </Tabs.Trigger>
          <Tabs.Trigger
            className="TabsTrigger font-semibold text-sm"
            value="tab2"
          >
            Sign Up
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <SignInContainer />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <SignUpContainer />
        </Tabs.Content>
      </Tabs.Root>

      <div className="other-sign-method mt-5 mb-4">
        <div className="other-sign-method-title">
          <span className="text-sm">Or sign in with</span>
        </div>
        <div className="other-sign-method-auth mt-2">
          <div>
            <button
              type="submit"
              className="other-sign-method-auth-1 w-full mb-3 flex bg-white hover:bg-gray-200 p-2 rounded justify-center items-center"
            >
              <Image width={20} height={10} src="/images/google.png" alt='Google'/>
              <span className="ml-2 font-medium text-anova1 text-sm">
                Continue with Google
              </span>
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="other-sign-method-auth-2 w-full flex bg-blue-800 hover:bg-blue-700 p-2 rounded justify-center items-center"
            >
              <Image width={8} height={10} src="/images/face.png" alt="facebook"/>
              <span className="ml-2 font-medium text-white text-sm">
                Continue with Facebook
              </span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <span className="other-term-condition text-anovatext2">
          By signing in, you are agreeing to our Terms of Service and Privacy
          Policy.
        </span>
      </div>
    </>
  );
}
