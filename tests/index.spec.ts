import { expect, test } from "@playwright/test"

test("homepage has title and header", async ({ page }) => {
	await page.setViewportSize({
		width: 1720,
		height: 1415,
	})

	await page.goto("http://localhost:3000/")

	await expect(page).toHaveTitle(/^RedArc$/)

	const logo = page.locator("body > header > h1.logotype")

	await expect(logo).toHaveText(/RedArc/)
})
