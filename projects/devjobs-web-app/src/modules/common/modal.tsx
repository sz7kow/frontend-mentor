import {useEffect} from 'react';
import {createPortal} from 'react-dom';

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<Props> = ({children, isOpen}) => {
  useEffect(() => {
    const htmlElement = document.querySelector('html') as HTMLHtmlElement;

    if (isOpen) htmlElement.classList.add('modal-open');
    else htmlElement.classList.remove('modal-open');
  }, [isOpen]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  const modal = (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-black/50 p-6">
      {children}
    </div>
  );

  return createPortal(modal, modalRoot);
};
