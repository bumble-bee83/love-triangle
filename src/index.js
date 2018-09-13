/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var counter = 0;
  for(var i = 0; i < preferences.length; i++){
    if ((preferences[i] <= preferences.length) && (preferences[preferences[i] - 1] <= preferences.length) && (preferences[preferences[preferences[i] - 1] - 1] <= preferences.length)){
      var curIndex = i;
      if (preferences[preferences[preferences[i] - 1] - 1] === ++curIndex){
        counter++;
      }
    }
  }
  return Math.floor(counter / 3);
};
