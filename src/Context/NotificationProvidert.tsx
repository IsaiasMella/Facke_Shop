import { AlertColor } from '@mui/material'
import { createContext, useState } from 'react'
import { Alerts } from '../Components/Alerts'
import { ChildrenProp } from '../Interfaces/Interfaces'

type NotificationProps = {
    getError: (message: string) => void
    getSuccess: (message: string) => void
}

const NotificationContext = createContext<NotificationProps | null>(null)

const NotificationProvider: React.FC<ChildrenProp> = ({ children }) => {
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>()

    const handleClose = () => {
        setOpen(false)
    }

    const getError = (message: string) => {
        setSeverity('error')
        setOpen(true)
        setMessage(message)
    }
    const getSuccess = (message: string) => {
        setSeverity('success')
        setOpen(true)
        setMessage(message)
    }

    const value = {
        getError,
        getSuccess
    }
    return (
        <NotificationContext.Provider value={value}>
            <Alerts
                open={open}
                message={message}
                severity={severity}
                handleClose={handleClose}
            />
            {children}
        </NotificationContext.Provider>
    )
}

export { NotificationProvider, NotificationContext }