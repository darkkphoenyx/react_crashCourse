import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Ribbons from "./blocks/Animations/Ribbons/Ribbons.jsx";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor.jsx";
import PixelTrail from "./blocks/Animations/PixelTrail/PixelTrail.jsx";
import BlobCursor from "./blocks/Animations/BlobCursor/BlobCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Ribbons
      baseThickness={30}
      colors={["#ffffff"]}
      speedMultiplier={0.5}
      maxAge={500}
      enableFade={false}
      enableShaderEffect={true}
      /> */}
    {/* <SplashCursor /> */}
    {/* <PixelTrail
      gridSize={50}
      trailSize={0.1}
      maxAge={250}
      interpolate={5}
      color="#fff"
      gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
      /> */}
    <BlobCursor
      blobType="circle"
      fillColor="#5227FF"
      trailCount={3}
      sizes={[60, 125, 75]}
      innerSizes={[20, 35, 25]}
      innerColor="rgba(255,255,255,0.8)"
      opacities={[0.6, 0.6, 0.6]}
      shadowColor="rgba(0,0,0,0.75)"
      shadowBlur={5}
      shadowOffsetX={10}
      shadowOffsetY={10}
      filterStdDeviation={30}
      useFilter={true}
      fastDuration={0.1}
      slowDuration={0.5}
      zIndex={100}
    />
    <App />
  </StrictMode>
);
