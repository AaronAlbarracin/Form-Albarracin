import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

constructor(){}

miForm = new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  recordarme : new FormControl(false),
});
get isFormValid() {
  return this.miForm.valid;
}

onSubmit() {
  console.log('Estado del formulario:', this.miForm.value);
}
}
