// server/src/types/index.ts
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}