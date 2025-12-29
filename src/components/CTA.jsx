import Section from "./Section";

export default function CTA() {
  return (
    <Section>
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card card-hover text-center">
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="mt-2 text-gray-300">aayush@example.com</p>
          </div>

          <div className="card card-hover text-center">
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="mt-2 text-gray-300">+91 98765 43210</p>
          </div>

          <div className="card card-hover text-center">
            <h3 className="font-semibold text-lg">Social</h3>
            <p className="mt-2 text-gray-300">LinkedIn | GitHub | Twitter</p>
          </div>
        </div>
      </section>
    </Section>
  );
}
