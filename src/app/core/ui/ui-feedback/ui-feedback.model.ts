export type UiFeedbackType = 'success' | 'error' | 'info' | 'warning';

export interface IUiFeedback {
  message: string;
  type: UiFeedbackType;
  duration?: number;
}
