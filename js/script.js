let identifier = false;
let messageInput = $(".type-me");
let sendAndRecord = $(".sendAndRecord");
let src = sendAndRecord.attr("src", "./media/icons/voice note.png");
let dropDown1 = $(".three-vertical-dots-icon-2")
let slideRight = $("#tweet")
let actionFilm = document.getElementById("actionFilm");
let messageSent = $(".message-sent")
let contactHolder = $(".contact-holder");
const minWidth = 50;
const maxWidth = 700;

 contactHolder.on("click", function(){
  if($(".sat-box").attr("class") !== "not-seeing"){
    $(".sat-box").addClass("not-seeing")
    $(".chat-box").addClass("seeing")
  }
 })


 $(".contact-holder").on("click",function(){
  if(window.innerWidth >= minWidth && window.innerWidth <= maxWidth){
    $(".chat-box").addClass("looking")
  }
 }) 



 let j = 0
  $(window).on("load", function(){
    let elem = $(".progress");
    let width = 1;
    let id = setInterval(frame, 50);
  
    function frame(){
      if(width !== 100){
        width++;
        elem.css("width", width + "%");
      } else {
        $(".bis").text("Done")
        clearInterval(id);
      }
    }
  });
  
  function logIn(){
    window.location.href = "homepage.html";
  }
  function brother(){
    window.location.href = "status.html"
  }

  
  function member(){
    window.location.href = "homepage.html"
  }
  
  function catalogue(){
    window.location.href = "homepage"
  }



messageInput.on("click", function () {
  identifier = true;
});

messageInput.on("input", function () {
  if  (identifier === true){
    if (messageInput.val().trim() === "") {
      if (src !== "./media/icons/voice note.png") {
          sendAndRecord.attr("src", "./media/icons/voice note.png");
      }
    }else{
      if(src !== "./media/icons/send.png"){
           sendAndRecord.attr("src", "./media/icons/send.png")
        }
    }   
    }
});



messageInput.on("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        messageSent.append("<div id='mysent-box'>" + messageInput.val() + "</div>")
        actionFilm.reset();

        setTimeout("computerReply()", "1000")
        
    }
});

 function computerReply(){
    messageSent.append("<div class='friend-box'>" +'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eius repellat amet accusamus dolores laudantium!'+"</div>")
 }

dropDown1.on("click", function(){
  if($(".drop").attr("class") === "drop"){
    $(".drop").attr("class","drop-time")
    $("#no").attr("id","yes")
  }else{
    $(".drop-time").attr("class", "drop")
    $("#yes").attr("id","no")
  }
})


 function openPop(){
   $("#speaker-page").attr("id","open-speaker-page")
 }


 function removeIt(){
  $("#open-speaker-page").attr("id","speaker-page")
 }


slideRight.on("click", function(){
  if($("#exit-main").attr("class") === "exit-page"){
    $("#exit-main").attr("class","slide-right-page")
    console.log("hello")
  }
})

$(".pop").on("click", function(){
    $(".slide-right-page").attr("class","exit-page");
    console.log("biscuit")
})


// media query for the 700px max screen width 


 function larger(){
    $("#mail").toggleClass("opener")
  
 }


