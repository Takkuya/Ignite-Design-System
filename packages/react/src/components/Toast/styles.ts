import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  background: '$gray800',
  borderRadius: '$sm',
  border: '2px solid $gray600',
  fontFamily: '$default',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  padding: '$3 $5',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})
export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
})
export const ToastAction = styled(Toast.Action, {
  position: 'absolute',
  top: '$12',
  right: '$12',
  background: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})
export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
})
export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,

  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
  padding: VIEWPORT_PADDING,
})
