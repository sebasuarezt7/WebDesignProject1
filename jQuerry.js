const shirtImage = document.getElementById('shirtImage');
const colorSelect = document.getElementById('color');
const designSelect = document.getElementById('design');

colorSelect.addEventListener('change', () => {
    const color = colorSelect.value;
    shirtImage.src = `shirt-${color}.png`;
});

designSelect.addEventListener('change', () => {
    const design = designSelect.value;
    if (design === 'none') {
        shirtImage.style.backgroundImage = 'none';
    } else if (design === 'logo') {
        shirtImage.style.backgroundImage = 'url(logo.png)';
    } else if (design === 'pattern') {
        shirtImage.style.backgroundImage = 'url(pattern.png)';
    }
});

document.getElementById('addToCart').addEventListener('click', () => {
    alert('Shirt added to cart!');
});