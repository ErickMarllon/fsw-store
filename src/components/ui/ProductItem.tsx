"use client";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      {!imageError ? (
        <div className="flex flex-col gap-4">
          <div className="bg-accent  flex h-[170px] w-[150px] items-center justify-center rounded-lg">
            <Image
              src={product.imageUrls[0]}
              alt={product.name}
              width={0}
              height={0}
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              sizes="100vw"
              priority
              onError={handleImageError}
            />
          </div>
          <div>
            <p className=" w-full max-w-[150px]  overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              {product.name}
            </p>
          </div>
        </div>
      ) : (
        <span className="hidden"> erro ao carregar imagem!</span>
      )}
    </>
  );
};

export default ProductItem;
