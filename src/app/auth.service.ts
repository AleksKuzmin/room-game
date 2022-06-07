import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userTokens: string[] = [];

  constructor(private utilityService: UtilityService) {}

  verifyToken(currentToken: string): any {
    for (let token of this.userTokens) {
      if (token === currentToken) return true;
    }
    this.utilityService.lockedDoorColor(currentToken);
    console.log(currentToken + 'from auth');

    return false;
  }
}
