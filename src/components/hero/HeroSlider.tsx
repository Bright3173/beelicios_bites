"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import ScrollPage from "../scroll-page/ScrollPage";

const HeroSlider = () => {
  return (
    <>
      <section className="section-hero margin-b-50">
        <div className="container">
          <Row>
            <div className="col-12">
              <div className="hero-slider swiper-container">
                <Swiper
                  pagination={{ clickable: true }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[
                    Pagination,
                    Navigation,
                    EffectFade,
                    Autoplay,
                    Parallax,
                  ]}
                  loop={true}
                  centeredSlides={true}
                  speed={1000}
                  parallax={true}
                  autoplay={{ delay: 5000 }}
                  effect="fade"
                  slidesPerView={1}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide slide-1">
                    <Row className="mb-minus-24">
                      <Col lg={6} className="col-12 order-lg-1 order-2 mb-24">
                        <div className="hero-contact">
                          <div className="hero-blur-bg"></div>
                          <h1>
                            The Perfect Burst
                            <br></br> Of Fresh Cake Bread.
                          </h1>
                          <Link
                            href="/shop-left-sidebar-col-3"
                            className="bb-btn-1"
                          >
                            Order Now
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide slide-2">
                    <Row className="mb-minus-24">
                      <Col lg={6} className="col-12 order-lg-1 order-2 mb-24">
                        <div className="hero-contact">
                          <div className="hero-blur-bg"></div>

                          <h2>
                            Dicover Healthy
                            <br></br> Mixture of Banana Blend
                          </h2>
                          <Link
                            href="/shop-left-sidebar-col-3"
                            className="bb-btn-1"
                          >
                            Order Now
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </SwiperSlide>

                  <div className="swiper-buttons">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </Row>
        </div>
        <ScrollPage />
      </section>
    </>
  );
};

export default HeroSlider;
