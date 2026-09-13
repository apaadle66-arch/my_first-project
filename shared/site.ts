export const SHOP_PHONE = "9647508223344";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(message)}`;
}
