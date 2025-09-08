import { expect, test } from "@playwright/test";

test("opening the website", async function ({ page }) {
  await page.goto("https://one.amurahealth.com/login");
  console.log(await page.title());
  await expect(page).toHaveTitle("Amura Health");
  await page.getByRole("textbox").fill("example value");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "jdgsf" }).click();
});
