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
 * Computes the aspect ratio of a string ("111px" | "38%"") in pixels or percent.
 *
 * @param dimension The base dimension value.
 * @param ratio The ratio of the base dimension value to the computed dimension value.
 * @returns A the new height or width string, ("200px" | "53%").
 */
export const computeAspectRatio = (dimension: string, ratio: number) => {
  // determine if px or %
  if (dimension.endsWith("px")) {
    const px = Number(dimension.replace("px", ""));
    return px * ratio + "px";
  } else if (dimension.endsWith("%")) {
    const pct = Number(dimension.replace("%", ""));
    return pct * ratio + "%";
  } else {
    throw new Error(
      `'dimension' must be a valid css 'height' or 'width' string, got ${dimension}`
    );
  }
};
