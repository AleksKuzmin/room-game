import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  kitchenToken!: string;
  constructor(
    private utilityService: UtilityService,
    private authService: AuthService
  ) {}

  getToken() {
    this.kitchenToken = this.utilityService.tokens[1];
  }
  checkToken() {
    this.authService.currentToken = this.kitchenToken;
  }
  ngOnInit(): void {
    this.getToken();
  }
}
