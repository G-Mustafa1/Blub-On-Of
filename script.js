var blub = document.getElementById('Blub')
      function imgBlub(){
         if(blub.src.match("bulboff")){
            blub.src="img/pic_bulb-on.gif"
         }
         else{
            blub.src="img/pic_bulboff.gif"
         }
      }
      function blubOn(){
         blub.src="img/pic_bulb-on.gif"
      }
      function blubOf(){
         blub.src="img/pic_bulboff.gif"
      }