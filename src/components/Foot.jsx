export default function Foot() {
  return (
    <footer
      className="text-gray-300 py-10"
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        backgroundColor: "#111111", // pastel black
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* About Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4"></h3>
            <p className="leading-relaxed">
              We provide dedicated therapy and developmental support to help
              every child reach their fullest potential through professional
              care and guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/treatment"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p>
              {" "}
              Saraswati bungalow, 91/95, Dr Babasaheb Ambedkar Rd, above
              Gandharva Banquet, next to Shinde shoes, Gorai 1, Borivali West,
              Mumbai, Maharashtra 400091
            </p>
            <br />
            <p>📞 +91 9870082657</p>
            <br />
            <p>✉️ drpoojagaikwadot@gmail.com</p>
            <br />
            <p>Social Links: </p><br />
            <div className="flex justify-start gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/9870082657"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-green-600"
                >
                  <path d="M12.004 2.003a9.93 9.93 0 0 0-8.65 14.78L2 22l5.34-1.36A9.93 9.93 0 1 0 12.004 2zM12 20a8 8 0 1 1 7.999-8A8 8 0 0 1 12 20zm4.7-5.6c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.17.26-.68.85-.83 1.03-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.27-.77-.68-1.3-1.53-1.45-1.78-.15-.26-.02-.4.11-.53.11-.1.26-.26.39-.4.13-.13.17-.22.26-.38.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.22-.52-.43-.45-.6-.46l-.51-.01c-.17 0-.45.06-.68.32-.23.26-.9.88-.9 2.15s.92 2.49 1.05 2.67c.13.17 1.81 2.77 4.37 3.89.61.26 1.08.41 1.45.52.61.19 1.16.16 1.6.1.49-.07 1.53-.63 1.75-1.25.22-.62.22-1.15.15-1.25-.06-.1-.24-.17-.49-.3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dr_poojas_rehabandtherapy"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-purple-500"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3.004 3.004 0 0 1-3 3zm4.5-8a1 1 0 1 1-1-1 1.001 1.001 0 0 1 1 1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Therapy Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
