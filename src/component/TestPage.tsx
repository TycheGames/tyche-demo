import "../styles.css";
import React,{useContext, useMemo, useRef,Suspense,useState, useCallback} from 'react';
import * as BABYLON from '@babylonjs/core';
import {
    ADTFullscreenUI,
    Engine,
    Scene,
    useCanvas,
    useEngine,
    useScene
   } from "react-babylonjs"
import { AdvancedDynamicTexture } from "@babylonjs/gui";

const TestPage=()=>{
 

   const createUI=async(instance:AdvancedDynamicTexture)=>{

       // await instance.parseFromURLAsync("/UI/testpage.json");
        

    }

    return(
        <div>
            <Engine antialias adaptToDeviceRatio  canvasId='Tyche-test'>
                <Scene clearColor={new BABYLON.Color4(0,1,0,1)}>
                    <freeCamera  name="test" position={new BABYLON.Vector3(0,0,0)} target={BABYLON.Vector3.Zero()}>
                        </freeCamera>
                  <adtFullscreenUi name="testUI" foreground={false} onCreated={createUI}>

                  </adtFullscreenUi>
                </Scene>

                </Engine>

        </div>
    )

}

export default TestPage