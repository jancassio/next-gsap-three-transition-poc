import gsap from "gsap";

export const splitNormalizedColors = (colors: string) => {
  return gsap.utils.splitColor(colors).map((c) => c / 255);
}