const log = 'sdfds@sdda.da';

reg(log)

function reg(log) {
    let log1;

     

  if (log !== 0) {
      const atSignIndex = log.indexOf('@')
      const pointIndex = log.indexOf('.')
      
      if (
        atSignIndex !== -1 &&
        pointIndex !== -1 &&
        log.slice(0, atSignIndex).length > 0
        && log.slice(atSignIndex + 1, pointIndex).length > 0
        && log.slice(pointIndex + 1, log.length).length > 0    
    ){
        log1 = true
     } else log1 = false
      


  }
console.log(log1);


}


