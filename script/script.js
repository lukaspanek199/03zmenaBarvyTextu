function changeText(){
    var element = document.getElementById("nadpis");
    switch (element.innerHTML) {
      case "Text1":{
        element.innerHTML = "Text2";
        element.style.color = "purple";
      }break;
      case "Text2":{
        element.innerHTML = "Text3";
        element.style.color = "blue";
      }break;
      case "Text3":{
        element.innerHTML = "Text1";
        element.style.color = "green";
      }break;
    }
}
function changeColor() {
    var element = document.getElementById("nadpis");
    switch(element.style.color){
      case "black":{element.style.color = "green";break;}
      case "green":{element.style.color = "gold";break;}
      case "gold":{element.style.color = "black";break;}

      case "red":{element.style.color = "purple";break;}
      case "purple":{element.style.color = "cyan";break;}
      case "cyan":{element.style.color = "red";break;}

      case "pink":{element.style.color = "blue";break;}
      case "blue":{element.style.color = "orange";break;}
      case "orange":{element.style.color = "pink";break;}

      default:{element.style.color = "green"}
    }
}
