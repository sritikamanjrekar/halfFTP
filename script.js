document.addEventListener("DOMContentLoaded", function() {
    const modelViewer = document.getElementById("model5");
    const changeModelButton = document.getElementById("changeModelButton");
    const newModelSrc = "web browser.glb"; // Set the path to your new model here

    changeModelButton.addEventListener("click", function() {
        // Remove the existing model viewer element
        modelViewer.remove();

        // Create a new model viewer element with the new model source
        const newModelViewer = document.createElement("model-viewer");
        newModelViewer.id = "newModel";
        newModelViewer.src = newModelSrc;
        newModelViewer.alt = "New Model";
        newModelViewer.cameraControls = true;
        newModelViewer.autoRotate = true;
        newModelViewer.ar = true;

        // Append the new model viewer element to the body or any other container
        document.body.appendChild(newModelViewer);
    });
});
