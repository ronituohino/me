// Originally made by Jez Swanson.
// Original available at https://github.com/Jezzamonn/aseprite-js
// Modified and used under the MIT license.
// Thanks <3

/**
 * @typedef FrameMetadata - What's exporting from Aseprite for a frame
 * @type {object}
 * @property {string} filename - Aseprite filename that this animation came
 *     from.
 * @property {{x: number, y: number, w: number, h: number}} frame - The
 *     bounding box for this frame in the spritesheet.
 * @property {boolean} rotated - ?
 * @property {boolean} rotated - ?
 * @property {{x: number, y: number, w: number, h: number}} spriteSourceSize -
 *     Not sure what this is, but related to the bounding box, I guess.
 * @property {{w: number, h: number}} sourceSize - Also not super sure what
 *     this is, but related to the bounding box, I guess.
 * @property {number} duration - How long this frame should be shown for, in
 *     milliseconds
 */

/**
 * @typedef AnimationMetadata - Data pulled out from the frame tags
 * @type {object}
 * @property {number} from - Starting frame of this animation
 * @property {number} to - Ending frame of this animation
 * @property {number} length - Entire duration of this animation.
 */

/**
 * @typedef ImageMetadata - Metadata for a spritesheet
 * @type {object}
 * @property {boolean} imageLoaded - Whether the image has been loaded.
 * @property {boolean} jsonLoaded - Whether the json metadata has been loaded.
 * @property {boolean} loaded - Whether the image and json have been loaded.
 * @property {?HTMLImageElement} image - The image, once it has been loaded.
 * @property {?FrameMetadata} frames - Metadata for each frame.
 * @property {?AnimationMetadata} animations - Metadata for each labeled
 *     animation.
 */

/**
 * @type {Object<string, !ImageMetadata>} Map of all the images and their
 * metadata.
 *
 * Treat this as read-only, but if you need to access information like the
 * lengths of animations you can use this.
 */
export const images = {};

/**
 * Asynchronously fetches an image and it's associated metadata, and saves it in
 * the images map.
 *
 * You can either use `basePath` to specify the directory that contains both the
 * image and its metadata, or you can specify the full path to each using
 * `imagePath` and `jsonPath`. If you specify just the directory, the files need
 * to be called [name].png and [name].json.
 *
 * @param {!Object} imageInfo - Information for loading a spritesheet and its
 *     metadata.
 * @property {string} imageInfo.name - Name of the image file and its metadata.
 *     The image should be name.png and the metadata should be name.json.
 * @property {string} imageInfo.basePath - Location of the image file and its
 *     metadata. Both files should be in the same place.
 * @property {string} imageInfo.imagePath - Name of the image file and its metadata.
 *     The image should be name.png and the metadata should be name.json.
 * @property {string} imageInfo.jsonPath - Location of the image file and its
 *     metadata. Both files should be in the same place.
 */
export async function loadImage({
  name,
  basePath = null,
  imagePath = null,
  jsonPath = null,
}) {
  if (!basePath && (!imagePath || !jsonPath)) {
    throw "Must specify either a basePath or imagePath and jsonPath";
  }

  if (images.hasOwnProperty(name)) {
    console.log(`Already loaded image ${name}.`);
  }

  if (!imagePath || !jsonPath) {
    if (!basePath.endsWith("/")) {
      basePath = basePath + "/";
    }
    imagePath = `${basePath}${name}.png`;
    jsonPath = `${basePath}${name}.json`;
  }

  images[name] = {
    image: null,
    imageLoaded: false,
    frames: {},
    jsonLoaded: false,
  };

  const loadImage = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      images[name].image = img;
      images[name].imageLoaded = true;
      resolve();
    };
    img.onerror = () => {
      reject(`Error loading image ${name}.`);
    };
    img.src = imagePath;
  });

  const loadMetadata = new Promise((resolve, reject) => {
    fetch(jsonPath)
      .then((response) => {
        if (response.status != 200) {
          reject(`Error loading metadata for ${name}.`);
        }
        return response.json();
      })
      .then((response) => {
        images[name].frames = response.frames;
        images[name].jsonLoaded = true;
        resolve();
      });
  });

  await Promise.all([loadImage, loadMetadata]);
}

/**
 * Renders a specific frame to a canvas.
 *
 * @param {!Object} p - Input to this function, as an object.
 * @param {!CanvasRenderingContext2D} p.context - The context of the canvas to
 *     draw on.
 * @param {string|ImageMetadata} p.image - The name, or image metadata of the
 *     spritesheet to draw.
 * @param {number} p.frame - The frame number to draw.
 * @param {{x: number, y: number}} p.position - The position on the canvas to
 *     draw this sprite
 * @param {number} p.scale - How much to upscale the sprite. Should be an
 *     integer.
 * @param {{x: number, y: number}} p.anchorRatios - The relative position of the
 *     anchor on this sprite. The anchor is used for positioning the sprite and
 *     for scaling. 0 puts the anchor at the left or the top, 1 puts the anchor
 *     at the right or the bottom. 0.5 positions the anchor at the center.
 *     Defaults to top left.
 */
export function drawSprite({
  context,
  image,
  frame,
  position,
  scale = 1,
  anchorRatios = {
    x: 0,
    y: 0,
  },
}) {
  let data = undefined;
  if (typeof image === "string") {
    data = images[image];
  }

  if (!data.imageLoaded || !data.jsonLoaded) {
    return;
  }

  const f = data.frames[`${image}.aseprite`];
  const sourceRect = f.frame;

  context.drawImage(
    data.image,
    sourceRect.x,
    sourceRect.y,
    sourceRect.w,
    sourceRect.h,
    Math.round(position.x - anchorRatios.x * scale * sourceRect.w),
    Math.round(position.y - anchorRatios.y * scale * sourceRect.h),
    scale * sourceRect.w,
    scale * sourceRect.h
  );
}

/**
 * Disables smoothing on the canvas across the different browsers.
 *
 * Keeps those pixels sharp!
 *
 * @param {!CanvasRenderingContext2D} context - Context of the canvas to disable
 * smoothing on.
 */
export function disableSmoothing(context) {
  context.msImageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;
}
