import SectionTitle from "@/components/ui/section-title";
import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import ProductList from "./components/productList";
import PromoBanner from "./components/promoBanner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <>
      <div className="">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto apenas esse mês!"
        />
        <Categories />
        <div className="mt-8">
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
        />
        <div className="mt-8">
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>
      </div>
    </>
  );
}
