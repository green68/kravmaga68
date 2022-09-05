
export const isJSON = datas => {
    try {
        JSON.parse(datas)
        return true
    } catch (error) {
        return false
    }
}