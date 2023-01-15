import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

import * as ToastPrimitive from '@radix-ui/react-toast'

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string
  description: string
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastAction altText="Close Toast">
          <X size={20} weight="regular" />
        </ToastAction>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
