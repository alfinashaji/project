
window.addEventListener('load', 
  function() { 
    document.querySelector("#therapycentre").style.display="none";
    document.querySelector("#ayurvedic").style.display="none";
    document.querySelector("#yoga").style.display="none";
    document.querySelector("#herbalproduct").style.display="block"
  }, false);

   




function tabSwitch(event,value){


    tablinks = document.getElementsByClassName("button1");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("ki", "");
    }
    // document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += "ki";
  

   if(value==1){

    document.querySelector("#therapycentre").style.display="none";
    document.querySelector("#ayurvedic").style.display="none";
    document.querySelector("#yoga").style.display="none";
    document.querySelector("#herbalproduct").style.display="block";
   }

else if(value==2){

    document.querySelector("#herbalproduct").style.display="none";
    document.querySelector("#ayurvedic").style.display="none";
    document.querySelector("#yoga").style.display="none";
    document.querySelector("#therapycentre").style.display="block";


}

else if(value==3){

    document.querySelector("#herbalproduct").style.display="none";
    document.querySelector("#therapycentre").style.display="none";
    document.querySelector("#yoga").style.display="none";
    document.querySelector("#ayurvedic").style.display="block";


}

else if(value==4){

    document.querySelector("#herbalproduct").style.display="none";
    document.querySelector("#therapycentre").style.display="none";
    document.querySelector("#ayurvedic").style.display="none";
    document.querySelector("#yoga").style.display="block";


}


}