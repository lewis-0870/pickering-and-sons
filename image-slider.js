// custom component for an image slider
// creating a class so the custom element can be defined and reused

class ImageSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

// shadow DOM - used to keep the code for custom component separate from the rest of the DOM
// separate component can be reused without conflicts with the main styles or scripts

    connectedCallback() {
        const beforeImg = this.getAttribute('before');
        const afterImg = this.getAttribute('after');

// retrive the images from the attributes on the index file
// setting up the HTML structure for the slider
// Ratio 4/5 to maintain aspect ratio - same as images edited to be used
// clip-path will hide part of the after image to create the slider effect
// HTML div used to contact images and create slider effect 
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%; 
}
                .container {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4/5;
                    overflow: hidden;
    }
                    img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
    }
                    .after-image {
                    clip-path: inset(0 0 0 50%);
    }
                    .slider {
                    position: absolute;
                    inset: 0;
                    cursor: ew-resize;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
    }
                    .divider {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    width: 2px;
                    background: #fff;
                    pointer-events: none;
                    display: flex;
                    align-items: center;      /* Vertically centers the arrow */
                    justify-content: center;   /* Horizontally centers the arrow */
    }
                    .divider span {
                    background: #fff;
                    color: #333;
                    padding: 5px;
                    border-radius: 50%;       /* Makes it a circle */
                    font-size: 20px;
                    font-weight: bold;
                    box-shadow: 0 0 5px rgba(0,0,0,0.3);
}
            </style>

            <div class="container">
                <img src="${beforeImg}" alt="Image of construction project before">
                <img src="${afterImg}" class="after-image" alt="Image of construction project after">
                <div class="divider">
                <span>◀▶</span>
                </div>
                <input type="range" class="slider" min="0" max="100" value="50">
            </div>
        `;

        // Interactive Slider Functionality
        const slider = this.shadowRoot.querySelector('.slider');
        const afterImage = this.shadowRoot.querySelector('.after-image');
        const divider = this.shadowRoot.querySelector('.divider');

        // moves the slider when the user moves the slider handle to show more or less of the images
        slider.addEventListener('input', (event) => {
            const value = event.target.value;
            afterImage.style.clipPath = `inset(0 0 0 ${value}%)`;
            divider.style.left = `${value}%`;
        });
    }
}
// define the custom element so it can be used in HTML
customElements.define('image-slider', ImageSlider);