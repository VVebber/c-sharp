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

createNumberSequence(2, 31, "integer31");
createNumberSequence(2, 28, "integer28");
createNumberSequence(2, 25, "integer25");
createNumberSequence(2, 24, "integer24");
createNumberSequence(2, 23, "integer23");
createNumberSequence(2, 22, "integer22");
createNumberSequence(2, 21, "integer21");
createNumberSequence(2, 20, "integer20");
createNumberSequence(2, 19, "integer19");
createNumberSequence(2, 18, "integer18");
createNumberSequence(2, 17, "integer17");
createNumberSequence(2, 16, "integer16");
createNumberSequence(2, 15, "integer15");
createNumberSequence(2, 14, "integer14");
createNumberSequence(2, 13, "integer13");
createNumberSequence(2, 12, "integer12");
createNumberSequence(2, 11, "integer11");
createNumberSequence(2, 9, "integer9");
const containers10 = ["integer10", "integer10_2", "integer10_3", "integer10_4", "integer10_5", "integer10_6"];
containers10.forEach(container => createNumberSequence(2, 10, container));

const containers8 = ["integer8", "integer8_2"];
containers8.forEach(container => createNumberSequence(2, 8, container));

const containers7 = ["integer7", "integer7_2"];
containers7.forEach(container => createNumberSequence(2, 7, container));

const containers6 = ["integer6", "integer6_2"];
containers6.forEach(container => createNumberSequence(2, 6, container));

const containers5 = ["integer5", "integer5_2", "integer5_3", "integer5_4", "integer5_5", "integer5_6"];
containers5.forEach(container => createNumberSequence(2, 5, container));

const containers4 = ["integer4", "integer4_2", "integer4_3", "integer4_4", "integer4_5", "integer4_6"];
containers4.forEach(container => createNumberSequence(2, 4, container));

const containers3 = ["integer3", "integer3_2", "integer3_3","integer3_4"];
containers3.forEach(container => createNumberSequence(2, 3, container));

const containers2 = ["integer2", "integer2_2", "integer2_3","integer2_4"];
containers2.forEach(container => createNumberSequence(2, 2, container));
