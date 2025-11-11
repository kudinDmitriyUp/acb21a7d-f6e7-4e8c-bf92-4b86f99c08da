"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, DollarSign, Heart, Lightbulb, MessageCircle, Palette, Sparkles, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="gradientBars"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="DreamySolutions"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Transform Your Vision Into Reality"
          description="We specialize in creating dreamy solutions that turn your business aspirations into tangible success. From strategic consulting to creative design, we make dreams achievable."
          tag="Dream Makers"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "testimonial"
            }
          ]}
          imageSrc="https://pixabay.com/get/g455304d249370edce6b56fe869c9e94aaba894a51a179c4e9ac4ecc4555cd2cd9656081872a501d11715aec1d5e12c1dcacb6b1f4e6374943a516c612db40f10_1280.jpg"
          imageAlt="Dreamy landscape representing transformation"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Dreamy Solutions for Every Need"
          description="Comprehensive services designed to transform your business dreams into reality"
          tag="Our Services"
          tagIcon={Star}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              title: "Strategic Consulting",
              description: "Turn your business vision into actionable strategies with our expert guidance and industry insights that drive real results.",
              icon: Lightbulb
            },
            {
              title: "Creative Design",
              description: "Bring your brand to life with stunning visual identity and design solutions that captivate and inspire your audience.",
              icon: Palette
            },
            {
              title: "Digital Marketing",
              description: "Amplify your reach with data-driven marketing campaigns that connect you with your ideal customers and grow your business.",
              icon: TrendingUp
            },
            {
              title: "Brand Development",
              description: "Build a powerful brand presence that resonates with your target market and establishes lasting connections with customers.",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Forward-Thinking Companies"
          description="Join hundreds of businesses that have transformed their dreams into reality with our solutions"
          tag="Our Clients"
          tagIcon={Users}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g6429eae76fb9e1427fe92ab3e9cc7bc7f1a173d6321c7211a25059dd04e37421b73fdd854e385c48e5979c62f18da601281bf32a5d9df7c65c51b63ecb710838_1280.jpg",
            "https://pixabay.com/get/gd8f4c1b9dcd5fde22a4bea1bb34762136c536a0fcbac04088679906d88714e33bb7f8ce3b3dde6a65821372520eaca8e27d2e1b8f54f5f6a149d207255123061_1280.jpg",
            "https://pixabay.com/get/g4525eb62814569242804f471befa5b2c61a24c65207a4595174e368cd2fd394074e9e5c769ca3e9ba1e6a358bae209105874787d86fc7c241c8c7d1889df43da_1280.jpg",
            "https://pixabay.com/get/g669865616028afe35dee1765f5e64c1105408a01780b23da91424c78191a0d57b339e18dc55dd5c01fc7f470caa109eb5161d7853c96453e33d8b57b7a439a9a_1280.jpg",
            "https://pixabay.com/get/g9d8ad78d4ac3651c5c588de643294c35dccde4c6a65aa18601ea5c04156f5e46c29dbfe2f6622f6ca2a972857c4a7b57411200e16545312705dd03f713b0650c_1280.jpg",
            "https://pixabay.com/get/gf8931b05e109d8b1ba084f632de0ef5c30a792c5b7902590265e7d8f2919b5d757b2faf191ee3c406d17f54c9603fa8eaa489f0b0021ea2a26735de6e1dfec64_1280.jpg",
            "https://pixabay.com/get/g2dab075972aeb0161a8743c48e3b70561c2d97723abb0ca4fbc6bcfce1ac60e10805c989c8d085033e5cdbe2ce151efb75dc5d3cd5eceb6df76bdc24642b7e99_1280.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Investment in Your Dreams"
          description="Flexible packages designed to fit your vision and budget"
          tag="Pricing Plans"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Perfect Start",
              price: "$2,500",
              subtitle: "Ideal for small businesses ready to dream big",
              features: [
                "Strategic consultation session",
                "Brand identity basics",
                "Digital presence setup",
                "30-day support"
              ]
            },
            {
              id: "growth",
              badge: "Most Popular",
              price: "$5,000",
              subtitle: "Complete transformation for growing companies",
              features: [
                "Comprehensive strategy development",
                "Full brand design suite",
                "Marketing campaign launch",
                "3-month dedicated support",
                "Performance analytics"
              ]
            },
            {
              id: "enterprise",
              badge: "Premium",
              price: "$10,000",
              subtitle: "Ultimate solution for ambitious enterprises",
              features: [
                "Executive-level strategic planning",
                "Complete digital transformation",
                "Multi-channel marketing",
                "6-month partnership",
                "Dedicated account manager",
                "Quarterly reviews"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Dreams Turned Into Success Stories"
          description="Real transformations from clients who dared to dream big"
          tag="Success Stories"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              testimonial: "DreamySolutions transformed our startup vision into a thriving business. Their strategic approach and creative execution exceeded every expectation we had.",
              imageSrc: "https://pixabay.com/get/gef84c088b35d49377d1e2b9368cf8059d36f2821f3f032559692443eebd1b1ebb049e96ab3fed6ed2f1827af05f08ddb84f24048b5d3356758273cf807d39ffd_1280.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              testimonial: "The team's ability to understand our dreams and translate them into actionable strategies was phenomenal. Our brand has never been stronger.",
              imageSrc: "https://pixabay.com/get/g5820b2c152002677364e9f4bfc0c3609e367eecfbac654948a390e3a193ebba13a79cee264cf3aa5fb2c377ef7f194fa054b04b842f4c996816174116c3290dd_1280.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Director",
              testimonial: "Working with DreamySolutions was like having a crystal ball for our business future. They showed us possibilities we never imagined.",
              imageSrc: "https://pixabay.com/get/g94eb6e593b78bff1ce058bf21e6c73a268d2959f5d68f6e05cffb0e6c598f09672f4463b41851fd7c80ae2e2db78794242400dab0eb4163b8837c6c8afbda6ca_1280.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              testimonial: "From concept to execution, they made our business transformation feel effortless. The results speak for themselves - 300% growth in six months.",
              imageSrc: "https://pixabay.com/get/g002e40aa674a76e85a5677fd2451309e0086f5ae8582e3346fee78ca28ab5521af889f5e24ef4f4a4520106bd323c1d6b2823b438061e46a279a1ea2e543cc3e_1280.jpg"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Operations Manager",
              testimonial: "Their holistic approach to business transformation is unmatched. They don't just deliver solutions, they deliver dreams realized.",
              imageSrc: "https://pixabay.com/get/gba5303f4f36a96ae7368d2a1f05baa05f485102458d4d98f2708aa631de95f2c3b77753b215850b801362ff9653936f6e050b63ad65e064dbe49d3ac85677655_1280.jpg"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Entrepreneur",
              testimonial: "DreamySolutions turned our ambitious vision into a concrete reality. Their expertise and dedication made all the difference in our success journey.",
              imageSrc: "https://pixabay.com/get/g2a03104f95c47b6e74c3aab7fab31efec797a380851a349f66e4270c97ddc68a1334b1a2bf75c436e7ea40caf2eafd2fbd6df5b88245e3dd5a3436fd26feb638_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Let's Connect"
          title="Ready to Transform Your Dreams?"
          description="Get started with a complimentary consultation and discover how we can turn your vision into reality. Join our community of dreamers who achieved success."
          tagIcon={MessageCircle}
          inputPlaceholder="Enter your email address"
          buttonText="Start Journey"
          termsText="By subscribing, you agree to receive updates about our services and success stories. Unsubscribe anytime."
          imageSrc="https://pixabay.com/get/g0f58d9b3de484c18e251d99eca282a4c1e64c1d857d064240d39bd6d5b6f1fed2895a0a1a7ca04f4d5294c369e0485dafae8f5fe8874a4feaae95b8f215a19af_1280.jpg"
          imageAlt="Professional team collaboration"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="DreamySolutions"
          columns={[
            {
              items: [
                {
                  label: "Our Services",
                  href: "feature"
                },
                {
                  label: "Success Stories",
                  href: "testimonial"
                },
                {
                  label: "Pricing Plans",
                  href: "pricing"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Process",
                  href: "process"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Cookie Policy",
                  href: "cookies"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}