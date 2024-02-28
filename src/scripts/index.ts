import "../styles/style.scss";
import "../styles/variables.scss";
import "../styles/normalize.scss";

import { SwiperSlider } from "./components/slider";

document.addEventListener("DOMContentLoaded", () => {
  new SwiperSlider(".swiper");
});
