import "../../styles/components/slider.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Objects, objects } from "./objectsContent";

export const createSwiperSlider = (selector: string) => {
  const element = document.querySelector(selector);

  if (!(element instanceof HTMLElement)) {
    throw new Error(`Container element with selector '${selector}' not found`);
  }

  const swiperWrapper = element.querySelector(".swiper-wrapper") as HTMLElement;
  swiperWrapper.innerHTML = createSlidesHTML(objects);

  new Swiper(element, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
};

const createSlidesHTML = (slides: Objects[]): string => {
  return slides
    .map(
      (slide) => `
    <div class="swiper-slide slide">
      <img class="slide__image" src="${slide.imagePath}" alt="${slide.alt}" />
      <div class="slide__description description">
        <p class="slide__paragraph">${slide.description}</p>
        <a href="#" class="slide__details details">Подробнее ></a>
      </div>
    </div>
  `
    )
    .join("");
};
