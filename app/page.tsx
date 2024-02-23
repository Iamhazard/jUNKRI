/* eslint-disable @next/next/no-img-element */

import AboutUs from "@/components/AboutUs/AboutUs";
import Chef from "@/components/AboutUs/Chef";
import Gallery from "@/components/Gallery/Gallery";
import SpecialMenu from "@/components/Menu/SpecialMenu";
import SubHeading from "@/components/Navbars/SubHeading";
import Intro from "@/components/intro/Intro";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Image, Leaf } from "lucide-react";
import Link from "next/link";


const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in a seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality ",
    Icon: CheckCircle,
    description:
      "Every assets on Our platform is verified by our team to ensure quality standard.Not happy ? We offer a 30-day refund guarantee period. ",
  },
  {
    name: "for the Planet ",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the Preservation and restoration of the natural environment. ",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="pb-6 h-auto">
        <video autoPlay loop muted>
          <source src="/Assets/BG BY CWS.mp4" type="video/mp4" />
        </video>

        <div className="app__wrapper " id="home">
          <div className="app__wrapper_info ">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">The Key To Fine Dining</h1>
            <p className="text-[#DCCA87]" style={{ margin: "2rem 0" }}>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
              <Link className={buttonVariants()} href="/products">
                Explore Menu{" "}
              </Link>
              <Button variant="ghost"> Our quality Promise &rarr;</Button>
            </div>
          </div>

          <div className="app__wrapper_img">
            <img src="/Assets/welcome.png" alt="" />
          </div>

        </div>

        {/* product */}
      </MaxWidthWrapper>

      <div>
        <SpecialMenu />
      </div>

      <div>
        <Chef />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <Gallery />
      </div>



    </>
  );
}
