/* ## POWER LEVEL FUNCTION ############################
######################################################*/
const powerIcon = document.querySelector('.bottom-right__power-icon');
const icon = document.querySelector('.power-icon-img');
const pulseEffect = document.querySelector('.pulse-effect');
const styles = window.getComputedStyle(powerIcon, ':before');
const batteryPercent = styles.content;
const root = document.querySelector(":root");

navigator.getBattery().then(function (battery) {
   let batteryLevel = (battery.level * 100) + "%";
   // root.style.setProperty("--percent-text", `"${batteryLevel}"`);
   
})
.catch(function (e) {
   console.error(e);
})

function batteryStatus() {
   function updateBatteryStatus(battery) {
      //   document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';

      let percent = (battery.level * 100) + "%";
      root.style.setProperty("--percent-text", `"${percent}"`);

      //   document.querySelector('#level').textContent = battery.level * 100;
      //   document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 60;
      
      // console.log(percent);

      battery.addEventListener('chargingchange', () => {
         // batteryIsCharging = false;
         console.log(battery);
         // console.log(batteryIsCharging);
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

      //Charging or not
         // if(battery.charging === true) {
         //    powerIcon.innerHTML = 
         //    `<img class="power-icon-img icon" src="img/icons/icons8-recharge-battery-32-white.png" alt="charging icon" />`;
         //    pulseEffect.classList.add('charging-pulse-effect');
         //    root.style.setProperty("--percent-text", `"${percent}"`);
         //    icon.style.cssText = "filter: hue-rotate(200deg) contrast(3);";
         // } else {
         //    powerIcon.innerHTML = 
         //    `<img class="power-icon-img icon" src="img/icons/icons8-charged-battery-32-white.png" alt="battery icon" />`;
         //    pulseEffect.classList.remove('charging-pulse-effect');
         // };
 
   }

   navigator.getBattery().then(function(battery) {
      // Update the battery status initially when the promise resolves ...
      updateBatteryStatus(battery);

      // .. and for any subsequent updates.
      // battery.onchargingchange = function () {
      //    updateBatteryStatus(battery);
      // };

      battery.onlevelchange = function () {
         
         let percent = (battery.level * 100) + "%";
         console.log(percent); 
         if(this.level === "100%") {
            // alert('at 90% or above');
            powerIcon.innerHTML = 
               `<img class="power-icon-img icon" src="img/icons/icons8-full-battery-32-white.png" alt="battery icon" />`;
            icon.style.cssText = "filter: hue-rotate(200deg) contrast(3);";
         } else if (percent >= "90%") {
            powerIcon.innerHTML = 
            `<img class="power-icon-img icon" src="img/icons/icons8-charged-battery-32-white.png" alt="battery icon"/>`;
            root.style.setProperty("--percent-text", `"${percent} 90 or higher"`);
         } else if (percent >= "50%") {
            powerIcon.innerHTML = 
            `<img class="power-icon-img icon" src="img/icons/icons8-battery-level-32-white.png" alt="battery icon"/>`;
            icon.style.cssText = "filter: hue-rotate(200deg) contrast(3);";
         } else if (percent >= "30%") {
            powerIcon.innerHTML = 
            `<img class="power-icon-img icon" src="img/icons/icons8-low-battery-32-white.png" alt="battery icon"/>`;
         } else {
            powerIcon.innerHTML = 
            `<img class="power-icon-img icon" src="img/icons/icons8-empty-battery-32-white.png" alt="battery icon"/>`;
            root.style.setProperty("--percent-text", `"${percent}" + " Charge Soon!`);
         }
         // updateBatteryStatus(battery);
      };

      // battery.ondischargingtimechange = function () {
      //    updateBatteryStatus(battery);
      // };
   });
};





//########## ORIGNAL BATTERY CHECK FUNCTION ###################


/* ## POWER LEVEL FUNCTION ############################
######################################################*/
// const powerIcon = document.querySelector('.bottom-right__power-icon');
// const pulseEffect = document.querySelector('.pulse-effect');
// const styles = window.getComputedStyle(powerIcon, ':before');
// const batteryPercent = styles.content;
// const root = document.querySelector(":root");

// console.log(batteryPercent);
// let batteryIsCharging = false;

// navigator.getBattery().then((battery) => {

//    battery.addEventListener('chargingchange', () => {
//       batteryIsCharging = false;
//       console.log(battery);
//       console.log(batteryIsCharging);
//       if (battery.charging === true) {
//          powerIcon.innerHTML = 
//          `<img class="power-icon-img icon" src="img/icons/icons8-recharge-battery-32-white.png" alt="charging icon" />`;
//          pulseEffect.classList.add('charging-pulse-effect');
//       } else {
//          powerIcon.innerHTML = 
//          `<img class="power-icon-img icon" src="img/icons/icons8-charged-battery-32-white.png" alt="battery icon" />`;
//          pulseEffect.classList.remove('charging-pulse-effect');
//       }
//    });
// });

// navigator.getBattery().then(function (battery) {
//    console.log(battery.level);
//    let wholePercent = battery.level * 100;
//    console.log(wholePercent);
//    // ... and any subsequent updates.
//    battery.onlevelchange = function() {
//      console.log(this.level);
//      let percent = (battery.level * 100) + "%";
//      console.log(percent); 
//      if(this.level === "100%") {
//       // alert('at 90% or above');
//       powerIcon.innerHTML = 
//          `<img class="power-icon-img icon" src="img/icons/icons8-full-battery-32-white" alt="battery icon" />`;
//      } else if (percent >= '13%') {
//       powerIcon.innerHTML = 
//       `<img class="power-icon-img icon" src="img/icons/icons8-low-battery-32-white.png" alt="battery icon"/>`;
//       // batteryPercent.style.content = battery.level;
//       // root.style.setProperty("--percent-text", `"${this.level * 100}%"`);
//       root.style.setProperty("--percent-text", `"${percent}"`);
//       // console.log(--percent-text);
//      } else if (this.level <= 0.1) {
//       powerIcon.innerHTML = 
//       `<img class="power-icon-img icon" src="img/icons/icons8-low-battery-32-white" alt="battery icon"/>`;
//      }
     
//      else {
//       alert('Last function');
//      }

//    //   console.log(root.style.setProperty);
//    };
//  }).then(checkBattery);


function checkBattery(battery) {
   // if (battery.charging === true) {
   //    powerIcon.innerHTML = 
   //    `<img class="power-icon-img icon" src="img/icons/icons8-recharge-battery-32-white.png" alt="charging icon" />`;
   //    pulseEffect.classList.add('charging-pulse-effect');
   //    console.log('Battery is charging.');
   // } else {
   //    powerIcon.innerHTML = 
   //    `<img class="power-icon-img icon" src="img/icons/icons8-charged-battery-32-white.png" alt="battery icon" />`;
   //    pulseEffect.classList.remove('charging-pulse-effect');
   //    console.log('Battery is not charging.');
   // }
 }


