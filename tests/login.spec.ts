import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo Login Flow Validation', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('validLoginTest', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('emptyLoginTest', async () => {
    await loginPage.login('', '');
    await loginPage.assertErrorMessage('Epic sadface: Username is required');
  });

  test('emptyUsernameTest', async () => {
    await loginPage.login('', 'secret_sauce');
    await loginPage.assertErrorMessage('Epic sadface: Username is required');
  });

  test('emptyPassTest', async () => {
    await loginPage.login('standard_user', '');
    await loginPage.assertErrorMessage('Epic sadface: Password is required');
  });

  test('invalidUsernameTest', async () => {
    await loginPage.login('invalid_user', 'secret_sauce');
    await loginPage.assertErrorMessage('Epic sadface: Username and password do not match');
  });

  test('invalidPasswordTest', async () => {
    await loginPage.login('standard_user', 'wrong_pass');
    await loginPage.assertErrorMessage('Epic sadface: Username and password do not match');
  });

  test('invalidBothTest', async () => {
    await loginPage.login('random_user', 'random_pass');
    await loginPage.assertErrorMessage('Epic sadface: Username and password do not match');
  });
});