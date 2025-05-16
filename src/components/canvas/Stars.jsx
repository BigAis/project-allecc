import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const NUM_STARS = 5000;

const Stars = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div 
    className="w-full h-full absolute inset-0" 
    style={{ 
      zIndex: 999,
      pointerEvents: "none" // Explicitly disable pointer events here too
    }}
  >
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      style={{ pointerEvents: "none" }} // Important: disable pointer events on the Canvas itself
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;