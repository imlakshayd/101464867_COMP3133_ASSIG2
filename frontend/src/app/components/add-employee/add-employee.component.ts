import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;
  loading = false;
  selectedFile: File | null = null;
  photoPreview: string | null = null;

  genders = ['Male', 'Female', 'Other'];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.employeeForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(0)]],
      date_of_joining: ['', [Validators.required]],
      department: ['', [Validators.required]]
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;

    this.loading = true;
    const formValue = { ...this.employeeForm.value };
    formValue.salary = parseFloat(formValue.salary);
    formValue.date_of_joining = new Date(formValue.date_of_joining).toISOString().split('T')[0];

    if (this.selectedFile) {
      this.employeeService.uploadPhoto(this.selectedFile).subscribe({
        next: (res) => {
          formValue.employee_photo = res.url;
          this.saveEmployee(formValue);
        },
        error: () => {
          this.loading = false;
          this.snackBar.open('Failed to upload photo', 'Close', { duration: 3000 });
        }
      });
    } else {
      this.saveEmployee(formValue);
    }
  }

  private saveEmployee(data: any) {
    this.employeeService.addEmployee(data).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Employee added successfully!', 'Close', { duration: 3000 });
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        this.loading = false;
        const message = err?.message || 'Failed to add employee';
        this.snackBar.open(message, 'Close', { duration: 5000 });
      }
    });
  }
}
