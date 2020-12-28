const imagens = document.querySelector(".image img")
var i = 0;
const imgCarrossel = ["./img/JM5.jpg",
"./img/JM1.jpg",
"./img/JM2.jpg",
"./img/JM3.jpg",
"./img/JM4.jpg"]

function disparaSlideShow(){
    setInterval(()=>{
        
        if(i>4)i = 0
        imagens.src = imgCarrossel[i++]
       
    },5000)
}
  
disparaSlideShow()

const linksInternos = document.querySelectorAll(".menu-principal a[href^='#']")
    
    function scrollSuave(event){
     event.preventDefault();
     const href = event.target.getAttribute('href');
     const section = document.querySelector(href);
     section.scrollIntoView({
         behavior:"smooth",
         block: "start"
     })
     //Forma Alternativa
      //  const topo = section.offsetTop
     //  window.scrollTo({
     //      top:topo,
     //      behavior: "smooth"
     //  })
       
     }
     
      linksInternos.forEach((el)=>{
          el.addEventListener("click", scrollSuave)
       
      })
   
    
      // function mostraConteudo(){
        const Conteudo = document.querySelectorAll(".texto-primeiro")
        // if(conteudoFaq.length){
        //     conteudoFaq[0].classList.add("seta");
        //     conteudoFaq[0].nextElementSibling.classList.add("active");
            
            
            function ativarResposta(){
               
            //  this.classList.toggle("seta")
              
             this.children[0].classList.toggle("active");
            
            }
            
            Conteudo.forEach((el)=>{
                el.addEventListener("click", ativarResposta)
            })
       // }
    
    //}
    