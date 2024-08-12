import React, { useEffect, useRef } from "react";
import NodeQRCode from "qrcode";
import { ReactNodeQRCodeProps } from "./types";
import { getQrValue } from "./utils";

export const QRCode: React.FC<ReactNodeQRCodeProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const anyProps = props as any;
  const qrVal = getQrValue(anyProps.type, anyProps.value);
  useEffect(() => {
    if (canvasRef.current) {
      NodeQRCode.toCanvas(
        canvasRef.current,
        qrVal,
        props.options || {},
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [anyProps.value]);

  return <canvas ref={canvasRef} />;
};
