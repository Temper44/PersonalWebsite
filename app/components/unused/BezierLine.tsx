import React, { useEffect, useRef } from "react";

const BezierLine = () => {
  const path = useRef<SVGPathElement | null>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const width = window.innerWidth * 0.7;
    if (path.current) {
      (path.current as SVGPathElement).setAttributeNS(
        null,
        "d",
        `M0 250 Q${width * x} ${250 + progress}, ${width} 250`,
      );
    }
  };

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement> {
    movementY: number;
    clientX: number;
  }

  const manageMouseMove = (e: MouseMoveEvent) => {
    const { movementY, clientX } = e;
    if (!path.current) return;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <div className="bezierLine">
      <div
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        className="box"
      ></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
};

export default BezierLine;

// .bezierLine {
//   height: 1px;
//   margin-block: 10px;
//   width: 100%;
//   position: relative;
// }

// .bezierLine svg {
//   width: 100%;
//   height: 300px;
//   position: absolute;
//   top: -250px;
//   // background-color: aqua;
// }

// .bezierLine svg path {
//   stroke: white;
//   stroke-width: 1px;
//   fill: none;
// }

// .bezierLine .box {
//   height: 40px;
//   width: 100%;
//   position: relative;
//   top: -20px;
//   z-index: 1;
// }

// .bezierLine .box:hover {
//   height: 200px;
//   top: -100px;
//   // background-color: red;
// }
