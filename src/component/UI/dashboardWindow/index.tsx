import React,{useRef}from "react";
import styled from "styled-components";
import { Nullable } from "@babylonjs/core/types";

let containerRef:React.MutableRefObject<Nullable<HTMLDivElement>>;

export const  DashboardWindow=()=>{

    containerRef=useRef<Nullable<HTMLDivElement>>(null);

    return(
        <Container ref={containerRef}>
            <Head>
                <DashboardLabel>Dashboard</DashboardLabel>
            </Head>

           <BalanceContainer />

            <NFTContainer/>

            <RewardContainer>

            </RewardContainer>

            <BurnedContainer>

            </BurnedContainer>


        </Container>
    )
}


const Container =styled.div`
    display: none;
    position: fixed;
    width:1200px;
    height:800px;
    top:10%;
    left:10%;
    background-color:rgba(0,0,0,1);
    border:0;
    border-radius:10px ;

`;

const Head=styled.div`
    display:block;
    position:relative ;
   
    border-radius:10px ;
    width:100% ;
    height:8%;
    background-color:rgba(0,0,0,1) ;
`;
const DashboardLabel=styled.label`
    display:block ;
    position:relative ;
    left:16px;
    top:15px;
    font-size: 24px ;
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
                <SwapButton>Swap</SwapButton>
            </BalanceContainerDiv>

        </BalanceContainerStyled>
       
    );
}

const BalanceContainerStyled=styled.div`
    display:block;
    position:relative;
    left:16px;
    background-color:rgba(58,58,58,0.3);
    width:97%;
    height:100px;
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
    font-size:20px;
    font-family:IBM Plex Sans ;
    font-weight:600;
`;





const NFTContainer = ()=>{

    return(
        <NFTContainerStyled>
            <NFTLabel >
                NFT
            </NFTLabel>
            <NFTElementContainer>
                <NFTElementDiv>
                    <input style={{display:'block', position:'absolute',marginTop:'5px', borderRadius:'10px',width:'30px',height:'30px',zIndex:1}} type='checkbox'></input>
                    <NFTElement src='/assets/NFT/img/1@2x.png'/>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTElement src='/assets/NFT/img/2@2x.png'/>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTElement src='/assets/NFT/img/3@2x.png'/>
                </NFTElementDiv>
                <NFTElementDiv>
                    <NFTElement src='/assets/NFT/img/4@2x.png'/>
                </NFTElementDiv>
            </NFTElementContainer>

        </NFTContainerStyled>
    );
}

const NFTContainerStyled=styled.div`
    display:block;
    position:relative;
    left:16px;
    background-color:rgba(58,58,58,0.3);
    width:98%;
    height:400px;
    border-radius:12px ;
    

`;

const NFTLabel = styled.label`
    display:block ;
    position:relative ;
    left:16px;
    font-size: 24px ;
    color:rgba(255,255,255,1);
    font-weight: 600;
    font-family: IBM Plex Sans ;
   
`;

const NFTElementContainer =styled.div`
    display:block;
    position: relative;
    top:20px;
    height: 280px;
    left:16px;
    width :97%;
    background-color: rgba(255,255,255,0.6) ;
    border:0;
`;

const NFTElementDiv = styled.div `
    display:inline-block;
    position:relative ;
    height:100%;
    vertical-align:top;
    margin-left:12px ;
    width:270px;
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





const RewardContainer=styled.div`

`;

const BurnedContainer=styled.div`

`;

const SwapButton=styled.button`
    display:block;
    position:relative ;
    width:208px;
    height:40px;
    left:16px;

    border-radius:8px ;
    background-color:rgba(240,198,77,1) ;
    color:'white';
    font-size:14px ;
    font-family:Robot ;
    font-weight:500 ;
    cursor: pointer;

`;

DashboardWindow.showWindow =()=>{
    console.log(containerRef.current!.style);
   // containerRef.current!.style.display='block';
    //console.log(containerRef.current);
    if(containerRef.current?.style.display===""||containerRef.current?.style.display==="none"){
        containerRef.current.style.display='block';
    }else{
        if(containerRef.current?.style.display==='block'){
            containerRef.current.style.display='none';
        }
    }
   
}