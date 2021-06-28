import { ValidatorFn, AbstractControl } from "@angular/forms";

export function validarCPF() : ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
    var valido = true;
    var strCPF = control.value;
    var Soma;
    var Resto;
    var i;
    Soma = 0;

    if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || strCPF == "44444444444"
    || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" || strCPF == "99999999999"){
      valido =  false;
    }
    for (i=1; i<=9; i++) {
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    }

    if ((Resto == 10) || (Resto == 11))  {
      Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(9, 10)) ) {
      valido = false;
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
    }

    if ((Resto == 10) || (Resto == 11))  {
      Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
      valido = false;
    }
    return !valido ? {'invalido': !valido} : null;
  }
};