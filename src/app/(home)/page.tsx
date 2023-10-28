import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/productList";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <>
      <div className="">
        <Image
          src="/banner-home-01.png"
          height={0}
          width={0}
          alt="Até 55% de desconto apenas esse mês!"
          className=" h-auto w-full px-8 pt-8"
          sizes="100vw"
          priority
        />
        <Categories />
        <ProductList products={deals} />
      </div>
    </>
  );
}
