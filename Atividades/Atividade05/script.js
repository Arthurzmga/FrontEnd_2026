function add(){
    const a = document.getElementById("add");

    a.innerHTML = `<div id="Cards" class="d-flex mx-3 flex-row align-items-center">
                <div class="card" style="width: 22rem;" aria-hidden="true">
                    <img src="img/img_.svg" class="card-img-top" alt="Placeholder Copa" style="cursor: pointer;" onclick="revelar(this)">

                    <div class="card-body">
                        <h5 id="Nome" class="card-title">
                            <span class="card-title">Lucas Tolentino Coelho de Lima</span>
                            <span id="Rank" class="badge text-bg-secondary">8,8</span>
                        </h5>
                        <p class="card-text">
                            <span id="Data_Nas"><strong>Nascimento:</strong> 27/08/1997 (28 anos) </span><br>
                            <span id="Altura"><strong>Altura:</strong>1,80 m </span><br>
                            <span id="Posição "><strong>Posição:</strong> Meio-campista / Atacante</span><br>
                        </p>
                    </div>
                </div>
            </div>
` 
}

function revelar(elemento) {
    elemento.src = "img/Lucas_Paqueta.jfif";
}