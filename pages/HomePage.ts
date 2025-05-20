import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly careersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.careersLink = page.locator('a[href*="careers"]').first();
  }

  async navigate() {
    await this.page.goto('https://www.doverfuelingsolutions.com/europe/en.html');
  }

  async goToCareers() {
    await this.careersLink.click();
  }
}
