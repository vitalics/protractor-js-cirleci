// simple.test.js
describe('Visit base url', function () {
    it('title shout be true', async function () {
        browser.get(browser.baseUrl);
        const title = await browser.getTitle();
        expect(title).toBe('EPAM | Software Engineering & Product Development Services');
    })
});
