

class SliderCompoenent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = `<h1>${this.getAttribute('text')}<h1>`
        // this.querySelector('h1').innerText = this.getAttribute('text')
    }
}

window.customElements.define('slider-compoenet' ,SliderCompoenent)