const faqs = [
  {
    question: "What kind of software do you build?",
    answer:
      "Websites, Mobile Applications, Video Games, VR/AR applications, tooling solutions, smart contracts and blockchain technologies.",
  },
];

export default function FAQ() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "32px 16px" }}>
      {faqs.map(item => (
        <section key={item.question}>
          <h2 style={{ margin: "0 0 8px", fontSize: 20 }}>{item.question}</h2>
          <p style={{ margin: 0, lineHeight: 1.5 }}>{item.answer}</p>
        </section>
      ))}
    </main>
  );
}
