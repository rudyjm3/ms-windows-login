/* ## POWER LEVEL FUNCTION ############################
######################################################*/
const powerIcon = document.querySelector('.bottom-right__power-icon');
const pulseEffect = document.querySelector('.pulse-effect');
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {

   battery.addEventListener('chargingchange', () => {
      batteryIsCharging = battery.charging;
      
      console.log(batteryIsCharging);
      if (battery.charging === true) {
         powerIcon.innerHTML = 
         `<img class="power-icon-img icon" src="img/icons/icons8-recharge-battery-32-white.png" alt="charging icon" />`;
         pulseEffect.classList.add('charging-pulse-effect');
      } else {
         powerIcon.innerHTML = 
         `<img class="power-icon-img icon" src="img/icons/icons8-charged-battery-32-white.png" alt="battery icon" />`;
         pulseEffect.classList.remove('charging-pulse-effect');
      }
   });
});


// navigator.getBattery().then((battery) => {
//   batteryIsCharging = battery.charging;

//   battery.addEventListener('chargingchange', () => {
//     batteryIsCharging = battery.charging;
//     console.log(batteryIsCharging);
//     if (battery.charging === true) {
//       alert ('It\'s charging now');
//       document.querySelector('.bottom-right__power-icon').innerHTML = 
//       `<img class="power-icon-img icon" src="img/icons/icons8-charging-battery-32-white.png" alt="charging icon" />`;
//     } else {
//       alert('Not charging');
//     }

//   });
// });
// console.log(navigator.getBattery());

// ############################################################
// let batteryPromise = navigator.getBattery();
// batteryPromise.then(batteryCallback);

// function batteryCallback(batteryObject) {
//    printBatteryStatus(batteryObject);
// }
// function printBatteryStatus(batteryObject) {
//     console.log("IsCharging", batteryObject.charging);
//     console.log("Percentage", batteryObject.level);
   
//     console.log("charging Time", batteryObject.chargingTime);
//     console.log("DisCharging Time", batteryObject.dischargingTime);
// }
// ####################################################


/* ## Press enter key to submit function #########################
#################################################################*/
const pinInput = document.getElementById('pin-login-input');

pinInput.addEventListener("keypress", function(event) {
   debugger
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit-btn").click();
    console.log('Submit button was clicked' + pinInput.value);
  }
});

/* ## TIME AND DATE FUNCTIONS ########################
#####################################################*/
//Get time for bottom-left
function displayTime() {
   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


   let today = new Date();

   let month_curr = month[today.getMonth()];
   let day = weekday[today.getDay()];
   let date = today.getDate();

   let hours = today.getHours() % 12 || 12;
   let mins = today.getMinutes();
   let seconds = today.getSeconds();
   let isAM = today.getHours() < 12;

   let current_time = `${hours.toString().padStart(2)}:${mins.toString().padStart(2, "0")} ${isAM ? 'AM' : 'PM'}`;
   let current_date = `${day}, ${month_curr} ${date}`;
   // console.log(today);
   // console.log(current_date);
   document.querySelector('.bottom-left__time').innerText = current_time;
   document.querySelector('.bottom-left__date').innerText = current_date;
  
   refreshTime();
};
// Refresh Date / Time
function refreshTime() {
   var refresh = 1000;
   mytime = setTimeout('displayTime()', refresh);
}
// #####################################################


/*## For top left link elements ########################################
#####################################################################*/
const leftIcon = document.querySelector('.top-left-link__icon');
const leftContentWrapper = document.querySelector('.top-left-link__content-wrapper');
const leftTopTxt = document.querySelector('.top-left-link__top-content');
const leftSubTxt = document.querySelector('.top-left-link__sub-content');

