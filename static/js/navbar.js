let toggler = document.getElementById('line');
  let call = document.getElementById('call');
  let events = document.getElementById('name');
  // console.log(events);
  let flag = true;
  toggler.addEventListener('click',()=>{
    // console.log('click')
    if(flag){
      call.style.display = 'block';
      flag = false;
      if(events!=null)
        events.style.zIndex = "-1";
    }
    else{
      call.style.display = 'none';
      if(events!=null)
        events.style.zIndex = "unset";
      flag = true;
    }
  })


let observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
      if (element.isIntersecting  ) {
          navbar.style.transition = "0.5s";
          navbar.style.transform = "translateY(0px)";
        }
    })
});

let navbar = document.getElementById("nav");
observer.observe(navbar);  