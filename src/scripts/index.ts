import "../styles/style.scss";
import "../styles/variables.scss";
import "../styles/normalize.scss";
import "../styles/components/category.scss";
import "../styles/components/info.scss";

import { createSwiperSlider } from "./components/createSlider";
import { createObjectsBlocks } from "./components/createObjects";

document.addEventListener("DOMContentLoaded", () => {
  createSwiperSlider(".swiper");
  createObjectsBlocks(".object");
});
