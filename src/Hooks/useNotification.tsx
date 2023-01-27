import { useContext } from 'react'
import { NotificationContext } from '../Context/NotificationProvidert'

const useNotification = () => {
    const context = useContext(NotificationContext)
    if (!context) throw new Error('No existe contexto')
    return context
}

export default useNotification