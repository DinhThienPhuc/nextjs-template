import { IPostAdormentProps } from "./types";
import { XCircle as IconXCircle } from "react-feather";
import { POST_ADORMENT_VARIANT } from "./constants";
import Styled from "./style";
import cx from "classnames";

const PostAdorment = ({
  className,
  content = null,
  variant = POST_ADORMENT_VARIANT.STANDARD,
  clear,
}: IPostAdormentProps) => {
  if (clear) {
    return (
      <Styled.Container
        variant={variant}
        className={cx(
          "post-adorment-container",
          `post-adorment-container__${variant}`,
          className,
        )}
        onClick={clear}
      >
        <IconXCircle width={20} height={20} />
      </Styled.Container>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <Styled.Container
      variant={variant}
      className={cx(
        "post-adorment-container",
        `post-adorment-container__${variant}`,
        className,
      )}
    >
      {content}
    </Styled.Container>
  );
};

export default PostAdorment;
