import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import {
  GET_ALL_EMPLOYEES,
  GET_EMPLOYEE_BY_ID,
  SEARCH_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
} from '../graphql/graphql.queries';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  getAllEmployees() {
    return this.apollo
      .watchQuery<{ getAllEmployees: Employee[] }>({
        query: GET_ALL_EMPLOYEES,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(result => result.data.getAllEmployees));
  }

  getEmployeeById(id: string) {
    return this.apollo
      .watchQuery<{ getEmployeeById: Employee }>({
        query: GET_EMPLOYEE_BY_ID,
        variables: { id },
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(result => result.data.getEmployeeById));
  }

  searchEmployees(department?: string, designation?: string) {
    return this.apollo
      .watchQuery<{ searchEmployees: Employee[] }>({
        query: SEARCH_EMPLOYEES,
        variables: { department, designation },
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map(result => result.data.searchEmployees));
  }

  addEmployee(employee: any) {
    return this.apollo.mutate({
      mutation: ADD_EMPLOYEE,
      variables: employee,
      refetchQueries: [{ query: GET_ALL_EMPLOYEES }]
    });
  }

  updateEmployee(id: string, employee: any) {
    return this.apollo.mutate({
      mutation: UPDATE_EMPLOYEE,
      variables: { id, ...employee },
      refetchQueries: [{ query: GET_ALL_EMPLOYEES }]
    });
  }

  deleteEmployee(id: string) {
    return this.apollo.mutate({
      mutation: DELETE_EMPLOYEE,
      variables: { id },
      refetchQueries: [{ query: GET_ALL_EMPLOYEES }]
    });
  }

  uploadPhoto(file: File) {
    const formData = new FormData();
    formData.append('employee_photo', file);
    return this.http.post<{ url: string; filename: string }>(
      `${environment.apiUrl}/upload`,
      formData
    );
  }
}
