import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      {/* passando elementos para o stitches */}
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
