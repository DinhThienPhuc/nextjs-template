import Image, { ImageProps } from "next/image";

interface IProps extends ImageProps {}

const Img = ({ alt, ...props }: IProps) => {
  return <Image alt={alt} {...props} />;
};

export default Img;
