import '../styles.css'
import React from 'react';
import { Gi3DHammer } from "react-icons/gi"


const SwapWindow=()=>{
  
    return(
        
        <div id="swapWindow">
           
            <div style={{display:'block',position:'relative', width:"100%",height:"51px",backgroundColor:'rgba(0,0,0,0.6)',borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}>
            <p style={{display:'inline-block',position:'relative', width:'60px',height:'18px',alignContent:'center',left:'16px' ,fontFamily:'IBM Plex Sans',
            fontWeight:'600',fontSize:'14px',color:'rgba(255,255,255,1)'}}>Swap</p> 
               <Gi3DHammer style={{display:'inline-block',color:'white'}}></Gi3DHammer>
            <button style={{display:'inline-block',position:'relative',float:'right',top:'16px',right:'10px',color:'white', borderRadius:'12px', backgroundColor:'rgba(0,0,0,1)'}}>X</button>
        
            </div>
      
           <div style={{display:'block',backgroundColor:'black',width:'100%',height:'50px'}}>
                <p style={{display:'inline-block',float:'left',left:'16px',
                     width:'202px',height:'18px',position:'relative',color:'rgba(255,255,255,0.6)',
                     fontSize:'12px'}}>From</p>
                <p style={{display:'inline-block',float:'right',right:'16px',
                 width:'100px',height:'18px',position:'relative',color:'white',
                  fontSize:'12px'}}>Balance 1007.50</p>
       
           </div>
            <div style={{display:'block',backgroundColor:'rgba(255,0,0,0.5)',width:'20px',height:'20px',border:'2px'}}>
   
            </div>
           
          
         
            </div>
    )
}

export default SwapWindow;