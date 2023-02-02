import QRCode from "qrcode";
import { useEffect, useRef } from 'react'

export const QrCode = ({ value, }) => {
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,

      value || " ",
      (error) => error && console.error(error)
    );
  }, [value]);

  // const season = value.split('season=')[1].split('&')[0]
  // const tokenId = value.split('tokenId=')[1]


  return <div style={{ display: 'flex', flexDirection: 'column', width: '20%', alignItems: 'center', gap: '20px', marginTop: 80, marginBottom: 80 }}>
    <canvas ref={canvasRef} />
  </div>
}