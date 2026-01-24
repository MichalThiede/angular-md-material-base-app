export interface IAppConfig {
  env: {
    name: 'dev' | 'test' | 'prod';
  };
  api: {
    baseUrl: string;
  };
  ui: {
    isEnabled: boolean;
    defaultTheme: 'light' | 'dark' | 'system';
  };
  features?: Record<string, boolean>;
}
