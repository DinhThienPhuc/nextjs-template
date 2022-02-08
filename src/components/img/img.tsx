/* COMPONENT: IMAGE
   ========================================================================== */

import Image, { ImageProps } from "next/image";

interface IProps extends ImageProps {}

/**
 * Overwrite Next/Image, preserve Image Optimize feature
 */
const Img = ({ alt, ...props }: IProps) => {
  return <Image alt={alt} {...props} />;
};

export default Img;
