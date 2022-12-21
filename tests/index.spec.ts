import { expect, test } from "@playwright/test"

import type { Page } from "@playwright/test"

export const SIGN_UP_URL_JSON = `https://test.jimmyco.io/api/subscribe-json`

function successfulSignUp (page: Page) {
	return page.route(SIGN_UP_URL_JSON, (route) => {
		const body = JSON.stringify({
			"email": route.request().postDataJSON().email,
			"timestamp": new Date().getTime(),
			"type": "SUCCESS",
		})

		setTimeout(() =>
			route.fulfill({
				body,
			}), 1500)
	})
}

test("homepage has title and links to intro page", async ({ page }) => {
	await successfulSignUp(page)

	await page.setViewportSize({
		width: 1720,
		height: 1415,
	})

	await page.goto("http://localhost:3000/")

	// Home page title on tab
	await expect(page).toHaveTitle(/^Jimmy Consulting$/)

	const skipLink = page.getByRole("link", { name: "Skip to main content" })

	// Skip to main content link exists and proper target
	await expect(skipLink).toHaveAttribute("href", "#main-content")

	const menuToggle = page.getByRole("button", { name: "Toggle menu" })

	// Menu toggle has been injected into DOM
	await expect(menuToggle).toHaveAttribute("class", "nav-icon")

	const approachLink = page.locator("body > nav a[href='/approach']")

	// Menu is initially closed
	await expect(menuToggle).toHaveAttribute("aria-expanded", "false")
	await expect(approachLink).not.toBeVisible()

	// Open the menu
	await menuToggle.click()
	await page.waitForTimeout(2000)

	// Menu is now expanded
	await expect(menuToggle).toHaveAttribute("aria-expanded", "true")
	await expect(approachLink).toBeVisible()

	// Close the menu
	await menuToggle.click()
	await page.waitForTimeout(2000)

	// Menu is closed
	await expect(menuToggle).toHaveAttribute("aria-expanded", "false")
	await expect(approachLink).not.toBeVisible()

	const signUpInput = page.getByLabel("Email")
	const signUpButton = page.locator("#sign-up-form button")

	await expect(signUpButton).toBeDisabled()

	await signUpInput.type("babs@munat.com")
	await page.waitForTimeout(2000)

	await expect(signUpButton).toBeVisible()

	await signUpButton.click({ force: true })

	await expect(signUpButton).not.toBeVisible()

	const sendingMessage = page.getByText("Sending")
	await expect(sendingMessage).toBeVisible()

	const successMessage = page.getByText("Check your inbox")
	await expect(successMessage).toBeVisible()

	await page.waitForTimeout(10000)
})
