import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: string;
  formattedBasePrice: string;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  const basePrice = Number(product.basePrice);
  const discountPercentage = Number(product.discountPercentage);

  const formatNumber = (number: number): string => {
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: formatNumber(basePrice),
      formattedBasePrice: formatNumber(basePrice),
    };
  }

  const totalDiscount = basePrice * (discountPercentage / 100);
  const discountedPrice = basePrice - totalDiscount;

  return {
    ...product,
    totalPrice: formatNumber(discountedPrice),
    formattedBasePrice: formatNumber(basePrice),
  };
};
