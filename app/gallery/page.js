"use client";
// import imdos from "@/lib/imdos";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ViewMore = () => {
  const [reviews, setReviews] = useState(null);
  // const getData = async () => {
  //   const data = await imdos.request("SELECT id, image FROM galleries");
  //   setReviews(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  const [data, setData] = useState(null);
  return (
    <div>
      <Navbar />

      {reviews ? (
        <>
          <div className="w-screen h-screen flex justify-center items-center">
            Loading ...
          </div>
        </>
      ) : (
        <div className="py-16 px-4 sm:px-6 lg:px-8" id="gallery">
          <div className="max-w-full mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              libero similique iste fugiat architecto esse sed obcaecati
            </p>
          </div>

          <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-end">
            {reviews?.map((review, index) => (
              <div
                key={review?.id || index}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer relative transform">
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        review?.image
                          ? process.env.NEXT_PUBLIC_FILE_PATH + review?.image
                          : "/assets/images/hero-9.png"
                      }
                      alt="Powerstruct Gallery Image"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ViewMore;
