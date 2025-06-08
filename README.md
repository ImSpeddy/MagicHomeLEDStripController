# Magic Home LED Strip Controller

Node.js library to control **Magic Home LED** strips via Wi-Fi. This library allows you to turn on or off the LED strip and change its color.

## Installation

Install the library using npm:

```bash
npm install magic-home-led
```
You can also download the source code and include it in your project manually.

## Usage
[LEDStrip](./docs/ledstrip.md) is the main class to control the LED strip. You can create an instance of it and use its methods to control the strip.

[RGB](./docs/rgb.md) is a class that represents an RGB color. You can create an instance of it and use it to set the color of the LED strip.

Examples can be found [here](./examples).

Raw packets can be found [here](./docs/packets.md).

## Links

- [Magic Home/Hue LED Strip](https://www.amazon.com/dp/B087X2RT8Z)
- [Magic Home LED Strip Controller Android App](https://faqsys.magichue.net:4489/magic_home_download.html)

## License, Contributions and Disclaimer

This library is licensed by the [MIT License](./LICENSE).

This library is not affiliated with or endorsed by Magic Home or any of its products. Use at your own risk.

If you'd like to contribute, please feel free to open an issue or a pull request on the [GitHub repository](https://github.com/ImSpeddy/MagicHomeLEDStripController)

Developed by [Ethan Mahlstedt](mailto:ethan.mahlstedt@hotmail.com)