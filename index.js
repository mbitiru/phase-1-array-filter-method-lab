//function findMatching
function findMatching(drivers, argument) {
  return drivers.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === argument.toLowerCase()
  );
}
//function fuzzyMatch
function fuzzyMatch(drivers, testString) {
  return drivers.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}
//function matchName
function matchName(drivers, argumentName) {
  return drivers.filter((record) => record.name === argumentName);
}
