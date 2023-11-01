const listNames = [];
const listAges = [];

const btn = document.getElementById("ibutton");

function validarForm() {
    let name = document.getElementById("iname").value;
    let age = document.getElementById("iage").value;

    if (name == "") {
        alert("Você deixou seu nome em branco! Por favor, preencha o formulário direito.");
        return false;
    } else if (age == "") {
        alert("Você deixou sua idade em branco! Por favor, preencha o formulário direito.");
        return false;
    } else {
        listNames.push(name);
        listAges.push(age);
        return true
    }
    
}

btn.addEventListener("click", (e) => {

    if(validarForm()){
        e.preventDefault();

        let name = document.getElementById("iname").value;
        let age = document.getElementById("iage").value;

        document.getElementById("iname").value = "";
        document.getElementById("iage").value = "";
        
        console.log(listNames);
        console.log(listAges);

        alert('Obrigado por preencher o formulário!');
    }
});
