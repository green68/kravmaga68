import { User } from "../classes/user";
import { jsonDatas } from "./datas.json.js"

class Datas {
    constructor() {
        this.user = new User({})
    }
    setUserFromJSON(datas = jsonDatas) {
        this.user = new User(datas)
    }
    getUser() {
        return this.user
    }
    saveToLocale() {
        const userString = JSON.stringify(this.user)
        
        localStorage.setItem('user', userString)
    }
    saveToFile(filename) {
        console.log("dans saveToFile");
        function download(content, fileName, contentType) {
            var a = document.createElement("a");
            var file = new Blob([content], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }
        
        const datas = JSON.stringify(this.user, null, 3)
        // console.log(datas);
        download(datas, filename, 'text/plain');
    }
    isLocale() {
        return localStorage.getItem('user') ? true : false
    }
}

const datas = new Datas()

export {
    datas
}
