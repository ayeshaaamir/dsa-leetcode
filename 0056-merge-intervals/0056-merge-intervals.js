/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(array) {
  array.sort((a,b) => {return a[0] - b[0]});
    
  let x = array[0][0];
  let y = array[0][1];
    
  let result = [];
    
  for(const interval of array){
      let start = interval[0];
      let end = interval[1];
        
      if(end < x) {
        result.push([start,end]);
      } 
      else if(start > y){
          result.push([x,y]);
          x = start;
          y = end;
      }
      else if(x <= start && start <= y){
          x = Math.min(x,start);
          y = Math.max(y,end);
      }
  }
    
  result.push([x,y]);
    
  return result;
};