import { logger, tryDo } from "@iris/utils";

import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      logger.warn("Clipboard not supported");
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    const { error } = await tryDo(navigator.clipboard.writeText(text));

    if (error) {
      logger.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }

    setCopiedText(text);
    return true;
  };

  return [copiedText, copy];
};

export default useCopyToClipboard;
