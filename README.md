# QRCode Generator React Wrapper

A versatile React wrapper around the `qrcode` package, allowing you to generate various types of QR codes with ease. This package supports URL, contact (vCard), app, SMS, email, phone, UPI, WiFi, location, and more QR code types, making it suitable for a wide range of applications.

## Features

- **Multiple QR Code Types**: Supports generating QR codes for URLs, contacts, apps, SMS, emails, phones, UPI, WiFi networks, locations, and more.
- **Customizable Options**: Customize the appearance of your QR codes with various options.
- **TypeScript Support**: Includes TypeScript types for enhanced developer experience and type safety.
- **Lightweight**: Designed to be minimal and efficient, perfect for modern React applications.
- **Error Handling**: Built-in error handling during QR code generation.

## Installation

To install the package, run:

```bash
npm install react-qrcode-generator
```
Or with Yarn:

```bash
yarn add react-qrcode-generator
```

Usage
Below are examples of how to use the QRCode component for various types of QR codes.

### Basic Usage
```bash
import React from 'react';
import { QRCode } from 'react-qrcode-generator';

function App() {
  return (
    <div>
      <h1>My QR Code</h1>
      <QRCode
        type="url"
        value={{ uri: "https://example.com" }}
        options={{ width: 200, margin: 2 }}
      />
    </div>
  );
}

export default App;
```
### QR Code Types

#### URL QR Code
```bash
<QRCode type="url" value={{ uri: "https://example.com" }} />
```

#### Contact (vCard) QR Code
```bash
<QRCode
  type="contact"
  value={{
    firstname: "John",
    lastname: "Doe",
    organisation: "Example Corp",
    phoneNumber: "+1234567890",
    email: "john.doe@example.com"
  }}
/>
```
#### Email QR Code
```bash
<QRCode
  type="email"
  value={{
    emailId: "someone@example.com",
    subject: "Hello",
    message: "This is a test email."
  }}
/>
```
#### WiFi QR Code
```bash
<QRCode
  type="wifi"
  value={{
    ssid: "MyNetwork",
    networkType: "WPA",
    password: "password123"
  }}
/>
```
#### UPI QR Code
```bash
<QRCode
  type="upi"
  value={{
    upiId: "example@upi",
    payeeName: "John Doe",
    amount: 100.00,
    note: "Payment for services"
  }}
/>
```
### Props
### `QRCode`

| Prop     | Type                                                                 | Description                                                                                   |
|----------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `type`   | `"url"`, `"contact"`, `"app"`, `"sms"`, `"email"`, `"phone"`, `"upi"`, `"wifi"`, `"location"`, `"none"` | Specifies the type of QR code to generate. |
| `value`  | Varies by type                                                        | The data to encode in the QR code. Must match the structure required by the specified `type`. |
| `options` | `QRCodeRenderersOptions` (optional)                                  | Customization options for the QR code appearance.                                             |

### `QRCodeRenderersOptions`

Refer to the `qrcode` [documentation](https://www.npmjs.com/package/qrcode#toc4) for available options.

## Advanced Usage
#### Customizing the QR Code
##### You can customize the appearance of the QR code using the options prop:

```bash
<QRCode
  type="url"
  value={{ uri: "https://example.com" }}
  options={{
    width: 300,
    margin: 4,
    color: {
      dark: "#000000",
      light: "#ffffff"
    }
  }}
/>
```
#### Dynamic QR Code Content
##### The QR code will automatically update if the value or options props change:

```bash
import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-generator';

function App() {
  const [url, setUrl] = useState("https://example.com");

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a URL"
      />
      <QRCode type="url" value={{ uri: url }} />
    </div>
  );
}

export default App;
```

## License
##### This project is licensed under the MIT License.

## Contributing
##### Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to add.