const divElement=document.createElement("div");
//console.log(divElement)
divElement.classList.add("image-view-model")

divElement.innerHTML=`<div class="overlay">
  <div class="imag">
    <img src="">
  </div>
  <div class="close">
    <img src="img/close.png">
  </div>
  <center>
  <div class="info">Image 1 of 6 </div>
  </center>
  <div class=" next">
    <img src="img/next.png">
  </div>
  <div class=" prev">
    <img src="img/prev.png">
  </div>
  <div class=" play">
    <img src="img/play.png">
  </div>
</div>
</div>`;

const body=document.querySelector("body")
body.appendChild(divElement)


 
class ImageViewer{
  
   imageTransitionTiming = 500;
  modelImage=document.querySelector(" .image-view-model")
  imageModel=document.querySelector(".image-view-model .imag img ")
 modelOverlay=document.querySelector(".image-view-model .overlay")
  CloseBtn=document.querySelector(".close img")
  modelNextBtn=document.querySelector(".next")
   modelPrevBtn=document.querySelector(".prev")
   modelPlayBtn=document.querySelector(".play")
   modelInfo=document.querySelector(".info")
  

  images;
  currentIndex;
  runnigSlide=false;
  timevar;
  timevar2;


constructor(selector){
   this.images =document.querySelectorAll(selector);
   console.log(this.images)

   this.images.forEach((image,index)=>{
   // console.log(index)
    image.onclick=()=>{
     this.slowSlide(index)
     //console.log(index)
    }
   })

   this.CloseBtn.onclick=this.closeModel
this.modelNextBtn.onclick=()=>{
   this.modelPlayBtn.firstElementChild.src="img/play.png";
    this.currentIndex++;
    this.slowSlide(this.currentIndex);
      clearTimeout(this.timevar)
}
this.modelPrevBtn.onclick=()=>{
 
this.modelPlayBtn.firstElementChild.src="img/play.png";
    this.currentIndex++;
    this.slowSlide(this.currentIndex);
     clearTimeout(this.timevar)
}

this.modelPlayBtn.onclick=()=>{

 this.i= this.modelPlayBtn.firstElementChild.src="img/pause.png";
 //console.log(this.i)

  if(this.runnigSlide){
    clearTimeout(this.timevar)
this.modelPlayBtn.firstElementChild.src="img/play.png";

    this.runnigSlide=false;

  }else{
    this.modelPlayBtn.firstElementChild.src="img/pause.png";
     this.imageModel.style.opacity="0"
  //  setTimeout(()=>{
    //   this.imageShow()
    //   this.imageModel.style.opacity="1"
    //     this.currentIndex++;

    // },000)
 this.imageShow()
      this.runnigSlide=true;
  }

  

}
// this.modelInfo.textContent=`Image ${imageIndex +1} of ${this.image.length}`

   //this.CloseBtn = this.closeModel();
 console.log(this.CloseBtn)
   console.log(this.modelInfo)
}



slowSlide=(imageIndex)=>{
clearTimeout( this.timevar2)
  if(imageIndex >this.images.length-1){
    imageIndex=0
  }
  if(imageIndex < 0){
    imageIndex=this.images.length-1;
  }
 // console.log(imageIndex)

  this.modelInfo.textContent=`Image ${imageIndex +1} of ${this.images.length}`
    this.modelImage.style.display="block";
    setTimeout(()=>{
    this.modelImage.style.opacity="1";
})
  this.imageModel.style.opacity="0";
  this.timevar2=setTimeout(()=>{
      this.imageModel.src=this.images[imageIndex].src;
      this.imageModel.style.opacity="1";

  },500)
    
    this.currentIndex=imageIndex;
}


closeModel=()=>{
           clearTimeout(this.timevar)
            this.modelPlayBtn.firstElementChild.src = 'img/play.png';
        this.runnigSlide= false;
           this.modelImage.style.opacity="0";

setTimeout( ()=>{
  this.modelImage.style.display="none";
 },500)
}

imageShow=()=>{

    this.currentIndex++;
    this.slowSlide(this.currentIndex);
    this.timevar=setTimeout(()=>{
      this.imageShow();
    },2000)

}

  




option=(obj)=>{
  if(typeof(obj)!="object"){
    throw("bad parameter pass")
//console.log(option)
  }
  if(obj.backgroundOpacity)
{
  this.modelImage.style.backgroundColor=`rgba(0,0,0,${obj.backgroundOpacity})`
} 
if(obj.imageTransTiming){
  this.imageModel.style.transitionDuration=`${obj.imageTransTiming/2}s`
  this.imageTransTiming=(obj.imageTransTiming/2)*1000
}
//console.log(this.obj)
this.modelNextBtn.style.display=(obj.nextBtnDisable)?'none':'block';
this.modelPrevBtn.style.display=(obj.prevBtnDisable)?'none':'block';
this.modelPlayBtn.style.display=(obj.playBtnDisable)? 'none':'block';
this.modelInfo.style.display=(obj.imageInfo)?'none':'block';
//this.imageShow=(obj.imageShow)?obj.imageShow*1000:1500;

   //console.log('hello')

   let start;
let end;
 this. modelOverlay.addEventListener('touchstart',(e)=>{
  //console.log(e)
 this.start = e.changedTouches[0].clientX;
   console.log(this.start)
 })
 this. modelOverlay.addEventListener('touchend',(e)=>{
  //console.log(e)
 this.end = e.changedTouches[0].clientX;
console.log(this.end)

    if( Math.abs(start - end) >= 20  ){

        if(start > end){
               this.currentIndex--;
    this.slowSlide(this.currentIndex);
    console.log(hello)
        }else{
              this.currentIndex++;
    this.slowSlide(this.currentIndex);
    console.log(hello1)
        }
    }  
 })
  
 }





}


const obj= new ImageViewer("[imageViewer]")
 //option.obj

   // obj.option({ 
   //              'backgroundOpacity' : 0.4,
   //            })
  obj.option()


  
