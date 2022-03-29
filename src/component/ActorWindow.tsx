import '../styles.css'
import { useScene } from 'react-babylonjs'
import { useWallet } from '@terra-money/wallet-provider';

export default function ActorWindow(){

 let  walletOpt=useWallet();
 console.log(walletOpt);

return(
    <div id='actorWin' className="ActorWindow">
      {/** <video className='videoWindow' src="/UI/video/boyidle.mp4" loop={true} muted={true} autoPlay={true}></video> */} 
      <div className='grid-item'>1</div>
      <div className='grid-item'>2</div>
      <div className='grid-item'>3</div>
      <div className='grid-item'>4</div>
       
    </div>
)

}