const useGetDate = () => {
  const date = new Date();
  const dayNum = date.getDay();
  const dateNum = date.getDate()
  const monthNum = date.getMonth()
  const year = date.getFullYear()
  let day;
  let month
  if(dayNum === 0){
    day = "Sunday"
  }else if(dayNum === 1){
      day = "Monday"
  }else if(dayNum === 2){
    day = "Tuesday"
  }else if(dayNum === 3){
     day = "Wednesday"
  }else if(dayNum === 4){
     day = "Thursday"
  }else if(dayNum === 5){
     day = "Friday"
  }else if(dayNum === 6){
     day = "Saturday"
     
  }else{
    return null
  }

  if(monthNum ===0) month = "January"
  if(monthNum ===1) month = "February"
  if(monthNum ===2) month = "March"
  if(monthNum ===3) month = "April"
  if(monthNum ===4) month = "May"
  if(monthNum ===5) month = "June"
  if(monthNum ===6) month = "July"
  if(monthNum ===7) month = "August"
  if(monthNum ===8) month = "September"
  if(monthNum ===9) month = "October"
  if(monthNum ===10) month = "November"
  if(monthNum ===11) month = "December"

  return {day, dateNum, month, year}

};


export default useGetDate;