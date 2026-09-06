import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../hooks/hooks';
import { BookApi } from '../api/BookApi';

Given('the Book API is available', function (this: CustomWorld) {
  this.bookApi = new BookApi(this.requestContext);
});

Given('I have valid book details', function (this: CustomWorld) {
  this.bookData = {
    id: Math.floor(Math.random() * 900000) + 100000,
    title: 'Automation Test Book',
    description: 'Book created using Playwright API automation',
    pageCount: 200,
    excerpt: 'API automation test',
    publishDate: new Date().toISOString(),
  };

  this.bookId = this.bookData.id;
});

When(
  'I send a POST request to create the book',
  async function (this: CustomWorld) {
    this.response = await this.bookApi.createBook(this.bookData);
    this.responseBody = await this.response.json();
  }
);

Then(
  'the response status code should be 200',
  function (this: CustomWorld) {
    expect(this.response.status()).toBe(200);
  }
);

Then('the book should be created successfully', function (this: CustomWorld) {
  expect(this.responseBody.id).toBe(this.bookId);
  expect(this.responseBody.title).toBe('Automation Test Book');
});

Given('a valid book ID', function (this: CustomWorld) {
  this.bookId = 1;
});

When(
  'I send a GET request for the book',
  async function (this: CustomWorld) {
    this.response = await this.bookApi.getBook(this.bookId);
    this.responseBody = await this.response.json();
  }
);

Then(
  'the response should contain the correct book details',
  function (this: CustomWorld) {
    expect(this.responseBody.id).toBe(this.bookId);
  }
);

When(
  'I send a GET request to retrieve all books',
  async function (this: CustomWorld) {
    this.response = await this.bookApi.getAllBooks();
    this.responseBody = await this.response.json();
  }
);

Then('the response should contain a list of books', function (this: CustomWorld) {
  expect(Array.isArray(this.responseBody)).toBe(true);
  expect(this.responseBody.length).toBeGreaterThan(0);
});

When(
  'I send a PUT request to update the book',
  async function (this: CustomWorld) {
    const updatedBook = {
      id: this.bookId,
      title: 'Updated Automation Book',
      description: 'Updated using Playwright API automation',
      pageCount: 250,
      excerpt: 'Updated API test',
      publishDate: new Date().toISOString(),
    };

    this.response = await this.bookApi.updateBook(this.bookId, updatedBook);
    this.responseBody = await this.response.json();
  }
);

Then(
  'the book details should be updated successfully',
  function (this: CustomWorld) {
    expect(this.responseBody.id).toBe(this.bookId);
    expect(this.responseBody.title).toBe('Updated Automation Book');
  }
);

When(
  'I send a DELETE request for the book',
  async function (this: CustomWorld) {
    this.response = await this.bookApi.deleteBook(this.bookId);
  }
);

Given('a non-existing book ID', function (this: CustomWorld) {
  this.bookId = 999999;
});

Then(
  'the response status code should be 404',
  function (this: CustomWorld) {
    expect(this.response.status()).toBe(404);
  }
);

When(
  'I send a PUT request to update the non-existing book',
  async function (this: CustomWorld) {
    const updatedBook = {
      id: this.bookId,
      title: 'Non Existing Book',
      description: 'Negative test',
      pageCount: 100,
      excerpt: 'Negative test',
      publishDate: new Date().toISOString(),
    };

    this.response = await this.bookApi.updateBook(this.bookId, updatedBook);
  }
);

When(
  'I send a DELETE request for the non-existing book',
  async function (this: CustomWorld) {
    this.response = await this.bookApi.deleteBook(this.bookId);
  }
);