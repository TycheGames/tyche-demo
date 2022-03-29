import { Mesh,  Plane,Texture,Vector3, VideoTexture,Scene, ViewDirectionBlock } from "@babylonjs/core"
import { DynamicTexture, Material, useScene} from "react-babylonjs"
import * as BABYLON from '@babylonjs/core';
import React from "react"
import { AdvancedDynamicTexture } from "@babylonjs/gui";


export function showActorWin(){
    var buttonbox = document.createElement('div');
    var root=document.getElementById('root');
  buttonbox.id = "buttonbox";
  buttonbox.style.position = "fixed";
  buttonbox.style.top = "5%";
  buttonbox.style.right = "10px";
  buttonbox.style.border = "2pt inset white";
  buttonbox.style.padding = "2pt";
  buttonbox.style.paddingRight = "2pt";
  buttonbox.style.width = "200px";
  buttonbox.style.height="150px";
  buttonbox.style.display = "block";
  buttonbox.style.borderRadius='30px';
  buttonbox.style.display='block';
  document.body.appendChild(buttonbox);

  var tTag = document.createElement('div');
  tTag.id = "choose";
  tTag.textContent = "Show / Hide:";
  tTag.style.textAlign = "center";
  tTag.style.border = "2pt solid gold";
  tTag.style.marginLeft = "1.5pt";
  tTag.style.marginTop = "3pt";
  tTag.style.marginBottom = "2pt";
  tTag.style.backgroundColor = "dodgerblue";
  tTag.style.width = "96%";
  tTag.style.fontSize = "1.0em";
  tTag.style.color = "white";
 // buttonbox.appendChild(tTag);

  var videoP=document.createElement('video');
  videoP.autoplay=true; 
   videoP.loop=true;
   videoP.style.width="100%";
   videoP.style.height="100%";
   videoP.style.borderRadius="30px";
   videoP.style.objectFit="fill";
   videoP.muted=true;
  videoP.src='/UI/video/boyidle.mp4';

 // videoP.controls=true;
 // videoP.width=1;
 // videoP.height=200;

 
  
  buttonbox.appendChild(videoP);

 

  var b14 = document.createElement('button');
  b14.id = "ShowHidemyMeshesOne";
  b14.textContent = "Show/Hide myMeshesOne";
  b14.style.display = "block";
  b14.style.width = "100%";
  b14.style.fontSize = "1.1em";

}

export const VideoPlane=React.forwardRef((props,refPlane:React.Ref<Mesh>)=>{
const scene=useScene();
const createUI=async(instance:AdvancedDynamicTexture)=>{
    let loadUI=await instance.parseFromURLAsync('/UI/DashGui.json');

    //load UI component
    let  dashcloseBtn=instance.getControlByName('DashCloseBtn');
    let dashboardRec=instance!.getControlByName('DashboardRec') ;
    dashcloseBtn!.hoverCursor="pointer";

    dashcloseBtn?.onPointerClickObservable.add(()=>{
      scene?.getMeshByName("videoPlane")?.setEnabled(false);
      //window.alert("hello world");
     
        
      });

     
     // showActorWin();
}

const imgPlane=()=>{

}

    return(
        
  
          <plane ref={refPlane} setEnabled={false} name='videoPlane' height={1000} width={1400} sideOrientation={BABYLON.Mesh.BACKSIDE} position={new Vector3(0,100,0)} >
              <advancedDynamicTexture name="" createForParentMesh={true} width={1400} height={1000} onCreated={createUI}  generateMipMaps={true}
                samplingMode={Texture.TRILINEAR_SAMPLINGMODE} >

              </advancedDynamicTexture>
              <plane name='videoPlane1' height={160} width={290} sideOrientation={BABYLON.Mesh.DOUBLESIDE} position={new Vector3(-520,180,-10)}>
              <standardMaterial  name="mat" roughness={1} emissiveColor={BABYLON.Color3.White()}>
                <videoTexture  name="videoTex2" src="/UI/video/bear.mp4" onCreated={(instance:VideoTexture)=>{
                 
                  }}>

                  </videoTexture>
                  </standardMaterial>
                  </plane>
                  

              <plane  name='videoPlane2' height={160} width={290} sideOrientation={BABYLON.Mesh.DOUBLESIDE} position={new Vector3(-170,180,-10)}>
              <standardMaterial  name="mat" roughness={1} emissiveColor={BABYLON.Color3.White()}>
                <videoTexture  name="videoTex" src="/UI/video/magic-stick.mp4">

                  </videoTexture>
                  </standardMaterial>
                  </plane>
                  <plane  name='videoPlane3' height={160} width={300} sideOrientation={BABYLON.Mesh.DOUBLESIDE} position={new Vector3(190,180,-10)}>
                     <standardMaterial  name="mat" roughness={1} emissiveColor={BABYLON.Color3.White()}>
                       <videoTexture  name="videoTex" src="/UI/video/helmet480.mp4" >

                  </videoTexture>
                  </standardMaterial>
                  </plane>
                  <plane  name='videoPlane4' height={160} width={300} sideOrientation={BABYLON.Mesh.DOUBLESIDE} position={new Vector3(520,180,-10)}>
                     <standardMaterial  name="mat" roughness={1} emissiveColor={BABYLON.Color3.White()}>
                       <videoTexture  name="videoTex" src="/UI/video/boyidle.mp4" onCreated={(instance:VideoTexture)=>{
                        // console.log(instance);
                       //  instance.video.autoplay=false;
                       //  instance.video.muted=false;
                  }}>

                  </videoTexture>
                  </standardMaterial>
                  </plane>

                  <plane name="imgPlane" onCreated={imgPlane}>
                
                      </plane>
                 
                 
            
             </plane>
      
    )
        
        
    
}
)