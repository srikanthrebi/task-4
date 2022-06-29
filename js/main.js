function StartAD(){
  setTimeout(function(){
        
   document.getElementById("back-1").style.transform='translateY(5px) rotate(136deg)';
   document.getElementById("back-1").style.transition='all 1s ease';
   document.getElementById("back-2").style.transform='translateY(-4px) rotate(136deg)';
   document.getElementById("back-2").style.transition='all 1s ease';
  }, 250)

  setTimeout(function(){
    document.getElementById("text-1").style.transform='translateX(0)'
    document.getElementById("text-1").style.transition='all 1s ease'

  },750)
  setTimeout(function(){
    document.getElementById("text-2").style.transform='translateX(0)'
    document.getElementById("text-2").style.transition='all 1s ease'

  },1250)
  setTimeout(function(){
    document.getElementById("text-3").style.opacity='0.8'
    document.getElementById("text-3").style.transform='translate(0)'
    document.getElementById("text-3").style.transition='all 1s ease'
  },1750)
  setTimeout(function(){
    document.getElementById("text-4").style.transform='translateX(0)'
    document.getElementById("text-4").style.transition='all 1s ease'
  },2250)
  setTimeout(function(){
    document.getElementById("text-5").style.opacity='1'
    document.getElementById("text-5").style.transform='translateY(0)'
    document.getElementById("text-5").style.transition='all 1s ease'
  },2750)
  setTimeout(function(){
    document.getElementById("logo").style.transform='translateY(0)'
    document.getElementById("logo").style.transition='all 1s ease'
  },3250)
}window.load=StartAD();