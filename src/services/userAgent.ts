import Bowser from "bowser";

const bowser = Bowser.getParser(window?.navigator?.userAgent);

/**
 * Returns user agent information.
 */

const name = bowser.getBrowserName(); // Safari, Chrome, Firefox, Microsoft Edge, etc. (capitalized first letter)
const isMac = bowser.getOSName() === "macOS";
const isWindows = bowser.getOSName() === "Windows";
const isLinux = bowser.getOSName() === "Linux";
const isIOS = bowser.getOSName() === "iOS";
const isIpadOS = bowser.getOSName() === "ipados";
const isAndroid = bowser.getOSName() === "Android";
const isMobile = bowser.getPlatformType(true) === "mobile";
const isTablet = bowser.getPlatformType(true) === "tablet";
const isChromium = bowser.getEngineName() === "Blink"; // https://en.wikipedia.org/wiki/Blink_(browser_engine)

export const userAgent = {
  name,
  isMac,
  isWindows,
  isLinux,
  isMobile,
  isTablet,
  isMobileOrTablet: isMobile || isTablet || isIOS || isIpadOS,
  isIOS,
  isAndroid,
  isDesktopSafari: !isMobile && name === "Safari",
  isChromium,
};
