import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display new About Me and 3 projects', async ({ page }) => {
    await page.goto('/');
    // Check for About Me section
    const aboutMe = await page.locator('text=About Me').first();
    await expect(aboutMe).toBeVisible();

    // Check for at least 3 project placeholders/cards
    const projects = await page.locator('[data-testid="project-card"]');
    await expect(projects).toHaveCount(3);
  });
});
