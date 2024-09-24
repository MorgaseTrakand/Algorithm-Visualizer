export const delaySystem = async (getDelay, factor = 1) => {
  //get initial delay
  let delay = (getDelay()) * factor;

  //this loop will run if delay is paused until unpaused
  while (true) {
      if (delay < 1000000) break;
      delay = getDelay();
      await new Promise(resolve => setTimeout(resolve, 10))
  }
  
  //this sets the delay for animation sake
  await new Promise(resolve => setTimeout(resolve, delay));

  //final check if pause was hit during timeout which will pause the animation without letting extra step run
  delay = getDelay();
  while (true) {
      if (delay < 1000000) break;
      delay = getDelay();
      await new Promise(resolve => setTimeout(resolve, 10))
  }
}