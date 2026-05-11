export const BUSINESS = {
  name: "ManageFlow",
  location: "United Arab Emirates",
  whatsapp: "+971 56 811 5344",
  whatsappRaw: "9715681115344",
  whatsappLink: "https://wa.me/9715681115344",
  phone: "+971 56 811 5344",
  phoneLink: "tel:+9715681115344",
  email: "hello@manageflow.ae",
  emailLink: "mailto:hello@manageflow.ae",
} as const;

export function buildWhatsAppLink(message: string) {
  const text = encodeURIComponent(message);
  return `${BUSINESS.whatsappLink}?text=${text}`;
}

export function buildEmailLink(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `${BUSINESS.emailLink}?subject=${s}&body=${b}`;
}
