class Console {
    constructor(str) {
        this.str = str
    }
    log() {
        return `${this.str}`
    }

    history() {
        return `${this.log()/n}`
    }
}
const console1 = new Console([0,1,2,3])
const console2 = new Console("dfsdfdsfsd")

console.log(console1.log());
console.log(Console.history());


