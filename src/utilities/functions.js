
export const isJSON = datas => {
    try {
        JSON.parse(datas)
        return true
    } catch (error) {
        return false
    }
}

const Pathname = "kravmaga68/"
export const pathTo = menu => Pathname + menu
