import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const linkGroups = [
  {
    title: "Company Info",
    links: [
      ["About Us", "/about"],
      ["Carrier", "/careers"],
      ["We are hiring", "/careers"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["About Us", "/about"],
      ["Carrier", "/careers"],
      ["We are hiring", "/careers"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Features",
    links: [
      ["Business Marketing", "/features"],
      ["User Analytic", "/features"],
      ["Live Chat", "/features"],
      ["Unlimited Support", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["IOS & Android", "/resources"],
      ["Watch a Demo", "/resources"],
      ["Customers", "/resources"],
      ["API", "/resources"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-[#252B42]">
      <div className="bg-[#FAFAFA] px-6">
        <div className="mx-auto flex max-w-[1050px] flex-col items-start gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" className="text-2xl font-bold">
            Bandage
          </Link>

          <div className="flex items-center gap-5 text-[#23A6F0]">
            <button type="button" aria-label="Facebook">
              <FaFacebook size={24} />
            </button>

            <button type="button" aria-label="Instagram">
              <FaInstagram size={24} />
            </button>

            <button type="button" aria-label="Twitter">
              <FaTwitter size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white px-6">
        <div className="mx-auto max-w-[1050px] border-t border-[#E6E6E6]">
          <div className="flex flex-col gap-8 py-12 lg:flex-row lg:gap-6">
            {linkGroups.map((group) => (
              <nav
                key={group.title}
                aria-label={group.title}
                className="flex flex-col gap-5 lg:min-w-0 lg:flex-1"
              >
                <h3 className="text-base font-bold">
                  {group.title}
                </h3>

                <ul className="flex flex-col gap-3">
                  {group.links.map(([label, path]) => (
                    <li key={label}>
                      <Link
                        to={path}
                        className="text-sm font-bold text-[#737373] hover:text-[#23A6F0]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="flex w-full flex-col gap-5 lg:w-[320px]">
              <h3 className="text-base font-bold">
                Get In Touch
              </h3>

              <div>
                <div className="flex overflow-hidden rounded border border-[#E6E6E6] bg-[#F9F9F9]">
                  <label htmlFor="footer-email" className="sr-only">
                    E-posta adresiniz
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Your Email"
                    className="min-w-0 flex-1 px-4 py-5 text-sm text-[#737373]"
                  />

                  <button
                    type="button"
                    className="shrink-0 bg-[#23A6F0] px-5 py-5 text-sm text-white"
                  >
                    Subscribe
                  </button>
                </div>

                <p className="mt-1 text-xs leading-7 text-[#737373]">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] px-6 py-6">
        <div className="mx-auto max-w-[1050px]">
          <p className="mx-auto max-w-[220px] text-center text-sm font-bold leading-6 text-[#737373] lg:mx-0 lg:max-w-none lg:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}