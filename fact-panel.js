
"use strict";

class FactPanel extends HTMLElement {
    
    static get observedAttributes() {
        return ["compact"];
    }

    connectedCallback() {
        const facts = [
            "Avocados contain healthy fats.",
            "Avocado is the king of superfoods."
        ];

        let current = 0;

        const heading = document.createElement("h2");
        heading.textContent = "Pudology Fun Facts";

        const fact = document.createElement("p");
        fact.textContent = facts[current];

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Next Fact";

        const status = document.createElement("p");
        status.setAttribute("role", "status");
        status.textContent = "Showing fact 1 of " + facts.length + ".";

        button.addEventListener("click", () => {
            current = (current + 1) % facts.length;
            fact.textContent = facts[current];
            status.textContent = "Showing fact " + (current + 1) + " of " + facts.length + ".";
        });

        this.appendChild(heading);
        this.appendChild(fact);
        this.appendChild(button);
        this.appendChild(status);
    }
}


    attributeChangedCallback() {
        const status = this.querySelector('[role="status"]');

        if (status) {
            status.hidden = this.hasAttribute("compact");
        }
    }


customElements.define("fact-panel", FactPanel);
