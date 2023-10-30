import ProductList from "@/components/ProductList/productList";
import SectionTitle from "@/components/ui/section-title";
import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import PromoBanner from "./components/promoBanner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
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
      <div className=" my-8 flex flex-col">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto apenas esse mês!"
        />
        <Categories />
        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 20% de desconto em headphones!"
        />
        <div>
          <SectionTitle>headphones</SectionTitle>
          <ProductList products={headphones} />
        </div>
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
        />
        <div>
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
        <PromoBanner
          src="/banner-home-04.png"
          alt="Até 42% de desconto em teclados!"
        />
        <div>
          <SectionTitle>Keyboards</SectionTitle>
          <ProductList products={keyboards} />
        </div>
      </div>
    </>
  );
}
