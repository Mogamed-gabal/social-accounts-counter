// get global vaiables
let twitCounter=document.getElementById("tw-counter")
let youtubeCounter=document.getElementById("yo-counter")
let faceCounter=document.getElementById("fa-counter")
let alert=document.getElementById("alert")
// call the function
putTwitterCounter(),putYoutubeCounter(),putFaceCounter()
// twitter counter script
function putTwitterCounter()
{
    let twCounter=0;
    let twitterCounter=setInterval(()=>{
        twCounter++;
        twitCounter.innerHTML=twCounter;
        if(twCounter==300)
        {
         clearInterval(twitterCounter)
        }
     
     }
     ,1)
    
}
// youtube countrer script
function putYoutubeCounter()
{
   let YoCounter=0
    let youtubeSubscribe=setInterval(()=>{
        YoCounter++;
        youtubeCounter.innerHTML=YoCounter;
        if(YoCounter==500)
        {
         clearInterval(youtubeSubscribe)
        }
     
     }
     ,1)
    
}
// face book counter script
function putFaceCounter()
{
   let faCounter=0
    let youtubeSubscribe=setInterval(()=>{
        faCounter++;
        faceCounter.innerHTML=faCounter;
        if(faCounter==500)
        {
         clearInterval(youtubeSubscribe)
        }
    
     }
     ,1)
    
}
