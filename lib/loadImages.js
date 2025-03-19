export function loadSliderImages() {
  const images = require.context(
    "../public/img/slider",
    false,
    /\.(webp|png|jpe?g|svg)$/,
  );

  return images.keys().map((key) => key.replace("./", "/img/slider/"));
}

export function loadParallaxImages() {
  const images = require.context(
    "../public/img/parallax",
    false, // Don't include subdirectories
    /\.(webp|png|jpe?g|svg)$/,
  );

  return images.keys().map((key) => {
    const imageName = key.replace("./", "");
    const src = `/img/parallax/${imageName}`;
    const thumb = `/img/parallax/${imageName}`;
    const caption = "test";

    return { src, thumb, caption };
  });
}

export function loadParallaxPoster() {
  const images = require.context(
    "../public/img/poster",
    false, // Don't include subdirectories
    /\.(webp|png|jpe?g|svg)$/,
  );

  return images.keys().map((key) => {
    const imageName = key.replace("./", "");
    const src = `/img/poster/${imageName}`;
    const thumb = `/img/poster/${imageName}`;
    const caption = "test";
    return { src, thumb, caption };
  });
}

export function loadMobileParallaxImages() {
  const images = require.context(
    "../public/img/mobileParallax",
    false, // Don't include subdirectories
    /\.(webp|png|jpe?g|svg)$/,
  );

  return images.keys().map((key) => {
    const imageName = key.replace("./", "");
    const src = `/img/mobileParallax/${imageName}`;
    return src;
  });
}
