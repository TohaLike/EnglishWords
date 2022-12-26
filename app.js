const saveButton = document.querySelector('.save__button');
const textSection = document.getElementById('text__english');
const noteBlock = document.querySelector('.note__block');
const numberAmount = document.querySelector('.number__amount');

let saveText = '';

saveButton.addEventListener('click', () => {
    createNote();
    console.log(saveText)
});

function createNote() {
    let note = document.createElement('div');
    saveText = textSection.value;
    note.innerHTML = saveText;    
    note.className = 'note__list__main';
    // note.style.maxWidth = '99%'
    noteBlock.appendChild(note);
    textSection.value = '';
};

