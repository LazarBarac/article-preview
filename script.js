const share = document.getElementById("share");
const klik = document.getElementById("klik");
const osoba = document.getElementById("osoba");


share.addEventListener("click", deli);

/*                                             //Kad je ovo ukljuceno, prepozna da je flex i odradi ovu funkciju, a u petlji ne radi.
share.addEventListener("click", zaFlex);
function zaFlex(){
    if(klik.style.display = "flex") {
        klik.style.display = "none";
    }
}
*/


function deli (){
    if(klik.style.display == "none"){
        
        if(window.innerWidth < 800 ){
            osoba.style.display = "none";
            
            const a = document.createElement("img");
            a.setAttribute("src", "file:///C:/Users/Lazar/Desktop/Frontend%20mentor/1.%20Noob/6.%20article-preview-component-master/images/icon-share.svg");
            a.setAttribute("alt", "share");
            a.setAttribute("height", "25px");
            a.setAttribute("width", "25px");
            a.setAttribute("id", "share1");

            klik.appendChild(a);
            klik.style.display = "flex";
           
            const share1 = document.getElementById("share1");
            share1.addEventListener("click", sakrij);

            function sakrij (){
            klik.style.display = "none";
            osoba.style.display = "flex";
            klik.removeChild(a);
            }
        } 

        else {
            klik.style.display = "flex";               
    
        }
    }
    
    else if(klik.style.display = "flex"){               
        klik.style.display= "none";
        
    }
    

}

