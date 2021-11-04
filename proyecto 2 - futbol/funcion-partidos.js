console.log(partidos.matches);

function infoPartidos(matches){
    let cuerpoTable = document.getElementById("tabla-partidos");
    for(let i = 0; i < matches.length; i++){//  inicializamos; vueltas que tiene que dar el bucle menor que el número de elementos; sumamos cada vuelta
        const tr = document.createElement("tr");
        let jornada = matches[i].matchday;
        let equipoLocal = document.createElement("p");
        equipoLocal.innerHTML = matches[i].homeTeam.name;


        let resultados = [jornada, equipoLocal]; //el orden afecta a como se imprime en pantalla

        for(let j = 0; j < resultados.length; j++){
            const td = document.createElement("td");
            td.append(resultados[j]);
            tr.appendChild(td);
        }
        cuerpoTable.appendChild(tr);
    } 
}
infoPartidos(partidos.matches);