function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro'
    } else if (vitorias > 10 && vitorias <= 20) {
        nivel = 'Bronze'
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = 'Prata'
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = 'Ouro'
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = 'Diamante'
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = 'Lendário'
    } else if (vitorias >= 101) {
        nivel = 'Imortal'
    }

    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)
}

calcularRank(15, 10)