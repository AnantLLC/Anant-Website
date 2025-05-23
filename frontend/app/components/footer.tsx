import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
// import cc from "../images/credit_card.jpg";
import logo from "../images/logo/logo.svg";
// interface SocialMediaInsight {
//   title: string;
//   description: string;
//   imageUrl: string;
//   views?: string;
//   author: string;
// }

// const socialMediaInsights: SocialMediaInsight[] = [
//   {
//     title: "Social Media Insight 1",
//     author: "Author 1",
//     views: "100k",
//     description: "Description for Social Media Insight 1",
//     imageUrl: cc.src,
//   },
//   {
//     title: "Social Media Insight 2",
//     author: "Author 2",
//     views: "200k",
//     description: "Description for Social Media Insight 2",
//     imageUrl: cc.src,
//   },
// ];

interface QuickLink {
  title: string;
  url: string;
}
const quickLinks: QuickLink[] = [
  { title: "About Us", url: "#about" },
  { title: "Our Services", url: "#services" },
  // { title: "Internships", url: "#" },
  // { title: "Meet Our Team", url: "#" },
  { title: "Schedule A Call", url: "https://calendly.com/yug-goyal46/1-1-meet-with-yugam?month=2025-05" },
  // { title: "Contact Us", url: "#" },
];


const footerLinks: QuickLink[] = [{
  title: "Our Blog",
  url: ""
}, 
{
  title: "Contact Us",
  url: ""
},
{
  title: "Sitemap",
  url: ""
}]


export default function Footer() {
  return (
    <footer className="bg-zinc-900 p-16 mx-auto text-white">
      <div className="grid lg:grid-cols-2 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center p-8 px-6 lg:px-12">
          <Image className="w-32" src={logo} alt="anant llc logo" />
          <h3 className="mb-4 max-w-2xs text-sm font-semibold text-center">
            Your trusted partner in wealth management and financial solutions.
          </h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/company/anant-llc1"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/anant_llc/"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="mailto:contact.anantllc@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              <MdMail size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center text-center">
          <h3 className="mb-4 text-sm md:text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="text-gray-400 text-sm hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="mt-4">
          <h3 className="mb-4 text-sm md:text-lg font-semibold">
            Social Media
          </h3>
          <ul className="flex flex-col space-y-2 mt-4">
            <span className="text-sm text-gray-400">Latest insights</span>
            {/* {socialMediaInsights.map((insight, index) => (
              <li key={index} className="flex space-x-2">
                <Image
                  src={insight.imageUrl}
                  alt={insight.title}
                  width={50}
                  height={50}
                  className=" w-20 h-20"
                />
                <div>
                  <h4 className="text-sm font-semibold">{insight.title}</h4>
                  <p className="text-xs  max-w-2xs text-gray-400">
                    By: {insight.author} · {insight.views} views
                  </p>
                  <p className="text-xs max-w-2xs text-gray-400">
                    {insight.description}
                  </p>
                </div>
              </li>
            ))} 
          </ul>
        </div> */}
      </div>
      <div className="mt-12 border-t w-full justify-center gap-2 md:justify-between md:flex-row flex flex-col items-center border-gray-800 pt-8 text-sm text-gray-400">
        <ul className="gap-6 flex md:order-none order-2">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="text-gray-400 hover:text-white">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <p>© {new Date().getFullYear()} Anant LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}