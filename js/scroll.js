var scroll = window.requestAnimationFrame || 
function(callback){
  window.setTimeout(callback,1000/60);
};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function isElementInViewport(el){
  if(typeof jQuery === "function" && el instanceof jQuery){
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
         (rect.top<=0 && rect.bottom >=0) ||
         (rect.bottom >- (window.innerHeight || document.documentElement.clientHeight)
         && rect.top <= (window.innerHeight || documnet.documentElement.clientHeight)))
         ||
         rect.top>=0 && rect.bottom<= (window.innerHeight ||
         document.documentElement.clientHeight))
         };
} 
function loop(){
  elementsToShow.forEach(function(elm){
    if(isElementInViewport(elm)){
      elm.classList.add('is-visible');
    }else{
      elm.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
loop();
