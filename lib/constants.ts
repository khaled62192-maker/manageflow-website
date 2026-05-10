export const BUSINESS = {
  name: "ManageFlow",
  location: "United Arab Emirates",
  whatsapp: "+971 56 212 6267",
  whatsappRaw: "971562126267",
  whatsappLink: "https://wa.me/971562126267",
  phone: "+971 56 212 6267",
  phoneLink: "tel:+971562126267",
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
