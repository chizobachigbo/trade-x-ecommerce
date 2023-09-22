import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full p-5 mt-10 text-white footer bg-problack">
      <div className="flex-row justify-around md:flex ">
        <div className="footer-section">
          <ul className="customer-service">
            <li className="mb-3 font-bold service">Contact Us</li>
            <li className="hidden service md:block">Shipping</li>
            <li className="hidden service md:block">Returns and Exchanges</li>
            <li className="hidden service md:block">Cancel Order</li>
            <li className="hidden service md:block">Prescription Order</li>
            <li className="hidden service md:block">Track Your Order</li>
            <li className="hidden service md:block">Repair Service Guide</li>
            <li className="hidden service md:block">Product Usage Guide</li>
            <li className="hidden service md:block">Certificate of Authenticity</li>
            <li className="hidden service md:block">FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="legal">
            <li className="mb-3 font-bold notice">Legal Notice</li>
            <li className="hidden notice md:block">Terms of Use</li>
            <li className="hidden notice md:block">Privacy Policy</li>
            <li className="hidden notice md:block">Cookie Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="social-media">
            <li className="mb-3 font-bold socials">Social Media</li>
            <li className="hidden socials md:block">Facebook</li>
            <li className="hidden socials md:block">Instagram</li>
            <li className="hidden socials md:block">Youtube</li>
            <li className="hidden socials md:block">Twitter</li>
            <li className="hidden socials md:block">Pinterest</li>
            <li className="hidden socials md:block">Tiktok</li>
          </ul>
        </div>
      </div>
      <div className="items-center justify-around mt-10 lg:flex">
        <p className="mb-2 text-lg font-bold">© 2023 TradeX Ecommerce</p>
        <p className="text-sm">All rights reserved. DevelopedByChizoba., Ltd. </p>
      </div>
      <p className="mt-2 md:text-center">Please note the items displayed do not belong to me</p>
    </div>
  );
}
