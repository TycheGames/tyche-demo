import React, { useRef, useState } from "react";
import styled from "styled-components";
import {AiOutlineClose,AiOutlineArrowDown} from 'react-icons/ai'
import {BiChevronsDown} from 'react-icons/bi'

import { Nullable } from "@babylonjs/core";
import { GiConsoleController } from "react-icons/gi";

let containerRef:React.MutableRefObject<Nullable<HTMLDivElement>>;


export const SwapWindow=()=>{
   containerRef=useRef<Nullable<HTMLDivElement>>(null);

const[balance,setBalance] =useState('0.0');
const balancRef =useRef<Nullable<HTMLSpanElement>>(null);


    return(
        <Container id='swapWindow1' ref={containerRef} >
          <Head>
              <SwapText>
                 Swap
              </SwapText>
              <AiOutlineClose style={{display:'inline-block',color:'white',position:'relative'
                ,top:'16px',float:'right',width:'20px',height:'20px',right:'16px',cursor:'pointer'}} onClick={()=>{
                    containerRef.current!.style.display='none';
                    //document.getElementById('swapWindow1')!.style.display='none';
                    setBalance('0.0');
                }} ></AiOutlineClose>
          </Head>
          <FromDiv>
              <span style={{color:'rgba(255,255,255,0.6)',display:'inline-block',
              left:'16px', position:'relative'}}>From</span>
                <span style={{color:'rgba(255,255,255,0.6)',display:'inline-block',
              left:'220px', position:'relative'}}>Balance</span>
            
              <span ref={balancRef} id='balance' onClick={()=>{
                   // var b=document.getElementById('balance');
                    setBalance(balancRef.current?.textContent!);
                  // ( b as HTMLInputElement).defaultValue=b!.textContent!;
              }} style={{color:'rgba(255,255,255,1)',display:'inline-block',float:'right',
              right:'20px', fontWeight:'600',fontFamily:'IBM Plex Sans',cursor:'pointer', position:'relative'}}>12001.123</span>
          </FromDiv>

          <SelectDiv>
              <SelectInput type='text' value={balance} onChange={(e)=>{
                  setBalance(e.target.value);
              }} ></SelectInput>

              <Dropdown></Dropdown>
             
              
          </SelectDiv>
          
          <BiChevronsDown style={{display:'block',fontSize:'20px',height:'25px',width:'25px',fontWeight:'600',
          position:'relative', top:'20px',left:'48%',borderRadius:'30px',border:'1px',
          backgroundColor:'rgba(0,0,0,0.2)', color:'#f0c64d'}}>
          </BiChevronsDown>
          <span style={{display:'block',height:'60px',width:'30px', position:'relative',color:'rgba(255,255,255,0.6)',fontSize:'12px',top:'30px',
            left:'16px'}}>To</span>

            <SelectDiv>
              <SelectInput type='text' defaultValue={'0.0'}></SelectInput>
              <Dropdown></Dropdown>
              
            </SelectDiv>
            <SwapButton>Swap</SwapButton>
            
         
        </Container>
    )
}
 const Container= styled.div`
    display:none;
    top:20%;
    left:35%;
    position:fixed;
    border-radius:12px ;
    width: 386px;
    height:359px;
    z-index:4 ;
    background-color:rgba(58,58,58,1);
`;

const Head= styled.div`
    display:block;
    height:50px;
    border-top-left-radius:12px ;
    border-top-right-radius:12px ;
    background-color:rgba(0,0,0,0.06) ;


`;

const SwapText= styled.div`
    display:inline-block;
    position:relative ;
    height:18px;
    top:16px;
    left:16px;
    width:200px;
    color:rgba(255,255,255,1);
    font-family:IBM Plex Sans ;
    font-weight: 600 ;
    font-size:14px ;
`
const FromDiv=styled.div`
    display: block;
    position:relative;
    font-family: IBM Plex Sans ;
    top:10px;
    width:100%;
    height:40px ;
    font-size: 12px ;
    font-weight:400 ;

`;


const SelectDiv=styled.div`
    display:block;
    position:relative ;
    width:354px;
    height:49px;
    border-radius:7px ;
    left:16px;
    background-color:rgba(255,255,255,0.06) ;
`;
const SelectInput=styled.input`
    display:inline-block;
    height:100% ;
    width:70% ;
    font-size:20px ;
    font-family:Robot;
    font-weight:400 ;
    border: 0px;
    color:rgba(255,255,255,1);
    background-color:rgba(0,0,0,0) ;
`;
const DropDownDiv=styled.div`
    display:inline-block ;
    left:10px;
    background-color:rgba(0,0,0,0);
    position:relative ;
    cursor:pointer ;
  /* &:hover .list{
        display:block;
    }*/
    
 

`;

