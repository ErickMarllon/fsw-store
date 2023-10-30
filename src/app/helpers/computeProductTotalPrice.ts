import { Product } from "@prisma/client";
import { ProductWithTotalPrice } from "./helpers.interface";

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      discountPrice: Number(product.basePrice),
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    discountPrice: Number(product.basePrice) - totalDiscount,
  };
};
