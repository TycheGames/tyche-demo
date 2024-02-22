import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Nullable } from "@babylonjs/core";
import {AiOutlineClose,AiOutlineArrowDown} from 'react-icons/ai'

let containerRef:React.MutableRefObject<Nullable<HTMLDivElement>>;

export const NFTMarketWindow =()=>{

    containerRef=useRef<Nullable<HTMLDivElement>>(null);

    return(
        <NFTWindowContainer ref={containerRef}>
            <HeadDiv>
                <HeadLabel>NFT Market</HeadLabel>
                <AiOutlineClose style={{display:'inline-block',color:'white',position:'relative'
                ,top:'15px',float:'right',width:'20px',height:'20px',right:'16px',cursor:'pointer'}} onClick={()=>{
                    containerRef.current!.style.display='none';
                }} ></AiOutlineClose>
            </HeadDiv>
            <NFTGrid>
               <ImgDiv>
               <NFTContainer>
                    <GameImg src='/assets/NFT/actor/actor1.png'/>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                        Tyche Actor #1
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            300 TGT
                        </GameProsTGTValue>
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <NFTContainer>
                    <GameImg src='/assets/NFT/actor/actor2.png'></GameImg>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                        Tyche Actor #2
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            100 TGT
                        </GameProsTGTValue> 
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <NFTContainer>
                    <GameImg src='/assets/NFT/actor/actor3.png'></GameImg>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                        Tyche Actor #3
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133 TGT
                        </GameProsTGTValue>
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <NFTContainer>
                    <GameImg src='/assets/NFT/actor/actor4.png'></GameImg>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                        Tyche Actor #4
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            50 TGT
                        </GameProsTGTValue>
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <NFTContainer>
                    <DiamondImg src='/assets/NFT/diamond/diamond1.png'/>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                    Diamond #1
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            300 TGT
                        </GameProsTGTValue>
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <NFTContainer>
                    <DiamondImg src='/assets/NFT/diamond/diamond2.png'/>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                    Diamond #2
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            100 TGT
                        </GameProsTGTValue> 
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <NFTContainer>
                    <DiamondImg src='/assets/NFT/diamond/diamond3.png'/>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                    Diamond #3
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            133 TGT
                        </GameProsTGTValue>
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
               <ImgDiv>
               <NFTContainer>
                    <DiamondImg src='/assets/NFT/diamond/diamond4.png'/>
                </NFTContainer>
                <GamePros>
                    <GameProsName>
                        Diamond #4
                    </GameProsName>
                    <GameProsFire>
                     🔥🔥🔥 
                    </GameProsFire>
                    <GameProsTGTLabel>
                       <LogoImg src='/UI/images/TGlogo48px.png' alt={'stoneman'}/>
                        <GameProsTGTValue>
                            50 TGT
                        </GameProsTGTValue>
                        <NFTBuyBtn>Buy NFT</NFTBuyBtn>
                      
                    </GameProsTGTLabel>
                </GamePros>
               </ImgDiv>
            </NFTGrid>

        </NFTWindowContainer>
    )
}

const NFTWindowContainer = styled.div`
    display: none;
    position: fixed;
    overflow-y: auto;
    width:70%;
    height:80%;
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
    text-align:center ;

`;
const NFTContainer= styled.div`
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

const DiamondImg=styled.img`
    display:block;
    position:relative ;
    width:100px;
    height:100px;
    object-fit:contain;
    margin:0 auto ;
    

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
const NFTBuyBtn =styled.button`
    display:inline-block;
    position:relative;
    float:right;
    right:2px;
    border-width:1px ;
    border-radius:2px ;
    border-color:rgba(255,196,18,1) ;
    color:rgba(255,196,18,1);
    background-color:rgba(0,0,0,1) ;
    font-size:12px; 
    font-weight:400 ;
    font-family:Roboto;
    cursor:pointer;

`;

const InputTest =styled.input.attrs({onClick:(e)=>{
    
},item:''})`

`

const NFTGrid =styled.div`
    display:grid;
    position:relative;
    margin-top:30px ;
    width:96%;
    left:20px;
    grid-template-columns:repeat(4,1fr) ;
    grid-template-rows:repeat(2,1fr);
    grid-gap:20px;
    background-color: rgba(0,0,0,0);

`

NFTMarketWindow.showWindow =(show:boolean)=>{
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