const DropDownBtn=styled.button`
    display:block ;
    position:relative ;
    font-size:18px ;
    width:80px;
    height:50px;
    border:0px ;
    color:rgba(255,255,255,1) ;
    background-color:rgba(255,255,255,0);
    
    cursor:pointer;
   
`;
const DropDownList=styled.div`
    display:none ;
    position:absolute ;
    background-color:rgba(58,58,58,0.8) ;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    padding:5px ;
    min-width:70px ;
    z-index:1;
`;

/*
const DropDownListItem=styled.div.attrs((props)=>({onClick:(e)=>{
  // console.log(props);
   console.log(e.currentTarget.getAttribute('data-item'));
   console.log( listRef.current!.style.display='none');
  // listRef.current!.style.display='none';
   
}
})
)`
  
`;
*/

const DropDownListItem=styled.div`
    cursor:pointer;
    text-align: center ;
    width:70px;
    color:white;
`;
interface Pros{
   readonly inputColor:string;

}
const ToInput=styled.div.attrs((props)=>({onMouseEnter:(e)=>{
    // console.log(props);
    console.log('mouse enter');
    console.log(props);
     console.log(e.currentTarget);
 
    // listRef.current!.style.display='none';
     
  }
  })
  )<Pros>`
    width:354px;
    height:42px;
    left:16px;
    top:20px;
    border-radius:8px ;
    background-color:${props=>props.inputColor} ;
    
  `;

const SwapButton=styled.button`
    display:block;
    position:relative ;
    width:354px;
    height:42px;
    left:16px;
    top:20px;
    border-radius:8px ;
    background-color:rgba(240,198,77,1) ;
    color:'white';
    font-size:14px ;
    font-family:IBM Plex Sans ;
    font-weight:600 ;
    cursor: pointer;

`;


const Dropdown=()=>{
  const  listRef=useRef<Nullable<HTMLDivElement>>(null);
  const [from_value,setFrom]=useState('UST')

    return(
   
    <DropDownDiv onMouseEnter={()=>{
        listRef.current!.style.display='block';
    }} onMouseLeave={()=>{
        listRef.current!.style.display='none';
    }}>
        <DropDownBtn value={"test"} >{from_value}<BiChevronsDown style={{display:'inline-block',position:'relative',top:'2px',left:'5px'}}></BiChevronsDown></DropDownBtn>
        <DropDownList className="list" ref={listRef} data-result={from_value}>
            <DropDownListItem data-item='UST' onMouseDown={(e)=>{
                listRef.current!.style.display='none';
                console.log(e!.currentTarget!.getAttribute('data-item'));
                setFrom(e!.currentTarget!.getAttribute('data-item')!);
            }} onMouseEnter={(e)=>{
                e.currentTarget.style.backgroundColor='rgba(255,255,255,0.2)';
            }} onMouseLeave={(e)=>{
                e.currentTarget.style.backgroundColor='rgba(58,58,58,0.8)';
            }}>
            UST
            </DropDownListItem>
            <DropDownListItem data-item='TUST' onMouseDown={(e)=>{
                listRef.current!.style.display='none';
                console.log(e!.currentTarget!.getAttribute('data-item'));
                setFrom(e!.currentTarget!.getAttribute('data-item')!);
            }} onMouseEnter={(e)=>{
                e.currentTarget.style.backgroundColor='rgba(255,255,255,0.2)';
            }} onMouseLeave={(e)=>{
                e.currentTarget.style.backgroundColor='rgba(58,58,58,0.8)';
            }}>
           TUST
            </DropDownListItem>
            <DropDownListItem data-item='TGT' onMouseDown={(e)=>{
                listRef.current!.style.display='none';
                console.log(e!.currentTarget!.getAttribute('data-item'));
                setFrom(e!.currentTarget!.getAttribute('data-item')!);
            }} onMouseEnter={(e)=>{
                e.currentTarget.style.backgroundColor='rgba(255,255,255,0.2)';
            }} onMouseLeave={(e)=>{
                e.currentTarget.style.backgroundColor='rgba(58,58,58,0.8)';
            }}>
            TGT
            </DropDownListItem>

        </DropDownList>

    </DropDownDiv>
   
    )
}

SwapWindow.showWindow =(show:boolean)=>{
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