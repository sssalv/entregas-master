export function getBackground(sizes) {
    const width = sizes.width
    const height = sizes.height
    const url = `https://picsum.photos/${width}/${height}?grayscale`
    return url;
}
