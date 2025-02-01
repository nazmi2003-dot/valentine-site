document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').textContent = "Sexy meow valentineuse 😊🎉🎉🥳🥳🥳";
    playAudio('valentineAudio'); // Joue l'audio pour "Oui"
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').textContent = "C'est tellement mauvaise que je suis un meow triste 😢😢😢";
    playAudio('valentineAudio2'); // Joue l'audio pour "Non"
});

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play(); // Joue l'audio correspondant
}