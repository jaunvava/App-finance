import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid grid-cols-2 h-full">
      {/* Lado Esquerdo */}
      <div className="mx-auto flex flex-col h-full justify-center p-8 gap-5 max-w-[600px]">
        <Image
          src="/Frame 82.svg"
          alt="logo-finance"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold mb-3">Bem vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            Fazer login ou criar conta
            <LogInIcon className="mr-2" />
          </Button>
        </SignInButton>
      </div>

      {/* lado direito */}
      <div className="relative h-full w-full">
        <Image
          src="/imagepage.png"
          alt="image-login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
