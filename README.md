# orange-pi-gpio #
This module allows you to easily manage GPIO pins on your **Orange PI PC** using **Node.js**

## Before Install ##
You need to make sure that **WiringOP** is installed on your **Orange PI PC**.
If not, then you need to install it.
To do this, run the following commands:

```cmd
git clone https://github.com/zhaolei/WiringOP.git -b h3

cd WiringOP
chmod +x ./build
sudo ./build
```

## Install Module##

Command line
```bash
npm i git+hhttps://github.com/BorisKotlyarov/orange-pi-gpio.git
```
or package.json
```json
{
  "name": "yourAppName",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "orange-pi-gpio":"git+hhttps://github.com/BorisKotlyarov/orange-pi-gpio.git"
  }
}
```

## Usage ##

**Blink app**
```javascript
const Gpio = require('orange-pi-gpio');

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

## Methods ##

**read**
```javascript
const Gpio = require('orange-pi-gpio');

let gpio5 = new Gpio({pin:5});

gpio5.read()
    .then((state)=>{
        console.log(state); //state of pin 5
    });
```


**write**
```javascript
const Gpio = require('orange-pi-gpio');

let gpio5 = new Gpio({pin:5});

gpio5.write(1); // write 1 to pin 5
gpio5.write(0); // write 0 to pin 5
```