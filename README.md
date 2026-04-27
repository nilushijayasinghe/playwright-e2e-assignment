# Playwright E2E Automation Framework

## 📌 Introduction

This project is an End-to-End (E2E) test automation framework built using Playwright.  
It validates core user flows of the SauceDemo application.

---

## 📁 Project Structure
data/ # Test data (JSON)
pages/ # Page Object Model (POM)
tests/ # Test specifications
utils/ # Logger and utilities
playwright.config.ts


## Setup and Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **Environment Setup**
⚠️ Note: The .env file is not included in this repository for security reasons. Please request it from the author if needed.

To run the tests, use the following command:

```sh
npx playwright test
```

## Test Structure

The `tests/` folder contains test spec files for different functionalities.

## Helpers

The `helpers/` folder contains helper classes and scripts to support the tests.

## Utils

The `utils/` folder contains utility classes supports for logs etc.

## Pages

The Page Object Model (POM) is used to create an abstraction layer for the UI elements. This helps in reducing code duplication and improves test maintenance. Each page class contains methods to interact with the page elements and perform actions.

## Data Files

The `data/` folder contains test data stored in the form of JSON files and others.

## Configuration

### `playwright.config.ts`

Contains the Playwright configuration, including test directory, parallel execution settings, and reporter configuration.

## Makefile

The `Makefile` contains targets for running tests and generating reports:

- **`test`**: Runs the tests.
- **`report`**: Uploads the test report to S3 and sends an email notification.

## Scripts

### `helpers/send_email_ses.sh`

A script to send emails using AWS SES.

### `helpers/upload_to_s3.sh`

A script to upload test reports to an S3 bucket.

## Conclusion

This documentation provides an overview of the Surge Automation Framework, including its structure, setup, and usage. For more detailed information, refer to the individual files and their contents.
