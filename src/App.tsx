import "./styles.css";
import React,{useContext, useMemo, useRef,Suspense} from 'react';
import "@babylonjs/loaders";
import {  AnimationGroup, float,  Mesh, MeshAssetTask, Nullable, StandardMaterial, VideoTexture} from "@babylonjs/core";
import { Texture } from "@babylonjs/core/Materials/Textures/texture.js";
import {
  Engine,
  Scene,
  useAssetManager,
  TaskType,
  AssetManagerContext,
  AssetManagerContextProvider,
  useBeforeRender,
  Task,
  useScene,
  SceneEventArgs,
  useCanvas

} from "react-babylonjs"
import {Vector3} from '@babylonjs/core/Maths/math'

import './App.css';
import * as BABYLON from '@babylonjs/core';

import { AdvancedDynamicTexture, Rectangle, TextBlock} from "@babylonjs/gui";

import {useWallet,Wallet, WalletStatus, ConnectType} from "@terra-money/wallet-provider"; 

import {Dropdown} from './component/Dropdown';
import { VideoPlane } from "./component/VideoPlane";
import ActorWindow from "./component/ActorWindow";
import { SwapWindow } from "./component/UI/swapWindow";
import {DashboardWindow}  from './component/UI/dashboardWindow';





let walletOpt:Wallet;
let connectText:TextBlock;
const refPlane=React.createRef<Mesh>();

type EqSkyboxProps ={
  rootUrl:string;
  blur:float;
  name:string
}
const SkyboxUrl = '/assets/sky/FS003_Day.png';
const baseUrl ='/assets/models/';

