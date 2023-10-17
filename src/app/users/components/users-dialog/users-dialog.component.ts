import { Component, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersDialogComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User,
    ) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    if (this.user) {
      this.userForm.patchValue(this.user)
    }
  }
  
  get isFormValid() {
    return this.userForm.valid;
  }
      
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();}
      else {
        this.matDialogRef.close(this.userForm.value);
      }
    }
  }
