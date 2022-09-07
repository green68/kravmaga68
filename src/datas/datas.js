import { User } from "../classes/user";

class Datas {
    constructor() {
        this.user = new User({})
    }
    setUserFromJSON(datas = {}) {
        this.user = new User(datas)
    }
    getUser() {
        return this.user
    }
    getUserFromLocale() {
        debugger
        this.user = new User(localStorage.getItem('user'))
    }
    saveToLocale(user = null) {
        if(user) this.user = user
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
        download(datas, filename, 'text/plain');
    }
    isLocale() {
        const resp = localStorage.getItem('user') ? true : false
        return resp
    }
}

const datas = new Datas()

export {
    datas
}
