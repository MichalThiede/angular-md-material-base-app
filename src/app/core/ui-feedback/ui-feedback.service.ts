import { inject, Injectable } from '@angular/core';
import { MaterialUiFeedbackAdapter } from './material-ui-feedback.adapter';
import { IUiFeedback } from './ui-feedback.model';

@Injectable({ providedIn: 'root' })
export class UiFeedbackService {
  private adapter = inject(MaterialUiFeedbackAdapter);

  public success(message: string, duration?: number): void {
    this.show({ message, type: 'success', duration });
  }

  public error(message: string, duration?: number): void {
    this.show({ message, type: 'error', duration });
  }

  public info(message: string, duration?: number): void {
    this.show({ message, type: 'info', duration });
  }

  public warning(message: string, duration?: number): void {
    this.show({ message, type: 'warning', duration });
  }

  private show(feedback: IUiFeedback): void {
    this.adapter.show(feedback);
  }
}
