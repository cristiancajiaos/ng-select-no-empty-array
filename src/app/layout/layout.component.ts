import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      names: new FormControl([], [Validators.required])
    });
  }

  public campoValido(field: string): boolean {
    let campo = this.fooForm.controls[field];
    return campo.touched && campo.errors != null && campo.errors['required'];
  }

  public onSubmit(): void {
    console.log(this.fooForm.value);
  }

}
