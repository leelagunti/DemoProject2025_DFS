import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CareersPage } from '../pages/CareersPage';
import { JobSearchPage } from '../pages/JobSearchPage';

test('Search for Testing jobs in GB', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.goToCareers();

  const careersPage = new CareersPage(page);
  const jobSearchPageHandle = await careersPage.clickDiscoverMore();
  const jobSearchPage = new JobSearchPage(jobSearchPageHandle);

  await jobSearchPage.searchJobs('Testing', 'GB');
  await jobSearchPage.openFirstJob();
  await expect(jobSearchPage.page).toHaveTitle(/Sr Engineer, Software Testing/);
});
