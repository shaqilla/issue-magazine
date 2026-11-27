import { useCallback, useEffect, useRef, useState } from 'react'
import IntroScreen from './components/IntroScreen.jsx'
import Navigation from './components/Navigation.jsx'
import MagazineCover from './components/MagazineCover.jsx'
import EditorialSection from './components/EditorialSection.jsx'
import PhotoGallery from './components/PhotoGallery.jsx'
import MemoryNotes from './components/MemoryNotes.jsx'
import InteractiveLetter from './components/InteractiveLetter.jsx'
import BirthdayCake from './components/BirthdayCake.jsx'
import FinalPage from './components/FinalPage.jsx'
import Footer from './components/Footer.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import { SECTIONS } from './lib/sections.js'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [active, setActive] = useState('cover')
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [audioError, setAudioError] = useState(false)
  const [turning, setTurning] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!introDone) {
      document.body.classList.add('is-locked')
    } else {
      document.body.classList.remove('is-locked')
    }
  }, [introDone])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollY = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(100, (scrollY / height) * 100) : 0)

      let current = 'cover'
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id)
        if (element && element.offsetTop - 150 <= scrollY) {
          current = section.id
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const startAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.play().catch(() => {
      /* the browser may still block sound until a later gesture */
    })
  }, [volume])

  const handleOpenIssue = useCallback(() => {
    startAudio()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      document.getElementById('person')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setTurning(true)
    window.setTimeout(() => {
      document.getElementById('person')?.scrollIntoView()
    }, 560)
    window.setTimeout(() => setTurning(false), 1120)
  }, [startAudio])

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      startAudio()
    } else {
      audio.pause()
    }
  }, [startAudio])

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/teenage-dream.mp3"
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setAudioError(true)}
      />

      {!introDone && <IntroScreen onFinish={() => setIntroDone(true)} />}

      <Navigation active={active} progress={progress} />

      <main>
        <MagazineCover onOpen={handleOpenIssue} ready={introDone} />
        <EditorialSection />
        <PhotoGallery />
        <MemoryNotes />
        <InteractiveLetter />
        <BirthdayCake />
        <FinalPage />
      </main>

      <Footer />

      {turning && <div className="page-turn" aria-hidden="true" />}

      <MusicPlayer
        playing={playing}
        onToggle={toggleAudio}
        volume={volume}
        onVolume={setVolume}
        error={audioError}
        visible={introDone}
      />
    </>
  )
}
