const { render } = require("../../../helpers/jestSassHelper")

describe('Media query check', () => {
    
    test('Render without compile to css', async () => {
        return render({
            file: "src/styles/const/_mediaQuery.scss"
        }).then(output => {
            expect(output.css.toString()).toEqual("")
        })
    });

    test('should return SM media', async () => {
        const data = `
            @import "src/styles/const/_mediaQuery.scss";
            .foo {
                @include sm
            }`
        
        return render({data}).then(output => {
            expect(output.css.toString().trim())
            .toBe("")
        })
    });

    test('should return MD media', async () => {
        const data = `
            @import "src/styles/const/_mediaQuery.scss";
            .foo {
                @include md
            }`
        
        return render({data}).then(output => {
            expect(output.css.toString().trim())
            .toBe("")
        })
    });

    test('should return LG media', async () => {
        const data = `
            @import "src/styles/const/_mediaQuery.scss";
            .foo {
                @include lg
            }`
        
        return render({data}).then(output => {
            expect(output.css.toString().trim())
            .toBe("")
        })
    });

    test('should return XL media', async () => {
        const data = `
            @import "src/styles/const/_mediaQuery.scss";
            .foo {
                @include xl
            }`
        
        return render({data}).then(output => {
            expect(output.css.toString().trim())
            .toBe("")
        })
    });

    test('should return breakpoint', async () => {
        const data = `
            @import "src/styles/const/_mediaQuery.scss";
            .foo {
                @include breackpoint
            }`
        
        return render({data}).then(output => {
            expect(output.css.toString().trim())
            .toBe("")
        })
    });

});