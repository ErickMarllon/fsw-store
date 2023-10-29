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
          quality={100}
          priority
        />
        <Categories />
        <div className="mt-8">
          <p className="mb-3 pl-8 font-semibold uppercase">Ofertas</p>
          <ProductList products={deals} />
        </div>
        <Image
          src="/banner-home-02.png"
          height={0}
          width={0}
          alt="Até 55% de desconto em Mouses!"
          className=" h-auto w-full px-8 pt-8"
          sizes="100vw"
          quality={100}
          priority
        />
      </div>
    </>
  );
}
