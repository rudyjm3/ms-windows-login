
// Hover function
const leftIcon = document.querySelector('.top-left-link__icon');
const contentWrapper = document.querySelector('.top-left-link__content-wrapper');
const topContent = document.querySelector('.top-left-link__top-content');
const subContent = document.querySelector('.top-left-link__sub-content');

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
