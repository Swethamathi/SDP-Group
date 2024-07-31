import React from "react";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Beauty & Beast",
    username: "@Beast",
    body: "Originating in France, this is the story of Belle, a beautiful peasant girl ",
    img: "https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Beauty%20and%20the%20Beast.jpg",
  },
  {
    name: "Little Red Riding Hood",
    username: "@Wolf",
    body: "Little Red Riding Hood is a European fairy tale about a young girl and a sly wolf.",
    img: "https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Little%20Red%20Riding%20Hood.webp",
  },
  {
    name: "The Frog Prince",
    username: "@Prince",
    body: "The Frog Prince; or, Iron Henry is a German fairy tale ",
    img: "https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/The%20Frog%20Prince.jpg",
  },
  {
    name: "Cindrella",
    username: "@Cindrella",
    body:'Cinderella", or "The Little Glass Slipper", is a folk tale with thousands of variants that are told throughout the world.',
    img: "https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Cinderella.jpeg",
  },
  {
    name: "Snow White",
    username: "@Snow White",
    body: '"Snow White" is a German fairy tale, first written down in the early 19th century. ',
    img: "https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Snow%20White.webp",
  },
  {
    name: "Beauty & Beast",
    username: "@Beast",
    body: "Originating in France, this is the story of Belle, a beautiful peasant girl ",
    img: "https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Beauty%20and%20the%20Beast.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const AdminStories = () => {
  return (
    <>
        <h1 className="flex items-center justify-center text-2xl y-20 font-bold">Stories</h1>
        <br></br>
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </>
  );
};

export default AdminStories;
