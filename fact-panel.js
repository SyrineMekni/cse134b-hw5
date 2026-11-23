
"use strict";

class FactPanel extends HTMLElement {

    static get observedAttributes() {
        return ["compact"];
    }

    connectedCallback() {
        if (this.querySelector("h2")) return;

        const facts = [
            "Avocados contain healthy fats.",
            "Avocado is the king of superfoods."
        ];

        const heading = document.createElement("h2");
        heading.textContent = "Pudology Fun Facts";

        const fact = document.createElement("p");
        fact.textContent = facts[0];

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Get New Fact";

        const status = document.createElement("p");
        status.setAttribute("role", "status");
        status.textContent = "Click Get New Fact to load a random fact.";

        button.addEventListener("click", async () => {
            status.textContent = "Loading a new fact...";

            try {
                const response = await fetch(
                    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
                );

                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }

                const data = await response.json();

                if (typeof data?.text !== "string") {
                    throw new Error("Expected a fact in the response.");
                }

                fact.textContent = data.text;
                status.textContent = "New fact loaded successfully.";

            } catch (error) {
                status.textContent = "Could not load a fact. Please try again.";
            }
        });

        this.appendChild(heading);
        this.appendChild(fact);
        this.appendChild(button);
        this.appendChild(status);

        status.hidden = this.hasAttribute("compact");
    }

    attributeChangedCallback() {
        const status = this.querySelector('[role="status"]');

        if (status) {
            status.hidden = this.hasAttribute("compact");
        }
    }
}

customElements.define("fact-panel", FactPanel);

const factPanel = document.querySelector("fact-panel");
const toggleButton = document.querySelector("#facts-toggle");

let savedMode = "expanded";

try {
    throw new Error("Testing storage read failure");
    const storedMode = localStorage.getItem("hw5-fact-panel-mode");
    

    if (storedMode === "compact" || storedMode === "expanded") {
        savedMode = storedMode;
    }
} catch (error) {
    // Keep expanded mode if storage is unavailable.
}

if (savedMode === "compact") {
    factPanel.setAttribute("compact", "");
} else {
    factPanel.removeAttribute("compact");
}

toggleButton.textContent = savedMode === "compact"
    ? "Show Details"
    : "Hide Details";

toggleButton.addEventListener("click", () => {
    const compact = factPanel.toggleAttribute("compact");

    toggleButton.textContent = compact
        ? "Show Details"
        : "Hide Details";

    try {
        localStorage.setItem(
            "hw5-fact-panel-mode",
            compact ? "compact" : "expanded"
        );
    } catch (error) {
        // The button still works if saving fails.
    }
});
