function formatDuration(seconds) {

  if(seconds === 0) return "now";

  const minute = 60;
  const hour = 60 * minute;
  const day = hour * 24;
  const year = day * 365;
  let currentSeconds = seconds;
  
  const objCount = {
    countYears: 0,
    countDays: 0,
    countHours: 0,
    countMinutes: 0,
    countSeconds: 0,
  };
  let arr = [];

  while (currentSeconds > 0) {
    if (currentSeconds >= year) {
      currentSeconds -= year;
      objCount.countYears++;
    } else if (currentSeconds >= day) {
      currentSeconds -= day;
      objCount.countDays++;
    } else if (currentSeconds >= hour) {
      currentSeconds -= hour;
      objCount.countHours++;
    } else if (currentSeconds >= minute) {
      currentSeconds -= minute;
      objCount.countMinutes++;
    } else {
      currentSeconds -= 1;
      objCount.countSeconds++;
    }
  }

  const addTimeToArr = (name, period) => {
    if (objCount[name] !== 0) {
      if (objCount[name] === 1) {
        arr.push(`${objCount[name]} ${period}`);
      } else {
        arr.push(`${objCount[name]} ${period}s`);
      }
    }
  };

  addTimeToArr("countYears", "year");
  addTimeToArr("countDays", "day");
  addTimeToArr("countHours", "hour");
  addTimeToArr("countMinutes", "minute");
  addTimeToArr("countSeconds", "second");

  if (arr.length === 1) {
    return arr.join("");
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`;
  } else {
    return `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`;
  }
}

// Best Practices
// function formatDuration (seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//       res = [];

//   if (seconds === 0) return 'now';
  
//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       seconds = seconds % time[key];
//     }
//   }
 
//   return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }
// function formatDuration (seconds) {
//   if(!seconds)return "now";
//   var strout = "";
//   var s = seconds%60;
//   seconds = (seconds-s)/60;
//   var m = seconds%60;
//   seconds = (seconds-m)/60;
//   var h = seconds%24;
//   seconds = (seconds-h)/24;
//   var d = seconds%365;
//   seconds = (seconds-d)/365;
//   var y = seconds;
  
//   var english=[];
//   if(y)english.push(y+" year"+(y>1?'s':''));
//   if(d)english.push(d+" day"+(d>1?'s':''));
//   if(h)english.push(h+" hour"+(h>1?'s':''));
//   if(m)english.push(m+" minute"+(m>1?'s':''));
//   if(s)english.push(s+" second"+(s>1?'s':''));
  
//   return english.join(", ").replace(/,([^,]*)$/," and$1");
  
// }

console.log(
  formatDuration(7989683),
  "92 days, 11 hours, 21 minutes and 23 seconds"
);
console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
