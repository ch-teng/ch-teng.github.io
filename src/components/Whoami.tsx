import BackgroundLand from "./BackgroundLand";
import BackgroundSky from "./BackgroundSky";

export default function Whoami() {
  return (
    <div className="page whoami" id="whoami">
      <div className="backgroundContainer">
        <BackgroundSky />
        {/* <BackgroundLand /> */}
      </div>
    </div>
  );
}
