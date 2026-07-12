export interface CreateShortUrlData {
  originalUrl: string;
  userId: string;
  customAlias?: string;
  expiresAt?: Date;
}
