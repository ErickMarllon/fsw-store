import { computeProductTotalPrice } from "@/app/helpers/computeProductTotalPrice";
import ProductItem from "../productItem/ProductItem";
import { ProductListProps } from "./productList.interface";

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="  flex w-full gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden">
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
