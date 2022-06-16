// Creado por Oscar León Tel: +50233940537


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
    setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("typing... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
    });
    $("#name").html("ECO Asistente");
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
     var saludo=["HOLA","BUENAS TARDES","BUENOS DÍAS","BUENOS DIAS","QUE TAL","HOLA CECI","HOLA EVELYN","PRUEBA"];
     var ayuda=["AYUDA"];
     var correo=["DDM1"];
     var comovamos=["¿CÓMO VAMOS?","COMO VAMOS"];
     var status=["STATUS","ESTADO"];
     var dunkindonuts=["RDDR2022"];
     var comoestan=["HOLA COMO ESTA?","HOLA COMO ESTA","HOLA COMO ETA"];
     var gracias=["GRACIAS","SI GRACIAS"];
     var evmail=["EVMAIL"];
     var creador=["CREADOR","DESARROLLADOR"];
      //matching with user input
     function isInArray(x, y) { return x.indexOf(y) > -1; }
    isInArray(creador, lastmsg)==true?(smsg="Mi código interno incio su desarrollo un 25/01/2022. <br><br>Mi creador es <strong>Oscar León</strong>, su número para contrataciones es +50233940537"):
    isInArray(gracias, lastmsg)==true?(smsg="🙂"):
    isInArray(evmail, lastmsg)==true?(smsg="Hola, Evelyn Zea <br><br>Será un placer ayudarle con la gestión de su backup de mails.<br><br><strong>Contactos disponibles para su revisión</strong><br><br>1) Dunking Donuts (<strong>ddm1</strong>)(8 mails)"):
    isInArray(comoestan, lastmsg)==true?(smsg="Hola, !es un placer saludarle!<br><br>Todo marcha a la perfección, espero que su persona este muy bien."):
    isInArray(correo, lastmsg)==true?(smsg="<strong>¿Cuál ha sido el avance del proceso?</strong><br><br><strong>Para:</strong> evzea@ejemplo.com<br><strong>De:</strong> ejemplo@dd.com<br><strong>Fecha:</strong> 24/enero/2022 (12:13 p.m)<br><br>Estimada, Evelyn Zea<br><br>Me podría proporcionar un reporte del avance de las licencias. <br><br>Gracias."):
    isInArray(saludo, lastmsg)==true?(smsg="Hola, ¿cómo puedo ayudarle?<br><br>Recuerde que estoy a su disposición esté donde esté, desde la web o desde mi App Android.<br><br>Para empezar a utilizar este servicio solo tiene que escribir <strong>AYUDA</strong>.<br><br>Si ya sabe cual será su consulta, envíeme su mensaje, para poderle ayudar.<br><br><br><strong>IMPORTANTE</strong><br>Por su seguridad y la de COECO, al finalizar la conversación borrare todos los mensajes."):
    isInArray(dunkindonuts, lastmsg)==true?(smsg="Hola <strong>Sr. Mariano.</strong> <br><br> <strong>PROYECTO:</strong> Dunkin Donuts, Roosevelt <br><br><strong>SERVICIOS CONTRATADOS:</strong><br>Licencia MUNI<br>Licencia EMPAGUA<br>Licencia AERONAUTICA<br>Licencia MEDIO AMBIENTE<br>Licencia CONRED<br>Licencia MINISTERIO DE SALUD<br>Licencia IDAEH <br><br> El proceso de su servicio esta <strong><font color='#BD4040';>detenido</font></strong>, a la espera de la firma del propietario del predio, para poder avanzar. <br><br> A continuación se le presentan las opciones que puede consultar de su servicio.<br><br><a style='color:#393939;' href='https://bit.ly/33J2JJf' target='VER PROCESO'><strong>ESTADO DEL PROCESO:</strong><br> De clic en esta opción para tener una visión amplia de su servicio.</a> <br><br><strong>REPORTE:</strong><br> Se le brindrá un reporte en PDF de lo realizado y de lo que esta pendiente con su servicio. Para obtener el reporte envie el siguiente mensaje: <strong>rddr</strong><br><br><strong>AGENDA:</strong><br>Le informa con fechas, los puntos que han tratado y los que se deberán ver a lo largo del proceso.<br><br><strong>MEMORIAS:</strong><br>Se proporciona un resumen las reuniones."):
    isInArray(comovamos, lastmsg)==true?(smsg="Estimado cliente <br><br>Será un gusto informarle acerca del estado de su servicio. <br><br>Podría enviarnos un mensaje con su código de cliente, por favor."):
    isInArray(status, lastmsg)==true?(smsg="<strong>APRECIABLE CLIENTE</strong> <br><br> Para brindarle el estado del servicio es necesario que proporcione su código de cliente, este le fue proporcionado al momento de contratarnos. <br> <br> <strong>Ingrese su código<strong>"):
    isInArray(ayuda, lastmsg)==true?(smsg="Claro, será un gusto ayudarle.<br><br>A continuación le presento una serie de opciones que puede utilizar para comenzar a interactuar.<br><br>"):
    //checking if user input including SEARCH keyword
    //search result using iframe 
    lastmsg.substring(0, 6)=="RDDR"?(lastmsg.slice(7),smsg="<iframe src='https://drive.google.com/file/d/1SHoWzMCMTH6oKJ7Fu6bewr9OJ-jop4NL/preview' width='100%' height='450px' allow='autoplay'></iframe>"):
    lastmsg.substring(0, 6)=="VIDEO"?(lastmsg.slice(7),smsg="<embed width='100%' height='300px' src='https://www.youtube.com/watch?v=AqdAtTu8Aes' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></embed>"):
    (smsg="¡¡Lo siento!! <br><br>No poseo en mi inteligencia artificial una respuesta a su mensaje<br><br> Escriba <q><b>AYUDA </b></q> para ver las opciones que puede consultar o vuelva a redactar su mensaje. <br><br> ¡Gracias!");
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
    