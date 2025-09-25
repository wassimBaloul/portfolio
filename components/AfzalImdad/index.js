import { useEffect, useRef, useState } from "react";

import B from "./afzalImdadSVGs/B";
import E1 from "./afzalImdadSVGs/E1";
import E2 from "./afzalImdadSVGs/E2";
import H from "./afzalImdadSVGs/H";
import K1 from "./afzalImdadSVGs/K1";
import K2 from "./afzalImdadSVGs/K2";
import K3 from "./afzalImdadSVGs/K3";
import N from "./afzalImdadSVGs/N";
import N2 from "./afzalImdadSVGs/N2";
import U from "./afzalImdadSVGs/U";
import W from "./afzalImdadSVGs/W";
import A from "./afzalImdadSVGs/A";
import S1 from "./afzalImdadSVGs/S1";
import S2 from "./afzalImdadSVGs/S2";
import I from "./afzalImdadSVGs/I";
import M from "./afzalImdadSVGs/M";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ai-afzal-imdad-parallax ${className}`}
  >
    <SVG />
  </div>
)


export default function AfzalImdad({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight / 2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`ai-afzal-imdad ${mount ? 'ai-afzal-imdad-visible' : ''}`}>
  <SvgWrapper className="ai_svg_W" SVG={W} />
  <SvgWrapper className="ai_svg_A" SVG={A} />
  <SvgWrapper className="ai_svg_S1" SVG={S1} />
  <SvgWrapper className="ai_svg_S2" SVG={S2} />
  <SvgWrapper className="ai_svg_I" SVG={I} />
  <SvgWrapper className="ai_svg_M" SVG={M} />
    </div>
  )
}
