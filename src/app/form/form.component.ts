import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }

  miForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get isFormValid() {
    return this.miForm.valid;
  }

  onSubmit() {
    console.log('Estado del formulario:', this.miForm.value);
  }

}
