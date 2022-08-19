const timeDisplay= () => {
  const date = new Date();
 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  
  document.querySelector(".hours").innerHTML = hh;
  document.querySelector(".minutes").innerHTML = mm;
  document.querySelector(".seconds").innerHTML = ss;
}
setInterval(timeDisplay, 1000);
