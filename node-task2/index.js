const fs = require("fs");

const args = process.argv;

const filePath = "./Train.csv"; // Update this with your CSV file's path
const x = fs.readFile("./Train.csv", "utf8", (err, data) => {
  //DECLARATIONS
  const routes = data.split("\n").slice(1);
  const trainData = routes.map((route) => {
    const [
      trainNo,
      trainName,
      seq,
      stationCode,
      stationName,
      arrivalTime,
      departureTime,
      distance,
      sourceStationCode,
      sourceStationName,
      destinationStationCode,
      destinationStationName,
    ] = route.split(",");
    return {
      trainNo,
      trainName,
      seq,
      stationCode,
      stationName,
      arrivalTime,
      departureTime,
      distance,
      sourceStationCode,
      sourceStationName,
      destinationStationCode,
      destinationStationName,
    };
  });
  const groupedData = new Map();
  let localLow = +Infinity;
  let localHigh = -Infinity;
  let shortestTrainID;
  let getShortestTrainID;
  let trainGroup = [];
  let localMax = -Infinity;
  let trainInfo = [];

  trainData.forEach((item) => {
    if (!groupedData.has(item.trainNo)) {
      groupedData.set(item.trainNo, []);
    }
    groupedData.get(item.trainNo).push(item);
  });

  for (const t of groupedData) {
    trainGroup.push(t);
  }

  //QUESTION NO 1
  const longestRouteFunction = () => {
    let max = -Infinity;
    let longestRoute = {};
    for (const train of trainData) {
      if (+train.distance > max) {
        max = +train.distance;
        longestRoute = train;
      }
    }
    console.table([longestRoute]);
  };

  //QUESTION NO 2
  const shortestRouteFunction = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (trainGroup[i][j][k].trainNo != null) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].distance,
              ]);
            }
          }
        }
      }
    }

    for (let i = 0; i < trainInfo.length; i++) {
      if (+trainInfo[i][1] < localLow) {
        if (+trainInfo[i][1] != null) {
          localLow = +trainInfo[i][1];
          shortestTrainID = +trainInfo[i][0];
        }
      }
    }

    getShortestTrainID = trainData.filter(
      (item) => +item.trainNo === shortestTrainID
    );
    console.table(getShortestTrainID);
  };

  trainInfo = [];

  //QUESTION NO 3
  const lessStationFunction = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (trainGroup[i][j][k].trainNo != null) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].seq,
              ]);
            }
          }
        }
      }
    }

    for (let i = 0; i < trainInfo.length; i++) {
      if (+trainInfo[i][1] < localLow) {
        if (+trainInfo[i][1] != null) {
          localLow = +trainInfo[i][1];
          shortestTrainID = +trainInfo[i][0];
        }
      }
    }

    getShortestTrainID = trainData.filter(
      (item) => +item.trainNo === shortestTrainID
    );
    console.table(getShortestTrainID);
  };

  trainInfo = [];

  //QUESTION NO 4
  const mostStationFunction = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (trainGroup[i][j][k].trainNo != null) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].seq,
              ]);
            }
          }
        }
      }
    }

    for (let i = 0; i < trainInfo.length; i++) {
      if (+trainInfo[i][1] > localHigh) {
        if (+trainInfo[i][1] != null) {
          localHigh = +trainInfo[i][1];
          shortestTrainID = +trainInfo[i][0];
        }
      }
    }

    getShortestTrainID = trainData.filter(
      (item) => +item.trainNo === shortestTrainID
    );
    console.table(getShortestTrainID);
  };

  trainInfo = [];

  //QUESTION NO 5
  const numberOfTrains = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (
              trainGroup[i][j][k].trainNo != undefined &&
              trainGroup[i][j][k].trainName != undefined
            ) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].trainName,
              ]);
            }
          }
        }
      }
    }

    const noOfTrains = trainInfo.length;
    console.table(trainInfo);

    console.log("Number of Trains : " + noOfTrains);
  };

  trainInfo = [];

  //QUESTION NO 6

  const findTrain = () => {
    // console.log(args[3], args[4]);
    let source = args[3];
    let destination = args[4];

    // console.log(trainGroup[0][1][1])

    for (let i=0; i<trainGroup.length; i++){
      for(let j=0; j<trainGroup[i].length; j++){
        for(const x of trainGroup[i][j]){
          if(x.stationCode === source && x.destinationStationCode === destination){
            trainInfo.push(x)
          }
        }
      }
    }
    console.table(trainInfo);
  };

  // console.log(args[2]);

  switch (args[2]) {
    case "QUESTION_NO1": {
      console.log("Answer To Question 1");
      longestRouteFunction();
      break;
    }
    case "QUESTION_NO2": {
      console.log("Answer To Question 2");
      shortestRouteFunction();
      break;
    }
    case "QUESTION_NO3": {
      console.log("Answer To Question 3");
      lessStationFunction();
      break;
    }
    case "QUESTION_NO4": {
      console.log("Answer To Question 4");
      mostStationFunction();
      break;
    }
    case "QUESTION_NO5": {
      console.log("Answer To Question 5");
      numberOfTrains();
      break;
    }
    case "QUESTION_NO6": {
      console.log("Answer To Question 6");
      findTrain();
      break;
    }
    default:
      console.log("Not a Valid Argument");
  }
});
