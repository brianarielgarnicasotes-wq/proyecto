function calcularCarburante(){

    let reserva =
    parseFloat(document.getElementById("reservaInicial").value);

    let consumo =
    parseFloat(document.getElementById("consumoDiario").value);

    let reab =
    parseFloat(document.getElementById("reabastecimiento").value);

    let critico =
    parseFloat(document.getElementById("nivelCritico").value);

    if(
        isNaN(reserva) ||
        isNaN(consumo) ||
        isNaN(reab) ||
        isNaN(critico)
    ){
        alert("Complete todos los campos.");
        return;
    }

    let dias = 0;
    let actual = reserva;

    while(actual > critico){

        actual = actual + reab - consumo;
        dias++;

        if(dias > 1000){
            break;
        }
    }

    let resultado =
    document.getElementById("resultadoCarburante");

    if(reserva > critico * 2){

        resultado.innerHTML = `
        <div class="normal">
            🟢 <strong>Estado NORMAL</strong><br>
            Reserva inicial: ${reserva} litros<br>
            Llegará al nivel crítico en
            <strong>${dias}</strong> días.
        </div>`;
    }
    else if(reserva > critico){

        resultado.innerHTML = `
        <div class="alerta">
            🟡 <strong>Estado DE ALERTA</strong><br>
            Reserva inicial: ${reserva} litros<br>
            Llegará al nivel crítico en
            <strong>${dias}</strong> días.
        </div>`;
    }
    else{

        resultado.innerHTML = `
        <div class="critico">
            🔴 <strong>Estado CRÍTICO</strong><br>
            La reserva ya se encuentra en un nivel crítico.
        </div>`;
    }
}

function calcularTransporte(){

    let normal =
    parseFloat(document.getElementById("distanciaNormal").value);

    let desvio =
    parseFloat(document.getElementById("distanciaDesvio").value);

    let costo =
    parseFloat(document.getElementById("costoKm").value);

    let viajes =
    parseFloat(document.getElementById("viajes").value);

    if(
        isNaN(normal) ||
        isNaN(desvio) ||
        isNaN(costo) ||
        isNaN(viajes)
    ){
        alert("Complete todos los campos.");
        return;
    }

    let costoNormal = normal * costo;
    let costoDesvio = desvio * costo;

    let diferencia = costoDesvio - costoNormal;
    let semanal = diferencia * viajes;

    let resultado =
    document.getElementById("resultadoTransporte");

    if(diferencia <= 5){

        resultado.innerHTML = `
        <div class="normal">
            🟢 <strong>Estado NORMAL</strong><br>
            Costo normal: ${costoNormal.toFixed(2)} Bs<br>
            Costo desvío: ${costoDesvio.toFixed(2)} Bs<br>
            Diferencia: ${diferencia.toFixed(2)} Bs
        </div>`;
    }
    else if(diferencia <= 15){

        resultado.innerHTML = `
        <div class="alerta">
            🟡 <strong>Estado DE ALERTA</strong><br>
            Diferencia por viaje:
            ${diferencia.toFixed(2)} Bs<br>
            Gasto semanal:
            ${semanal.toFixed(2)} Bs
        </div>`;
    }
    else{

        resultado.innerHTML = `
        <div class="critico">
            🔴 <strong>Estado CRÍTICO</strong><br>
            Diferencia por viaje:
            ${diferencia.toFixed(2)} Bs<br>
            Gasto semanal:
            ${semanal.toFixed(2)} Bs
        </div>`;
    }
}

function calcularCompra(){

    let presupuesto =
    parseFloat(document.getElementById("presupuesto").value);

    let compra =
    parseFloat(document.getElementById("compra").value);

    if(
        isNaN(presupuesto) ||
        isNaN(compra)
    ){
        alert("Complete todos los campos.");
        return;
    }

    let resultado =
    document.getElementById("resultadoCompra");

    let porcentaje =
    (compra / presupuesto) * 100;

    if(compra <= presupuesto * 0.8){

        let saldo = presupuesto - compra;

        resultado.innerHTML = `
        <div class="normal">
            🟢 <strong>Estado NORMAL</strong><br>
            Saldo restante:
            ${saldo.toFixed(2)} Bs
        </div>`;
    }
    else if(compra <= presupuesto){

        let saldo = presupuesto - compra;

        resultado.innerHTML = `
        <div class="alerta">
            🟡 <strong>Estado DE ALERTA</strong><br>
            Está utilizando
            ${porcentaje.toFixed(1)}% del presupuesto.<br>
            Saldo:
            ${saldo.toFixed(2)} Bs
        </div>`;
    }
    else{

        let faltante = compra - presupuesto;

        resultado.innerHTML = `
        <div class="critico">
            🔴 <strong>Estado CRÍTICO</strong><br>
            El presupuesto no alcanza.<br>
            Faltan:
            ${faltante.toFixed(2)} Bs
        </div>`;
    }
}

function limpiarCarburante(){

    document.getElementById("reservaInicial").value="";
    document.getElementById("consumoDiario").value="";
    document.getElementById("reabastecimiento").value="";
    document.getElementById("nivelCritico").value="";
    document.getElementById("resultadoCarburante").innerHTML="";
}

function limpiarTransporte(){

    document.getElementById("distanciaNormal").value="";
    document.getElementById("distanciaDesvio").value="";
    document.getElementById("costoKm").value="";
    document.getElementById("viajes").value="";
    document.getElementById("resultadoTransporte").innerHTML="";
}

function limpiarCompra(){

    document.getElementById("presupuesto").value="";
    document.getElementById("compra").value="";
    document.getElementById("resultadoCompra").innerHTML="";
}
