import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Nullable } from "@babylonjs/core";
import {AiOutlineClose,AiOutlineArrowDown} from 'react-icons/ai'

let containerRef:React.MutableRefObject<Nullable<HTMLDivElement>>;

export const GameWindow =()=>{

    containerRef=useRef<Nullable<HTMLDivElement>>(null);

    return(
        <GameWindowContainer ref={containerRef}>
            <HeadDiv>
                <HeadLabel>Games</HeadLabel>
                <AiOutlineClose style={{display:'inline-block',color:'white',position:'relative'
                ,top:'15px',float:'right',width:'20px',height:'20px',right:'16px',cursor:'pointer'}} onClick={()=>{
                    containerRef.current!.style.display='none';
                }} ></AiOutlineClose>
            </HeadDiv>
            <GameboardGrid>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Aliens.png'/>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                        Aliens
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Antarctic Adventure.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Antarctic Adventure
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Bomb-man.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Bomb-man
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Christmas Skiing.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                        The Adventures of stoneman
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Earth Invasion.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Earth Invasion
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Fishing Party.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Fishing Party
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Gopher Agent.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Gopher Agent
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Ninja Cat.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Ninja Cat
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Speed Racing.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Speed Racing
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>

               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Super Route.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Super Route
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/The Adventure of a Penguin.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    The Adventure of a Penguin
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <ImgContainer>
                    <GameImg src='/UI/games/version2/Planet Adventure.png'></GameImg>
                </ImgContainer>
                <GamePros>
                    <GameProsName>
                    Planet Adventuren
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133,4 TGT
                        </GameProsTGTValue>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
            </GameboardGrid>

        </GameWindowContainer>
    )
}

const GameWindowContainer = styled.div`
    display: none;
    position: fixed;
    overflow-y: auto;
    width:70%;
    height:85%;
    top:6%;
    left:15%;
    background-color:rgba(0,0,0,1);
    border:0;
    border-radius:10px ;
`;

const HeadDiv =styled.div`
    display:block;
    position:sticky ;
    z-index:4 ;
    top:0px;
    height:40px;
    background-color: rgba(0,0,0,1) ;
    

`;

const HeadLabel =styled.label`
    display:inline-block;
    position:relative ;
    color:white;
    font-size:24px;
    font-family:Roboto ;
    font-weight:500 ;
    top:10px;
    left:20px;
   


`;
const ImgDiv =styled.div`
    background-color:rgba(0,0,0,0);
    width:100%;
    height:100%;
    position:relative ;

`;
const ImgContainer= styled.div`
    width:100%;
    border-radius:7px;
    position:relative ;
     
`;
const  GameImg =styled.img`
    width:100%;
    max-width:100% ;
    max-height:100% ;
    object-fit:contain;
    cursor: pointer;
    border-radius:7px;
    
    
`;

const GamePros =styled.div`
    display:block;
    position:relative;
    background-color:rgba(255,255,255,0.2) ;
    height:100px;
    border-radius:7px
    

`
const GameProsName =styled.label`
    display:block ;
    position:relative;
    color:rgba(255,255,255,1);
    text-align:center ;
    font-size:16px ;
    font-weight:700 ;
    font-family:Roboto ;
    

`
const GameProsFire = styled.label`
    display:block;
    position:relative ;
    margin-top:5px ;
`
const GameProsTGTLabel =styled.div`
    display:block;
    position:relative; 
    margin-top:15px ;
`
const LogoImg =styled.img`
    display:inline-block;
    position:relative;
    max-width:16px;
    max-height:16px ;
  
    
`
const GameProsTGTValue =styled.span`
    display:inline-block;
    position:relative;
    height:100%;
    bottom:2px ;
    font-size:14px;
    font-weight:600 ;
    font-family:Robot ;
    color:rgba(255,196,18,1);
    left:5px;

`

const GameboardGrid =styled.div`
    display:grid;
    position:relative;
    margin-top:10px ;
    width:96%;
    left:20px;
    height:90%;
    grid-template-columns:repeat(4,1fr) ;
    grid-template-rows:repeat(3,1fr);
    grid-gap:20px;
    background-color: rgba(0,0,0,0);

`

GameWindow.showWindow =(show:boolean)=>{
    if(show){
        containerRef.current!.style.display='block';
    }else{
        containerRef.current!.style.display='none';
    }
    
/*
    if(containerRef.current?.style.display===""||containerRef.current?.style.display==="none"){
        containerRef.current.style.display='block';
    }else{
        if(containerRef.current?.style.display==='block'){
            containerRef.current.style.display='none';
        }
    }
    */
   
}