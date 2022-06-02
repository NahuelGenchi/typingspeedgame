const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
mistakeTag = document.querySelector(".mistake span");

let charIndex = mistakes = 0;

function randomParagraph() {
    // getting random number and it'll always less than the paragraphs length
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    /* getting random item from the paragraphs array, splitting all characters
    of it, adding each character inside span and then adding this span inside p tag */
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    // focusing input-field on keydown or click event
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
};

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    // if user hasn't entered any character or pressed backspace
    if (typedChar == null) {
        charIndex--;
        // decrement mistakes only if the charIndex span contains incorrect class
        if (characters[charIndex].classList.contains("incorrect")) {
            mistakes--;
        };
        characters[charIndex].classList.remove("correct","incorrect");
    } else {
        if (characters[charIndex].innerText === typedChar) {
            /* if user typed character and shown character matched then add the
               correct class, else increment the mistakes and add the incorrect class */
            characters[charIndex].classList.add("correct");
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");
        };
        charIndex++; // increment charIndex either user typed correct or incorrect character
    };
    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");
    mistakeTag.innerText = mistakes;
};

randomParagraph();
inpField.addEventListener("input", initTyping);