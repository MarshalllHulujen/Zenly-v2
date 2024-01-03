import { Button } from "../components/Button";

export default function LoginPage() {
  return (
    <section className="flex w-full h-screen items-center justify-center flex-col">
      <h2 className="uppercase font-bold text-4xl mb-6">Welcome!!!</h2>
      <div className="flex ... gap-2xl">
        <div>
          <Button as={"a"} href="/api/auth/login">
            Sign In
          </Button>
        </div>
        <div>
          <Button as={"a"} href="/api/auth/login">
            Log In
          </Button>
        </div>
      </div>
    </section>
  );
}
