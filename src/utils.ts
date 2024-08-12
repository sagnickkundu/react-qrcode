import { QRVariant, VCard } from "./types";

function generateVCardString(vcard: VCard) {
  const vCardString = `BEGIN:VCARD\nN:${vcard.lastname};${vcard.firstname};;${
    vcard.prefix || ""
  };\nORG:${vcard?.organisation || ""}\nTEL:${
    vcard?.phoneNumber || ""
  }\nTITLE:${vcard?.title || ""}\nEMAIL:${vcard?.title || ""}\nURL:${
    vcard.social || ""
  }\nEND:VCARD\n`;
  return vCardString;
}

export function getQrValue(type: QRVariant, value: any) {
  let qrValue = "";
  switch (type) {
    case "app":
      qrValue = `https://play.google.com/store/apps/details?id=${value?.appId}`;
      break;
    case "url":
      qrValue = value?.uri;
      break;
    case "email":
      qrValue = `mailto:${value?.emailId}?subject=${
        value?.subject || ""
      }&body=${value?.body || ""}`;
      break;
    case "phone":
      qrValue = `tel:${value?.phoneNumber}`;
      break;
    case "sms":
      qrValue = `sms:${value?.phoneNumber}?body=${value?.message}`;
      break;
    case "contact":
      qrValue = generateVCardString(value);
      break;
    case "location":
      qrValue = `geo:${value?.lat},${value?.long}`;
      break;
    case "upi":
      qrValue = `upi://pay?pa=${value?.upiId}&pn=${value?.payeeName}&am=${value?.amount}&cu=INR&tn=${value?.note}`;
      break;
    case "wifi":
      qrValue = `WIFI:S:${value?.ssid};T:${value?.networkType};P:${value?.password};;`;
      break;
    case "none":
    default:
      qrValue = value;
  }
  return qrValue;
}
