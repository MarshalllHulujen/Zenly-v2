import { Button } from "../components/Button";

export default function LoginPage() {
  return (
    <section className="flex w-full h-screen items-center justify-center flex-col">
      <h2 className="uppercase font-bold text-4xl mb-6">Welcome!!!</h2>
      <div className="flex ... gap-2xl">
        <div>
          <div  className="pl-[50px]">
          <Button as={"a"} href="/api/auth/login">
            Sign Up
          </Button>
          </div>
          <div className="gap-1">
            already have account? 
            <div></div>
            <a href="/api/auth/login">Log in</a>
          </div>
        </div>
      </div>
    </section>
  );
}
