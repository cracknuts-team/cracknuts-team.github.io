# CNP Protocol

The `CNP` protocol is a TCP-based communication protocol used between the `cracker` device and the host computer.

## Protocol Frame Structure

The protocol frame contains two parts: a message header and a message body. The length `field` in the `header` specifies the data length of the `body`. Below is the specific format description for the request and response.

Request

```
┌───────────────────────────────────────────┬───────┐
│--------------Request Header---------------│-------│
│Magic │Version│Direction│Command│RFU│Length│PayLoad│
│-------------------------------------------│-------│
│ 4B   │  2B   │   1B    │   2B  │2B │  4B  │$Length│
│-------------------------------------------│-------│
│'CRAK'│   1   │   'S'   │       │   │      │       │
└───────────────────────────────────────────┴───────┘
```

Response

```
┌──────────────────────────────────────┬───────┐
│--------------Response Header---------│-------│
│Magic │Version│Direction│Status│Length│PayLoad│
│--------------------------------------│-------│
│ 4B   │  2B   │   1B    │  2B  │  4B  │$Length│
│--------------------------------------│-------│
│'CRAK'│   1   │   'R'   │      │      │       │
└──────────────────────────────────────┴───────┘
```

## Abstract and Supporting List

| Categroy    | Name                                                        | Command(hex) | Python SDK | Jupyter widget | Device S1 | Device Simulation |
| ----------- | ----------------------------------------------------------- | ------------ | ---------- | -------------- | --------- | ----------------- |
| Device info | [GET_ID](#get_id)                                           | 0x0001       | Yes        | Yes            | Yes       | No                |
| Device info | [GET_NAME](#get_name)                                       | 0x0002       | Yes        | Yes            | Yes       | No                |
| Device info | [GET_VERSION](#get_version)                                 | 0x0003       | Yes        | Yes            | No        | No                |
| Scrat       | [SCRAT_ANALOG_CHANNEL_ENABLE](#scrat_analog_channel_enable) | 0x0100       | Yes        | Yes            | Yes       | No                |

## Detail

### GET_ID

- Category: device info
- Description: Get device id
- Command: `0x0001`
- Req payload  
  Nil
- Res payload  
  Device info bit

### GET_NAME

- Category: device info
- Description: Get device name
- Command: `0x0002`
- Req payload  
  Nil
- Res payload  
  Device name

### GET_VERSION

- Category: device info
- Description: Get device version
- Command: `0x0002`
- Req payload  
  Nil
- Res payload  
  Device version

### SCRAT_ANALOG_CHANNEL_ENABLE

- Category: scart
- Description: Set scrat channel enable status.
- Command: `0x0100`
- Req payload
  - length: `1 byte`  

  Each bit identifies a channel, for example, bit 0 identifies the first channel, bit 1 identifies the second channel, and so on. The value of `1` represents enable, and the value of `0` represents disable.  
  For example, enable channel 1 the byte is `0x0001`, and in binary is `0b00000001`. 

- Res payload  
  Nil

### SCRAT_ANALOG_COUPLING

- Category: scart
- Description: Set scrat channel coupling status.
- Command: `0x0101`
- Req payload
  - length: `1 byte`  

  Each bit identifies a channel, for example, bit 0 identifies the first channel, bit 1 identifies the second channel, and so on. The value of `1` represents dc, and the value of `0` represents ac.  
  For example, set channel 1 to dc the byte is `0x0001`, and in binary is `0b00000001`. 

- Res payload  
  Nil

### SCRAT_ANALOG_VOLTAGE

- Category: scart
- Description: Set scrat channel analog voltage
- Command: `0x0102`
- Req payload
  - length: `5 byte` 
  The first byte is an unsigned byte that identifies the channel number, and the last four bytes are an unsigned int.  
  
  ```
  +----------+--------------+
  | Channel  | Voltage      |
  | (Byte 1) | (Byte 2 - 5) |
  +----------+--------------+
  ```
  For example, set channel 1 to dc the byte is `0x0001`, and in binary is `0b00000001`. 

- Res payload  
  Nil

  *Pending completion*
