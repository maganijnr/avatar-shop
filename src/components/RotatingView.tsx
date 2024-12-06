"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

interface ViewRef {
	imageSource: string;
}

const RotatingView: FC<ViewRef> = ({ imageSource }) => {
	const [svgTexture, setSvgTexture] = useState<THREE.Texture>();
	console.log("🚀 ~ svgTexture:", svgTexture);
	const loader = new THREE.TextureLoader();
	const fetchSvg = async () => {
		const texture = loader.load(imageSource);
		setSvgTexture(texture);
	};

	const [spring, api] = useSpring(() => ({ position: [0, 0, 5] }));

	// Trigger animation on some event
	api.start({ position: [2, 2, 5] });

	useEffect(() => {
		fetchSvg();
	}, [imageSource]);

	return (
		<Canvas>
			<OrbitControls />
			<animated.perspectiveCamera
				//@ts-ignore
				position={spring?.position}
				fov={35}
			/>

			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
			<mesh>
				<sphereGeometry args={[2.3, 40, 40]} />
				<meshBasicMaterial map={svgTexture} />
			</mesh>
		</Canvas>
	);
};

export default RotatingView;
