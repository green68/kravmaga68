import { Year } from "./year"

/**
 * 
 */
class Years{
    /**
     * 
     * @param {Year[]} datas 
     */
    constructor(datas = []){
        this.datas = datas.map(data => {
            const year = new Year(data)
            return year
        })
        
    }
    getLast() {
        const year = this.datas[this.datas.length - 1]
        // console.log(year instanceof Year);
        return year
    }
    // toString() {

    //     // return this.datas
    //     return JSON.stringify(this.datas)
    // }
    toJSON() {
        return this.datas
    }

}

export { Years }