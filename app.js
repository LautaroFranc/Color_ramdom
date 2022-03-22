const Color= document.querySelector('.color');
const btm= document.getElementById("btm");
const btm2= document.getElementById("btm2");
const rango= document.getElementById("rango");
btm.classList.add("btms");
btm2.classList.add("btm2s");
let valor=1000;
let s=0;
let a,v,r;
let time=0;




btm.addEventListener("click",(e1)=>{
    
    btm.classList.add("borde");
    btm2.classList.remove("borde");

    btm.classList.remove("borde2");
    btm2.classList.add("borde2");
    
        
        if (rango.classList.contains("notacced")==false) {
  
            rango.classList.remove("accder")
            rango.classList.add("notacced")

        }
        
        
        
    
    if (!time) {
        time=setInterval(

            function c() {
               if (s==60) {
                   s=0;
               }
                r=Math.floor(Math.random()*90);
                v=Math.floor(Math.random()*9);
                a=Math.floor(Math.random()*9);
                
                Color.style.backgroundColor=`#${r}${v}${a}`;
                Color.innerHTML=`#${r}${v}${a}`;
              
                s++;            
            },valor)
            
    }
    
})


btm2.addEventListener("click",(e2)=>{
    
    btm2.classList.add("borde");
    btm.classList.remove("borde");
        
    btm2.classList.remove("borde2");
    btm.classList.add("borde2");

   
            if (rango.classList.contains("accder")==false) {
               

               rango.classList.remove("notacced");
               rango.classList.add("accder");

                rango.addEventListener("change",()=>{
                    valor=rango.value;
        
                    if (valor<100) {
                        rango.classList.add("min");
                        rango.classList.remove("max");
                    }else if (valor>500) {
                        
                    rango.classList.add("max");
                    rango.classList.remove("min");
                    }
                 
                })}
    
    clearInterval(time)
    
    time=null
})