//Top left link Hover function/s
// Hover
[leftIcon, leftTopTxt, leftSubTxt, leftContentWrapper].forEach((element) => {
   element.addEventListener('mouseover', () => {
      leftIcon.style.cssText = "background-color: var(--Dark-Black-Transparent-BG);"
      leftContentWrapper.style.cssText = "background-color: var(--Dark-Black-Transparent-BG);";
      leftSubTxt.style.cssText = 'visibility: visible; opacity: 1; transition: visibility 0s linear 0s, opacity 300ms;';
      leftSubTxt.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
         
   });
});
// No Hover
[leftIcon, leftTopTxt, leftSubTxt, leftContentWrapper].forEach((element) => {
   element.addEventListener('mouseout', () => {
      leftIcon.style.cssText = "background-color: var(--Black-Transparent-BG);";
      leftContentWrapper.style.cssText = "background-color: transparent;";
      leftSubTxt.style.cssText = 'visibility: hidden; opacity: 0; transition: visibility 0s linear 0.5s, opacity 0.5s;';
      leftSubTxt.innerText = "";    
   });
});

/*## For center link elements ########################################
#####################################################################*/
const centerContentWrapper = document.querySelector('.center-link__content-wrapper');
const centerIcon = document.querySelector('.center-link__icon');
const centerTopTxt = document.querySelector('.center-link__top-content');
const centerSubTxt = document.querySelector('.center-link__sub-content');

//Center link Hover function/s
// Hover
[centerIcon, centerTopTxt, centerSubTxt, centerContentWrapper].forEach((element) => {
   element.addEventListener('mouseover', () => {
      centerIcon.style.cssText = "background-color: var(--Dark-Black-Transparent-BG);"
      centerContentWrapper.style.cssText = "background-color: var(--Dark-Black-Transparent-BG);";
      centerSubTxt.style.cssText = 'visibility: visible; opacity: 1; transition: visibility 0s linear 0s, opacity 300ms;';
      centerSubTxt.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error earum quae, molestias illo sed in deleniti sunt. Sunt, obcaecati. Ipsa aspernatur ad omnis exercitationem nisi consectetur eaque consequatur harum?";
         
   });
});
// No Hover
[centerIcon, centerTopTxt, centerSubTxt, centerContentWrapper].forEach((element) => {
   element.addEventListener('mouseout', () => {
      centerIcon.style.cssText = "background-color: var(--Black-Transparent-BG);";
      centerContentWrapper.style.cssText = "background-color: transparent;";
      centerSubTxt.style.cssText = 'visibility: hidden; opacity: 0; transition: visibility 0s linear 0.5s, opacity 0.5s;';
      centerSubTxt.innerText = "";    
   });
});

/*## For top right link elements ########################################
#####################################################################*/
const rightContentWrapper = document.querySelector('.top-right-link__content-wrapper');
const rightIcon = document.querySelector('.top-right-link__icon');
const rightTopTxt = document.querySelector('.top-right-link__top-content');
const rightSubCont = document.querySelector('.top-right-link__sub-content');
//### Top right link Hover function/s ###
// Hover
[rightIcon, rightTopTxt, rightSubCont, rightContentWrapper].forEach((element) => {
   element.addEventListener('mouseover', () => {
      rightIcon.style.cssText = "background-color: var(--Dark-Black-Transparent-BG);"
      rightContentWrapper.style.cssText = "background-color: var(--Dark-Black-Transparent-BG);";
      rightSubCont.style.cssText = 'display: block; visibility: visible; opacity: 1; transition: visibility 0s linear 0s, opacity 300ms;';

         
   });
});
// No Hover
[rightIcon, rightTopTxt, rightSubCont, rightContentWrapper].forEach((element) => {
   element.addEventListener('mouseout', () => {
      rightIcon.style.cssText = "background-color: var(--Black-Transparent-BG);";
      rightContentWrapper.style.cssText = "background-color: transparent;";
      rightSubCont.style.cssText = 'visibility: hidden; opacity: 0; transition: visibility 0s linear 0.5s, opacity 0.5s;';   
   });
});

/* ## LOGIN SECTION FUNCTIONS #################################
##############################################################*/

//## Sign-in Options link function ########################
let showOptBtns = document.querySelector('.options-btns-wrapper');
let optLink = document.querySelector('.signin-option-link');

optLink.addEventListener('click', ()=> {
   showOptBtns.classList.toggle('show-opt-btns');
});

