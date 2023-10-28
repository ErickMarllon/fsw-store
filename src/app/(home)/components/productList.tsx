import ProductItem from "@/components/ui/ProductItem";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className=" mt-8 flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
