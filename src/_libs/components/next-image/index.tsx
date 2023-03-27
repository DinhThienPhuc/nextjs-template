import { INextImageProps } from "./types";
import Image from "next/image";

export const NextImage = ({ alt, ...props }: INextImageProps) => {
  return <Image alt={alt} {...props} />;
};
