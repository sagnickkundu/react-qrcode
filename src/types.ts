import QRCode from "qrcode";

export interface VCard {
  prefix?: string;
  firstname: string;
  lastname: string;
  organisation?: string;
  title?: string;
  email?: string;
  phoneNumber: string;
  social?: string;
}

interface URLQRCode {
  type: "url";
  value: {
    uri: string;
  };
}
interface ContactQRCode {
  type: "contact";
  value: VCard;
}

interface AppQRCode {
  type: "app";
  value: {
    appId: string;
  };
}

interface SMSQRCode {
  type: "sms";
  value: {
    phoneNumber: string;
    message: string;
  };
}

interface EmailQRCode {
  type: "email";
  value: {
    emailId: string;
    subject?: string;
    message?: string;
  };
}

interface PhoneQRCode {
  type: "phone";
  value: {
    phoneNumber: string;
  };
}

interface UPIQRCode {
  type: "upi";
  value: {
    upiId: string;
    payeeName: string;
    amount: number;
    note?: string;
  };
}

interface WiFiQRCode {
  type: "wifi";
  value: {
    ssid: string;
    networkType?: "WEP" | "WPA";
    password: string;
  };
}

interface LocationQRCode {
  type: "location";
  value: {
    lat: string;
    long: string;
  };
}

interface DefaultQRCode {
  type: "none";
  value: string;
}

export type TQRCode =
  | URLQRCode
  | PhoneQRCode
  | EmailQRCode
  | ContactQRCode
  | AppQRCode
  | SMSQRCode
  | UPIQRCode
  | WiFiQRCode
  | LocationQRCode
  | DefaultQRCode;

export type ReactNodeQRCodeProps = TQRCode & {
  options?: QRCode.QRCodeRenderersOptions;
};

export type QRVariant =
  | "url"
  | "contact"
  | "app"
  | "sms"
  | "email"
  | "phone"
  | "upi"
  | "wifi"
  | "location"
  | "none";
