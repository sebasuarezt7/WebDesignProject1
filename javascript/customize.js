$(document).ready(function () {
    const setupColorSelector = (selectorId, imageId, images) => {
        const $colorSelector = $(selectorId); 
        const $previewImage = $(imageId);    

        $colorSelector.on("change", () => {
            const selectedColor = $colorSelector.val();
            $previewImage.attr("src", images[selectedColor]);
        });
    };

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

    // T-Shirt Submit Button
    $("#submitButton").on("click", function (event) {
        event.preventDefault(); // Evitar recargar la página
        const color = $("#tshirtColor").val();
        const text = $("#customText").val().trim();
        
        if (text) {
            $("#outputMessage").text(`T-shirt (${color}) with text "${text}" added to your cart!`);
        } else {
            $("#outputMessage").text("Please enter a custom text before adding to your cart.");
        }
    });

    // Hoodie Submit Button
    $("#hoodieSubmitButton").on("click", function (event) {
        event.preventDefault(); // Evitar recargar la página
        const color = $("#hoodieColor").val();
        const text = $("#hoodieCustomText").val().trim();
        
        if (text) {
            $("#hoodieOutputMessage").text(`Hoodie (${color}) with text "${text}" added to your cart!`);
        } else {
            $("#hoodieOutputMessage").text("Please enter a custom text before adding to your cart.");
        }
    });
});