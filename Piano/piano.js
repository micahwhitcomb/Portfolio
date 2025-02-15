// Piano Keys Project

/*Two full octaves of piano keys (or buttons) beginning with c1 and ending with c3*/
const keys = ['c1-key', 'c-sharp1-key', 'd1-key', 'd-sharp1-key', 'e1-key', 'f1-key', 'f-sharp1-key', 'g1-key', 'g-sharp1-key', 'a1-key', 'a-sharp1-key', 'b1-key', 'c2-key', 'c-sharp2-key', 'd2-key', 'd-sharp2-key', 'e2-key', 'f2-key', 'f-sharp2-key', 'g2-key', 'g-sharp2-key', 'a2-key', 'a-sharp2-key', 'b2-key', 'c3-key'];

const notes = [];
const notePositions = {
  'c1-key': '289px',
  'c-sharp1-key': '289px',
  'd1-key': '300px',
  'd-sharp1-key': '300px',
  'e1-key': '313px',
  'f1-key': '324px',
  'f-sharp1-key': '324px',
  'g1-key': '337px',
  'g-sharp1-key': '337px',
  'a1-key': '349px',
  'a-sharp1-key': '349px',
  'b1-key': '361px',
  'c2-key': '374px',
  'c-sharp2-key': '374px',
  'd2-key': '386px',
  'd-sharp2-key': '386px',
  'e2-key': '398px',
  'f2-key': '410px',
  'f-sharp2-key': '410px',
  'g2-key': '421px',
  'g-sharp2-key': '421px',
  'a2-key': '434px',
  'a-sharp2-key': '434px',
  'b2-key': '446px',
  'c3-key': '458px'
};

keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Function for clicking the piano notes.
function keyPlay(event) {
  event.preventDefault();
  event.target.style.backgroundColor = '#20ff02'; // Makes piano key green.

  const wholeNote = document.querySelector('.whole-note');
  wholeNote.style.bottom = notePositions[event.target.id];
  wholeNote.classList.remove('hidden');

  if (event.target.classList.contains('black-key')) {
    const sharpNote = document.querySelector('.sharp');
    sharpNote.style.bottom = notePositions[event.target.id];
    sharpNote.classList.remove('hidden');
  }

  if (event.target.id === 'c2-key' || event.target.id === 'c-sharp2-key') {
    const noteLine = document.getElementById('note-line');
    noteLine.classList.remove('hidden');
  }
}

//Function for releasing the mouse click.
function keyRelease(event) {
  event.target.style.backgroundColor = '';

  const wholeNote = document.querySelector('.whole-note');
  wholeNote.classList.add('hidden');

  const sharpNote = document.querySelector('.sharp');
  sharpNote.classList.add('hidden');

  const noteLine = document.getElementById('note-line');
  noteLine.classList.add('hidden');
}

// Event handler for mouse actions
function keyEventMaker(note) {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyRelease);
  note.addEventListener('mouseleave', keyRelease);
  note.addEventListener('touchstart', keyPlay, { passive: false });
  note.addEventListener('touchend', keyRelease);
  note.addEventListener('touchcancel', keyRelease);
}

// A for-each loop iterating through the keys & positions.
notes.forEach(function(note) {
  keyEventMaker(note);
});
