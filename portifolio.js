
document.querySelector(".img_habi1").addEventListener("click", () => {
    alert("Html, 3 messes de estudo");
});

document.querySelector(".img_habi2").addEventListener("click", () => {
    alert("Css, 3 messes de estudo");
});

document.querySelector(".img_habi3").addEventListener("click", () => {
    alert("Js, 1 mês de estudo");
});

const form = document.querySelector("#contactForm")
const nameinput = document.querySelector("#nome")
const emailinput = document.querySelector("#email")
const telinput = document.querySelector("#celular")
const mensageninput = document.querySelector("#mensagem")

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    if(nameinput.value === "" ) {
    alert("Porfavor, preencha seu nome:");
    return;
    }
    
    
    if(emailinput.value === "" || !Emailvalidacao(emailinput.value) ) {
    alert("Porfavor, preencha seu email:")
      return;  
    }

    form.submit();
});

function Emailvalidacao(email){
    const emailregex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailregex.text(email)){
        return true;
    }

    return false;
}