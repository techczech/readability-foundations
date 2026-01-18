import React, { useState } from 'react';
import { SectionConfig } from '../../types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '../Section';
import { BlockRenderer } from '../blocks/BlockRenderer';

interface CarouselLayoutProps {
  config: SectionConfig;
}

export const CarouselLayout: React.FC<CarouselLayoutProps> = ({ config }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = config.steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Section id={config.id} title={config.title}>
      {/* Intro is only shown on the first step to reduce noise, or we can make a specific start slide */}
      {currentStep === 0 && config.intro && (
        <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500 max-w-4xl mx-auto">
           {Array.isArray(config.intro) ? <BlockRenderer blocks={config.intro} /> : config.intro}
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-8 bg-slate-100 h-2 rounded-full overflow-hidden max-w-4xl mx-auto">
        <div 
          className="bg-indigo-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>
      
      {/* Navigation Headers */}
      <div className="flex justify-between items-center mb-8 text-sm font-bold text-slate-400 uppercase tracking-widest max-w-4xl mx-auto">
         <span>Step {currentStep + 1} of {totalSteps}</span>
         <span>{config.steps[currentStep].title}</span>
      </div>

      {/* Active Step Content */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 ring-1 ring-slate-900/5 min-h-[400px] flex flex-col justify-between animate-in fade-in slide-in-from-right-4 duration-300 max-w-4xl mx-auto">
         <div>
           <div className="flex items-center mb-8">
              <div className="bg-indigo-600 text-white font-bold w-12 h-12 rounded-2xl flex items-center justify-center mr-5 text-xl shadow-indigo-200 shadow-lg">
                {currentStep + 1}
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{config.steps[currentStep].title}</h3>
           </div>
           
           <div className="text-lg leading-relaxed text-slate-700">
             {config.steps[currentStep].blocks ? 
                <BlockRenderer blocks={config.steps[currentStep].blocks} /> : 
                config.steps[currentStep].content
             }
           </div>
         </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between mt-8 max-w-4xl mx-auto">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={`flex items-center px-6 py-3 rounded-full font-bold transition-all ${
            currentStep === 0 
              ? 'text-slate-300 cursor-not-allowed' 
              : 'bg-white text-slate-700 shadow-sm hover:shadow hover:text-indigo-600 border border-slate-200'
          }`}
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentStep === totalSteps - 1}
          className={`flex items-center px-8 py-3 rounded-full font-bold transition-all shadow-md ${
             currentStep === totalSteps - 1
             ? 'bg-emerald-500 text-white cursor-default hover:bg-emerald-600'
             : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105'
          }`}
        >
          {currentStep === totalSteps - 1 ? (
             <>Completed <CheckCircle2 className="w-5 h-5 ml-2" /></>
          ) : (
             <>Next Step <ArrowRight className="w-5 h-5 ml-2" /></>
          )}
        </button>
      </div>
    </Section>
  );
};