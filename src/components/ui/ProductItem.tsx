"use client";
import { Badge } from "@/components/ui/badge";
import { ProductWithTotalPrice } from "@/helpers/computeProductTotalPrice";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const formatNumber = (number: number): string => {
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      {!imageError ? (
        <div className="flex flex-col gap-4">
          <div className="relative  flex h-[170px] w-[150px] items-center justify-center rounded-lg bg-accent">
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
            {product && product.discountPercentage > 0 && (
              <Badge className="absolute left-2 top-2 px-2 py-[2px]">
                <ArrowDownIcon size={14} />
                <p>{product.discountPercentage}%</p>
              </Badge>
            )}
          </div>

          <div className="max-w-[150px]  overflow-hidden text-ellipsis whitespace-nowrap">
            <p className=" w-full  text-sm">{product.name}</p>
            <div className="flex items-center justify-start gap-2">
              {product.discountPercentage > 0 && (
                <p className="font-semibold">
                  R$ {formatNumber(product.discountPrice)}
                </p>
              )}
              <p className=" text-xs line-through opacity-75">
                R$ {formatNumber(product.basePrice)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <span className="hidden"> erro ao carregar imagem!</span>
      )}
    </>
  );
};

export default ProductItem;
