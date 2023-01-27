import { createContext, useState } from 'react'
import { ChildrenProp } from '../Interfaces/Interfaces'

type Modal = {
    handleOpenModal: () => void
    openPortal: boolean
}

const ModalContext = createContext<Modal | null>(null)

const ModalProvider: React.FC<ChildrenProp> = ({ children }) => {
    const [openPortal, setOpenPortal] = useState(false);

    const handleOpenModal = () => {
        setOpenPortal(!openPortal)
    }

    const modalValue = {
        handleOpenModal,
        openPortal
    }
    return (
        <ModalContext.Provider value={modalValue}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalProvider, ModalContext }