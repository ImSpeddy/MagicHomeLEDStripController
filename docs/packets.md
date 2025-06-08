# Raw Packets
The following packets are used to control the Magic Home LED strip, use them at your own will.

## Ping Packet
```
81 8A 8B 96
```

This packet is used to ping the LED strip. It should be sent periodically to keep the connection alive.
## Turn On Packet
```
71 23 0F A3
```

This packet is used to turn the LED strip on.

## Turn Off Packet
```
71 24 0F A4
```
This packet is used to turn the LED strip off.

## Set Color Packet
```
31 RED GREEN BLUE 00 00 0F 3F
```

This packet is used to set the color of the LED strip. Replace `RED`, `GREEN`, and `BLUE` with the respective RGB values (0-255).