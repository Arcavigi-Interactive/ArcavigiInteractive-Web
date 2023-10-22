const discoverOffers = document.querySelector('#discover-offers');
const serviceSection = document.querySelector('#service-section');

discoverOffers.addEventListener('click', () => {
    serviceSection.scrollIntoView({ behavior: "smooth" });
});

const allSquareContainer = document.querySelectorAll('.square-container');
allSquareContainer.forEach((squareContainer) => {
    const elements = 50;
    for (let i = 0; i < elements; i++) {
        const span = document.createElement('span');
        span.classList.add('bg-square');
        span.style.top = `${Math.random() * 100}%`;
        span.style.left = `${Math.random() * 100}%`;
        squareContainer.appendChild(span);
        span.style.animationDelay = `${Math.ceil(Math.random() * 5)}s`;
    }
})

//TODO: synchornize blob with cursor

function addBlobs(container) {
    const blobContainer = document.querySelectorAll(container);
    blobContainer.forEach((area) => {
        const blob1 = document.createElement('span');
        const blob2 = document.createElement('span');
        blob1.classList.add('before-blob');
        blob2.classList.add('after-blob');
        area.appendChild(blob1);
        area.appendChild(blob2);
        // const animationDelay = Math.ceil(Math.random() * 5);
        // blob1.style.animationDelay = `${animationDelay}s`
        // blob2.style.animationDelay = `${animationDelay}s`
    })
}

addBlobs('.bg-blob');