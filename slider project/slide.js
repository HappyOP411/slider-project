const arr = [
    {
        id : 1, slide1 :"Graphics Designer", image :  "https://img.freepik.com/premium-photo/graphic-designer-working-computer-with-design-software_1106493-431711.jpg"
    },
    {
        id : 2,  slide1 :"Web Devloper", image : "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg"
    }, 
    {
        id : 3, slide1 :"UI UX DESIGNER",  image :"https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
    }, 
  ];
  
  const img = document.querySelector("#image");
  const slide1 = document.querySelector("#slide1");
  
  const prev = document.querySelector("#prev-btn");
  const next = document.querySelector("#next-btn");
  
  let count = 0;
  
  function showWinner(){
    arr[count];
    img.src =  arr[count].image;
    slide1.innerText = arr[count].slide1;
  }
  
  function slide (){
    next.addEventListener("click" , () => {
        count++;
        if(count > arr.length -1) {
            count = 0;
                }
        showWinner();
    })
    
    prev.addEventListener("click" , () => {
        count--;
        if(count < 0) {
            count = arr.length-1;
                }
        showWinner();
    })
  }
  
  window.addEventListener("DOMContentLoaded" , () =>{
    slide();
  
  });
  
  console.log(count);