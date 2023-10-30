import { ProductWithTotalPrice } from "@/app/helpers/helpers.interface";

export interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

export interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

export interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}
