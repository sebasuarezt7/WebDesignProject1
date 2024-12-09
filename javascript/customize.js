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

    // Obtener elementos del DOM
    const tshirtColor = $("#tshirtColor");
    const customText = $("#customText");
    const submitButton = $("#submitButton");
    const outputMessage = $("#outputMessage");

    // Manejar el clic del botón
    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar recargar la página
        const color = tshirtColor.value;
        const text = customText.value.trim();
        if (text) {
            outputMessage.textContent = `T-shirt (${color}) with text "${text}" added to your cart!`;
        } else {
            outputMessage.textContent = "Please enter a custom text before adding to your cart.";
        }


        

        
    });
    const hoodieColor = $("#hoodieColor");
    const hoodieCustomText = $("#hoodieCustomText");
    const hoodieSubmitButton = $("#hoodieSubmitButton");
    const hoodieOutputMessage = $("#hoodieOutputMessage");

 
    hoodieSubmitButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        const color = hoodieColor.value;
        const text = hoodieCustomText.value.trim();
        if (text) {
            hoodieOutputMessage.textContent = `T-shirt (${color}) with text "${text}" added to your cart!`;
        } else {
            hoodieOutputMessage.textContent = "Please enter a custom text before adding to your cart.";
        }


        

        
    });
});