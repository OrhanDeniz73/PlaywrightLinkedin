import {test, expect} from '@playwright/test'

test("Add Item To Shopping card", async ({ page }) => {
    const email = "customer@practicesoftwaretesting.com";
    const password = "welcome01";
    //const customer01AutoFile = ".auth/customer01.json";
    await page.goto('https://practicesoftwaretesting.com/')

    await page.getByRole('link', {name: 'Bolt Cutters'} ).click();
    await expect(page.getByTestId("product-name")).toContainText("Bolt Cutters");

    //await page.getByRole('button', {name: 'Add to cart'}).click();
    await page.getByTestId("add-to-cart").click();

    
    await expect(page.getByTestId('cart-quantity')).toHaveText("1");
    //await page.screenshot({ path: 'home-page-quantity.png' });


    await page.goto("https://practicesoftwaretesting.com/auth/login")
    await page.getByTestId("email").fill(email);
    await page.getByTestId("password").fill(password);
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");    

    await page.goto('https://practicesoftwaretesting.com/checkout');
    await page.waitForTimeout(2500);
    await expect(page).toHaveScreenshot("home-page-quantity.png");

    await page.getByRole('button', {name: 'Proceed to checkout'}).click();
    await page.getByRole('button', {name: 'Proceed to checkout'}).click();
    
    //await page.getByLabel('formcontrolname', {name: 'Netherlands (the)'}).click();
    await page.getByLabel('country').selectOption({ label: 'Netherlands (the)' });
    await page.getByTestId("postal_code").fill("6522BB");
    await page.getByTestId("house_number").fill("22");
    
    //await expect(page).toHaveScreenshot("home-page-country.png");
    await page.getByRole('button', {name: 'Proceed to checkout'}).click();

    await page.getByRole('combobox' ).selectOption({ label: 'Buy Now Pay Later' });
    await page.getByLabel("Monthly Installments").selectOption({ label: '3 Monthly Installments' });
    await expect(page).toHaveScreenshot("home-page-payment.png");
    await page.getByRole('button', {name: 'Check payment'}).click();
    await expect(page).toHaveScreenshot("payment was succesfull.png");

});

