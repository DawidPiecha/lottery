const lotteryFunction = () => {
  let results = [];

  while (results.length < 6) {
    let drawnNumber = Math.floor(Math.random() * 49) + 1;

    if (!results.includes(drawnNumber)) {
      results.push(drawnNumber);
    }
  }

  return results;
};
