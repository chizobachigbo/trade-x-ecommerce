import AccordionLayout from "./AccordionLayout";

export default function Accordion() {
  const faqs = [
    {
      id: 1,
      question: "How can I place an order?",
      answer:
        "You can place an order on our website by selecting the items you want, adding them to your cart, and then proceeding to checkout. Follow the on-screen instructions to complete your order.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit cards, debit cards, PayPal, and more. You can see the full list of accepted payment methods during the checkout process.",
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer:
        "Our return policy allows you to return items within 30 days of purchase for a full refund, provided they are in their original condition and packaging. Please visit our Returns & Refunds page for more details.",
    },
    {
      id: 4,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. You can check if we ship to your location during the checkout process and view the shipping fees associated with your order.",
    },
    {
      id: 5,
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package.",
    },
    {
      id: 6,
      question: "What should I do if I receive a damaged item?",
      answer:
        "If you receive a damaged item, please contact our customer support team within 7 days of receiving the order. We will assist you in arranging a return or replacement.",
    },
    {
      id: 7,
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team through our Contact Us page, where you can fill out a contact form or find our contact details, including phone numbers and email addresses.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <div className="flex flex-col items-center mt-5 space-y-2">
        {faqs.map((q, i) => (
          <AccordionLayout key={i} question={q.question} answer={q.answer} />
        ))}
      </div>
    </>
  );
}
