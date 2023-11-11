const btn = document.querySelector(".btn_convert");

btn.addEventListener("click", function() {
    let value = document.querySelector(".value");
    let valor_digitado = value.value;
    console.log("Valor digitado pelo usuário: " + valor_digitado);
});
