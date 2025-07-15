import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300   md:py-10 py-5">
      <div className="w-11/12 max-w-[1300px] mx-auto">
        <div className=" mx-auto  grid gap-5 grid-cols-1 md:grid-cols-3 justify-between lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/englishzone.png"
              className="md:w-60 w-48"
              alt="englishzone"
            />
            <p className="mt-2 text-sm ">
              EnglishZone হলো একটি ইন্টার‍্যাকটিভ লার্নিং প্ল্যাটফর্ম, যেখানে
              শিক্ষার্থীরা সহজভাবে ইংরেজি গ্রামার, ভোকাবুলারি ও স্পোকেন ইংলিশ
              অনুশীলন করতে পারে। শিক্ষাকে আরও আনন্দদায়ক ও ফলপ্রসূ করে তুলতেই
              EnglishZone-এর যাত্রা।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className=" transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Vocabulary
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Grammar
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Quiz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold  mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className=" transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className=" transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold  mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="">
                <FaFacebookF />
              </a>
              <a href="#" className="">
                <FaTwitter />
              </a>
              <a href="#" className="">
                <FaInstagram />
              </a>
              <a href="#" className="">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm  mt-10 border-t border-gray-300 pt-5">
          © {new Date().getFullYear()} EnglishZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
