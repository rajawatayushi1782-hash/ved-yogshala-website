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
    } catch (e) {
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
    <section className="py-28 md:py-36 bg-forest-deep text-ivory relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sage/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <span className="text-xs tracking-[0.3em] font-sans uppercase font-medium text-sage-light mb-3">
          08 — PAUSE & CENTER
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mb-3 text-ivory">
          TAKE A BREATH.
        </h2>
        <p className="font-sans text-sm sm:text-base text-ivory/70 font-light mb-10 max-w-md">
          Take a moment before you continue. Align your mind with your body.
        </p>

        <div className="relative my-8 flex items-center justify-center w-72 h-72 sm:w-96 sm:h-96">
          <motion.div
            className="absolute rounded-full border border-terracotta/30 bg-terracotta/5"
            animate={{
              scale: phase === 'INHALE' ? 1.4 : phase === 'EXHALE' ? 0.85 : phase === 'HOLD' ? 1.35 : 1,
              opacity: phase === 'INHALE' ? 0.8 : phase === 'EXHALE' ? 0.3 : 0.5,
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
              scale: phase === 'INHALE' ? 1.25 : phase === 'EXHALE' ? 0.9 : phase === 'HOLD' ? 1.2 : 1,
              opacity: phase === 'INHALE' ? 0.9 : phase === 'EXHALE' ? 0.4 : 0.6,
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
            className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-forest-light via-forest to-forest-deep border border-ivory/30 shadow-2xl flex flex-col items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsActive(!isActive)}
            data-cursor={isActive ? 'PAUSE' : 'BREATHE'}
            animate={{
              scale: phase === 'INHALE' ? 1.15 : phase === 'EXHALE' ? 0.92 : phase === 'HOLD' ? 1.12 : 1,
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
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-widest text-ivory uppercase font-light">
                  {phase === 'READY' ? 'BEGIN' : phase}
                </span>

                {isActive && (
                  <span className="text-[10px] font-sans tracking-[0.2em] text-sage-light uppercase mt-1">
                    {phase === 'INHALE'
                      ? 'Deep Inflow'
                      : phase === 'HOLD'
                      ? 'Gentle Stillness'
                      : phase === 'EXHALE'
                      ? 'Release & Soften'
                      : 'Rest'}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-6 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-ivory text-xs font-sans tracking-widest uppercase font-semibold transition-all flex items-center space-x-2 shadow-lg"
          >
            {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isActive ? 'PAUSE SESSION' : 'START BREATHING'}</span>
          </button>

          <button
            onClick={toggleSound}
            className={`p-3 rounded-full border transition-all ${
              soundOn ? 'border-terracotta bg-terracotta/20 text-ivory' : 'border-ivory/20 text-ivory/60 hover:text-ivory'
            }`}
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
              className="p-3 rounded-full border border-ivory/20 text-ivory/60 hover:text-ivory transition-all"
              title="Reset Counter"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2 mt-8 bg-forest-card p-1.5 rounded-full border border-ivory/10 text-xs font-sans">
          {['BOX', 'CALM', 'DEEP'].map((mode) => (
            <button
              key={mode}
              onClick={() => {
                setSelectedTechnique(mode);
                setIsActive(false);
              }}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedTechnique === mode
                  ? 'bg-ivory text-forest font-semibold shadow-md'
                  : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {cycleCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-xs font-sans tracking-wider text-sage-light"
          >
            COMPLETED BREATH CYCLES: <span className="text-terracotta font-bold text-sm">{cycleCount}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
