import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-employee',
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
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  loading = false;
  loadingData = true;
  employeeId: string = '';
  selectedFile: File | null = null;
  photoPreview: string | null = null;
  existingPhoto: string | null = null;
  apiUrl = environment.apiUrl;

  genders = ['Male', 'Female', 'Other'];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
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

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id') || '';
    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe({
        next: (employee: any) => {
          this.employeeForm.patchValue({
            first_name: employee.first_name,
            last_name: employee.last_name,
            email: employee.email,
            gender: employee.gender,
            designation: employee.designation,
            salary: employee.salary,
            date_of_joining: new Date(employee.date_of_joining),
            department: employee.department
          });
          this.existingPhoto = employee.employee_photo || null;
          this.loadingData = false;
        },
        error: () => {
          this.loadingData = false;
          this.snackBar.open('Employee not found', 'Close', { duration: 3000 });
          this.router.navigate(['/employees']);
        }
      });
    }
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
          this.updateEmployee(formValue);
        },
        error: () => {
          this.loading = false;
          this.snackBar.open('Failed to upload photo', 'Close', { duration: 3000 });
        }
      });
    } else {
      if (this.existingPhoto) {
        formValue.employee_photo = this.existingPhoto;
      }
      this.updateEmployee(formValue);
    }
  }

  private updateEmployee(data: any) {
    this.employeeService.updateEmployee(this.employeeId, data).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Employee updated successfully!', 'Close', { duration: 3000 });
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        this.loading = false;
        const message = err?.message || 'Failed to update employee';
        this.snackBar.open(message, 'Close', { duration: 5000 });
      }
    });
  }
}
