export const shuffle = async (shuffledItems, setItems, getDelay) => {
    let lastIndexs = [];
    
    for (let i = shuffledItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
        shuffledItems[i].backgroundColor = 'red';
        shuffledItems[j].backgroundColor = 'red';
        lastIndexs.forEach(item => item.backgroundColor = '#333A56');
        lastIndexs = [shuffledItems[i], shuffledItems[j]];
    
        setItems([...shuffledItems]);
          
        let delay = getDelay();
        while (true) {
            if (delay < 1000000) break;
            delay = getDelay();
            await new Promise(resolve => setTimeout(resolve, 50))
        }

        await new Promise(resolve => setTimeout(resolve, delay));
      }
      // clear color form last items
      lastIndexs.forEach(item => item.backgroundColor = '#333A56');
      setItems([...shuffledItems])

}