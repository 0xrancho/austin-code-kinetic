
import BackgroundEffects from "./BackgroundEffects";
import GradientOverlays from "./GradientOverlays";
import EnergyPulses from "./EnergyPulses";
import LightBeam from "./LightBeam";
import BackgroundPattern from "./BackgroundPattern";

const MainBackground = () => {
  return (
    <>
      <BackgroundEffects />
      <GradientOverlays />
      <EnergyPulses />
      <LightBeam />
      <BackgroundPattern />
    </>
  );
};

export default MainBackground;
