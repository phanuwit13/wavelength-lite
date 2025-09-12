import { useMemo, useRef, useState } from 'react'
import { SPECTRA } from '@/constants/list'
import type { Spectrum } from '@/constants/list'
import InfoCard from './components/info-card'
import { Slider } from '@/components/ui/slider'

const PLAYER_NAMES: Record<number, string> = {
  1: 'บิ๊ก',
  2: 'ป้อน',
}

export default function WavelengthLite() {
  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  const [turn, setTurn] = useState<1 | 2>(1)
  const [spectrumIdx, setSpectrumIdx] = useState(() =>
    randomInt(0, SPECTRA.length - 1)
  )
  const [target, setTarget] = useState(() => randomInt(5, 95))
  const [guess, setGuess] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [viewed, setViewed] = useState(false)
  const [locked, setLocked] = useState(false)
  const [history, setHistory] = useState<
    {
      player: number
      spectrum: Spectrum
      target: number
      guess: number
      score: number
    }[]
  >([])

  const spectrum = SPECTRA[spectrumIdx]

  const score = useMemo(() => {
    if (guess === null) return 0
    const diff = Math.abs(target - guess)
    return Math.max(0, 100 - diff)
  }, [guess, target])

  function rerollPrompt() {
    let idx = randomInt(0, SPECTRA.length - 1)
    if (idx === spectrumIdx) idx = (idx + 1) % SPECTRA.length
    setSpectrumIdx(idx)
  }

  function startNewTurn() {
    // switch player each turn
    setTurn((prev) => (prev === 1 ? 2 : 1))
    rerollPrompt()
    setTarget(randomInt(5, 95))
    setGuess(null)
    setRevealed(false)
    setLocked(false)
  }

  function lockIn() {
    if (guess === null) return
    setLocked(true)
  }

  function viewSpectrum() {
    setViewed((prev) => !prev)
  }

  function reveal() {
    if (!locked || guess === null) return
    setRevealed(true)
    setHistory((h) => [...h, { player: turn, spectrum, target, guess, score }])
  }

  const sliderRef = useRef<HTMLInputElement | null>(null)
  function nudge(delta: number) {
    if (!sliderRef.current) return
    const cur = Number(sliderRef.current.value || 0)
    const next = Math.min(100, Math.max(0, cur + delta))
    sliderRef.current.value = String(next)
    setGuess(next)
  }

  return (
    <div className='min-h-dvh w-full bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-3xl'>
        {/* Header */}
        <header className='mb-4 flex items-center justify-between'>
          <h1 className='text-2xl sm:text-3xl font-bold tracking-tight'>
            Wavelength Lite
          </h1>
          <div className='text-sm opacity-80'>รอบของ {PLAYER_NAMES[turn]}</div>
        </header>

        {/* Card */}
        <div className='rounded-2xl bg-slate-800/60 backdrop-blur border border-slate-700 shadow-xl p-4 sm:p-6'>
          {/* Prompt */}
          <div className='mb-4'>
            <div className='flex items-center gap-4'>
              <div className='text-xs uppercase tracking-wider text-slate-300 mb-2'>
                สเปกตรัม
              </div>
            </div>
            <div className='grid grid-cols-2 items-center gap-2'>
              <div className='text-left text-base sm:text-lg font-medium'>
                {spectrum.left}
              </div>
              <div className='text-right text-base sm:text-lg font-medium'>
                {spectrum.right}
              </div>
            </div>
          </div>

          {/* Track */}
          <div className='relative my-6'>
            <div className='h-5 sm:h-6 w-full rounded-full bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 shadow-inner' />

            {guess !== null && (
              <div
                className='absolute -top-2 sm:-top-3 -translate-x-1/2 select-none'
                style={{ left: `${guess}%` }}
              >
                <div className='flex flex-col items-center'>
                  <div className='px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700 text-xs'>
                    เดา: {Math.round(guess)}
                  </div>
                  <div className='w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-slate-700' />
                  <div className='w-0.5 h-4 bg-slate-200' />
                </div>
              </div>
            )}

            {(revealed || viewed) && (
              <div
                className='absolute -top-12 sm:-bottom-8 -translate-x-1/2 select-none'
                style={{ left: `${target}%` }}
              >
                <div className='flex flex-col items-center'>
                  <div className='mt-1 px-2 py-0.5 rounded-md bg-emerald-400/20 border border-emerald-300 text-xs'>
                    เป้าหมาย: {target}
                  </div>
                  <div className='w-0.5 h-4 bg-emerald-300' />
                  <div className='w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-emerald-400 rotate-180' />
                </div>
              </div>
            )}
          </div>

          {/* Slider input */}
          <div className='flex items-center gap-3'>
            <button
              onClick={() => nudge(-1)}
              className='px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 active:scale-[.98] transition'
            >
              ◀
            </button>

            <Slider
              ref={sliderRef}
              min={0}
              max={100}
              defaultValue={[50]}
              onValueChange={(value) => setGuess(value[0])}
              disabled={revealed}
            />

            <button
              onClick={() => nudge(1)}
              className='px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 active:scale-[.98] transition'
            >
              ▶
            </button>
          </div>

          {/* Actions */}
          <div className='mt-4 flex flex-wrap items-center gap-2'>
            <button
              onClick={rerollPrompt}
              disabled={locked || revealed}
              className='px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 disabled:opacity-50'
              title='สุ่มสเปกตรัมใหม่'
            >
              🎲 สุ่มหัวข้อ
            </button>
            <button
              onClick={viewSpectrum}
              disabled={guess !== null}
              className='px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50'
            >
              🔍 {viewed ? 'ซ่อน' : 'ดู'}สเปกตรัม
            </button>

            <button
              onClick={lockIn}
              disabled={guess === null || locked}
              className='px-3 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50'
            >
              ✅ ล็อกคำตอบ
            </button>

            <button
              onClick={reveal}
              disabled={!locked || revealed}
              className='px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50'
            >
              👀 เฉลย
            </button>

            <button
              onClick={startNewTurn}
              className='ml-auto px-3 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500'
            >
              🔄 เปลี่ยนผู้เล่น
            </button>
          </div>

          {/* Score & Info */}
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3'>
            <InfoCard
              label='สถานะ'
              value={revealed ? 'เฉลยแล้ว' : locked ? 'รอลุ้นเฉลย' : 'กำลังเดา'}
            />
            <InfoCard
              label='คะแนน'
              value={
                revealed && guess !== null ? String(Math.round(score)) : '-'
              }
            />
            <InfoCard
              label='ส่วนต่าง'
              value={
                revealed && guess !== null
                  ? String(Math.abs(target - guess))
                  : '-'
              }
            />
          </div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className='mt-6 rounded-2xl bg-slate-800/40 border border-slate-700 p-4'>
            <div className='text-sm font-semibold mb-2'>สรุปตาที่ผ่านมา</div>
            <ul className='space-y-1 text-sm'>
              {history
                .slice(-6)
                .reverse()
                .map((h, i) => (
                  <li key={i} className='flex flex-wrap items-center gap-2'>
                    <span className='px-2 py-0.5 rounded bg-slate-700/70'>
                      รอบของ {PLAYER_NAMES[h.player]}
                    </span>
                    <span className='opacity-90'>
                      {h.spectrum.left} ↔ {h.spectrum.right}
                    </span>
                    <span className='ml-auto'>
                      เดา {h.guess} | เป้าหมาย {h.target} | คะแนน{' '}
                      {Math.round(h.score)}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* How to play */}
        <div className='mt-6 text-sm text-slate-300/90'>
          <details className='group'>
            <summary className='cursor-pointer inline-flex items-center gap-2 select-none'>
              <span className='font-semibold'>วิธีเล่น (คลิกเพื่อแสดง)</span>
              <span className='opacity-70 group-open:hidden'>▾</span>
              <span className='opacity-70 hidden group-open:inline'>▴</span>
            </summary>
            <ol className='mt-2 list-decimal ml-5 space-y-1'>
              <li>กด "🎲 สุ่มหัวข้อ" เพื่อสุ่มสเปกตรัม</li>
              <li>
                ผู้เล่นปัจจุบันเลื่อนสไลเดอร์ไปยังตำแหน่งที่คิดว่าใกล้กับคำเฉลย
              </li>
              <li>กด "✅ ล็อกคำตอบ" เพื่อยืนยัน</li>
              <li>กด "👀 เฉลย" เพื่อดูเป้าหมายและคะแนน</li>
              <li>กด "🔄 เปลี่ยนผู้เล่น" เพื่อสลับ Player 1 ↔ 2</li>
            </ol>
          </details>
        </div>
      </div>
    </div>
  )
}
