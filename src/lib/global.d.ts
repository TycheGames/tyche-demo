import 'react'
import { ListFormat } from 'typescript'
import type { Json } from '../types/supabaseDB'

//add css custom properties
declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: number
    }
}

//global var and interface

declare global {
    interface Window {
        ethereum: any
        okxwallet: any
    }
    
}
