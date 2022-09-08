
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

export {
    downloadFile,
    isJSON,
    objectToArray,
    pathTo
}