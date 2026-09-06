# Playwright API Automation Testing

[![API Tests]([https://github.com/VishmiSiriwardhana/playwright-cucumber-api-testing/actions/workflows/ci.yml/badge.svg)](https://github.com/VishmiSiriwardhana/playwright-cucumber-api-testing/actions/workflows/ci.yml)](https://github.com/VishmiSiriwardhana/playwright-cucumber-api-testing/actions/workflows/ci.yml/badge.svg)](https://github.com/VishmiSiriwardhana/playwright-cucumber-api-testing/actions/workflows/ci.yml))

API automation testing framework built using **Playwright, TypeScript, and Cucumber BDD**.

## 📌 Project Overview

This project demonstrates API test automation using Playwright's API testing capabilities with Cucumber for Behavior-Driven Development (BDD).

The framework validates REST API operations against the **Fake REST API Books** service and demonstrates reusable API automation practices, scenario-specific test data, positive and negative testing, and CI/CD execution using GitHub Actions.

## 🛠️ Tech Stack

- **Playwright** – API automation
- **TypeScript** – Programming language
- **Cucumber** – BDD / Gherkin
- **Node.js** – Runtime environment
- **Git & GitHub** – Version control
- **GitHub Actions** – CI/CD
- **HTML Report** – Test reporting



## 🔗 API Under Test

**Fake REST API – Books**

Base URL:

`https://fakerestapi.azurewebsites.net/api/v1`

## 🧪 API Operations Covered


| HTTP Method | Operation                    | Scenario Type |
| ----------- | ---------------------------- | ------------- |
| POST        | Create a new book            | Positive      |
| GET         | Retrieve an existing book    | Positive      |
| GET         | Retrieve all books           | Positive      |
| PUT         | Update an existing book      | Positive      |
| DELETE      | Delete an existing book      | Positive      |
| GET         | Retrieve a non-existing book | Negative      |
| PUT         | Update a non-existing book   | Negative      |
| DELETE      | Delete a non-existing book   | Negative      |




## 📋 Test Scenarios

The project contains **8 Cucumber scenarios** covering:

- Book creation with dynamically generated test data
- Retrieval of an existing book
- Retrieval of all books
- Updating an existing book
- Deleting an existing book
- Handling a non-existing book during GET
- Handling a non-existing book during PUT
- Handling a non-existing book during DELETE

The expected responses are based on the behavior of the API under test.

## 📁 Project Structure

```text
playwright-cucumber-api-testing/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── features/
│   └── book-api.feature
│
├── src/
│   ├── api/
│   │   └── BookApi.ts
│   │
│   ├── hooks/
│   │   └── hooks.ts
│   │
│   └── step-definitions/
│       └── book-api.steps.ts
│
├── .gitignore
├── cucumber.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json

```



## 🏗️ Framework Design

The framework follows a reusable and maintainable structure.

### API Layer

`BookApi.ts`

Contains reusable methods for:

- Create book
- Get book
- Get all books
- Update book
- Delete book



### Step Definitions

`book-api.steps.ts`

Connects the Gherkin scenarios with the API layer and performs response validations using Playwright assertions.

### Custom World

`hooks.ts`

Manages:

- Playwright API request context
- API response
- Book test data
- Book ID
- Response body
- API object available to each scenario



### Feature Files

`book-api.feature`

Contains readable BDD scenarios written using Gherkin syntax.

## 🚀 Installation

Clone the repository and install dependencies:

```bash
npm install

```

Install Playwright browsers if required:

```bash
npx playwright install

```



## ▶️ Running Tests



### Run all API tests

```bash
npm test

```



### Run smoke tests

```bash
npm run test:smoke

```



### Run negative tests

```bash
npm run test:negative

```



## 📊 Test Results



### Full Test Suite

```text
8 scenarios (8 passed)
51 steps (51 passed)
0 failed

```



### Smoke Tests

```text
2 scenarios (2 passed)
14 steps (14 passed)

```



### Negative Tests

```text
3 scenarios (3 passed)
18 steps (18 passed)

```



## 📄 Test Reporting

Cucumber generates an HTML test report after execution:

```text
reports/cucumber-report.html

```

The report provides a visual summary of scenarios and their execution results.

## ⚙️ CI/CD

The project uses **GitHub Actions** to automatically execute the API test suite.

The workflow runs when:

- Code is pushed to the `main` branch
- A pull request is created for the `main` branch

The CI pipeline:

1. Checks out the repository
2. Sets up Node.js 24
3. Installs project dependencies using `npm ci`
4. Executes the complete Cucumber API test suite



### CI Status

The GitHub Actions workflow is passing successfully with:

```text
8 scenarios (8 passed)
51 steps (51 passed)

```



## 🎯 Key QA Practices Demonstrated

- API test automation
- REST API testing
- BDD with Cucumber
- Gherkin scenario design
- Positive and negative testing
- Dynamic test data generation
- HTTP status code validation
- Response body validation
- Reusable API methods
- Scenario-level test isolation
- Automated test execution
- HTML test reporting
- CI/CD with GitHub Actions
- Git version control



## 👩‍💻 Author

**Vishmi Siriwardhana**

Software Quality Assurance Engineer