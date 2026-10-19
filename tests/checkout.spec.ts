import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('SauceDemo Checkout Test Suite', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.addProductToCart('Sauce Labs Backpack');
    await productPage.goToCart();
    await checkoutPage.startCheckout();
  });

  test('checkoutTest - Happy Path', async () => {
    await checkoutPage.fillInformation('Abhishek', 'Yewale', '431001');
    await checkoutPage.clickContinue();
    await checkoutPage.finishCheckout();
    await checkoutPage.assertOrderComplete();
  });

  test('allFieldsEmptyTest', async () => {
    await checkoutPage.fillInformation('', '', '');
    await checkoutPage.clickContinue();
    await checkoutPage.assertErrorMessage('Error: First Name is required');
  });

  test('emptyFirstNameTest', async () => {
    await checkoutPage.fillInformation('', 'Yewale', '431001');
    await checkoutPage.clickContinue();
    await checkoutPage.assertErrorMessage('Error: First Name is required');
  });

  test('emptyLastNameTest', async () => {
    await checkoutPage.fillInformation('Abhishek', '', '431001');
    await checkoutPage.clickContinue();
    await checkoutPage.assertErrorMessage('Error: Last Name is required');
  });

  test('emptyPostalCodeTest', async () => {
    await checkoutPage.fillInformation('Abhishek', 'Yewale', '');
    await checkoutPage.clickContinue();
    await checkoutPage.assertErrorMessage('Error: Postal Code is required');
  });
});