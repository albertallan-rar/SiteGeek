function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    
    return request.responseText;
}

function criaLinha(movie){
    let linha = document.createElement("tr")
    let tdId = document.createElement("td")
    let tdNome = document.createElement("td")
    tdId.innerHTML = movie.id;
    tdNome.innerHTML = `${movie.title}`;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    
    
    return linha;
    
}

function main(){
    
    //let info = fazGet("https://api.themoviedb.org/3/movie/550?api_key=")
    let info = fazGet("https://api.themoviedb.org/3/movie/550?api_key=9037a6ab50e636415149da73b2527182")
    let movie = JSON.parse(info);
    let tabela = window.document.getElementById('tabela')

    console.log(movie)
    /*
    Array.from(movie).forEach(element =>{
        let linha = criaLinha(element);
        
        tabela.appendChild(linha);
    })*/
    movie.forEach(element =>{
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    })
    
}

main()