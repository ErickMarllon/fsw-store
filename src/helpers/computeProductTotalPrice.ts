import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Omit<Product, "basePrice"> {
  basePrice: number;
  discountPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  const basePrice = Number(product.basePrice);
  const discountPercentage = product.discountPercentage / 100;

  if (product.discountPercentage === 0) {
    return {
      ...product,
      discountPrice: basePrice,
      basePrice,
    };
  }

  const totalDiscount = basePrice * discountPercentage;
  const discountedPrice = basePrice - totalDiscount;

  return {
    ...product,
    discountPrice: discountedPrice,
    basePrice,
  };
};
