##USE

```javascript
const Gpio = require('gpio');


let gpio5 = new Gpio({pin:5, mode: 'out', ready: ()=>{
    let value = 1;

    setInterval(function() {
        process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');

        if(value){
            console.log('\x1b[32m%s\x1b[0m', `ON`);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `OFF`);
        }
        gpio5.write(value);
        value = +!value;
    }, 50);

}});
```