import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoryItem";

const Categories = async () => {
  const categories = await prismaClient.category.findMany();

  return (
    <div className="mt-8 grid grid-cols-2 gap-x-16 gap-y-8">
      {categories &&
        categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
    </div>
  );
};

export default Categories;
