setInterval(() => {
  // ***** making a date object to extract hour ,minutes and seconds. ******
  let date = new Date();
  let hourNow = date.getHours();
  let minNow = date.getMinutes();
  let secNow = date.getSeconds();


  // ****Grabbing hour , min and second hand by their id's *****
  let hour = document.getElementById("hour");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");


  // ******finding the exact degree of rotation for hour hand min  , hand and sec hand. ******
  let hourRotation = 30 * hourNow + minNow / 2;
  let minRotation = 6 * minNow;
  let secRotation=6*secNow;

  // ****** applying css for rotation. ******
  hour.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minRotation }deg)`;
  sec.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
