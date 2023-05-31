const dadosLoja = "./data/loja.json";

async function inicializaLoja() {
    const divLoja = document.getElementById("loja");
    const request = await fetch(dadosLoja);
    const response = await request.json();
    const keys = Object.keys(response);
    // console.log(response);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const obj = response[key];
        console.log(obj);
        
        const divCard = document.createElement("div");
        divCard.className = "card col-4";
        divLoja.appendChild(divCard);

        const ibagem = document.createElement("img");
        ibagem.src = obj.imagem;
        ibagem.className = "card-img-top";
        divCard.appendChild(ibagem);

        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body text-center";
        divCard.appendChild(divCardBody);

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.textContent = key;
        divCardBody.appendChild(h5);
    }

}