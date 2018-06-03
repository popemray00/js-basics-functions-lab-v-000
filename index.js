// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
 if (someValue > 42) {
   return someValue - 42;
 }
 else {
   return 42 - someValue
 }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  }
  else {
    return (start - destination) * 264
  }

}
