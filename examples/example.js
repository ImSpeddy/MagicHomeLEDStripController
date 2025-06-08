const { LEDStrip, RGB } = require('magic-home-led') // Import the LEDStrip class and RGB class

const strip = new LEDStrip('192.168.1.105', 5577); // Create the Strip instance with the IP address and port

strip.on('connect', () => {
    // This event is emitted when the connection to the LED strip is established
    console.log('Connected to LED strip');
    strip.turnOn(); // Turn on the LED strip
    strip.setColor(new RGB(255, 255, 255)); // Set color to white
    setTimeout(()=>{
        // Turn off the LED strip and close connection after 35 seconds
        strip.turnOff();
        strip.close();
    }, 35000)
})

strip.on('close', () => {
    console.log('Connection to LED strip closed');
})