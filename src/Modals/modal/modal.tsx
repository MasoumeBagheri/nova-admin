import type { ReactNode } from "react";

import {
  Overlay,
  ModalContent,
  ModalHeader,
  CloseButton,
} from "./modal.styles";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <ModalHeader>
          <h2 id="modal-title">{title}</h2>

          <CloseButton type="button" aria-label="بستن پنجره" onClick={onClose}>
            ×
          </CloseButton>
        </ModalHeader>

        {children}
      </ModalContent>
    </Overlay>
  );
};
