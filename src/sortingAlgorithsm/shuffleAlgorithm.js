export const shuffle = async (shuffledItems, setItems) => {
    let lastIndexs = [];
    
    for (let i = shuffledItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
        shuffledItems[i].backgroundColor = 'red';
        shuffledItems[j].backgroundColor = 'red';
        lastIndexs.forEach(item => item.backgroundColor = '#333A56');
        lastIndexs = [shuffledItems[i], shuffledItems[j]];
    
        setItems([...shuffledItems]);
          
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      // clear color form last items
      lastIndexs.forEach(item => item.backgroundColor = '#333A56');
      setItems([...shuffledItems])

}