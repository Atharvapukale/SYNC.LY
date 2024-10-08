// scripts.js
document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    if (files.length === 0) {
        alert('Please select some files to upload.');
        return;
    }

    const playlist = document.getElementById('playlist');
    playlist.innerHTML = ''; // Clear previous playlist items

    // Process each file
    Array.from(files).forEach(file => {
        // Only process audio files
        if (file.type.startsWith('audio/')) {
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            listItem.dataset.fileUrl = URL.createObjectURL(file);
            listItem.addEventListener('click', () => {
                const audioPlayer = document.getElementById('audioPlayer');
                audioPlayer.src = listItem.dataset.fileUrl;
                audioPlayer.play();
            });
            playlist.appendChild(listItem);
        }
    });
});
