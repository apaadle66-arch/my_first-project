import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, SHOP_PHONE } from "../shared/site";

describe("site contact helpers", () => {
  it("builds a WhatsApp URL for the Mosul shop phone", () => {
    const url = buildWhatsAppUrl("أريد طلب بقلاوة");
    expect(url).toContain(`https://wa.me/${SHOP_PHONE}?text=`);
    expect(url).toContain(encodeURIComponent("أريد طلب بقلاوة"));
  });
});
