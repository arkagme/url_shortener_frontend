import { useState } from "react";

function CopyToClipboard({ text, children, onCopy }) {
  const handleClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      if (onCopy) {
        onCopy(text);
      }
    });
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}

export { CopyToClipboard };
export default CopyToClipboard;