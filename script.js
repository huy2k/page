function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
const emaill = document.getElementById('Email').value;
const emailll = document.getElementById('email1').value;
  function checkemptyMessage(){
    if( document.getElementById('name1').value == '' ){
      document.getElementsByClassName('error')[3].style.visibility='initial'; 
      }
      if( document.getElementById('email1').value == '' || !validateEmail(emailll) ){
        document.getElementsByClassName('error')[4].style.visibility='initial'; 
      } 
    
  }
  function checkemptyTrial(){
    if( document.getElementById('name').value == '' ){
        document.getElementsByClassName('error')[0].style.visibility='initial'; 
      }
    if( document.getElementById('Email').value == '' ){
      document.getElementsByClassName('error')[1].style.visibility='initial'; 
      } 
    if( document.getElementById('txtPass').value == '' ){
      document.getElementsByClassName('error')[2].style.visibility='initial'; 
      } 
      // else{ alert("succsess")}
  }
  

  

  $(document).ready(function(){
    $(".secction").mouseenter(function(){
      var div = $(".image");   
       div.animate({left: '-45px'}, "slow");
    });
    $(".standar").mouseenter(function(){
      var div = $(".standar .image");   
       div.animate({left: '65px'}, "slow");
       div.animate({top: '-15px'}, "slow");
    });

    $(".awesome").mouseenter(function(){
      var divv = $(".awesome .listawe");   
      
       divv.animate({bottom: '35px'}, "slow");
    });
    $("#Reviews").mouseenter(function(){
      var div = $(".awesome .reviews");        
       div.animate({top: '115px'}, "slow");
    });
    
  });

