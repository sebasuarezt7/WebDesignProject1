// Helper function to change images based on color selection
const $ = (selector) => document.querySelector(selector);

const setupColorSelector = (selectorId, imageId, images) => {
    const colorSelector = $(selectorId); 
    const previewImage = $(imageId);    

    colorSelector.addEventListener("change", () => {
        const selectedColor = colorSelector.value;
        previewImage.src = images[selectedColor];
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // T-Shirts Color Options
    setupColorSelector("#tshirtColor", "#tshirtPreview", {
        white: "/images/whiteTshirt.jpeg",
        black: "/images/blackTshirt.jpeg",
        gray: "/images/grayTshirt.jpeg"
    });

    // Hoodies Color Options
    setupColorSelector("#hoodieColor", "#hoodiePreview", {
        white: "/images/hoodie-white.jpeg",
        black: "/images/hoodie-black.jpeg",
        gray: "/images/hoodie-gray.jpeg",

    });
});