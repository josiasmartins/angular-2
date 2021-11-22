import { AbstractControl } from '@angular/forms';

// todo validators recebe como parêmetro AbstractControl
export function lowerCaseValidators(control: AbstractControl) {

  // // se ouver erro de validação, retorna um objeto javaScript, que vai ter uma propriedade que eu vou definir
  // return { lowerCase: true }
  // // se não houver erro de validação, retorna null
  // return null;

  // se não tiver em branco e oque estiver dentro não segue a expressão regular
  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return { lowerCase: true }
  }
  return null;
}
