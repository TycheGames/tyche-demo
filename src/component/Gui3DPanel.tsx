import { Mesh, Nullable, Scene, Vector3, VideoTexture  } from "@babylonjs/core"
import { Material, useScene} from "react-babylonjs"
import * as BABYLON from '@babylonjs/core';
import React, { useRef } from "react"
import { PlanePanel } from "@babylonjs/gui";


export const Gui3DPanel=()=>{
    const scene=useScene();
    const planeRef=useRef<Nullable<PlanePanel>>();
   // let videoPlane=BABYLON.MeshBuilder.CreatePlane('plane',{height:200,width:500});
    
  //  let videoMat=new BABYLON.StandardMaterial("m");
   // let videoTex= new BABYLON.VideoTexture("videoTex","/UI/video/gamevideo.mp4",scene!);
    //videoMat.roughness=1;
    //videoMat.emissiveColor=BABYLON.Color3.White();
    //videoMat.diffuseTexture=videoTex;
    //videoPlane.material=videoMat;
    

 

    //const ref=useRef<Nullable<Mesh>>();
    return(
        <gui3DManager>
        <planePanel scaling={new Vector3(200,300,1)} rows={2} blockLayout={false} margin={100} position={new Vector3(0,0,100)}>
          <holographicButton text="my world"/>
          <holographicButton text="hello world"/>
       

        </planePanel>
      </gui3DManager>

    )
}