document.addEventListener('DOMContentLoaded', function() {
  var note = document.getElementById('note');
  var saveButton = document.getElementById('saveButton');
  var noteList = document.getElementById('noteList');

  saveButton.addEventListener('click', function() {
    var newNote = note.value;
    chrome.storage.sync.set({ 'note': newNote });

    var listItem = document.createElement('li');
    listItem.textContent = newNote;
    noteList.appendChild(listItem);

    // Save note to a text file on desktop
    chrome.downloads.download({
      url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(newNote),
      filename: 'note.txt',
      saveAs: true
    });
  });

  chrome.storage.sync.get('note', function(data) {
    note.value = data.note || '';
  });
});
