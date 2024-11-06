var previousPath=`M 10 120 Q 500 120 990 120`;
var string=document.querySelector(".string svg");

string.addEventListener('mousemove',function(dets){
// console.log(dets.y)
const hehe=dets.y-string.getBoundingClientRect().y;
console.log(hehe)

  var path=`M 10 120 Q ${dets.x+100} ${dets.y-string.getBoundingClientRect().y+10} 990 120`;
  gsap.to("path",{
    attr:{d:path},
    
  })
})
string.addEventListener('mouseleave',function(dets){
  gsap.to("path",{
    attr:{d:previousPath},
    ease: "elastic.out(1.75,0.2)",
    duration:1
  })
 
})