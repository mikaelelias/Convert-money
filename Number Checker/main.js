const btn = document.querySelector('.btn');

btn.addEventListener("click", function() {
    const inputCaptur = document.querySelector('.input-number').value;
    const valueP = document.querySelector('.response');
        
    if (inputCaptur < 0) {
        valueP.innerHTML = "O valor informado foi " + inputCaptur + ", valor NEGATIVO!";       
    } else {
        valueP.innerHTML = "O valor informado foi " + inputCaptur + ", valor POSITIVO!";
    }
})