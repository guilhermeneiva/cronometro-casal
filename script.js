document.addEventListener('DOMContentLoaded', () => {
    const dataInicial = new Date('2024-04-07T00:00:00');

    const displayAnos = document.getElementById("anos");
    const labelAnos = document.getElementById("label-anos");
    const displayMeses = document.getElementById("meses");
    const labelMeses = document.getElementById("label-meses");
    const displayDias = document.getElementById("dias");
    const displayHoras = document.getElementById("horas");
    const displayMinutos = document.getElementById("minutos");
    const displaySegundos = document.getElementById("segundos");

    function rodarCronometro() {
        const dataAtual = new Date();

        if (dataAtual.getTime() < dataInicial.getTime()) {
            displayAnos.textContent = "00";
            labelAnos.textContent = "anos";
            displayMeses.textContent = "00";
            labelMeses.textContent = "meses";
            displayDias.textContent = "00";
            displayHoras.textContent = "00";
            displayMinutos.textContent = "00";
            displaySegundos.textContent = "00";
            return;
        }

        let anosCompletos = dataAtual.getFullYear() - dataInicial.getFullYear();
        let mesesCompletos = dataAtual.getMonth() - dataInicial.getMonth();

        if (dataAtual.getDate() < dataInicial.getDate()) {
            mesesCompletos--;
        }

        if (mesesCompletos < 0) {
            mesesCompletos += 12;
            anosCompletos--;
        }

        const msPorDia = 1000 * 60 * 60 * 24;
        const diferencaTotalMs = dataAtual.getTime() - dataInicial.getTime();
        const diasTotaisAcumulados = Math.floor(diferencaTotalMs / msPorDia);

        const msRestantesDoDia = diferencaTotalMs % msPorDia;

        const horasRestantes = Math.floor(msRestantesDoDia / (1000 * 60 * 60));
        const minutosRestantes = Math.floor((msRestantesDoDia % (1000 * 60 * 60)) / (1000 * 60));
        const segundosRestantes = Math.floor(((msRestantesDoDia % (1000 * 60 * 60)) % (1000 * 60)) / 1000);

        displayAnos.textContent = String(anosCompletos).padStart(2, '0');
        if (anosCompletos == 1) {
            labelAnos.textContent = "ano"
        } else {
            labelAnos.textContent = "anos"
        };


        displayMeses.textContent = String(mesesCompletos).padStart(2, '0');
        if (mesesCompletos == 1) {
            labelMeses.textContent = "mês";
        } else {
            labelMeses.textContent = "meses";
        }

        displayDias.textContent = String(diasTotaisAcumulados).padStart(2, '0');
        displayHoras.textContent = String(horasRestantes).padStart(2, '0');
        displayMinutos.textContent = String(minutosRestantes).padStart(2, '0');
        displaySegundos.textContent = String(segundosRestantes).padStart(2, '0');
    }

    rodarCronometro();
    setInterval(rodarCronometro, 1000);
});