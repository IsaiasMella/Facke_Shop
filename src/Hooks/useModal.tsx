import { useContext } from 'react'
import { ModalContext } from '../Context/ModalProvider'

const useModal = () => {
  const modalContext = useContext(ModalContext)
  if(!modalContext) throw new Error('El modal se debe ejecutar dentro de un contexto')
  return modalContext
}

export default useModal