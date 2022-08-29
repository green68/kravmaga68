
class Years{
    constructor(datas = []){
        // datas.forEach( year =>)
        this.datas = datas.sort((a,b) => a.id - b.id)
    }
    getLast() {
        console.log(this.datas);
        return this.datas[this.datas.length - 1]
    }

}

export { Years }