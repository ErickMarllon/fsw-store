import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <>
      <div className="p-8">
        <Image
          src="/banner-home-01.png"
          height={0}
          width={0}
          alt="Até 55% de desconto apenas esse mês!"
          className=" h-auto w-full "
          sizes="100vw"
          priority
        />
        <Categories />
      </div>
    </>
  );
}
