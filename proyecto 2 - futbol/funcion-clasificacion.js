console.log (clasificacion.standings[0].table);
    // [0].table

function infoClasificacion(clasificar){
    let cuerpoTable = document.getElementById("tabla-clasificacion");
    for(let i = 0; i < clasificar.length; i++){//  inicializamos; vueltas que tiene que dar el bucle menor que el número de elementos; sumamos cada vuelta
        const tr = document.createElement("tr");
        let posicion = clasificar[i].position;
        let equipo = clasificar[i].team.name;
        let partidosJugados = clasificar[i].playedGames;
        let victorias = clasificar[i].won;
        let empates = clasificar[i].draw;
        let derrotas = clasificar[i].lost;
        // let golesFavor
        // let golesContra
        // let diferenciaGoles
        // let puntos = standings[i].points;
    


    let tablaClasificacion = [posicion, equipo, partidosJugados, victorias, empates, derrotas];

    for(let j = 0; j < tablaClasificacion.length; j++){
        const td = document.createElement("td");
        td.append(tablaClasificacion[j]);
        tr.appendChild(td);
    }
    cuerpoTable.appendChild(tr);
    }
}

infoClasificacion(clasificacion.standings[0].table);

// parametro al crear la function
// argumento cuando creamos la llamada a la función