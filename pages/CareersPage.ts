import { Page, Locator } from '@playwright/test';

export class CareersPage {
  readonly page: Page;
  readonly discoverMoreButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.discoverMoreButton = page.locator('text=Discover More');
  }

  async clickDiscoverMore(): Promise<Page> {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.discoverMoreButton.first().click(),
  ]);
  await newPage.waitForLoadState();
  return newPage;
}
}