const modelAssetTasks:Task[] = [
   { taskType: TaskType.Mesh,  name: 'cartoonCity',rootUrl: `${baseUrl}`, sceneFilename: 'city.gltf' },
    { taskType: TaskType.Mesh,  name:'cartoonBoy',rootUrl: `${baseUrl}avatar/`, sceneFilename: 'boy-greeting-idle.glb' },
   { taskType: TaskType.Mesh,  name: 'cartoonGuy',rootUrl: `${baseUrl}avatar/`, sceneFilename: 'bear-dancing-cheer.glb' },
   { taskType: TaskType.Mesh,  name: 'cartoonDude',rootUrl: `${baseUrl}dude/`, sceneFilename: 'dude.babylon' },
    { taskType: TaskType.Mesh,  name: 'cartoonBalloon',rootUrl: `${baseUrl}balloon/`, sceneFilename: 'balloon.gltf' }
]
const onButtonClicked = () => {
 console.log('Button clicked');
};
//load model fallback
const MyFallback = () =>{
  let boxRef = useRef<Nullable<Mesh>>();
  const context = useContext(AssetManagerContext);
  console.log('context in fallback',context);

  useBeforeRender((scene)=>{
    if (boxRef.current) {
      var deltaTimeInMillis =scene.getEngine().getDeltaTime();

      const rpm=10;
      boxRef.current.rotation.x = Math.PI / 4;
      boxRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  })

  const eventData = context?.lastProgress?.eventData ;
  return<>
    <adtFullscreenUi name='ui'>
      <rectangle name="rect" height='60px' width='500px' thickness={0}>
        <rectangle thickness={0}>
          
        {eventData !== undefined &&
            <textBlock text={`${eventData.totalCount - eventData.remainingCount}/${eventData.totalCount}`} fontStyle="bold" fontSize={50} color="white" />
         }
              
          {eventData === undefined &&
            <textBlock text='Tyche Games loading' fontStyle="bold" fontSize={50} color="white" />
          }
        </rectangle>
      </rectangle>
    </adtFullscreenUi>
    <box ref ={boxRef} name='fallback' size={200}/>
      </>
}

// guys walk
class  walk{
  public turn=0;
  public dist=0;
  constructor(turn:number,dist:number) {
    this.dist=dist;
    this.turn=turn;
  }
    
 
}






//load scene1 3D models
const MyModels = ()=>{
  const assetManagerResult = useAssetManager(modelAssetTasks);

  const scene =useScene();

 
  useMemo(() => {
       console.log('Loaded Tasks', assetManagerResult);
   
      //load city
      const cartoonCityTask =  assetManagerResult.taskNameMap['cartoonCity'] as MeshAssetTask;
      cartoonCityTask.loadedMeshes[0].position = new Vector3(-300, -100, 600);
      cartoonCityTask.loadedMeshes[0].scaling = new Vector3(1, 1, 1);
      cartoonCityTask.loadedMeshes[0].receiveShadows=true;

 
    //load cartoon boy
     const cartoonBoyTask= assetManagerResult.taskNameMap['cartoonBoy'] as MeshAssetTask;
     let cartoonBoyMesh=cartoonBoyTask.loadedMeshes[0];
     let cartoonBoyAnimationGroup=cartoonBoyTask.loadedAnimationGroups;

     cartoonBoyMesh.isPickable=true;
     cartoonBoyAnimationGroup[0].loopAnimation=true;
     console.log(cartoonBoyAnimationGroup);
     cartoonBoyTask.loadedMeshes[0].position = new Vector3(300, -200, -600);
     cartoonBoyTask.loadedMeshes[0].scaling= new Vector3(20,20,20);

    //load dude
      const dudeTask= assetManagerResult.taskNameMap['cartoonDude'] as MeshAssetTask;
      dudeTask.loadedMeshes[0].position = new Vector3(200, -220, 600);
      dudeTask.loadedMeshes[0].rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(0), BABYLON.Space.LOCAL);
      dudeTask.loadedMeshes[0].scaling= new Vector3(3,3,3);
      dudeTask.loadedMeshes[0].isPickable=true;
      scene!.beginAnimation(dudeTask.loadedSkeletons[0],0,100,true);

    //load cartoon bear
      const cartoonGuyTask =  assetManagerResult.taskNameMap['cartoonGuy'] as MeshAssetTask;
      let cartoonGuyMesh=cartoonGuyTask.loadedMeshes[0];
      let cartoonGuyAnimationGroup:AnimationGroup[]=cartoonGuyTask.loadedAnimationGroups;
      cartoonGuyMesh.isPickable=true;
     // cartoonGuyAnimationGroup[0].stop();
      //cartoonGuyAnimationGroup[1].play();
      cartoonGuyAnimationGroup[1].loopAnimation=true;
     // console.log(cartoonGuyAnimationGroup);
      cartoonGuyMesh.position = new Vector3(200, -220, -600);
      cartoonGuyMesh.scaling = new Vector3(50,50,50);
      cartoonGuyMesh.rotation =new Vector3(0,10,0);
     // console.log(cartoonGuyTask.loadedMeshes);

    scene?.onBeforeRenderObservable.add(()=>{
      if(cartoonBoyAnimationGroup[1].isPlaying===false&&cartoonBoyAnimationGroup[0].isPlaying===false){
        cartoonBoyAnimationGroup[0].start();
      }
    });
      scene?.onPointerObservable.add((evt:BABYLON.PointerInfo)=>{
        if(evt.type===BABYLON.PointerEventTypes.POINTERPICK){

          var ray =scene.createPickingRay(scene.pointerX,scene.pointerY,BABYLON.Matrix.Identity(),scene.activeCamera);
          var hit =scene.pickWithRay(ray);
         console.log(hit?.pickedMesh?.parent?.name);
         if(hit?.pickedMesh?.parent?.name==='Boy_With_Color'){
          if(cartoonBoyAnimationGroup[0].isPlaying===true){
            cartoonBoyAnimationGroup[0].stop();
            cartoonBoyAnimationGroup[1].start();
            //cartoonBoyAnimationGroup[1].loopAnimation=true;
          }else{
            if(cartoonBoyAnimationGroup[1].isPlaying===false){
              cartoonBoyAnimationGroup[1].stop();
              cartoonBoyAnimationGroup[0].play();
              cartoonBoyAnimationGroup[0].loopAnimation=true;
            }
          }

            console.log('Boy hited');
         }
         
        if(hit?.pickedMesh?.name==='Ch14'){
          console.log("0 isplaying :"+cartoonGuyAnimationGroup[0].isPlaying);
          console.log("1 isplaying :"+cartoonGuyAnimationGroup[1].isPlaying);
          if(cartoonGuyAnimationGroup[0].isPlaying===true){
            cartoonGuyAnimationGroup[0].stop();
            cartoonGuyAnimationGroup[1].start();
            cartoonGuyAnimationGroup[1].loopAnimation=true;
          }else{
            if(cartoonGuyAnimationGroup[1].isPlaying===true){
              cartoonGuyAnimationGroup[1].stop();
              cartoonGuyAnimationGroup[0].play();
              cartoonGuyAnimationGroup[0].loopAnimation=true;
            }
          }
        
            console.log("Bear picked");
        }
        }


      })
     //  switch(evt.type){
       // case BABYLON.PointerEventTypes.POINTERDOWN:
         // console.log(evt.pickInfo?.pickedMesh);
          //console.log(dudeTask.loadedMeshes[0]);
      // }
        //if(evt.pickInfo?.pickedMesh===dudeTask.loadedMeshes[0]){
        //  console.log("picked");
      //  }
     // });
   


     //cartoon dude partrol the city
      let distance=0;
      let step=2;
      let p=0;
     
 
        const startRotation = dudeTask.loadedMeshes[0].rotationQuaternion!.clone();
        const track:walk[]=[];

        track.push(new walk(180,1000));
        
        track.push(new walk(-180, 2000));


      
      scene!.onBeforeRenderObservable.add(()=>{
        dudeTask.loadedMeshes[0].movePOV(0,0,step);
        distance+=step;
        if(distance>track[p].dist){
         dudeTask.loadedMeshes[0].rotate(BABYLON.Axis.Y,  BABYLON.Tools.ToRadians(track[p].turn), BABYLON.Space.LOCAL);
      
          p+=1;
          p %=track.length;
          if(p===0){
            distance = 0;
            dudeTask.loadedMeshes[0].position = new BABYLON.Vector3(200, -220,600);
            dudeTask.loadedMeshes[0].rotationQuaternion = startRotation.clone();
          }
        }
      });
      
      const cartoonBalloonTask =  assetManagerResult.taskNameMap['cartoonBalloon'] as MeshAssetTask;
      cartoonBalloonTask.loadedMeshes[0].position = new Vector3(-100, 300, 200);
      cartoonBalloonTask.loadedMeshes[0].scaling = new Vector3(300, 300,300);

      

     


      
    },[]);
    return null;
}
const NFTlogo =()=>{
let planeRef =useRef<Nullable<Mesh>>();
if(walletOpt.status===WalletStatus.WALLET_CONNECTED||walletOpt.status===WalletStatus.WALLET_NOT_CONNECTED){
  planeRef.current!.isVisible=true;
}
  return(
  <plane name="dialog2" ref={planeRef} size={400} position={new Vector3(700, 20, -300)}  sideOrientation={Mesh.BACKSIDE} isVisible={false}>
  <advancedDynamicTexture
   name="dialogTexture"
   height={300} width={700}
    createForParentMesh={true}
       hasAlpha={true}
      generateMipMaps={true}
     samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
    >
     <rectangle name="rect-1" height={0.3} width={0.6} thickness={12} cornerRadius={12} >
          <rectangle>
               <babylon-button name="close-icon" background="green" hoverCursor="pointer" onPointerDownObservable={onButtonClicked} >
              <textBlock text={'NFT MARKET'} fontFamily="FontAwesome" fontStyle="bold" fontSize={50} color="white" />
              </babylon-button>
          </rectangle>
       </rectangle>
    </advancedDynamicTexture>
 </plane>
  )
}

