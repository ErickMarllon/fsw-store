import ProductItem from "@/components/ui/ProductItem";
import { computeProductTotalPrice } from "@/helpers/computeProductTotalPrice";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="  flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
    </div>
  );
};

export default ProductList;
