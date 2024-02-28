import "../styles/style.scss";
import "../styles/variables.scss";
import "../styles/normalize.scss";
import "../styles/components/category.scss";
import "../styles/components/object.scss";
import "../styles/components/info.scss";

import { createSwiperSlider } from "./components/slider";

document.addEventListener("DOMContentLoaded", () => {
  createSwiperSlider(".swiper");
});
