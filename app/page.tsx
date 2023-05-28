import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col-reverse md:flex-row">
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
      <div
        className="mx-12 mt-12 grid w-full grid-cols-1 gap-4 rounded-lg bg-secondary
      p-4 text-white md:grid-cols-3"
      >
        <div className="flex items-center gap-4">
          <p>Image</p>
          <div className="flex flex-col gap-2">
            <p className="text-xl capitalize">Learn the latest skills</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>Image</p>
          <div className="flex flex-col gap-2">
            <p className="text-xl capitalize">Get ready for a career</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>Image</p>
          <div className="flex flex-col gap-2">
            <p className="text-xl capitalize">Earn a certificat</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
