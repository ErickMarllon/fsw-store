import { CATEGORY_ICON } from "@/app/constants/categoryIcon";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CategoryItemProps } from "./category.interface";

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
