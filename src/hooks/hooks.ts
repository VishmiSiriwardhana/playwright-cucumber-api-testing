import { request, APIRequestContext, APIResponse } from '@playwright/test';
import {
  Before,
  After,
  setWorldConstructor,
  World,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import { BookApi } from '../api/BookApi';

setDefaultTimeout(30000);

export class CustomWorld extends World {
  requestContext!: APIRequestContext;
  response!: APIResponse;
  bookApi!: BookApi;

  bookId!: number;

  bookData!: {
    id: number;
    title: string;
    description: string;
    pageCount: number;
    excerpt: string;
    publishDate: string;
  };

  responseBody!: any;
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.requestContext = await request.newContext({
    baseURL: 'https://fakerestapi.azurewebsites.net/api/v1',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  });
});

After(async function (this: CustomWorld) {
  await this.requestContext.dispose();
});