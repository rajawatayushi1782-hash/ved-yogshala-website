import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

export default function BreathingExperience() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('READY');
  const [timerProgress, setTimerProgress] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [selectedTechnique, setSelectedTechnique] = useState('BOX');

  const audioCtxRef = useRef(null);

  const timings = {
    BOX: { inhale: 4, hold1: 4, exhale: 4, hold2: 4, label: 'Box Breathing (4-4-4-4)' },
    CALM: { inhale: 4, hold1: 7, exhale: 8, hold2: 0, label: 'Calming Breathing (4-7-8)' },
    DEEP: { inhale: 4, hold1: 2, exhale: 5, hold2: 2, label: 'Deep Rhythm (4-2-5-2)' },
  }[selectedTechnique];

  const playAmbientTone = (freq = 220, type = 'sine') => {
    if (!soundOn) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 4);
    } catch {
      // Audio fallback
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      let currentPhase = phase === 'READY' ? 'INHALE' : phase;
      setPhase(currentPhase);

      const runBreathingCycle = () => {
        if (currentPhase === 'INHALE') {
          playAmbientTone(261.63);
          setPhase('INHALE');
          let duration = timings.inhale * 10;
          let count = 0;
          interval = setInterval(() => {
            count++;
            setTimerProgress((count / duration) * 100);
            if (count >= duration) {
              clearInterval(interval);
              currentPhase = 'HOLD';
              setTimerProgress(0);
              runBreathingCycle();
            }
          }, 100);
        } else if (currentPhase === 'HOLD') {
          playAmbientTone(329.63);
          setPhase('HOLD');
          let duration = (timings.hold1 || 1) * 10;
          let count = 0;
          interval = setInterval(() => {
            count++;
            setTimerProgress((count / duration) * 100);
            if (count >= duration) {
              clearInterval(interval);
              currentPhase = 'EXHALE';
              setTimerProgress(0);
              runBreathingCycle();
            }
          }, 100);
        } else if (currentPhase === 'EXHALE') {
          playAmbientTone(220);
          setPhase('EXHALE');
          let duration = timings.exhale * 10;
          let count = 0;
          interval = setInterval(() => {
            count++;
            setTimerProgress((count / duration) * 100);
            if (count >= duration) {
              clearInterval(interval);
              if (timings.hold2 > 0) {
                currentPhase = 'REST';
                setTimerProgress(0);
                runBreathingCycle();
              } else {
                setCycleCount((c) => c + 1);
                currentPhase = 'INHALE';
                setTimerProgress(0);
                runBreathingCycle();
              }
            }
          }, 100);
        } else if (currentPhase === 'REST') {
          setPhase('REST');
          let duration = timings.hold2 * 10;
          let count = 0;
          interval = setInterval(() => {
            count++;
            setTimerProgress((count / duration) * 100);
            if (count >= duration) {
              clearInterval(interval);
              setCycleCount((c) => c + 1);
              currentPhase = 'INHALE';
              setTimerProgress(0);
              runBreathingCycle();
            }
          }, 100);
        }
      };

      runBreathingCycle();
    } else {
      setPhase('READY');
      setTimerProgress(0);
    }

    return () => clearInterval(interval);
  }, [isActive, selectedTechnique]);

  const toggleSound = () => {
    setSoundOn(!soundOn);
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  };

  return (
    <section className="py-24 md:py-32 bg-forest-deep text-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <span className="text-xs font-sans font-medium text-sage-light mb-3">
          Interactive Breathwork
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight mb-3 text-ivory text-balance">
          Take a moment to center.
        </h2>
        <p className="font-sans text-sm sm:text-base text-ivory/75 font-light mb-8 max-w-md">
          Align your mind with your body before exploring your practice.
        </p>

        <div className="relative my-6 flex items-center justify-center w-72 h-72 sm:w-88 sm:h-88">
          <motion.div
            className="absolute rounded-full border border-terracotta/30 bg-terracotta/5"
            animate={{
              scale: phase === 'INHALE' ? 1.35 : phase === 'EXHALE' ? 0.88 : phase === 'HOLD' ? 1.3 : 1,
              opacity: phase === 'INHALE' ? 0.7 : phase === 'EXHALE' ? 0.3 : 0.45,
            }}
            transition={{
              duration:
                phase === 'INHALE'
                  ? timings.inhale
                  : phase === 'EXHALE'
                  ? timings.exhale
                  : phase === 'HOLD'
                  ? timings.hold1
                  : 3,
              ease: 'easeInOut',
            }}
            style={{ width: '80%', height: '80%' }}
          />

          <motion.div
            className="absolute rounded-full border border-sage/40 bg-sage/10"
            animate={{
              scale: phase === 'INHALE' ? 1.2 : phase === 'EXHALE' ? 0.92 : phase === 'HOLD' ? 1.18 : 1,
              opacity: phase === 'INHALE' ? 0.8 : phase === 'EXHALE' ? 0.35 : 0.5,
            }}
            transition={{
              duration:
                phase === 'INHALE'
                  ? timings.inhale
                  : phase === 'EXHALE'
                  ? timings.exhale
                  : phase === 'HOLD'
                  ? timings.hold1
                  : 3,
              ease: 'easeInOut',
            }}
            style={{ width: '65%', height: '65%' }}
          />

          <motion.div
            className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-forest border border-ivory/30 shadow-md flex flex-col items-center justify-center p-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            onClick={() => setIsActive(!isActive)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsActive(!isActive);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={isActive ? 'Pause breathing exercise' : 'Start breathing exercise'}
            data-cursor={isActive ? 'Pause' : 'Breathe'}
            animate={{
              scale: phase === 'INHALE' ? 1.12 : phase === 'EXHALE' ? 0.94 : phase === 'HOLD' ? 1.08 : 1,
              borderColor: phase === 'INHALE' ? '#C86D51' : phase === 'HOLD' ? '#94A187' : '#FDFBF7',
            }}
            transition={{
              duration:
                phase === 'INHALE'
                  ? timings.inhale
                  : phase === 'EXHALE'
                  ? timings.exhale
                  : phase === 'HOLD'
                  ? timings.hold1
                  : 2,
              ease: 'easeInOut',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex flex-col items-center text-center"
              >
                <span className="font-serif text-2xl sm:text-3xl text-ivory font-light">
                  {phase === 'READY' ? 'Begin' : phase === 'INHALE' ? 'Inhale' : phase === 'HOLD' ? 'Hold' : phase === 'EXHALE' ? 'Exhale' : 'Rest'}
                </span>

                {isActive && (
                  <span className="text-xs font-sans text-sage-light mt-1">
                    {phase === 'INHALE'
                      ? 'Deep inflow'
                      : phase === 'HOLD'
                      ? 'Gentle stillness'
                      : phase === 'EXHALE'
                      ? 'Release & soften'
                      : 'Rest'}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-6 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-ivory text-xs font-sans font-medium transition-colors duration-200 flex items-center space-x-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          >
            {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isActive ? 'Pause session' : 'Start breathing'}</span>
          </button>

          <button
            onClick={toggleSound}
            className={`p-3 rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory ${
              soundOn ? 'border-terracotta bg-terracotta/20 text-ivory' : 'border-ivory/25 text-ivory/70 hover:text-ivory'
            }`}
            aria-label="Toggle ambient audio tone"
            title="Toggle Ambient Audio Tones"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {isActive && (
            <button
              onClick={() => {
                setIsActive(false);
                setCycleCount(0);
              }}
              className="p-3 rounded-full border border-ivory/25 text-ivory/70 hover:text-ivory transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              aria-label="Reset breath counter"
              title="Reset Counter"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2 mt-6 bg-forest p-1 rounded-full border border-ivory/10 text-xs font-sans">
          {['BOX', 'CALM', 'DEEP'].map((mode) => (
            <button
              key={mode}
              onClick={() => {
                setSelectedTechnique(mode);
                setIsActive(false);
              }}
              className={`px-4 py-1.5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory ${
                selectedTechnique === mode
                  ? 'bg-ivory text-forest font-medium shadow-xs'
                  : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              {mode === 'BOX' ? 'Box (4-4-4-4)' : mode === 'CALM' ? 'Calm (4-7-8)' : 'Deep (4-2-5-2)'}
            </button>
          ))}
        </div>

        {cycleCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-xs font-sans text-sage-light"
          >
            Completed breath cycles: <span className="text-terracotta-soft font-semibold text-sm">{cycleCount}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
