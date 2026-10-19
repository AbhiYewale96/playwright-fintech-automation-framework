import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly shoppingCartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('.title');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName: string) {
    const productItem = this.page.locator('.inventory_item').filter({ hasText: productName });
    await productItem.locator('button:has-text("Add to cart")').click();
  }

  async removeProduct(productName: string) {
    const productItem = this.page.locator('.inventory_item').filter({ hasText: productName });
    await productItem.locator('button:has-text("Remove")').click();
  }

  async getProductPrice(productName: string): Promise<string> {
    const productItem = this.page.locator('.inventory_item').filter({ hasText: productName });
    return await productItem.locator('.inventory_item_price').innerText();
  }

  async getCartCount(): Promise<string> {
    return await this.shoppingCartBadge.innerText();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}