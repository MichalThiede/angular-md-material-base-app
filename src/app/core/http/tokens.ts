/* eslint-disable @typescript-eslint/naming-convention */
import { InjectionToken } from '@angular/core';
import { HttpContextToken } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
export const SKIP_LOADING = new HttpContextToken<boolean>(() => false);
