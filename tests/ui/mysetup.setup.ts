import { test, expect } from '@playwright/test';

test('Setup task', async ({ page }) => {
    await console.log("I am in the setup");
});