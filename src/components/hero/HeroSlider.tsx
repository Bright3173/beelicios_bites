"use client";
import React from "react";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <>
      <section className="section-hero margin-b-50">
        <div className="container">
          <div className="col-12">
            <div className="hero-slider swiper-container">
              <div className="mb-minus-24">
                <div className="col-12 order-lg-1 order-2 mb-24">
                  <div className="hero-contact">
                    <div className="hero-blur-bg"></div>
                    <h1>
                      The Perfect Burst
                      <br></br> Of Fresh Cake Bread.
                    </h1>
                    <Link href="/shop-left-sidebar-col-3" className="bb-btn-1">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
