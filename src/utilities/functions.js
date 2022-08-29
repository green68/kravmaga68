
export const isJSON = datas => {
    try {
        const obj = JSON.parse(datas)
        return obj
    } catch (error) {
        throw new Error(error)      
    }
}