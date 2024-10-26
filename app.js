document.getElementById("playButton").addEventListener("click", () => {
    const videoElement = document.getElementById("birthdayVideo");
    
    // Display the video if it's hidden
    if (videoElement.style.display === "none") {
        videoElement.style.display = "block"; // Make the video visible
    }
    
    videoElement.play(); // Play the video
});
