const exec = require('child_process').exec;

class Gpio {

    constructor({ pin = 5, mode = 'out', ready = ()=>{} }){

        this.pin    = pin;
        this.mode   = mode;

        this.init().then(()=> { ready(); });
    }

    init(){
        return this.cmd(`gpio mode ${this.pin} ${this.mode}`);
    }

    read(){
        return this.cmd(`gpio read ${this.pin}`)
            .then((state)=> {
                return state.replace(/[^\d]/gm,'');
            });
    }

    write(value){
        return this.cmd(`gpio write ${this.pin} ${value}`);
    }

    cmd(command) {
        return new Promise((resolve, reject)=> {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                }
                resolve(stdout);
            });
        });
    }

}

module.exports = Gpio;