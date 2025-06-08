const net = require("net");
const EventEmitter = require("events");

const TurnOnPacket = Buffer.from([0x71, 0x23, 0x0f, 0xa3]);
const TurnOffPacket = Buffer.from([0x71, 0x24, 0x0f, 0xa4]);
const PingPacket = Buffer.from([0x81, 0x8a, 0x8b, 0x96]);

class RGB {
    constructor(red = 0, green = 0, blue = 0) {
        this.red = Math.min(255, Math.max(0, red));
        this.green = Math.min(255, Math.max(0, green));
        this.blue = Math.min(255, Math.max(0, blue));
    }
}

// noinspection JSUnusedGlobalSymbols
module.exports.LEDStrip = class LEDStrip extends EventEmitter {
    #client = null;
    #connected = false;
    #interval = null;
    constructor(address, port = 5577, pingInterval = 25000){
        super();
        this.#client = new net.Socket();

        this.#client.connect(port, address, () => {
            this.#connected = true;
            this.#interval = setInterval(() => {
                if(this.#connected) {
                    this.#client.write(PingPacket)
                }
            }, pingInterval);
            this.emit('connect');
        })

        this.#client.on('close', () => {
            this.#connected = false;
            clearInterval(this.#interval);
            this.emit('close');
        })

        this.#client.on('error', (error) => {
            console.error('Error:', error);
            this.#connected = false;
            clearInterval(this.#interval);
            this.#client.destroy();
            this.emit('error', error);
        })
    }

    close() {
        if (this.#connected && this.#client) {
            this.#client.end();
        }
        if(this.#interval) {
            clearInterval(this.#interval);
        }
        this.#connected = false;
        if(this.#client && !this.#client.destroy) {
            this.#client.destroy();
        }
    }

    turnOn() {
        if (this.#connected) {
            this.#client.write(TurnOnPacket);
        } else {
            throw new Error("Not connected to LED strip");
        }
    }

    turnOff() {
        if (this.#connected) {
            this.#client.write(TurnOffPacket);
        } else {
            throw new Error("Not connected to LED strip");
        }
    }

    setColor(RGBInput) {
        if (this.#connected) {
            if(RGBInput instanceof RGB) {
                const colorPacket = Buffer.from([0x31, RGBInput.red, RGBInput.green, RGBInput.blue, 0x00, 0x00, 0x0f, 0x3f]);
                this.#client.write(colorPacket);
            } else {
                throw new Error("RGB must be an instance of RGB class");
            }
        } else {
            throw new Error("Not connected to LED strip");
        }
    }
}

module.exports.RGB = RGB
