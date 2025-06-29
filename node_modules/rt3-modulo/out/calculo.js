class Calculo {
}
class Somador extends Calculo {
    calcular(numero1, numero2) {
        return numero1 + numero2;
    }
}
class Subtrador extends Calculo {
    calcular(numero1, numero2) {
        return numero1 - numero2;
    }
}
class Divisor extends Calculo {
    calcular(numero1, numero2) {
        return numero1 / numero2;
    }
}
class Multiplicador extends Calculo {
    calcular(numero1, numero2) {
        return numero1 * numero2;
    }
}
export { Somador, Subtrador, Divisor, Multiplicador };
