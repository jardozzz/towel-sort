
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length==0){
    return []
  }
  
  let a=matrix.map((e,i)=>{
    (i+1)%2==0?e.reverse():e
    return(e)
     })
    
     return a.flat()
  
    ;
}
