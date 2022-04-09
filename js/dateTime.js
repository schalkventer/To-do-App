
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.dateTime').innerHTML =  h + ":" + m + ":" + s;
    document.querySelector('.day').innerHTML =  day + "/" + month + "/" + year;
    setTimeout(startTime, 1000);
  }

  setTimeout(startTime, 1000);

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
