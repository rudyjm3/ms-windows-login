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



// Hover function
const leftIcon = document.querySelector('.top-left-link__icon');
const contentWrapper = document.querySelector('.top-left-link__content-wrapper');

const centerHover = document.querySelector('.center-link');
const centerWrapper = document.querySelector('.center-link__wrapper');
const centerContentWrapper = document.querySelector('.center-link__content-wrapper');
const centerIcon = document.querySelector('.center-link__icon');
const centerTopTxt = document.querySelector('.center-link__top-content');
const centerSubTxt = document.querySelector('.center-link__sub-content');

const topContent = document.querySelector('.top-left-link__top-content');
const subContent = document.querySelector('.top-left-link__sub-content');

console.log(centerIcon);
//Center link function/s
centerIcon.addEventListener('mouseover', () => {
   if(centerTopTxt.className && centerSubTxt.className != 'toggleshow') {
      centerTopTxt.classList.add('toggleshow');
      centerSubTxt.classList.add('toggleshow');
   } else {
      centerTopTxt.classList.remove('toggleshow');
      centerSubTxt.classList.remove('toggleshow');
   }  
});

centerIcon.addEventListener('mouseout', () => {
      centerTopTxt.classList.remove('toggleshow');
      centerSubTxt.classList.remove('toggleshow');
});

centerTopTxt.addEventListener('mouseover', () => {
   if(centerTopTxt.className && centerSubTxt.className != 'toggleshow') {
      centerTopTxt.classList.add('toggleshow');
      centerSubTxt.classList.add('toggleshow');
   } 
});

centerContentWrapper.addEventListener('mouseout', () => {
   console.log('line 49 - Mouse out content-wrapper');
   // if(centerTopTxt.classList && centerSubTxt.className === 'toggleshow') {
      centerTopTxt.classList.remove('toggleshow');
      centerSubTxt.classList.remove('toggleshow');
   // }
});
// centerTopTxt.addEventListener('mouseover', () => {
//    centerTopTxt.style.cssText = 'background-color: #333;';
//    centerSubTxt.style.cssText = 'background-color: #333; opacity: 1;';
// });
// centerTopTxt.addEventListener('mouseout', () => {
//    centerTopTxt.style.cssText = 'background-color: transparent;';
//    centerSubTxt.style.cssText = 'background-color: #333; opacity: 0;';
// });



function over() {
   
  contentWrapper.style.cssText = "background-color: var(--Black-Transparent-BG);";
   subContent.style.cssText = "transform: scaleY(1);"; 
}; 

function out() {
   contentWrapper.style.cssText = "background-color: transparent;";
   subContent.style.cssText = "transform: scaleY(0);"; 
}
function out2() {
   contentWrapper.style.cssText = "background-color: transparent;";
   subContent.style.cssText = "transform: scaleY(0);"; 
}

topContent.onmouseover = () => {
   over();
}
subContent.onmouseout = () => {
   out2();
}
// topContent.onmouseout = () => {
//    out();
// }



// topContent.onmouseover = () => {
//    contentWrapper.style.cssText = "background-color: var(--Black-Transparent-BG);";
//    // topContent.style.cssText = "background-color: var(--Black-Transparent-BG)";
//    subContent.style.cssText = "transform: scaleY(1);";
// };

// subContent.onmouseover = () => {
//    topContent.style.cssText = "background-color: var(--Black-Transparent-BG)";
// };
// document.querySelector('.top-left-link__top-content').onmouseout = () => {
//    topContent.style.cssText = "background-color: transparent;";
// };
// document.querySelector('.top-left-link__sub-content').onmouseout = () => {
//    subContent.style.cssText = "transform: scaleY(0);";
// };
