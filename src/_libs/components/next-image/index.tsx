import { INextImageProps } from "./types";
import Image from "next/image";
import React from "react";

export const NextImage = ({ alt, ...props }: INextImageProps) => {
  return <Image alt={alt} {...props} />;
};
