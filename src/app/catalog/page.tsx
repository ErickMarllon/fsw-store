import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { Square } from "lucide-react";
import CategoryItem from "./components/categoriesItem";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="gap-8 p-5">
      <Badge
        className="mb-8 cursor-pointer gap-1 border-2 border-primary px-3 py-[.375rem] "
        variant="outline"
      >
        <div>
          <div className="mb-[0.15rem] flex gap-[0.15rem]">
            <Square size={6} className="rounded-[1.5px] border bg-white" />
            <Square size={6} className="rounded-[1.5px] border bg-white" />
          </div>
          <div className=" flex gap-[0.15rem]">
            <Square size={6} className="rounded-[1.5px] border bg-white" />
            <Square size={6} className="rounded-[1.5px] border bg-white" />
          </div>
        </div>

        <p className="text-lg font-bold uppercase">Catálogo</p>
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
