const saveButton = document.querySelector('.save__button');
const textSection = document.getElementById('text__english');
const noteBlock = document.querySelector('.note__block');
const numberAmount = document.querySelector('.number__amount');

saveButton.addEventListener('click', () => {
    createNote();
});

function createNote() {
    
    let note = document.createElement('div');
    
    note.innerHTML = textSection.value;    
    note.className = 'note__list__main';
    noteBlock.appendChild(note);
    textSection.value = '';
};

