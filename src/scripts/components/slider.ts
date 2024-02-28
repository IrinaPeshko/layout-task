import "../../styles/components/slider.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export class SwiperSlider {
  constructor(selector: string) {
        const element = document.querySelector(selector);

        if (!(element instanceof HTMLElement)) {
          throw new Error(`Container element with selector '${selector}' not found`);
        }

    // console.log(element);
    // Инициализация Swiper
    const swiper = new Swiper(selector, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }
}
