import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/indian.jpg"
          className="object-cover brightness-50 w-full h-[250px]"
          width={500}
          height={200}
          quality={75}
          loading="lazy"
          alt="About Picture"
        />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-main text-primary text-2xl font-bold capitalize">
          {" "}
          About US
        </h1>
      </div>
      <div className="lg:px-20 max-w-6xl w-full mx-auto px-4 py-6 justify-start md:px-8">
        <div className="grid gap-4  md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5">
          <section className="lg:col-span-3">
            <h2 className="font-main text-xl font-bold">Our Mission</h2>
            <p className="my-2 font-MyFont">
              "At Fueler, our mission is to revolutionize the way you fuel your
              journey. We're dedicated to providing you with real-time fuel
              price transparency, convenient station location services, and
              fuel-saving insights. We strive to empower you with the tools to
              make informed choices, save money, and reduce your environmental
              footprint. Fueler is committed to enhancing your fueling
              experience and making it as efficient and hassle-free as possible,
              all while contributing to a sustainable future."
            </p>
          </section>
          <section className="md:row-span-2 md:row-start-2 lg:col-span-3">
            <h2 className="font-main text-xl font-bold">What We Are</h2>
            <p className="my-2 font-MyFont">
              we're not just an online book retailer; we're a vibrant literary
              community passionate about the written word. We believe that books
              have the power to inspire, educate, and transform lives.
            </p>
            <p className="my-2 font-MyFont">
              "Fueler is your trusted partner in optimizing the fueling process.
              We are a user-centric platform designed to simplify and enhance
              your fueling experiences. Our core values revolve around providing
              real-time fuel price information, helping you find the nearest
              fuel stations, and offering fuel efficiency tips. We are committed
              to making fueling more convenient, cost-effective, and
              environmentally responsible for all our users. Fueler is your
              go-to resource for smarter and more efficient fueling solutions."
            </p>
          </section>
          <div className="mt-6  md:col-start-2 md:row-span-3 md:row-start-1 lg:col-span-2 lg:col-start-4">
            <Image
              src="/images.jpg"
              className="object-cover border-8 w-full border-textgray md:max-h-96 md:max-w-[24rem]"
              width={500}
              height={300}
              quality={75}
              loading="lazy"
              alt="About Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
