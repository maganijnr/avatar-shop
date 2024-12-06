"use client";

import React, { FC, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import htm from "htm";
import { Mesh } from "three";

interface ViewRef {
	imageSource: string;
}

const html = htm.bind(React.createElement);

const RotatingView: FC<ViewRef> = ({ imageSource }) => {
	const meshRef = useRef<Mesh>(null!);

	useEffect(() => {
		console.log(Boolean(meshRef.current));
	}, []);

	return (
		<mesh ref={meshRef}>
			<boxGeometry />
			<meshBasicMaterial />
		</mesh>
	);
};

export default RotatingView;
