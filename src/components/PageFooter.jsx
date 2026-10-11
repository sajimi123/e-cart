import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

function PageFooter() {
  return (
    <Footer container className="bg-blue-700 rounded-none">
      <div className="w-full text-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <FooterCopyright
            href="#"
            by="E-Cart"
            year={2026}
            className="text-white"
          />

          {/* Links */}
          <FooterLinkGroup className="flex flex-wrap justify-center gap-4">
            <FooterLink href="#" className="text-white hover:underline">
              About
            </FooterLink>
            <FooterLink href="#" className="text-white hover:underline">
              Privacy
            </FooterLink>
            <FooterLink href="#" className="text-white hover:underline">
              Terms
            </FooterLink>
            <FooterLink href="#" className="text-white hover:underline">
              Contact
            </FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  );
}

export default PageFooter;