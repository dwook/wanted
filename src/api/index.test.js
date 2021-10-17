const index = require("./index")
// @ponicode
describe("index.getJobList", () => {
    test("0", () => {
        let callFunction = () => {
            index.getJobList({ country: "US", job_sort: ["Identity", "Identity", "Identity"], years: "December", locations: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.getJobList({ country: "GB", job_sort: ["Interactions", "Interactions", "Implementation"], years: "January", locations: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.getJobList({ country: "United States", job_sort: ["Configuration", "Identity", "Implementation"], years: "July", locations: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.getJobList({ country: "GB", job_sort: ["Implementation", "Configuration", "Identity"], years: "December", locations: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.getJobList({ country: "GB", job_sort: ["Identity", "Implementation", "Implementation"], years: "June", locations: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.getJobList({ country: undefined, job_sort: undefined, years: "", locations: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getMoreJobList", () => {
    test("0", () => {
        let callFunction = () => {
            index.getMoreJobList("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.getMoreJobList("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.getMoreJobList("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.getMoreJobList("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.getMoreJobList("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.getMoreJobList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getFilters", () => {
    test("0", () => {
        let callFunction = () => {
            index.getFilters()
        }
    
        expect(callFunction).not.toThrow()
    })
})
