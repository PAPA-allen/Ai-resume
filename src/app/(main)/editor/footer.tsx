import { Button } from '@/src/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { steps } from './steps';
import { ChevronLeft, ChevronRight,} from 'lucide-react';

interface FooterProps{
    currentStep: string;
    setCurrentStep: (currentStep: string) => void;
}
const footer = ({ currentStep, setCurrentStep }: FooterProps) => {
    const previousStep = steps.find(
        (_, index) => steps[index + 1]?.key === currentStep
    )?.key;

    const nextStep = steps.find(
        (_, index) => steps[index - 1]?.key === currentStep
    )?.key;
    
  return (
    <footer className="w-full border-t px-3 py-5">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3  space-x-6">
                  <Button  onClick={previousStep ? () => setCurrentStep(previousStep) : undefined}
                  disabled={!previousStep}> <ChevronLeft/></Button>
                  <Button onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
                      disabled={!nextStep}>
                      <ChevronRight/>
                  </Button>
        </div>
        <div className="flex items-center gap-3">
            <Button variant="destructive" asChild>
                <Link href="/resumes">Close</Link>
            </Button>
            <p className="text-muted-foreground opacity-0">saving...</p>
        </div>
    </div>
</footer>
  )
}

export default footer
