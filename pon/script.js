const log = 'sdfds@sdda.da';
const pass = 'Adgsdgsqw2423'

reg(log, pass);


function reg(log, pass) {
    let log1;
    let pass1;

  if (log !== 0) {
      const atSignIndex = log.indexOf('@');
      const pointIndex = log.indexOf('.');
      
      if (
        atSignIndex !== -1 &&
        pointIndex !== -1 &&
        log.slice(0, atSignIndex).length > 0
        && log.slice(atSignIndex + 1, pointIndex).length > 0
        && log.slice(pointIndex + 1, log.length).length > 0    
    ){
        log1 = true;
     } else log1 = false;
}



  const hasNum = /[A-Z]/.test(pass)
  const upperCase = /\d/.test(pass)
  const isLengthCorrect = pass.length >= 8? true : false;
  
  if (hasNum && isLengthCorrect && upperCase) {
    pass1 = true
  } else pass1 = false



    console.log(log1);
    console.log(pass1);

  
  return log1 && pass1 ? true : false;

}



