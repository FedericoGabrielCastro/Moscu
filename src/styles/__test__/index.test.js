const { render } = require("../../helpers/jestSassHelper")

describe('compile index.scss', () => {
    
    test('compile to Css', () => {
        return render({
            file: "src/styles/index.scss"
        })
    })
});