import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userTokens: string[] = [];
  currentToken!: string;
  constructor() {}

  verifyToken(): any {
    this.userTokens.some((v) => {
      console.log(this.currentToken, v);
    });
    return false;
  }
}
