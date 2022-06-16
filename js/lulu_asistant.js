$(function() {
    var smsg="Hi";
    //disable form submission 
    $("#form").submit(function(){
    //trigger for append new msg
    $("#msend").trigger("click");
    return false;
    });
    //defining new voice text msg
    var k="";
    //getting new date for online status
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     //last seen 2 min before 
     t=t-2;
     //if minute are in single digit... append a 0 before minute
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     // to append am & pm 
     24>h?time=h+":"+t+"":time=(h-24)+":"+t+"";
     //last seen 
     $(".status").html("Última conexión " + time);
     //defining msg input 
    var lastmsg="" ;
    //creating msg seen tick with svg
    var tick="<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
    //appending svg to sent msgs
    $(".tick").html(tick);
    //appending emoji icon with svg
    $(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='0' height='0' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
    //msg send function 
    $("#msend").click(function(){
    eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
    var a="";
    //autoscroll with every new msg
    var scroll=($(".conversation-container").scrollTop())+1550;
    //getting new time for sent msgs
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     //appending 0 if minutes are in single digit
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     24>h?time=h+":"+t+"":time=(h-24)+":"+t+"";
     //triming user input
    var msg=$("#val").val().trim();
    //creating user msgs
    var para = $("<div class='message sent'>"+convert(msg)+"<span class='metadata'> <span class='time'>"+time+"</span><span class='tick'>"+tick+"</span></span></div>");
    //if msgs is blank returns false
    msg==""?$("#val").focus():($("#ap").append(para),
    $(".status").css("margin-left","0"),
    //Changing status last seen to online & typing 
    $("#form")[0].reset(),
    setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("Escribiendo... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
    });
    $("#name").html("Lulu Asistente");
    //if msg is sent  bot reply 
    function send(){
    var sr=lastmsg.split(" ");
    var search="";
    //autoscroll 
     scroll=($(".conversation-container").scrollTop())+155065;
    for(x=0;x<sr.length;x++){
        search+=sr[x]+"+";
    }
    var a="";
    var pq=["Really?"," Okay","Really? "];
    var p=pq[Math.floor(Math.random()*3)];
    //getting new date for received msgs
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     //appending 0 if minute are in single digit
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     // setting am or pm
     24>h?time=h+":"+t+"":time=(h-24)+":"+t+"";
     //matching with user input
     var saludo=["HOLA","BUENAS TARDES","BUENOS DÍAS","BUENOS DIAS","QUE TAL","HOLAS"];
     var pago=["CADA CUANTO DEBO RENOVAR EL PERMISO","CADA CUANTO TENGO QUE RENOVAR EL PERMISO","DEBO RENOVAR EL PERMISO","RENOVAR PERMISO","CUANDO DEBO RENOVAR EL PERMISO","RENOVAR","COMO RENOVAR"];

      //matching with user input
     function isInArray(x, y) { return x.indexOf(y) > -1; }
    isInArray(saludo, lastmsg)==true?(smsg="Hola, como puedo ayudarle"):
    isInArray(pago, lastmsg)==true?(smsg="El permiso tiene vigencia de un año, por lo tanto debe renovarse anualmente con un costo de Q285 por cada uno"):

    //checking if user input including SEARCH keyword
    //search result using iframe 
    lastmsg.substring(0, 6)=="RDDR"?(lastmsg.slice(7),smsg="<iframe src='https://drive.google.com/file/d/1SHoWzMCMTH6oKJ7Fu6bewr9OJ-jop4NL/preview' width='100%' height='450px' allow='autoplay'></iframe>"):
    lastmsg.substring(0, 6)=="VIDEO"?(lastmsg.slice(7),smsg="<embed width='100%' height='300px' src='https://www.youtube.com/watch?v=AqdAtTu8Aes' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></embed>"):
    (smsg="¡Disculpe! <br><br>Escriba <q><b>AYUDA </b></q> para ver las opciones que puede consultar. <br><br> ¡Gracias!");
    //creating receiving msgs 
    para = $("<div class='message received'>"+smsg+"<span class='metadata'> <span class='time'>"+time+"</span></span></div>");
    //appending receiving msg
    setTimeout(function() { $('#ap').append(para);
    //setting online status
    $(".status").html("online");
    //autoscroll 
    $(".conversation-container").scrollTop(scroll);
    },1100);
    //speak function 
    }
    });
    