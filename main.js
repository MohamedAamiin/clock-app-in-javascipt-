setInterval(() =>{
    let hours =document.getElementById('hours');
    let minutes =document.getElementById('minutes');
    let seconds =document.getElementById('seconds');
    let ampm =document.getElementById('ampm');
    

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

  let hh_dot = document.querySelector('.hh_dot');
  let ss_dot = document.querySelector('.ss');
  let mm_dot = document.querySelector('.mm_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h>= 12? "pm" : "am";
    
    
    // convert 12hr clock to 24 clock
    if(h>24){
        h = h =12;
    }
    // add zero before single digit number
    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;
    
    hours.innerHTML= h + "<br>Hours<span>";
    minutes.innerHTML= m + "<br>minutes<span>";
    seconds.innerHTML= s + "<br>seconds<span>";
    ampm.innerHTML =am;

    hh.style.strokeDashoffset = 440 -(440 * h)/12;
//   12 hours clock
mm.style.strokeDashoffset = 440 -(440 * m)/60;
//  60 minutes
ss.style.strokeDashoffset = 440 -(440 * s)/60;
// 60 seconds

hh_dot.style.transform = ' rotate(${h * 30}deg)';
mm_dot.style.transform = 'rotate($ m{ * 6}deg)';
ss_dot.style.transform = 'rotate($ {s * 6}deg)';
})

