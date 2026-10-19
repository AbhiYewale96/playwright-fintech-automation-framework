# 🚀 Enterprise E2E Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-v1.48-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.0-3178C6?logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![Test Coverage](https://img.shields.io/badge/UI_Test_Cases-18-blue)
![API Testing](https://img.shields.io/badge/API_Testing-Integrated-orange)

A scalable **End-to-End (E2E) Test Automation Framework** built using **Playwright and TypeScript**, following the **Page Object Model (POM)** design pattern.

The framework combines UI automation and REST API testing to validate critical application workflows, improve test maintainability, and support continuous testing through GitHub Actions.

## 📌 Key Features

- **Page Object Model (POM):** Separates page locators and actions from test logic for better maintainability.
- **UI Automation:** Covers login, product selection, cart operations, and checkout workflows.
- **REST API Testing:** Validates HTTP status codes, response structures, and positive and negative API scenarios.
- **Cross-Browser Testing:** Supports Chromium, Firefox, and WebKit.
- **Auto-Waiting:** Uses Playwright's built-in waiting mechanisms and web-first assertions instead of hardcoded sleeps.
- **Parallel Execution:** Supports running tests across multiple workers to reduce execution time.
- **CI/CD Integration:** Executes automated tests through GitHub Actions on pushes and pull requests.
- **Test Reporting:** Generates HTML reports and supports screenshots and trace collection for debugging failures.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | Browser and API automation |
| TypeScript | Test scripting and type safety |
| Node.js | JavaScript runtime |
| Page Object Model | Test architecture |
| Git & GitHub | Version control |
| GitHub Actions | CI/CD automation |
| Playwright HTML Reporter | Test execution reports |

## 🏗️ Project Structure

```text
playwright-fintech-automation-framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── product.spec.ts
│   ├── checkout.spec.ts
│   └── api.spec.ts
│
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

## 🧪 Test Coverage

### 1. UI Automation — 18 Scenarios

#### Authentication (`login.spec.ts`)
- Login with valid credentials
- Login with empty credentials
- Missing username validation
- Missing password validation
- Invalid credential validation
- Additional authentication boundary scenarios

#### Product & Cart (`product.spec.ts`)
- Add a single product to the cart
- Add multiple products
- Verify cart badge updates
- Validate product quantities
- Remove products from the cart
- Verify product prices
- Validate cart state after page reload

#### Checkout (`checkout.spec.ts`)
- Complete the checkout workflow
- Validate missing first name
- Validate missing last name
- Validate missing postal code
- Validate submission with all fields empty

### 2. REST API Testing (`api.spec.ts`)

The API test suite covers positive and negative request scenarios.

- **GET Requests:** Validate successful responses, resource data, and response structure.
- **POST Requests:** Validate submitted payloads, created records, and HTTP `201 Created` responses.
- **Negative Testing:** Validate malformed or invalid payload handling and expected error responses, such as HTTP `400 Bad Request`.

> Note: Actual API status codes and response validations depend on the API service configured in the project.

## ⚙️ Getting Started

### Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) — LTS version recommended
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/AbhiYewale96/playwright-fintech-automation-framework.git
```

**2. Navigate to the project directory**

```bash
cd playwright-fintech-automation-framework
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Playwright browsers**

```bash
npx playwright install
```

On supported Linux CI environments, install browser system dependencies with:

```bash
npx playwright install --with-deps
```

## ▶️ Running Tests

| Execution Goal | Command |
|---|---|
| Run all tests | `npx playwright test` |
| Run tests with browser UI | `npx playwright test --headed` |
| Run tests in Chromium | `npx playwright test --project=chromium` |
| Run login tests | `npx playwright test tests/login.spec.ts` |
| Run product tests | `npx playwright test tests/product.spec.ts` |
| Run checkout tests | `npx playwright test tests/checkout.spec.ts` |
| Run API tests | `npx playwright test tests/api.spec.ts` |
| Open HTML report | `npx playwright show-report` |

*Note: Browser-specific commands require the corresponding projects to be configured in `playwright.config.ts`.*

## 🔄 CI/CD Integration

This project includes a GitHub Actions workflow at `.github/workflows/playwright.yml`.

The pipeline can be configured to:

1. Trigger automatically on pushes to the `main` branch and pull requests.
2. Set up the Node.js environment.
3. Install project dependencies.
4. Install the required Playwright browsers.
5. Execute automated tests in headless mode.
6. Upload the test report as a workflow artifact for debugging and review.

The workflow makes it easier to detect regressions early and verify application changes consistently.

## 📊 Reporting & Debugging

Playwright provides built-in tools to investigate test failures.

- **HTML Report:** Review test results and failure details.
- **Screenshots:** Capture evidence of failed test cases when configured.
- **Trace Viewer:** Inspect browser actions, DOM snapshots, and network activity when tracing is enabled.
- **Execution Logs:** Review errors and test output in the terminal or CI pipeline.

To view the report after execution:

```bash
npx playwright show-report
```

## 🎯 Project Objectives

This framework demonstrates practical knowledge of:

- Functional and negative testing
- UI test automation
- REST API validation
- Reusable test architecture using POM
- Cross-browser test execution
- Test execution and failure analysis
- CI/CD fundamentals
- Maintainable automation practices

## 👨‍💻 Author

**Abhishek Yewale**  
QA Automation Engineer | Aspiring SDET

- GitHub: [@AbhiYewale96](https://github.com/AbhiYewale96)

---

⭐ If you find this project useful, feel free to explore the repository and share feedback.
