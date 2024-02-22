import React,{useRef, useState}from "react";
import styled from "styled-components";
import { Nullable } from "@babylonjs/core/types";
import { SwapWindow } from "../swapWindow";
import {AiOutlineClose,AiOutlineArrowDown} from 'react-icons/ai'
import * as BABYLON from '@babylonjs/core';

let containerRef:React.MutableRefObject<Nullable<HTMLDivElement>>;

let avartMesh:BABYLON.AbstractMesh[]=[];

export const  DashboardWindow=()=>{

    containerRef=useRef<Nullable<HTMLDivElement>>(null);

    return(
        <Container ref={containerRef}>
            <Head>
                <DashboardLabel>Dashboard</DashboardLabel>
                <AiOutlineClose style={{display:'inline-block',color:'white',position:'relative'
                ,top:'0px',float:'right',width:'20px',height:'20px',right:'16px',cursor:'pointer'}} onClick={()=>{
                    containerRef.current!.style.display='none';
                }} ></AiOutlineClose>
            </Head>

           <BalanceContainer />

            <NFTContainer/>

            <RewardContainer/>

            <BurnedContainer/>


        </Container>
    )
}


const Container =styled.div`
    display: none;
    position: fixed;
    overflow-y: auto;
    width:88%;
    height:90%;
    top:6%;
    left:5%;
    background-color:rgba(0,0,0,1);
    border:0;
    border-radius:10px ;

`;

const Head=styled.div`
    display:block;
    position:sticky ;
    z-index:4 ;
    top:0px;
    border-radius:10px ;
    width:100% ;
    height:5%;
    background-color:rgba(0,0,0,1) ;
`;
const DashboardLabel=styled.label`
    display:block ;
    position:relative ;
    left:16px;
    top:15px;
    font-size: 20px ;
    color:rgba(255,255,255,1);
    font-weight: 600;
    font-family: IBM Plex Sans ;
    height:30%;
   
`;

const BalanceContainer = ()=>{

    return(
       
        <BalanceContainerStyled>
            <BalanceContainerDiv>
                <BalanceLabel>
                    UST
                </BalanceLabel>
                <BalanceValue>
                    2,741,125,168
                </BalanceValue>

            </BalanceContainerDiv>
            <BalanceContainerDiv>
                <BalanceLabel>
                    TUST
                </BalanceLabel>
                <BalanceValue>
                    1,451,125,771
                </BalanceValue>
            </BalanceContainerDiv>
            <BalanceContainerDiv>
                 <BalanceLabel>
                    TGT
                </BalanceLabel>
                <BalanceValue>
                    741,125,168
                </BalanceValue>
            </BalanceContainerDiv>

            <BalanceContainerDiv>
                <SwapButton onClick={()=>{
                        SwapWindow.showWindow(true);
                }}>Swap</SwapButton>
            </BalanceContainerDiv>

        </BalanceContainerStyled>
       
    );
}

const BalanceContainerStyled=styled.div`
    display:block;
    position:relative;
    top:10px;
    left:26px;
    background-color:rgba(58,58,58,0.3);
    width:98%;
    height:80px;
    border-radius:12px ;


`;

const BalanceContainerDiv = styled.div`
    display:inline-block;
    position:relative;
    top:20px;
    width:25%;
    left:20px;


`;

const BalanceLabel =styled.label`
    display:block ;
    color:rgba(255,255,255,0.6);
    font-size:12px;
    font-family:IBM Plex Sans ;
    font-weight:400 ;
    
`;
const BalanceValue = styled.label`
    display:block;
    position:relative ;
    top:5px;
    color:rgba(255,255,255,1);
    font-size:16px;
    font-family:IBM Plex Sans ;
    font-weight:600;
`;





