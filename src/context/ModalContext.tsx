import { createContext, useState } from 'react';

type IModalContext = {
  isModalVisible: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<IModalContext>({
  isModalVisible: false,
  openModal: () => {},
  closeModal: () => {},
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, openModal, closeModal }}>
      { children }
    </ModalContext.Provider>
  )
}
