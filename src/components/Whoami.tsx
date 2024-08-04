import BackgroundLand from "./BackgroundLand";
import BackgroundSky from "./BackgroundSky";
import { SlideText } from "./SlideText";

export default function Whoami() {
  return (
    <div className="page center-page whoami " id="whoami">
      <BackgroundSky />
      <BackgroundLand />
    </div>
  );
}
