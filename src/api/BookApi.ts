import { APIRequestContext, APIResponse } from '@playwright/test';

export class BookApi {
  private readonly baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

  constructor(private readonly request: APIRequestContext) {}

  async createBook(bookData: object): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/Books`, {
      data: bookData,
    });
  }

  async getBook(bookId: number): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}/Books/${bookId}`);
  }

  async getAllBooks(): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}/Books`);
  }

  async updateBook(bookId: number, bookData: object): Promise<APIResponse> {
    return await this.request.put(`${this.baseUrl}/Books/${bookId}`, {
      data: bookData,
    });
  }

  async deleteBook(bookId: number): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}/Books/${bookId}`);
  }
}