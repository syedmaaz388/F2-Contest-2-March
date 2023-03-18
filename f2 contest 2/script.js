function OpeningCeremony(callbackFnc) {
    console.log("Let the games begin");
  
    const sportsObj = { red: 0, blue: 0, green: 0, yellow: 0 };
  
    setTimeout(() => {
      Race100M(sportsObj, callbackFnc);
    }, 1000);
  }
  
  function Race100M(sportsObj, callbackFnc) {
    const timeRed = Math.floor(Math.random() * 6) + 10;
    const timeBlue = Math.floor(Math.random() * 6) + 10;
    const timeGreen = Math.floor(Math.random() * 6) + 10;
    const timeYellow = Math.floor(Math.random() * 6) + 10;
  
    const times = { red: timeRed, blue: timeBlue, green: timeGreen, yellow: timeYellow };
  
    console.log("Race 100M results: ", times);
  
    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
  
    const scoreIncrement = {};
    scoreIncrement[sortedColors[0]] = 50;
    scoreIncrement[sortedColors[1]] = 25;
  
    Object.keys(scoreIncrement).forEach(color => {
      sportsObj[color] += scoreIncrement[color];
    });
  
    console.log("Score after Race 100M: ", sportsObj);
  
    console.log(`${sortedColors[0]} won the Race 100M`);
  
    setTimeout(() => {
      LongJump(sportsObj, callbackFnc);
    }, 1000);
  }
  
  function LongJump(sportsObj, callbackFnc) {
    const winnerColor = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
  
    console.log(`${winnerColor} won the Long Jump`);
  
    sportsObj[winnerColor] += 150;
  
    console.log("Score after Long Jump: ", sportsObj);
  
    setTimeout(() => {
      HighJump(sportsObj, callbackFnc);
    }, 1000);
  }
  
  function HighJump(sportsObj, callbackFnc) {
    const winnerColor = prompt("What color secured the highest jump?");
  
    if (winnerColor === null || winnerColor === "") {
      console.log("Event was cancelled");
    } else if (sportsObj.hasOwnProperty(winnerColor)) {
      sportsObj[winnerColor] += 100;
      console.log(`${winnerColor} won the High Jump`);
    } else {
      console.log("Wrong color entered");
    }
  
    console.log("Score after High Jump: ", sportsObj);
  
    setTimeout(() => {
      AwardCeremony(sportsObj);
    }, 1000);
  }
  
  function AwardCeremony(sportsObj) {
    console.log("Award Ceremony:");
    const sortedScores = Object.entries(sportsObj).sort((a, b) => b[1] - a[1]);
  
    sortedScores.forEach((score, index) => {
      console.log(`${index + 1}. ${score[0]} came ${index === 0 ? "first" : index === 1 ? "second" : index === 2 ? "third" : "fourth"} with ${score[1]} points.`);
    });
  }
   OpeningCeremony(() => {
    console.log("End of the Sports Day");
  });
