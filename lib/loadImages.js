// utils/loadImages.js
export function loadSliderImages() {
  const images = require.context(
    "../public/img/slider",
    false,
    /\.(webp|png|jpe?g|svg)$/,
  );

  // Map the module keys to resolved paths
  return images.keys().map((key) => key.replace("./", "/img/slider/"));
}

export function loadParallaxImages() {
  const images = require.context(
    "../public/img/parallax", // Path to your parallax images
    false, // Don't include subdirectories
    /\.(webp|png|jpe?g|svg)$/, // Only include image files (webp, png, jpeg, svg)
  );

  // Get all image paths and map them to your desired structure
  return images.keys().map((key) => {
    const imageName = key.replace("./", ""); // Get the file name (e.g., 'image.jpg')

    // Construct the path for src and thumb
    const src = `/img/parallax/${imageName}`;
    const thumb = `/img/parallax/${imageName}`; // You can modify this if you have separate thumbnails
    const caption = "test"; // Replace with dynamic captions if needed

    // Return the object with src, thumb, and caption
    return { src, thumb, caption };
  });
}
