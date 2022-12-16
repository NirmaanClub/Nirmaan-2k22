let toggler = document.getElementById('line');
  let call = document.getElementById('call');
  let flag = true;
  toggler.addEventListener('click',()=>{
    console.log('click')
    if(flag){
      call.style.display = 'block';
      flag = false;
    }
    else{
      call.style.display = 'none';
      flag = true;
    }
  })