const CASINOlogo =()=>{
  let casinoRef =useRef<Nullable<Mesh>>();
  if(walletOpt.status===WalletStatus.WALLET_CONNECTED||walletOpt.status===WalletStatus.WALLET_NOT_CONNECTED){
    casinoRef.current!.isVisible=true;
  }
  return(
  <plane name="dialog" ref={casinoRef} size={400} position={new Vector3(-300, 300, -250)} sideOrientation={Mesh.BACKSIDE} isVisible={false} >
  <advancedDynamicTexture
   name="dialogTexture"
   height={300} width={700}
   createForParentMesh={true}
       hasAlpha={true}
      generateMipMaps={true}
     samplingMode={Texture.TRILINEAR_SAMPLINGMODE} 
    >
     <rectangle name="rect-1"  height={0.3} width={0.6} thickness={12} cornerRadius={12}>
          <rectangle>
               <babylon-button name="close-icon" background="yellow"  hoverCursor="pointer" onPointerDownObservable={onButtonClicked} >
              <textBlock text={'PLAY GAMES'} fontFamily="FontAwesome" fontStyle="bold" fontSize={50} color="red" />
              </babylon-button>
          </rectangle>
       </rectangle>
    </advancedDynamicTexture>
 </plane>
  )
}
  //skybox
