import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/auth/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatButton, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private auth = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  public loginFailed = false;

  public readonly form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  public onSubmit(): void {
    this.loginFailed = false;

    if (this.form.invalid) {
      this.loginFailed = true;
      this.form.markAllAsTouched();
      return;
    }

    let { email, password } = this.form.value;

    if (!email || !password) {
      this.loginFailed = true;
      return;
    }

    const SUCCESS = this.auth.login(email, password);

    if (!SUCCESS) {
      this.loginFailed = true;
      return;
    }

    this.loginFailed = false;

    this.router.navigateByUrl('/auth');
  }
}