const NFTContainer = ()=>{
 

    return(
        <>
        <NFTContainerStyled>
            <NFTLabel >
                NFT
            </NFTLabel>
            <NFTElementContainer>
                <NFTElementDiv>
                    <NFTCheckInput type='radio' name='NFTRadio' value='avart1' defaultChecked={true} onChange={(e)=>{
                        console.log("radio changed"+e.currentTarget.value)
                        if(e.currentTarget.value==='avart1'){
                            avartMesh[0].setEnabled(true);
                            avartMesh[1].setEnabled(false);
                        }
                       
                    }} />
                    <NFTElement src='/assets/NFT/img/1@2x.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 12 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: points X2</span>
                    </NFTPros>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTCheckInput type='radio' name='NFTRadio' value='avart2' onChange={(e)=>{
                        console.log("radio changed"+e.currentTarget.value)
                    }} />
                    <NFTElement src='/assets/NFT/img/2@2x.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+8</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 10 <span style={{color:'rgba(36,174,100,1)'}}>+3</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: Hashpower X2</span>
                    </NFTPros>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTCheckInput type='radio' name='NFTRadio' value='avart3' onChange={(e)=>{
                        console.log("radio changed"+e.currentTarget.value);
                      
                    }}/>
                    <NFTElement src='/assets/NFT/img/3@2x.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+4</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 7 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: luck X2</span>
                    </NFTPros>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTCheckInput type='radio' name='NFTRadio' value='avart4'  onChange={(e)=>{
                        console.log("radio changed"+e.currentTarget.value)
                        if(e.currentTarget.value==='avart4'){
                            avartMesh[1].setEnabled(true);
                            avartMesh[0].setEnabled(false);
                        }
                    }}/>
                    <NFTElement src='/assets/NFT/img/4@2x.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+2</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 3 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: - </span>
                    </NFTPros>
                </NFTElementDiv>
            </NFTElementContainer>

        </NFTContainerStyled>
        <NFTContainerStyled>
            <NFTLabel >
                PET
            </NFTLabel>
            <NFTElementContainer>
                <NFTElementDiv>
                <NFTCheckInput type='radio' name='NFTPetRadio' value={'dog1'} />
                   <NFTElement src='/assets/NFT/pet/dog1.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 12 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: points X2</span>
                    
                    </NFTPros>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTCheckInput type='radio' name='NFTPetRadio' defaultChecked={true}/>
                    <NFTElement src='/assets/NFT/pet/dog2.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+2</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 3 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: - </span>
                    
                    </NFTPros>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTCheckInput type='radio' name='NFTPetRadio'/>
                    <NFTElement src='/assets/NFT/pet/dog3.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+2</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 3 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: - </span>
                    
                    </NFTPros>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTCheckInput type='radio' name='NFTPetRadio'/>
                    <NFTElement src='/assets/NFT/pet/dog4.png'/>
                    <NFTPros>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>Hashpower: 100 <span style={{color:'rgba(36,174,100,1)'}}>+2</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>luck: 3 <span style={{color:'rgba(36,174,100,1)'}}>+12</span></span>
                    <span style={{display:'block',position:'relative',color:'rgba(255,255,255,1)',top:'6px',left:'60px'}}>buff: - </span>
                    
                    </NFTPros>
                </NFTElementDiv>
            </NFTElementContainer>

        </NFTContainerStyled>
       
        </>
    );
}

const NFTContainerStyled=styled.div`
    display:block;
    position:relative;
    top:20px;
    left:16px;
    background-color:rgba(58,58,58,0.3);
    width:98%;
    height:400px;
    border-radius:12px ;
    

`;

const NFTLabel = styled.label`
    display:block ;
    position:relative ;
    left:26px;
    font-size: 20px ;
    color:rgba(255,255,255,1);
    font-weight: 600;
    font-family: IBM Plex Sans ;
   
`;

const NFTElementContainer =styled.div`
    display:block;
    position: relative;
    text-align:center ;
    top:10px;
    height: 330px;
    left:16px;
    width :97%;
    background-color: rgba(255,255,255,0) ;
    border:0;
`;

const NFTElementDiv = styled.div `
    display:inline-block;
    position:relative ;
    height:80%;
    vertical-align:top;
    margin-left:2% ;
    width:auto;
    background-color:rgba(0,0,0,0) ;
    border:0;
`;

