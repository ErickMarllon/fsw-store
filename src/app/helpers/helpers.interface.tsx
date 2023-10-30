import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  discountPrice: number;
}
