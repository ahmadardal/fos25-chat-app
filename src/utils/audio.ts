import { BLIP_SRC, BLIP_VOLUME } from "./constants";

export function createBlipPlayer(src: string = BLIP_SRC) {
  const audioAvailable = typeof Audio !== "undefined";
  const baseAudio: HTMLAudioElement | null = audioAvailable
    ? new Audio(src)
    : null;

  if (baseAudio) {
    baseAudio.preload = "auto";
    baseAudio.volume = BLIP_VOLUME;
  }

  function play() {
    if (!baseAudio) return;
    const node = baseAudio.cloneNode(true) as HTMLAudioElement;
    node.play().catch((err) => console.debug("Blip play failed", err));
  }

//   TODO:  Function: Let user change blip volume

  return play;
}