const NFTElement = styled.img`
    display:inline-block;
    position:relative;
    width:100%;
    height:100%;
    object-fit: contain ;
`;

const NFTProsContainer =styled.div`
    display:block;
    position:relative ;
    top:20px;
    left:16px;
    background-color:rgba(0,0,0,0) ;
    height:50px;
    width:100%;

`;
const NFTPros =styled.div`
    display:block;
    height:75px;
    width:100%;
    text-align:left ;
    font-family:Robot ;
    font-weight:400 ;
    font-size:15px ;
    background:url('/assets/NFT/img/Maskbg@2x.png') ;
`;
const NFTCheckInput =styled.input`
    display:block;
    position:absolute ;
    margin-top: 5px ;
    width: 25px;
    height: 25px;
    z-index: 1 ;
    cursor: pointer;
    :checked{
        color:red;
    }
  
`
const RewardContainer =()=>{

    return(
        <RewardContainerStyle>
            <RewardLabel>Rewards</RewardLabel>
            <RewardDiv>
                <RewardElement>
                    <RewardHead>
                        <RewardHeadSpan>
                        Hashpower Prize Pool
                        </RewardHeadSpan> 
                    </RewardHead>
                    <RewardContentDiv>
                        <RewardContent>
                        Reward of the day  
                        </RewardContent>
                        <RewardValue>
                            7750 TGT
                        </RewardValue>
                    </RewardContentDiv>
                    <RewardContentDiv>
                        <RewardContent>
                         Total Hashpower: 
                        </RewardContent>
                        <RewardValue>
                           10289
                        </RewardValue>
                    </RewardContentDiv>
                    <RewardContentDiv>
                        <RewardContent>
                        My Hashpower: 
                        </RewardContent>
                        <RewardValue>
                           11
                        </RewardValue>
                    </RewardContentDiv>
                    <NFTButton>NFT Market</NFTButton>


                </RewardElement>
                <RewardElement>
                <RewardHead>
                        <RewardHeadSpan>
                        Lucky Prize Pool
                        </RewardHeadSpan> 
                    </RewardHead>
                    <RewardContentDiv>
                        <RewardContent>
                        Reward of the day  
                        </RewardContent>
                        <RewardValue>
                            7750 TGT
                        </RewardValue>
                    </RewardContentDiv>
                    <RewardContentDiv>
                        <RewardContent>
                         Total Hashpower: 
                        </RewardContent>
                        <RewardValue>
                           10289
                        </RewardValue>
                    </RewardContentDiv>
                    <RewardContentDiv>
                        <RewardContent>
                        My Hashpower: 
                        </RewardContent>
                        <RewardValue>
                           11
                        </RewardValue>
                    </RewardContentDiv>
                    <NFTButton>NFT Market</NFTButton>
                    
                </RewardElement>
                <RewardElement>
                <RewardHead>
                        <RewardHeadSpan>
                        Points Prize Pool
                        </RewardHeadSpan> 
                    </RewardHead>
                    <RewardContentDiv>
                        <RewardContent>
                        Reward of the day  
                        </RewardContent>
                        <RewardValue>
                            7750 TGT
                        </RewardValue>
                    </RewardContentDiv>
                    <RewardContentDiv>
                        <RewardContent>
                         Total Hashpower: 
                        </RewardContent>
                        <RewardValue>
                           10289
                        </RewardValue>
                    </RewardContentDiv>
                    <RewardContentDiv>
                        <RewardContent>
                        My Hashpower: 
                        </RewardContent>
                        <RewardValue>
                           11
                        </RewardValue>
                    </RewardContentDiv>
                    <GameButton>To Game</GameButton>
                    
                </RewardElement>

            </RewardDiv>
        </RewardContainerStyle>
    )
}

