import { Page, Locator } from '@playwright/test';

export class JobSearchPage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly locationInput: Locator;
  readonly filterButton: Locator;
  readonly firstJobLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.locator('input[name="title"]');
    this.locationInput = page.locator('input[name="location"]');
    this.filterButton = page.locator('#searchfilter-submit');
    this.firstJobLink = page.locator('tr.data-row a.jobTitle-link').first();
  }

  async searchJobs(title: string, location: string) {
    await this.titleInput.fill(title);
    await this.locationInput.fill(location);
    await this.filterButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async openFirstJob() {
    await this.firstJobLink.click();
  }
}
