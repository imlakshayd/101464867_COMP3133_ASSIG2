import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'employees',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/employee-list/employee-list.component').then(
        m => m.EmployeeListComponent
      )
  },
  {
    path: 'employees/add',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/add-employee/add-employee.component').then(
        m => m.AddEmployeeComponent
      )
  },
  {
    path: 'employees/view/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/view-employee/view-employee.component').then(
        m => m.ViewEmployeeComponent
      )
  },
  {
    path: 'employees/edit/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/edit-employee/edit-employee.component').then(
        m => m.EditEmployeeComponent
      )
  },
  { path: '**', redirectTo: '/login' }
];
