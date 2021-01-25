const {percySnapshot} = require("@percy/puppeteer");

describe("app", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should display the help page", async () => {
    // This is here to show that you can even run regular assertions
    // This instructs Percy to take a screenshot at the current state, sends it
    // to Percy's servers and compares it with the existing screenshot to
    // check for visual regressions.
    // Make sure the second argument is a unique name for this situation
    await percySnapshot(page, "Help");
  });

  it("should display the help page", async () => {
    // This is here to show that you can even run regular assertions
    // This instructs Percy to take a screenshot at the current state, sends it
    // to Percy's servers and compares it with the existing screenshot to
    // check for visual regressions.
    // Make sure the second argument is a unique name for this situation
    await page.goto("http://localhost:3000/about");

    await percySnapshot(page, "new");
  });
});
