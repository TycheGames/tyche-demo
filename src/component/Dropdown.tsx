import { AdvancedDynamicTexture, Button, Container,Control, Grid, Rectangle, StackPanel, TextBlock } from '@babylonjs/gui';
import * as BABYLON from '@babylonjs/core';
import React from 'react';

export class Dropdown{
        width:number|string;
        height:number|string;
        color:string;
        background:string;
        container:Container;
        button:Button;
        options:StackPanel;
        controller:Rectangle;
        selected:Button|null=null;
        selectedValue:string|number|null=null;

        constructor(mainText:string,controller:Rectangle,width:number|string,height:number|string,color?:string,background?:string){
           this.controller=controller;
            this.width=width;
            this.height=height;
            this.color=color||"black";
            this.background=background||"white";

            //Container;
            this.container=new Container();
            this.container.width=this.width;
            this.container.verticalAlignment=Control.VERTICAL_ALIGNMENT_TOP;
            this.container.isHitTestVisible=false;

            //Primary button
            this.button=Button.CreateSimpleButton("",mainText);
            this.button.height=this.height;;
            this.button.color=this.color;
            this.button.fontFamily="IBM Plex Sans";
            this.button.fontWeight="600";
            this.button.fontSize="30px";
            this.button.thickness=0;
            this.button.background=this.background;
            this.button.verticalAlignment=Control.VERTICAL_ALIGNMENT_TOP;
            this.button.hoverCursor="pointer";

            //Options panel
            this.options=new StackPanel();
            this.options.verticalAlignment=Control.VERTICAL_ALIGNMENT_TOP;
            this.options.top=this.height;
            this.options.isVisible=false;
            this.options.isVertical=true;
            let _this= this;
            this.button.onPointerUpObservable.add(function(){
                _this.options.isVisible=!_this.options.isVisible;

            });

            this.container.onPointerEnterObservable.add(function(){
                _this.container.zIndex=555;
            });

            this.container.onPointerOutObservable.add(function(){
                _this.container.zIndex=0;
                if(_this.options.isVisible===true){
                    _this.options.isVisible=false;
                }
               
            });

            //add controller
            this.controller.addControl(this.container);
            console.log(this.controller);
            this.container.addControl(this.button);
            this.container.addControl(this.options);

        }

        get top():number|string{
            return this.container.top;
        }

        set top(value:number|string){
            this.container.top=value;
        }

        get left():number|string{
            return this.container.left;
        }

        set left(value:number|string){
            this.container.left=value;
        }

        addOption(value:string|number,text:string,color?:string,background?:string){
            var _this=this;
            var button =Button.CreateSimpleButton(text,text);
            button.height=this.height;
            button.paddingTop="2px";
            button.background=background||this.background;
            button.color=color||this.color;
            button.fontSize="30px";
            button.thickness=0;
            button.background="#403f3fff";
            button.onPointerUpObservable.add(function(){
                _this.options.isVisible=false;
               ( _this.button.children[0] as TextBlock).text=text;
               _this.selected=button;
               _this.selectedValue=value;
               
            });
            this.options.addControl(button);
        }


    }

 