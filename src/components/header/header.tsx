"use client";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <header>
      <Card className="flex items-center justify-between border-none p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>
            {status !== "unauthenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarImage src={data?.user?.image || ""} />
                    <AvatarFallback>{data?.user?.name || ""}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-medium">{data?.user?.name || ""}</p>
                    <p className="text-sm opacity-75 ">Boas Compras!</p>
                  </div>
                </div>
                <Separator />
              </div>
            )}
            <div className="mt-4 flex flex-col gap-2">
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Inicio
                  </Button>
                </Link>
              </SheetClose>

              {status === "unauthenticated" ? (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </Button>
              ) : (
                <SheetClose asChild>
                  <Button
                    onClick={handleLogoutClick}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LogOutIcon size={16} />
                    Fazer Logout
                  </Button>
                </SheetClose>
              )}

              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentIcon size={16} />
                Ofertas
              </Button>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-violet-900">FSW</span> Store
          </h1>
        </Link>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
