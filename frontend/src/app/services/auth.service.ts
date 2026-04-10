import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { LOGIN, SIGNUP } from '../graphql/graphql.queries';
import { map } from 'rxjs/operators';
import { AuthPayload } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  private userKey = 'auth_user';

  constructor(private apollo: Apollo, private router: Router) {}

  login(username: string, password: string) {
    return this.apollo
      .watchQuery<{ login: AuthPayload }>({
        query: LOGIN,
        variables: { username, password },
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(
        map(result => {
          const data = result.data?.login;
          if (data) {
            this.setSession(data.token!, data.user);
          }
          return data!;
        })
      );
  }

  signup(username: string, email: string, password: string) {
    return this.apollo
      .mutate<{ signup: AuthPayload }>({
        mutation: SIGNUP,
        variables: { username, email, password }
      })
      .pipe(
        map(result => {
          const data = result.data!.signup;
          this.setSession(data.token, data.user);
          return data;
        })
      );
  }

  private setSession(token: string, user: any) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
