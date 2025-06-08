# `LEDStrip` Class
The `LEDStrip` class is the main class to control the Magic Home LED strip. It allows you to turn the strip on or off, change its color, and set various effects.

## Constructor

```javascript
const LEDStrip = new require('magic-home-led').LEDStrip(address, port, timeout);
```

- `address`: The IP address of the LED strip.
- `port`: The port number (default is `5577`).
- `timeout`: The timeout in milliseconds for the ping packet (default is `25000`, connection may close if it's more than `30000`).

## Methods

- `turnOn()`
    Turns the LED strip on.
- `turnOff()`
    Turns the LED strip off.
- `setColor(RGB)`
    Sets the color of the LED strip using an instance of the [RGB](./rgb.md) class.
## Events
- `connect`
    Gets emitted when the connection to the LED strip is established.
- `close`
    Gets emitted when the connection to the LED strip is closed.
- `error`
    Gets emitted when an error occurs during communication with the LED strip, includes the error as an argument.