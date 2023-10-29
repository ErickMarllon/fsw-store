import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full px-8 pt-8"
      sizes="100vw"
      alt={alt}
      quality={100}
      priority
      {...props}
    />
  );
};

export default PromoBanner;