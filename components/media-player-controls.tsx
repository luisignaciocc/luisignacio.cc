"use client";
import clsx from "clsx";
import { Button } from "components/ui/button";
import { Slider } from "components/ui/slider";
import { useEffect, useRef, useState } from "react";

export function MediaPlayerControls() {
  const defaultVolume = 0.5;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleError = (error: unknown) => {
      console.error("Error loading audio", error);
      setHidden(true);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume;
      audioElement.addEventListener("error", handleError);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("error", handleError);
      }
    };
  }, [volume]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        try {
          audioRef.current.play().catch((error) => {
            console.error("Playback error:", error);
            setHidden(true);
          });
        } catch (error) {
          console.error("Playback error:", error);
          setHidden(true);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div
      className={clsx(
        "fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xs sm:max-w-md z-50",
        {
          hidden: hidden,
        },
      )}
    >
      <div className="bg-[#111010]/10 dark:bg-[#111010]/70 backdrop-blur-md rounded-xl px-4 py-2 flex items-center justify-between gap-4">
        <a
          className="flex items-center gap-2"
          href="https://www.freecodecamp.org/espanol/"
          target="_blank"
        >
          <FileMusicIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <div className="font-medium">codeRadio();</div>
            <div className="text-xs text-gray-600 dark:text-gray-500">
              freeCodeCamp
            </div>
          </div>
        </a>
        <Button size="icon" variant="ghost" onClick={handlePlayPause}>
          {isPlaying ? (
            <PauseIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <PlayIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          )}
        </Button>
        <Slider
          className="flex-1 [&>span:first-child]:h-1 [&>span:first-child]:bg-gray-500/50 [&_[role=slider]]:bg-gray-300 [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-gray-300 [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
          defaultValue={[defaultVolume * 100]}
          onValueChange={handleVolumeChange}
        />
        <Volume2Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </div>
      <audio
        ref={audioRef}
        src="https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/low.mp3"
      />
    </div>
  );
}

function PauseIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function FileMusicIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="14" cy="16" r="2" />
      <circle cx="6" cy="18" r="2" />
      <path d="M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5" />
      <path d="M8 18v-7.7L16 9v7" />
    </svg>
  );
}

function PlayIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function Volume2Icon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
