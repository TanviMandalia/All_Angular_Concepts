import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
})
export class ReactiveFormComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phones: this.fb.array([]) // FormArray
    });
  }

  get phones(): FormArray {
    return this.registerForm.get('phones') as FormArray;
  }

  addPhone() {
    if (this.phones.length < 3) {
      this.phones.push(new FormControl('', Validators.required));
    }
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Reactive Form Data:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}