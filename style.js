if( document.getElementById('name').value === '' ){
    alert('empty');
  }

  function checkemptyMessage(){
    if( document.getElementById('name').value === '' ){
        alert(' Tên không được để trống');
      }
      if( document.getElementById('Email').value === '' ){
        alert(' Email không được để trống');
      } 
    
  }
  function checkemptyTrial(){
    if( document.getElementById('name').value === '' ){
        document.getElementsByClassName('error').style.visibility='visiable';
      }
    if( document.getElementById('Email').value === '' ){
        alert(' Email không được để trống');
      } 
    if( document.getElementById('txtPass').value === '' ){
        alert(' Mât khẩu không được để trống');
      } 
      else{ alert("succsess")}
  }
  

