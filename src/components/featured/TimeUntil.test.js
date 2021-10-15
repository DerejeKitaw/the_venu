const TimeUntil = require("./TimeUntil")
// @ponicode
describe("getTimeUntile", () => {
    let inst

    beforeEach(() => {
        inst = new TimeUntil.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getTimeUntile("2017-09-29T23:01:00.000Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getTimeUntile("01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getTimeUntile("Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getTimeUntile("2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getTimeUntile(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new TimeUntil.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
