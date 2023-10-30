"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductItemProps } from "./productItem.interface";

const ProductItem = ({ product, className }: ProductItemProps) => {
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
        <Link
          href={`/product/${product.slug}`}
          className={cn("flex min-w-[156px] flex-col gap-4", className)}
        >
          <div className="flex flex-col gap-2">
            <div className="relative  flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
              <Image
                src={product.imageUrls[0]}
                alt={product.name}
                width={0}
                height={0}
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
                sizes="100vw"
                quality={100}
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
              <div className="flex items-center justify-start gap-2 text-[.8em]">
                {product.discountPercentage > 0 && (
                  <p className="font-semibold">
                    R$ {formatNumber(product.discountPrice)}
                  </p>
                )}
                <p className=" text-[0.70rem] line-through opacity-75">
                  R$ {formatNumber(Number(product.basePrice))}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <span className="hidden"> erro ao carregar imagem!</span>
      )}
    </>
  );
};

export default ProductItem;
