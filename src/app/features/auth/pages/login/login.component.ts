import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AuthService, UiFeedbackService } from '@core';

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
  private uiFeedback = inject(UiFeedbackService);

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

    this.auth.login(email, password).subscribe({
      next: (res: boolean) => {
        if (!res) {
          this.loginFailed = true;
          this.uiFeedback.error('Login failed!');
          return;
        } else {
          this.loginFailed = false;
          this.uiFeedback.success('Successfully logged in!');
          this.router.navigateByUrl('/app');
        }
      },
    });
  }
}
