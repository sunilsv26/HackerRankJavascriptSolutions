const freqMap = new Map();
    const result = [];
    queries.forEach((q) => {
      const [op, el] = q;
      if (op === 1) {
        freqMap.set(el, (freqMap.get(el) || 0) + 1);
      } else if (op === 2) {
        if (freqMap.has(el)) {
          const freq = freqMap.get(el);
          if (freq === 1) {
            freqMap.delete(el);
          } else {
            freqMap.set(el, freq - 1);
          }
        }
      } else if (op === 3) {
        let hasFreq = false;
        freqMap.forEach((val) => {
          if (val === el) {
            hasFreq = true;
          }
        });
        result.push(hasFreq ? 1 : 0);
      }
    });
    //console.log(result);

    return result;