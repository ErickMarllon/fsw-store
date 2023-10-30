import { computeProductTotalPrice } from "@/app/helpers/computeProductTotalPrice";
import ProductItem from "@/components/productItem/ProductItem";
import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { CATEGORY_ICON } from "../../constants/categoryIcon";
import { CategoryProductsProps } from "./category.interface";

const CategoryProducts = async ({ params }: CategoryProductsProps) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className=" gap-8 p-5 ">
      <Badge variant="outline" className="mb-8 gap-1 border-primary p-2 ">
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 justify-items-center gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
