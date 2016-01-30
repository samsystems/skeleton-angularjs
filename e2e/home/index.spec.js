describe('The home page', () => {

    describe('main content', () => {
        it('should open with the home page', () => {
            browser.get('/');
            expect(browser.getCurrentUrl()).toContain('/');
        });
    });
});
