const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("active");
    }
  });
});

/* FAQ */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

/* WhatsApp Order Form */

const orderForm = document.getElementById("orderForm");

/*
  بدلي هذا الرقم برقم واتساب ديال العميلة بدون +
  مثال:
  const WHATSAPP_NUMBER = "212661440367";
*/
const WHATSAPP_NUMBER = "212600000000";

const PRODUCT_NAME = "Mi Brightening Body Cream 250ml";
const PRODUCT_PRICE = "149 DH";

if (orderForm) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();
    const address = document.getElementById("address").value.trim();
    const quantity = document.getElementById("quantity").value;

    if (!fullName || !phone || !city) {
      alert("من فضلك املئي الاسم، الهاتف والمدينة.");
      return;
    }

    const message = `
مرحبا، أريد طلب المنتج:

المنتج: ${PRODUCT_NAME}
الثمن: ${PRODUCT_PRICE}
الكمية: ${quantity}

معلومات الزبونة:
الاسم: ${fullName}
الهاتف: ${phone}
المدينة: ${city}
العنوان: ${address || "غير محدد"}

شكراً.
`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
}