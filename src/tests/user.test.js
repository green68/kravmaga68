import { User } from "../classes/user";

test('user create not json', () => {
    function newUserThrowJsonError() {
        new User('')
    }
    expect(newUserThrowJsonError).toThrowError(/JSON/)

})
test('user create name not defined', () => {
    function newUserThrowNameError() {
        new User()
    }
    expect(newUserThrowNameError).toThrowError(/name/)

})
test('user create without years array', () => {
    function newUserThrowYearsError() {
        new User('{"name": "mon nom", "years": null}')
    }
    expect(newUserThrowYearsError).toThrowError(/years/)

})
test('user create key not valid', () => {
    function newUserThrowYearsError() {
        new User('{"name": "mon nom", "years": [], "test": null}')
    }
    expect(newUserThrowYearsError).toThrowError(/key/)

})