const EqSkybox = (props:EqSkyboxProps) => {

    return (
    <box name="EqiSkybox" size={5000} infiniteDistance={true} isPickable={true} >
       <pbrMaterial name={props.name+'skybox-material'} backFaceCulling={false} disableLighting={false} microSurface={(1.0-props.blur)} >
    
        <equiRectangularCubeTexture size={512}  url ={props.rootUrl} coordinatesMode={Texture.SKYBOX_MODE} assignTo={'reflectionTexture'} />

     
         </pbrMaterial>
    </box>
  );
}
const HdrSkybox=(props:EqSkyboxProps) => {

  return (
  <box name="EqiSkybox" size={7000} infiniteDistance={true} isPickable={true} renderingGroupId={1}>
     <pbrMaterial name={props.name+'skybox-material'} backFaceCulling={false} disableLighting={true} microSurface={(1.0-props.blur)} >
  
      <hdrCubeTexture url={props.rootUrl} size={1000} coordinatesMode={Texture.SKYBOX_MODE} assignTo={'reflectionTexture'} ></hdrCubeTexture>

   
       </pbrMaterial>
  </box>
);
  }


const UI= ()=>{
  //Load UI


//const[connectText,setText]=useState<Nullable<TextBlock>>(null);
//console.log(walletOpt.status);

if(walletOpt.status===WalletStatus.WALLET_CONNECTED){
  console.log("connected");
  if(connectText){
    connectText!.text=walletOpt.wallets[0].terraAddress;
    connectText!.resizeToFit=true;

  }
  
}
if(walletOpt.status===WalletStatus.WALLET_NOT_CONNECTED){
  if(connectText){
    connectText.text="Connect Wallet";
  }
}

const createUI=async(instance:AdvancedDynamicTexture,scene:BABYLON.Scene)=>{
  //build Dropdown list UI
  //let Dropdown:any=(function(){
    //function Dropdown(instance:any){}
    //return Dropdown;
  //}());

  let loadUI= await instance. parseFromURLAsync('/UI/guiTexture1920.json');


  //load dashboard board
  let dashboardRec=instance!.getControlByName('DashboardRec') ;
  //load swap board
  let swapRec=instance.getControlByName("SwapRec") as Rectangle;
  //load game board
  let gameRec=instance.getControlByName('GameboardRec');

  //get UI controlls
  let dashboardBtn=instance.getControlByName('DashboardBtn');
  let connectBtn=instance.getControlByName('ConnectBtn');
  let gameBtn=instance.getControlByName('GameBtn');
  let swapBtn =instance.getControlByName('SwapBtn');
  

  //add dropdown control to swapboard
  var dropdown=new Dropdown('TUST',swapRec,"310px","50px","white","#00000000");
  dropdown.top='200px';
  dropdown.left='-160px';
  dropdown.addOption(0,"TUST");
  dropdown.addOption(1,"UST")
  dropdown.addOption(2,"TGT")
  //swapGrid.addControl(dropdown,1,0);
  var dropdownB=new Dropdown('UST',swapRec,"310px","50px","white","#00000000");
  dropdownB.top='200px';
  dropdownB.left='160px';
  dropdownB.addOption(0,"TUST");
  dropdownB.addOption(1,"UST")
  dropdownB.addOption(2,"TGT")
 
  console.log(dropdown);

  let totalburnedValue=instance.getControlByName("TotalBurnedValue") as TextBlock;
  totalburnedValue.text="🔥 10,000 TGT";
  console.log('\u{1F525}');
//setText(instance.getControlByName('ConnectText') as TextBlock) ;
  connectText=instance.getControlByName('ConnectText') as TextBlock;

  //get all ui close button
  let  dashcloseBtn=instance.getControlByName('DashCloseBtn');
  let  swapcloseBtn=instance.getControlByName('SwapCloseBtn');
  let  gamecloseBtn=instance.getControlByName('GameCloseBtn');

  //invisible the ui
  dashboardRec!.isVisible=false;
  swapRec!.isVisible=false;
  gameRec!.isVisible=false;

  //set over cursor
  dashboardBtn!.hoverCursor="pointer";
  dashcloseBtn!.hoverCursor="pointer";
  connectBtn!.hoverCursor="pointer";
  swapBtn!.hoverCursor="pointer";
  swapcloseBtn!.hoverCursor="pointer";
  gameBtn!.hoverCursor="pointer";
  gamecloseBtn!.hoverCursor='pointer';


console.log(walletOpt.status);

//add UI button click event
gameBtn?.onPointerClickObservable.add(()=>{
  gameRec!.isVisible=!gameRec!.isVisible;

  //var buttonbox=document.getElementById('buttonbox');
  var actorWin=document.getElementById('actorWin');
  actorWin!.style.display="grid";
  
  console.log(actorWin);
  //buttonbox!.style.display="block";
  //showActorWin();
  //console.log(buttonb;

  if(swapRec!.isVisible===true){
    swapRec!.isVisible=false;
  }

  if(dashboardRec!.isVisible===true){
    dashboardRec!.isVisible=false;
  }

});
swapBtn?.onPointerClickObservable.add(()=>{
  //if(swapRec!.isVisible===false){
   //swapRec!.isVisible=true;
 //}
 SwapWindow.showWindow();
 
//if(document.getElementById('swapWindow1')!.style.display==='none'){
  //document.getElementById('swapWindow1')!.style.display='block';
//} ;
 if(gameRec!.isVisible===true){
  gameRec!.isVisible=false;
}

if(dashboardRec!.isVisible===true){
  dashboardRec!.isVisible=false;
}
});
connectBtn?.onPointerClickObservable.add(()=>{
  
  if(walletOpt.status===WalletStatus.WALLET_NOT_CONNECTED){
      walletOpt.connect(ConnectType.EXTENSION);
     
   
  }
  if(walletOpt.status===WalletStatus.WALLET_CONNECTED){
    walletOpt.disconnect();

 
}
  
});
//dashboard clicked
dashboardBtn?.onPointerClickObservable.add(()=>{
 /* console.log(refPlane.current?.isEnabled());
  if(refPlane.current?.isEnabled()===false){
      refPlane.current?.setEnabled(true);
  }
 // if(dashboardRec!.isVisible===false){
   // dashboardRec!.isVisible=true;
  //}
  if(refPlane.current)
  if(swapRec!.isVisible===true){
    swapRec!.isVisible=false;
  }
  
  if(gameRec!.isVisible===true){
    gameRec!.isVisible=false;
  }*/
  DashboardWindow.showWindow();
})

//add ui close button event
dashcloseBtn?.onPointerClickObservable.add(()=>{

  dashboardRec!.isVisible=false;
});

swapcloseBtn?.onPointerClickObservable.add(()=>{
  swapRec!.isVisible=false;
});

gamecloseBtn?.onPointerClickObservable.add(()=>{
  gameRec!.isVisible=false;
});



  
}



  return(
 
  <adtFullscreenUi name='ADui' foreground={true} onCreated={createUI}>

</adtFullscreenUi>);
}


