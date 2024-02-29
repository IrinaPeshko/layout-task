import "../../styles/components/object.scss";
import { Objects, objects } from "./objectsContent";

export const createObjectsBlocks = (selector: string): void => {
  const container = document.querySelector(selector) as HTMLElement;
  if (!container) {
    throw new Error(`Container element with selector '${selector}' not found`);
  }
  const swappedObjects = swapObjects(objects);
  container.innerHTML = createObjectsHTML(swappedObjects);
};

const createObjectsHTML = (objects: Objects[]): string => {
  return objects
    .map(
      (object) => `
      <div class="object__block">
        <img class="object__image" src="${object.imagePath}" alt="${object.alt}" />
        <div class="object__description description">
          <p class="object__paragraph">${object.description}</p>
        </div>
      </div>
    `
    )
    .join("");
};

const swapObjects = (objects: Objects[]): Objects[] => {
  const swappedObjects = [...objects];
  const temp = swappedObjects[2];
  swappedObjects[2] = swappedObjects[3];
  swappedObjects[3] = temp;
  return swappedObjects;
};
