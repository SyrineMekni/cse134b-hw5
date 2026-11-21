
"use strict";

// Create a new custom HTML element called FactPanel.
class FactPanel extends HTMLElement {

    // Run this when the component is added to the webpage.
    connectedCallback() {
        this.textContent = "Welcome to Pudology Fun Facts!";
    }
}

// Tell the browser that <fact-panel> uses the FactPanel class.
customElements.define("fact-panel", FactPanel);
