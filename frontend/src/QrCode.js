import React, { useEffect, useState } from 'react'
import QrCode from "qrcode";

const QrCodeGen = ({ text }) => {

  const [qrImg, setQrImg] = useState("");

  useEffect(() => {
    QrCode.toDataURL(text).then(data => {
      setQrImg(data);
    })
  }, [])

  return (
    <div>
      <img src={qrImg} alt="qrImg" />
    </div>
  )
}

export default QrCodeGen;