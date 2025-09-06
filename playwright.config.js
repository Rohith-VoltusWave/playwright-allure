import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [
    ["list"], // keep console output
    ["allure-playwright"], // add allure reporter
  ],
  use: {
    headless: false,
    args: ["--start-maximised"],
    viewport: null,
    browserName: "chromium",
  },
});
