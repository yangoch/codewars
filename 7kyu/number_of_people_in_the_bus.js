const number = function (busStops) {
  let getOnTheBus = 0;
  let getOffTheBus = 0;

  for (let i = 0; i < busStops.length; i++) {
    const busStopGetOn = busStops[i][0];
    const busStopGetOff = busStops[i][1];

    getOnTheBus += busStopGetOn;
    getOffTheBus += busStopGetOff;
  }

  return getOnTheBus - getOffTheBus;
};

// Best Practices
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);
