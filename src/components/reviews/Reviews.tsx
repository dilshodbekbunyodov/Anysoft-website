"use client";
import React, { useEffect, useRef, useState } from "react";
import { reviewItems } from "./constants";
import ReviewItem from "./ReviewItem";
import { BaseIcon } from "../base-icon/BaseIcon";
import { BaseButton } from "../base-button/BaseButton";
import { unBounded } from "@/app/layout";

const Reviews = () => {
  const [beginReviewIdx, setReviewIdx] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perView, setPerView] = useState<number>(4);

  const [divHeight, setDivHeight] = useState<number | null>(null);

  const divRef = useRef<HTMLDivElement | null>(null);
  const isLastPage = beginReviewIdx + perView < reviewItems.length;
  const isNotFirstPage = beginReviewIdx > 0 && beginReviewIdx - perView >= 0;

  const incrementPage = () => {
    if (isLastPage) {
      setReviewIdx((prev) => prev + perView);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const decrementPage = () => {
    if (isNotFirstPage) {
      setReviewIdx((prev) => prev - perView);
      setCurrentPage((prev) => prev--);
    } else {
      setReviewIdx(0);
      setCurrentPage(1);
    }
  };

  const handleMorePreview = () =>
    limitPreview && setPerView((prev) => prev + 4);

  const limitPreview = perView + 4 < reviewItems.length - beginReviewIdx;

  // console.log("beginReviewIdx: ", beginReviewIdx);
  // console.log("currentPage: ", currentPage);
  // console.log("perView: ", perView);

  const updateDivHeight = () => {
    if (divRef.current) {
      const firstElementHeight = divRef.current.children[0].scrollHeight;
      const secondElementHeight = divRef.current.children[1].scrollHeight;
      const elementHeight =
        firstElementHeight > secondElementHeight
          ? firstElementHeight
          : secondElementHeight;
      setDivHeight(elementHeight);
    }
  };

  useEffect(() => {
    updateDivHeight();
  }, [perView, beginReviewIdx]);

  const currentPageItems = (colIdx: number) => {
    const reviews = reviewItems.slice(beginReviewIdx, beginReviewIdx + perView);
    return colIdx === 1
      ? reviews.slice(0, reviews.length / 2)
      : reviews.slice(reviews.length / 2);
  };

  return (
    <div className="px-4 lg:px-8 lg:pb-32 xl:px-16 2xl:px-32">
      <h2
        className={`text-2xl font-extrabold text-zinc-700 xl:text-4xl ${unBounded.className}`}
      >
        Opinions
      </h2>
      <div
        style={{ height: divHeight ? `${divHeight}px` : "h-max" }}
        className="transition-height mt-6 overflow-hidden duration-500 ease-in-out xl:mt-12 xl:flex xl:space-x-6"
        ref={divRef}
      >
        <div className="flex h-max flex-col space-y-8">
          {currentPageItems(1).map((item) => (
            <ReviewItem
              key={item.id}
              avatar={item.avatar}
              fullName={item.fullName}
              company={item.company}
              review={item.review}
            />
          ))}
        </div>
        <div className="flex h-max flex-col space-y-8">
          {currentPageItems(2).map((item) => (
            <ReviewItem
              key={item.id}
              avatar={item.avatar}
              fullName={item.fullName}
              company={item.company}
              review={item.review}
            />
          ))}
        </div>
      </div>
      <div className="my-8 flex h-16 lg:space-x-6 xl:mb-0">
        <BaseButton
          onClick={decrementPage}
          className={`hidden h-full items-center justify-center bg-neutral-800 text-gray-600 duration-200 lg:flex ${
            beginReviewIdx !== 0 ? "hover:text-white" : "hover:text-gray-600"
          }`}
        >
          <BaseIcon
            name="arrowRight"
            className="h-8 w-8 rotate-180"
            viewBox="0 0 32 32"
          />
        </BaseButton>
        <BaseButton
          onClick={handleMorePreview}
          className={`flex h-full items-center justify-center bg-neutral-800 ${
            limitPreview ? "text-white" : "text-gray-600"
          }`}
        >
          MORE
        </BaseButton>
        <BaseButton
          onClick={incrementPage}
          className={`hidden h-full items-center justify-center bg-neutral-800 text-gray-600 lg:flex ${
            beginReviewIdx + perView < reviewItems.length
              ? "hover:text-white"
              : "hover:text-gray-600"
          } duration-200`}
        >
          <BaseIcon name="arrowRight" className="h-8 w-8" viewBox="0 0 32 32" />
        </BaseButton>
      </div>
    </div>
  );
};

export default Reviews;
