// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Get all the elements we need
  const textarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const faceImage = document.querySelector('#explore img');
  const button = document.querySelector('button');

  // Load available voices into the dropdown
  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Voices load asynchronously so we need this event
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();

  // When the button is clicked, speak the text
  button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textarea.value);

    // Set the selected voice
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.name === voiceSelect.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    // Swap to open mouth while speaking
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    // Swap back to closed mouth when done
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}
