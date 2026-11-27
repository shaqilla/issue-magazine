import { Pause, Play, Volume2, VolumeX } from 'lucide-react'

export default function MusicPlayer({ playing, onToggle, volume, onVolume, error, visible }) {
  return (
    <aside className={`player ${visible ? '' : 'is-hidden'} ${playing ? 'is-playing' : ''}`}>
      <div className="player__cassette" aria-hidden="true">
        <span className="player__reel" />
        <span className="player__reel" />
      </div>

      <div className="player__meta">
        <span className="player__track">teenage dream</span>
        <span className="player__artist">Olivia Rodrigo</span>
      </div>

      <div className="player__eq" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <button
        type="button"
        className="player__play"
        onClick={onToggle}
        disabled={error}
        aria-label={playing ? 'Pause teenage dream' : 'Play teenage dream'}
        aria-pressed={playing}
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>

      <div className="player__vol">
        {volume === 0 ? <VolumeX size={13} /> : <Volume2 size={13} />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => onVolume(Number(event.target.value))}
          aria-label="Volume"
        />
      </div>

      {error && (
        <span className="player__error">
          audio not found — add <code>public/music/teenage-dream.mp3</code> to hear it.
        </span>
      )}
    </aside>
  )
}
