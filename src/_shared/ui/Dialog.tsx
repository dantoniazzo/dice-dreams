import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';
interface Props {
  children: React.ReactNode;
  open?: boolean;
  setOpen: (value: boolean) => void;
  title?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

export const Dialog = (props: Props) => {
  const closeModal = () => props.setOpen(false);

  return (
    <RadixDialog.Root open={props.open}>
      <RadixDialog.Portal>
        <DialogOverlay1 onClick={closeModal} />
        <DialogOverlay2 onClick={closeModal} />
        <DialogContent ref={props.ref}>
          <DialogTitle>{props.title}</DialogTitle>
          {props.children}
        </DialogContent>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay1 = styled(RadixDialog.Overlay, {
  backgroundColor: '#152A7FCC',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 6,
});

const DialogOverlay2 = styled(RadixDialog.Overlay, {
  backgroundColor: '#00000099',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 6,
});

const DialogContent = styled(RadixDialog.Content, {
  borderRadius: 6,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '580px',
  maxHeight: '85vh',
  padding: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${contentShow} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 7,
  '&:focus': { outline: 'none' },
});

const DialogTitle = styled(RadixDialog.Title, {
  marginBottom: '10px',
  fontWeight: 500,
  color: 'var(--primary-text)',
  fontSize: 17,
});
