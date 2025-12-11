import { ThreeElements } from '@react-three/fiber';

export type AppMode = 'tree' | 'focus' | 'album';

export type GestureType = 'Open_Palm' | 'Victory' | 'Closed_Fist' | 'None';

export type TreeStyle = 'classic' | 'crayon' | 'geometric';

export type TreeShape = 'tree' | 'snowman' | 'reindeer' | 'santa';

export interface PhotoData {
  id: string;
  url: string;
}

export interface TreeConfig {
  radius: number;
  height: number;
  particleCount: number;
}

// Global augmentation for JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      instancedMesh: any;
      dodecahedronGeometry: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      boxGeometry: any;
      planeGeometry: any;
      meshPhysicalMaterial: any;
      pointLight: any;
      octahedronGeometry: any;
      ambientLight: any;
      spotLight: any;
      circleGeometry: any;
      shaderMaterial: any;
      color: any;
      primitive: any;
      [elemName: string]: any;
    }
  }
}