const App = () => {
  const canvas=useCanvas();
  const scene=useScene();
 
  walletOpt=useWallet();
  //console.log(walletOpt);
 
  
//console.log(scene);

const sceneMounted=async(args:SceneEventArgs)=>{
  
new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI/2,1600, Vector3.Zero(), args.scene);

//let advanceTexture=AdvancedDynamicTexture.CreateFullscreenUI("GUI",true,args.scene);
//let loadedGUI= await advanceTexture.parseFromURLAsync('/UI/guiTexture.json');
//let  rec=advanceTexture.getControlByName('Rectangle');
//rec!.isVisible=false;
//console.log(rec);
}


  return (
  
   
 
    <div >
        
      {/** <ActorWindow></ActorWindow>*/} 
       <SwapWindow></SwapWindow>
       <DashboardWindow></DashboardWindow>
      
      <Engine antialias adaptToDeviceRatio canvasId='Tyche-demo'>
        <Scene>
          <hemisphericLight name='hemi-light' intensity={1} direction={Vector3.Up()} range={1000} />
   
  

          <EqSkybox name='skybox' blur={0.1} rootUrl={SkyboxUrl}></EqSkybox>
  
          <arcRotateCamera  id={'1'} name='arcCamera' target={Vector3.Zero()} radius={1600} 
            alpha ={-Math.PI / 2} beta={(Math.PI / 1)} minZ = {0.3} upperBetaLimit={Math.PI/2} lowerRadiusLimit={500} wheelPrecision = {50}
              onCreated={()=>{}}  />
  
         {/* </arcRotateCamera>
            <arcRotateCamera  id={'2'} name='arcCamera1' target={Vector3.Zero()} radius={1600}  useAutoRotationBehavior
            alpha ={-Math.PI / 2} beta={(Math.PI / 2.5)} minZ = {0.3} upperBetaLimit={Math.PI/2} lowerRadiusLimit={1000} wheelPrecision = {50}
              onCreated={alwaysActive} layerMask={2}
          >
             <viewport x={0} y={0} height={1} width={0.5} />
          </arcRotateCamera> */}
                    
        <AssetManagerContextProvider>

           <Suspense fallback = {<MyFallback />}>
             <MyModels />
           </Suspense>
         </AssetManagerContextProvider>
        <NFTlogo/>
        <CASINOlogo/>
   
        
   
        </Scene>
        
         
         <Scene autoClear={false} onSceneMount={sceneMounted} onPointerObservable={(evt:BABYLON.PointerInfo)=>{
           if(evt.type===BABYLON.PointerEventTypes.POINTERPICK){
             let mesh=evt.pickInfo?.pickedMesh;
            console.log(mesh?.name);
           if(mesh?.name==="videoPlane1"){
              let videoTex=((mesh?.material as StandardMaterial).diffuseTexture) as VideoTexture;
              console.log(videoTex);
              if(videoTex.video.paused===true){
                videoTex.video.muted=false;
                videoTex.video.play();
              }else{
                videoTex.video.pause();
              }


           }
   
            console.log(refPlane.current);
             // console.log(videoRef.current?.video.paused);
          //    if(videoRef.current?.video.paused===true){
            //    videoRef.current.video.muted=false;
              //  videoRef.current.video.play();
              //}else{
                //videoRef.current?.video.pause();
             // }
           
           }
       
          
         }}>
        <hemisphericLight name='hemi-light' intensity={0.6} direction={Vector3.Up()}/>
  
         
          <VideoPlane ref={refPlane}
          ></VideoPlane>
  
          
        <UI/>
       
       
          </Scene>
     
       
      </Engine>
    </div>
    
  );
}

export default App;
