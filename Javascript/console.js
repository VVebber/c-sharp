function createNumberSequence(start, end, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    for (let i = start; i <= end; i++) {
        const p = document.createElement("p");
        p.className = "null";
        p.innerText = i;
        container.appendChild(p);
    }
}

createNumberSequence(2, 28, "integer28");
createNumberSequence(2, 25, "integer25");
createNumberSequence(2, 24, "integer24");
createNumberSequence(2, 23, "integer23");
createNumberSequence(2, 22, "integer22");
createNumberSequence(2, 17, "integer17");
createNumberSequence(2, 16, "integer16");
createNumberSequence(2, 15, "integer15");
createNumberSequence(2, 9, "integer9");
createNumberSequence(2, 8, "integer8");
createNumberSequence(2, 7, "integer7");

const containers4 = ["integer4", "integer4_2", "integer4_3", "integer4_4", "integer4_5", "integer4_6"];
containers4.forEach(container => createNumberSequence(2, 4, container));

const containers3 = ["integer3", "integer3_2", "integer3_3"];
containers3.forEach(container => createNumberSequence(2, 3, container));
