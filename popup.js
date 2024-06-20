document.addEventListener('DOMContentLoaded', function() {
    var note = document.getElementById('note');
  
    chrome.storage.sync.get('note', function(data) {
      note.value = data.note || '';
    });
  
    note.addEventListener('input', function() {
      chrome.storage.sync.set({ 'note': note.value });
    });
  });