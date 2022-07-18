import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

export function arrayNotEmpty(control: AbstractControl): ValidationErrors | null {
  if (control.value.length == 0) {
    return { empty: true }
  }

  return null;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  fooForm: FormGroup;

  names = ['Alpha', 'Beta', 'Gamma', 'Omega'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fooForm = this.fb.group({
      names: new FormControl([], [Validators.required, arrayNotEmpty])
    });
  }

  public campoRequerido(field: string): boolean {
    let campo = this.fooForm.controls[field];
    return campo.touched && campo.errors != null && campo.errors['required'];
  }

  public campoNoVacio(field: string): boolean {
    let campo = this.fooForm.controls[field];
    return campo.touched && campo.errors != null && campo.errors['empty'];
  }

  public onSubmit(): void {
    console.log(this.fooForm.value);
  }

}
