import { Years } from "./years";
import { isJSON } from "../utilities/functions";

const userInit = `{
    "name": null,
    "years": []
}`

// class 

class User {
    constructor(options = userInit) {
        this.name = undefined
        this.years = undefined
        
        console.clear()
        


        const obj = isJSON(options)
        
        for (const [key, value] of Object.entries(obj)) {
            switch (key) {
                case "name":
                    if(value) {
                        this.name = value
                    } else {
                        throw new Error("create user: name not defined")
                    }
                    break;
                case "years":
                    // debugger
                    if(value && Array.isArray(value)) {
                        this.years = new Years(value)
                    } else {
                        throw new Error("create user: years must be an array")
                    }
                    break
                default:
                    throw new Error("create user: key not valid")
                    this[key] = value
                    break;
            }

            // console.log(key, value);
        }
    }
    getLastYear() {
    // getLast() {
        console.log(this.years.length);
        return this.years[this.years.length - 1]
    }
}

export { User }