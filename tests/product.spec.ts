import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test.describe('Product & Cart Test Suite', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('addToCartTest', async () => {
    await productPage.addProductToCart('Sauce Labs Backpack');
    expect(await productPage.getCartCount()).toBe('1');
  });

  test('addMultipleProducts', async () => {
    await productPage.addProductToCart('Sauce Labs Backpack');
    await productPage.addProductToCart('Sauce Labs Bike Light');
    expect(await productPage.getCartCount()).toBe('2');
  });

  test('cartQuantityUpdate', async () => {
    await productPage.addProductToCart('Sauce Labs Backpack');
    await productPage.addProductToCart('Sauce Labs Bike Light');
    expect(await productPage.getCartCount()).toBe('2');
    await productPage.removeProduct('Sauce Labs Bike Light');
    expect(await productPage.getCartCount()).toBe('1');
  });

  test('cartPersistence', async ({ page }) => {
    await productPage.addProductToCart('Sauce Labs Backpack');
    expect(await productPage.getCartCount()).toBe('1');
    // Page reload kelyanantar cart data persist hoto ka te verify karto
    await page.reload();
    expect(await productPage.getCartCount()).toBe('1');
  });

  test('checkPrice', async () => {
    const price = await productPage.getProductPrice('Sauce Labs Backpack');
    expect(price).toBe('$29.99');
  });

  test('removeProduct', async () => {
    await productPage.addProductToCart('Sauce Labs Backpack');
    await productPage.removeProduct('Sauce Labs Backpack');
    await expect(productPage.shoppingCartBadge).not.toBeVisible();
  });
});