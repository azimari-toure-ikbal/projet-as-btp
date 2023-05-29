import React from "react";
import Image from "next/image";
import { CiClock2, CiVideoOn, CiUser } from "react-icons/ci";

export default function HomePage() {
  return (
    <>
      <div className="relative flex w-full flex-col-reverse md:flex-row">
        <Image
          src={"/assets/imgs/hero-background.svg"}
          alt=""
          width={0}
          height={0}
          className="absolute top-0 -z-10 h-auto w-full"
        />
        <div className="mt-14 flex flex-col gap-4">
          <p className="text-4xl font-semibold">
            Redécouvrez l'apprentissage du{" "}
            <span className="text-orange-500">BTP</span>
          </p>
          <p className="mt-3 text-sm leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            reiciendis reprehenderit repellendus commodi fuga beatae ut maxime
            fugit obcaecati eum?
          </p>
          <div className="mt-3 flex w-80 items-center gap-4 rounded-3xl bg-primary py-2 pl-4">
            <p>🔍</p>
            <input
              type="text"
              className="bg-transparent focus:outline-none"
              placeholder="Chercher un cours"
            />
            <button className="ml-2 rounded-3xl bg-secondary p-2 text-sm font-light text-white">
              Chercher
            </button>
          </div>
        </div>
        <Image
          src={"/assets/imgs/hero-img.svg"}
          alt=""
          width={500}
          height={0}
        />
      </div>
      {/* 3 keys */}
      <div
        className="mx-12 mt-12 grid w-full grid-cols-1 gap-4 rounded-lg bg-secondary
      p-4 text-white md:grid-cols-3"
      >
        <div className="flex items-center gap-4">
          <Image
            src={"/assets/imgs/online-test.svg"}
            alt=""
            width={0}
            height={0}
            className="w-16 rounded-xl bg-tertiary p-4"
          />
          <div className="flex flex-col gap-2">
            <p className="text-xl capitalize">Learn the latest skills</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"/assets/imgs/exam.svg"}
            alt=""
            width={0}
            height={0}
            className="w-16 rounded-xl bg-tertiary p-4"
          />
          <div className="flex flex-col gap-2">
            <p className="text-xl capitalize">Get ready for a career</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"/assets/imgs/certification.svg"}
            alt=""
            width={0}
            height={0}
            className="w-16 rounded-xl bg-tertiary p-4"
          />
          <div className="flex flex-col gap-2">
            <p className="text-xl capitalize">Earn a certificat</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
      </div>
      {/* Our Tracks */}
      <div className="relative mt-12">
        <Image
          src={"/assets/imgs/idea.svg"}
          alt=""
          width={0}
          height={0}
          className="absolute left-0 top-0 w-20"
        />
        <Image
          src={"/assets/imgs/curved-arrow.svg"}
          alt=""
          width={0}
          height={0}
          className="absolute right-0 top-0 w-20"
        />
        <h1 className="text-center text-4xl font-semibold">Our Tracks</h1>
        <p className="mt-2 text-center text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          suscipit!
        </p>
        <div className="mb-12 mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-xl bg-white p-2 pb-4 shadow-lg">
            <Image
              src={"/assets/imgs/fille.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
            <div className="flex justify-between">
              <p className="text-xs">UI/UX Design</p>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
            </div>
            <p className="text-sm">UI/UX Design for Beginners</p>
            <p className="text-sm text-orange-500">$98</p>
            <hr className="border-dotted" />
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <CiClock2 size={15} />
                <p className="text-xs">22hr 30mn</p>
              </div>
              <div className="flex items-center space-x-1">
                <CiVideoOn size={15} />
                <p className="text-xs">34 courses</p>
              </div>
              <div className="flex items-center space-x-1">
                <CiUser size={15} />
                <p className="text-xs">250</p>
              </div>
            </div>
            <button className="mt-3 w-40 rounded-3xl bg-orange-500 p-2 text-white">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-white p-2 pb-4 shadow-lg">
            <Image
              src={"/assets/imgs/fille.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
            <div className="flex justify-between">
              <p className="text-xs">UI/UX Design</p>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
            </div>
            <p className="text-sm">UI/UX Design for Beginners</p>
            <p className="text-sm text-orange-500">$98</p>
            <hr className="border-dotted" />
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <CiClock2 size={15} />
                <p className="text-xs">22hr 30mn</p>
              </div>
              <div className="flex items-center space-x-1">
                <CiVideoOn size={15} />
                <p className="text-xs">34 courses</p>
              </div>
              <div className="flex items-center space-x-1">
                <CiUser size={15} />
                <p className="text-xs">250</p>
              </div>
            </div>
            <button className="mt-3 w-40 rounded-3xl bg-orange-500 p-2 text-white">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-white p-2 pb-4 shadow-lg">
            <Image
              src={"/assets/imgs/fille.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
            <div className="flex justify-between">
              <p className="text-xs">UI/UX Design</p>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
            </div>
            <p className="text-sm">UI/UX Design for Beginners</p>
            <p className="text-sm text-orange-500">$98</p>
            <hr className="border-dotted" />
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <CiClock2 size={15} />
                <p className="text-xs">22hr 30mn</p>
              </div>
              <div className="flex items-center space-x-1">
                <CiVideoOn size={15} />
                <p className="text-xs">34 courses</p>
              </div>
              <div className="flex items-center space-x-1">
                <CiUser size={15} />
                <p className="text-xs">250</p>
              </div>
            </div>
            <button className="mt-3 w-40 rounded-3xl bg-orange-500 p-2 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
