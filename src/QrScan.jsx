import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

const QrScan = () => {
  const [scanResult, setScanResult] = useState([]);
  const [paused, setpaused] = useState();
  const [error, setError] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(false);

 
  const handleError = () => {
    setError("Invalid Barcode ");
    console.log(handleError);
  };
  const handlePause = () => {
    setpaused(!paused);
    
    
  };
  
  const toggleCamera = () =>{
    setIsCameraOn(true) ;
    setpaused(!paused)
  }
  
  console.log("🚀 ~ file: QrScan.jsx:6 ~ QrScan ~ scanResult:", scanResult)
  return (
    <div className="box">
      <h1>{error}</h1>
      <h2>{scanResult?.format}</h2>
      <h1>{scanResult?.rawValue}</h1>
      <button onClick={handlePause}> {paused ? "Resume" : "Pause"} </button>
      <button onClick={toggleCamera}> {isCameraOn ? "TurnOff" : "TurnOn"} </button>
      <Scanner
        onScan={(result) => setScanResult(result[0])}
        onError={handleError}
        paused={paused}
      />
    </div>
  );

}
export default QrScan;


