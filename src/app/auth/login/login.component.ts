import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  showMessages: any = {};

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  rememberMe = false;

  constructor(protected cd: ChangeDetectorRef,
              protected router: Router) {
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
  }
}
