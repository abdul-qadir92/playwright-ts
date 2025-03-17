import { test, expect } from '@playwright/test';

test('Setup task', async ({ page }) => {
    await page.goto('https://bstackdemo.com/');
});