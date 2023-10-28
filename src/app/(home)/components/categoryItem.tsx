import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
interface CategoryItemProps {
  category: Category;
}
const categoryIconMap: Record<string, JSX.Element> = {
  keyboards: <KeyboardIcon size={16} />,
  monitors: <MonitorIcon size={16} />,
  headphones: <HeadphonesIcon size={16} />,
  mousepads: <SquareIcon size={16} />,
  speakers: <SpeakerIcon size={16} />,
  mouses: <MouseIcon size={16} />,
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = categoryIconMap[category.slug];
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon}
      <p className="font-blod text-xs">{category.name}</p>
    </Badge>
  );
};

export default CategoryItem;
