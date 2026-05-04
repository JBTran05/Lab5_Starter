window.addEventListener('DOMContentLoaded', init);

function init() {
  // Select the horn dropdown, horn image, and audio element
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');

  // Select the volume slider and volume icon
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  // Select the play button
  const button = document.querySelector('button');

  // When the horn dropdown changes, update the image and audio source
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = horn;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  // When the volume slider changes, update the audio volume and volume icon
  volume.addEventListener('input', () => {
    const val = Number(volume.value);

    // Audio volume is 0-1, slider is 0-100 so divide by 100
    audio.volume = val / 100;

    // Update the volume icon based on the slider value
    if (val === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (val < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (val < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // When the play button is clicked, play the selected horn sound
  button.addEventListener('click', () => {
    // Do nothing if no horn is selected
    if (hornSelect.value === 'select' || hornSelect.value === '') return;

    // Reset audio to beginning and play
    audio.currentTime = 0;
    audio.play();

    // If party horn is selected, shoot confetti
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}