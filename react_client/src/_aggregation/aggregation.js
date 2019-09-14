export function allAggregations(data){
  var allParSumList = [];
  var oneParList = [], allParMinList = [], allParMaxList = [], allParAvgList = [];
  allParSumList.push('SUM');
  allParMinList.push('MIN');
  allParMaxList.push('MAX');
  allParAvgList.push('AVG');
  for (var j = 2; j <= 21; j++){
    var parSum = 0;
    for (var i = 0; i < data.length; ++i) {
      parSum += data[i][Object.keys(data[i])[j]];
      oneParList.push(parSum);
    }
    allParSumList.push(parSum);
    allParMinList.push(Math.min(...oneParList));
    allParMaxList.push(Math.max(...oneParList));
    allParAvgList.push(parSum/data.length);
    oneParList = [];
  }
  return {allParSumList: allParSumList, allParMinList: allParMinList, allParMaxList: allParMaxList, allParAvgList: allParAvgList};
}