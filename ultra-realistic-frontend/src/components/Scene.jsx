import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

function ClassroomEnvironment() {
  const texture = useTexture('/assets/classroom_360.png');
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

function InteractiveObject({ position, rotation, name, label, icon, onClick, activeObject }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const isActive = activeObject === name;

  useFrame((state) => {
    if (meshRef.current && !isActive) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.5;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh 
        ref={meshRef}
        onClick={(e) => { e.stopPropagation(); onClick(name); }}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
      >
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial color={hovered ? "#F59E0B" : "#ffffff"} transparent opacity={hovered ? 0.8 : 0.4} side={THREE.DoubleSide} />
        
        <Html center position={[0, 0, 0.1]} style={{ pointerEvents: 'none' }}>
          <div className={`text-6xl ${hovered ? 'scale-125' : 'scale-100'} transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,1)]`}>
            {icon}
          </div>
          {hovered && <div className="text-white bg-black/80 px-4 py-2 rounded mt-4 text-center text-2xl font-bold whitespace-nowrap shadow-lg">{label}</div>}
        </Html>
      </mesh>
    </group>
  );
}

function CameraRig({ activeObject }) {
  const { camera, controls } = useThree();
  
  useEffect(() => {
    if (!controls) return;
    
    if (activeObject) {
      // Zoom in effect
      gsap.to(camera, {
        fov: 30,
        duration: 1.5,
        ease: "power3.inOut",
        onUpdate: () => camera.updateProjectionMatrix()
      });
      controls.autoRotate = false;
    } else {
      // Zoom out back to normal
      gsap.to(camera, {
        fov: 75,
        duration: 1.5,
        ease: "power3.inOut",
        onUpdate: () => camera.updateProjectionMatrix()
      });
    }
  }, [activeObject, camera, controls]);

  return null;
}

export default function Scene({ onObjectClick, activeObject }) {
  return (
    <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={<Html center><div className="text-white text-3xl font-bold bg-black/50 p-4 rounded whitespace-nowrap">Loading Ultra-Realistic 3D Environment...</div></Html>}>
        <ClassroomEnvironment />
        
        {/* Floating objects placed around the 360 viewer */}
        <InteractiveObject 
          position={[-15, -2, -20]} 
          rotation={[0, Math.PI / 6, 0]} 
          name="letter" 
          label="A Letter" 
          icon="✉️"
          onClick={onObjectClick}
          activeObject={activeObject}
        />
        
        <InteractiveObject 
          position={[20, -5, -15]} 
          rotation={[0, -Math.PI / 4, 0]} 
          name="book" 
          label="The Book" 
          icon="📖"
          onClick={onObjectClick}
          activeObject={activeObject}
        />
        
        <InteractiveObject 
          position={[-12, -4, 25]} 
          rotation={[0, Math.PI - Math.PI / 6, 0]} 
          name="report" 
          label="Report Card" 
          icon="📝"
          onClick={onObjectClick}
          activeObject={activeObject}
        />
        
        <InteractiveObject 
          position={[18, -2, 20]} 
          rotation={[0, Math.PI + Math.PI / 4, 0]} 
          name="folder" 
          label="Memory Folder" 
          icon="📁"
          onClick={onObjectClick}
          activeObject={activeObject}
        />
        
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={-0.6} />
      <CameraRig activeObject={activeObject} />
    </Canvas>
  );
}
