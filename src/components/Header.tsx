import {
    useWeb3Modal,
    useWeb3ModalEvents,
    useWeb3ModalState,
    useWeb3ModalTheme,
} from '@web3modal/wagmi/react'
const Header = () => {
    const modal = useWeb3Modal()
    const state = useWeb3ModalState()
    const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme()
    const events = useWeb3ModalEvents()
    return (
        <div className="flex  h-[50px] mt-[10px]  w-full   justify-end items-center text-cyan-50 mr-[200px]">
            <w3m-button />
        </div>
    )
}

export default Header
