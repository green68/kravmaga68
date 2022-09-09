
const isJSON = datas => {
    try {
        JSON.parse(datas)
        return true
    } catch (error) {
        return false
    }
}

const Pathname = "kravmaga68/"
const pathTo = menu => Pathname + menu

const downloadFile = (content, fileName, contentType) => {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const objectToArray = (obj) => {
    const datas = []
    for (const [key, value] of Object.entries(obj)) {
        datas.push([key, value])
    }
    return datas
}

const InputPatterns = {
    float: /^[+-]?\d+(\.\d{0,2})?$/i,
    pseudo:  /^([a-zA-Z0-9-_]{5,25})$/i
}
/**
 * 
 * @param {HTMLElement} eventTarget 
 * @returns {boolean}
 */
const isInputValid = (eventTarget) => {
    if(!eventTarget?.pattern) {
        console.log("Pas de pattern pour :",eventTarget);
        if(eventTarget.required && eventTarget.value.trim() === "") return false
        
        return true
    }

    const pattern = InputPatterns[eventTarget.pattern]
    if (pattern) {
        if (!pattern.test(eventTarget.value)) return false

        return true
    }

    try {
        pattern = new RegExp(eventTarget.pattern, "i")
        if (!pattern.test(eventTarget.value)) return false
        return true
        
    } catch (error) {
        throw new Error("Pattern invalide pour :", eventTarget)
    }
}
export {
    downloadFile,
    isInputValid,
    isJSON,
    objectToArray,
    pathTo
}