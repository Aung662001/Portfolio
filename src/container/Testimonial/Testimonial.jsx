import "./Testimonial.scss";
import { motion } from "framer-motion";
import Wrapper from "../../Wrapper";
import React, { useState, useEffect } from "react";

import client, { urlFor } from "../../client";
import MotionWrap from "../../MotionWrap";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonial = () => {
  function clickHandler(index) {
    setCurrentIndex(index);
  }
  const [brands, setBrands] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  useEffect(() => {
    const brandQuery = "*[_type == 'brands']";
    const testimonialQuery = "*[_type == 'testimonials']";
    client.fetch(brandQuery).then((data) => {
      setBrands(data);
    });

    client.fetch(testimonialQuery).then((data) => {
      setTestimonial(data);
    });
  }, []);
  const testi = testimonial[currentIndex];
  return (
    <section id="testimonial">
      {testimonial.length && (
        <>
          <div className="app__imgDesHolder">
            <div className="app__testimonial-item app__flex">
              <img src={urlFor(testi.imgurl)} alt={{ testimonial }} />
              <div className="app__testimonial-content">
                <p className="p-text">{testi.feedback}</p>
                <div>
                  <h4 className="bold-text">{testi.name}</h4>
                  <p className="p-text">{testi.company}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                clickHandler(
                  currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                clickHandler(
                  currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
          <div className="app__testimonial-brands app__flex">
            {brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                key={brand._id}
              >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Wrapper(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
