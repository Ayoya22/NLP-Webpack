//import {handleSubmit} from "../src/client/js/interaction";

const uppercase = require('../src/client/js/interaction')

test(`test to verify method call and text inputted`, (done) => {
    uppercase('test', (str) => {
        expect(str).toBe('TEST')
        done()
    })
})