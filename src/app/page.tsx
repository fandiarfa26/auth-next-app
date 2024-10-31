import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({
  subsets: ["latin"],
});

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1 className={cn("font-bold text-3xl", font.className)}>
        Belajar NextJS
      </h1>
      <LoginButton>
        <Button size={"lg"}>Mulai</Button>
      </LoginButton>
    </main>
  );
};

export default Home;
