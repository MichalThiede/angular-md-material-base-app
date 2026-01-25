import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUiFeedback } from './ui-feedback.model';

@Injectable({ providedIn: 'root' })
export class MaterialUiFeedbackAdapter {
  private snackBar = inject(MatSnackBar);

  public show(feedback: IUiFeedback): void {
    this.snackBar.open(feedback.message, 'OK', {
      duration: feedback.duration ?? 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [`ui-feedback-${feedback.type}`],
    });
  }
}
