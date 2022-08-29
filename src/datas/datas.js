
// const jsonData = require('./datas.json')
import { User } from "../classes/user";
import { jsonDatas } from "./datas.json.js"

// console.log(JSON.parse(jsonDatas))
const user = new User(jsonDatas);

const getYear = () => {
    
    console.log(user);
    console.log(user.years.getLast());
    return user.years.getLast()
}

export {
    // init,
    getYear,
}
