import Card from "./ui/Card";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "aayush@example.com",
    link: "mailto:aayush@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "India",
    link: "#",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/aayush",
    link: "https://linkedin.com",
  },
];

export default function ContactCards() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Let’s Connect
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {contacts.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <Card className="text-center cursor-pointer">
              <div className="text-primary text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold">{item.label}</h3>
              <p className="text-sm opacity-80 mt-1">{item.value}</p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
