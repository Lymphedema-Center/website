/**
 *
 * @param props The props object passed to a React component.
 * @param unallowedKeys The unallowed keys or custom props specified.
 * @returns A copy of the props object without the unallowedKeys.
 */
export const filterProps = (props: object, unallowedKeys: string[]) => {
  // create new object
  const newObj: any = {};

  // add key-value pairs
  Object.entries(props).forEach(([key, val]) => {
    if (!unallowedKeys.includes(key)) {
      newObj[key] = val;
    }
  });

  // return new object
  return newObj;
};

/**
 * Computes the aspect ratio of a string `111px` in pixels.
 *
 * @param dimension The base dimension value.
 * @param ratio The ratio of the base dimension value to the computed dimension value.
 * @returns A the new height or width string, `200px`.
 */
export const computeAspectRatio = (dimension: string, ratio: number) => {
  // process the "dimension" string
  let formattedDimension = dimension.trim();

  // determine if px
  if (formattedDimension.endsWith("px")) {
    const px = Number(formattedDimension.replace("px", ""));
    return px * ratio + "px";
  } else {
    throw new Error(
      `'dimension' must be a valid css 'height' or 'width' string, got ${formattedDimension}`
    );
  }
};

/**
 * Scrolls to the top of next container page.
 */
export const scrollToTop = () => {
  if (document) {
    document.getElementById("__next")!.scrollTo(0, 0);
  }
};

/**
 * Returns true if any of the values in a boolean array are true.
 *
 * @param arr The array of boolean values.
 * @returns A boolean.
 */
export const any = (arr: boolean[]) => arr.some((element) => element === true);