const RewardContainerStyle=styled.div`
    display: block;
    position: relative;
    top:20px;
    width:98%;
    height:330px;
    left:16px;
    background-color:rgba(58,58,58,0.3) ;
    border-radius:12px ;
`;
const RewardLabel =styled.label`
    display:block ;
    position:relative ;
    left:26px;
    font-size: 20px ;
    color:rgba(255,255,255,1);
    font-weight: 600;
    font-family: IBM Plex Sans ;
   
`
const RewardDiv =styled.div`
    display:block;
    top:5px;
    border:2px;
    border-color:white ;
    position:relative;
    text-align:center ;
    width:99%;
    height:280px;
    background-color: rgba(0,0,0,0) ;

`
const RewardElement =styled.div`
    display:inline-block ;
    position:relative ;
   
    vertical-align:top ;
    margin-left:32px ;
    height:270px;
    width:350px;
    border-style:solid ;
    border-radius:7px;
    border-width:2px ;
    border-color:rgba(255,255,255,0.05) ;
    background-color: rgba(255,255,255,0.04);

`
const RewardHead =styled.div`
    display:block;
    position:relative ;
    top:0px;
    height:60px;
    color:white;
    font-size:18px ;
    border-bottom:1px solid rgba(255,255,255,0.2) ;
    background-color:rgba(26,26,27,0.2);
`
const RewardHeadSpan =styled.span`
    display:inline-block;
    position:relative ;
    top:20px;
`;
const RewardContentDiv =styled.div`
    display:block;
    top:10px;
    margin-top:20px ;
    position:relative;
    text-align:left ;
    width:100%;

`
const RewardContent= styled.label`
    display:inline-block;
    position: relative;
    color:rgba(255,255,255,0.8);
    left:40px;
    font-size:14px ;
    font-weight:400 ;
    font-family:IBM Plex Sans ;
`
const RewardValue =styled.span`
    display:block;
    position:relative;
    right:40px;
    float:right;
    color:rgba(255,255,255,1);
    font-size: 14px ;
    font-family: IBM Plex Sans ;
    font-weight:500 ;
`
const NFTButton=styled.button`
    display:block;
    position:relative ;
    width:208px;
    height:40px;
    margin-left:60px;
    margin-top:30px ;

    border-radius:8px ;
    background-color:rgba(240,198,77,1) ;
    color:'white';
    font-size:14px ;
    font-family:Robot ;
    font-weight:500 ;
    cursor: pointer;

`;

const GameButton=styled.button`
    display:block;
    position:relative ;
    width:208px;
    height:40px;
    margin-left:60px;
    margin-top:30px ;

    border-radius:8px ;
    background-color:rgba(240,198,77,1) ;
    color:'white';
    font-size:14px ;
    font-family:Robot ;
    font-weight:500 ;
    cursor: pointer;

`;

const BurnedContainer =()=>{
    return(
        <BurnedContainerStyle>
            <BurnedLabel>
                Total Burned TGT:
            </BurnedLabel>
            <BurnedValueDiv>
                <span style={{position:'relative',top:'30px'}}>🔥  10000 TGT</span>
            </BurnedValueDiv>
        </BurnedContainerStyle>
    );
}
const BurnedContainerStyle=styled.div`
    display:block;
    position:relative ;
    width:98%;
    left:16px;
    top:20px;
`;

const BurnedLabel = styled.label`
    display:block ;
    position:relative ;
    left:26px;
    font-size: 20px ;
    color:rgba(255,255,255,1);
    font-weight: 600;
    font-family: IBM Plex Sans ;
`;
const BurnedValueDiv =styled.div`
    display:block;
    position:relative ;
    height:100px;
    background-color:rgba(58,58,58,0.6) ;
    border-radius:12px ;
    font-size: 32px;
    color:rgba(255,255,255,1);
    text-align:center ;
`;


const SwapButton=styled.button`
    display:block;
    position:relative ;
    width:208px;
    height:40px;
    left:0px;

    border-radius:8px ;
    background-color:rgba(240,198,77,1) ;
    color:'white';
    font-size:14px ;
    font-family:Robot ;
    font-weight:500 ;
    cursor: pointer;

`;

DashboardWindow.showWindow =(show:boolean)=>{
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

DashboardWindow.addAvart=(avart:BABYLON.AbstractMesh)=>{
    avartMesh.push(avart);
}