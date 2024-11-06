function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}
locomotiveAnimation()
gsap.from(".page1 h1",{
    opacity:0,
    y:1000,
    duration:1,
    delay:0.2,
    stagger:0.2,
    rotate:20
})
var crsr =document.querySelector(".cursor");
document.addEventListener("mousemove",function(dets){
  gsap.to(crsr,{
    x:dets.x,
    y:dets.y
  })
})

var allImages=document.querySelectorAll('.image-div');
var text="";
allImages.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
    text=elem.getAttribute("data-text")
    crsr.style.width="130px";
    crsr.style.display="flex";
    crsr.style.alignItems="center"
    crsr.style.padding="20px 0"
    crsr.innerHTML=`<h5>${text}</h5>   <h5>${text}</h5>    <h5>${text}</h5>`
  })
  elem.addEventListener('mouseleave',function(){
    console.log("mouseleave")
    crsr.style.width="15px";
    crsr.innerHTML=""
    crsr.style.padding="0"
  })
})
var menuitem=document.querySelector(".navpart2 h4")
var menuitembox=document.querySelector(".menuitem");





var alltext=document.querySelectorAll(".page1-text h1");
alltext.forEach(function(elem){
    var text=elem.textContent;
    var splitted=text.split("");
    var clutter="";
    splitted.forEach(function(elem){
        clutter+=`<span>${elem}</span>`
    })
    elem.innerHTML=clutter;
})
gsap.from('.page1-text h1 span',{
    opacity:0,
    y:600,
    delay:0.5,
    duration:0.6,
    stagger:0.1
})
var tl=gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page2",
  }
})
tl.from('.page2-text h3',{
  opacity:0,
  y:1000,
  duration:1
})
gsap.from('.text-container h1',{
  opacity:0,
  y:1000,
  duration:2,
  rotate:20,
  scrollTrigger:{
    scroller:".main",
    trigger:".page2",
    start:"top top"
  },
})
gsap.from(".page2-footer h5",{
  scrollTrigger:{
     scroller:".main",
     trigger:".page2-footer",
  },
  y:500,
  opacity:0,
  duration:2
})
var previousPath=`M 10 120 Q 500 120 990 120`;
var string=document.querySelectorAll(".string svg");
console.log(string)
string.forEach(function(val){
  val.addEventListener('mousemove',function(dets){
    // console.log(dets.y)
    const hehe=dets.y-val.getBoundingClientRect().y;
    console.log(hehe)
    
      var path=`M 10 120 Q ${dets.x+100} ${dets.y-val.getBoundingClientRect().y+10} 990 120`;
      gsap.to("path",{
        attr:{d:path},
        
      })
    })
    val.addEventListener('mouseleave',function(dets){
      gsap.to("path",{
        attr:{d:previousPath},
        ease: "elastic.out(1.75,0.2)",
        duration:1
      })
     
    })
})


var elementContainer=document.querySelector(".element-container");
var element=document.querySelectorAll(".element");
var movingImage=document.querySelector("#moving-image img");
element.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var image=elem.getAttribute("data-image")
    console.log(image)
     gsap.to(movingImage,{
      attr:{src:image}
     })
  })
   elem.addEventListener("mousemove",function(dets){
    gsap.to("#moving-image",{
      top:`${dets.y-elementContainer.getBoundingClientRect().y}`,
      left:`${dets.x-elementContainer.getBoundingClientRect().x}`,
      duration:1,

    })
   })
})
elementContainer.addEventListener("mouseenter",function(){
  gsap.to("#moving-image",{
    opacity:1
  })

})
elementContainer.addEventListener("mouseleave",function(){
  gsap.to("#moving-image",{
    opacity:0
  })
})
var tl2=gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page4",
    start:"top 60%"
  }
})
tl2.from("#hehe",{
  y:600,
  duration:1,
  rotate:30
})


var elemContainer=document.querySelector('.elem-container')
var elem1=document.querySelector('#elem1');
var elem2=document.querySelector('#elem2');
var photos=document.querySelector(".photos");
var photoImage=document.querySelector(".photos img")
elem1.addEventListener("mousemove",function(dets){
   elemContainer.style.backgroundColor="#FFD7E7"
   photos.style.opacity="1";
   var image2=elem1.getAttribute("data-image")
   console.log(image2)
   gsap.to(photoImage,{
    attr:{src:image2},
   })
   var a=dets.x-elem1.getBoundingClientRect().x;
   console.log(a)
   var b=dets.y-elem1.getBoundingClientRect().y;
   console.log(b)
   gsap.to(photos,{
    x:`${dets.x-elem1.getBoundingClientRect().x-500}`,
    y:`${dets.y-elem1.getBoundingClientRect().y-500}`
   })
})
elem1.addEventListener("mouseleave",function(){
  elemContainer.style.backgroundColor="";
  photos.style.opacity="0"
})
elem1.addEventListener("mouseenter",function(){
  console.log("apple")
})
elem2.addEventListener("mousemove",function(dets){
  elemContainer.style.backgroundColor="#BAC4E2";
  photos.style.opacity="1";
  var image2=elem2.getAttribute("data-image")
  console.log(image2)
  gsap.to(photoImage,{
    attr:{src:image2},
   })
   var a=dets.x-elem2.getBoundingClientRect().x;
   console.log(a)
   var b=dets.y-elem2.getBoundingClientRect().y;
   console.log(b)
   gsap.to(photos,{
    x:`${dets.x-elem2.getBoundingClientRect().x-300}`,
    y:`${dets.y-elem2.getBoundingClientRect().y-200}`
   })
})
elem2.addEventListener("mouseleave",function(){
  elemContainer.style.backgroundColor="",
  photos.style.opacity="0"
})





document.addEventListener("wheel",function(dets){
  console.log(dets.deltaY)
  if(dets.deltaY>0){
    gsap.to(".scroll",{
      transform:`translateX(-200%)`,
      repeat:-1,
      ease:"none",
      duration:7
    }),
    gsap.to(".scroll img",{
      rotate:180
    })
  }
  else{
    gsap.to(".scroll",{
      transform:`translateX(0%)`,
      repeat:-1,
      ease:"none",
      duration:7
    }),
    gsap.to(".scroll img",{
      rotate:0
    })
  }
})