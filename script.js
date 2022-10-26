// selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dropText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"), 
input = dropArea.querySelector("input"); 
 
 let file;
button.onclick = () => {
    input.click()
}

input.addEventListener("change", function(){
    file = this.files[0];
    showFile()
    dropArea.classList.add("active")
})


 // if user drag file over drag-area
 dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
   dropArea.classList.add("active")
   dropText.textContent= "Release to upload"
 })
  
 // if user leave dragged file from drag-area
 dropArea.addEventListener("dragleave", () => {
   dropArea.classList.remove("active")
   dropText.textContent= "Drag & Drop to Upload File"
 })
  
 // if user drop  file on drag-area
 dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
     file = event.dataTransfer.files[0];
   console.log(file);
   showFile()
 });

 function showFile() {
   let fileType = file.type;
   let validExtensions = ["image/jpeg", "image/jpg", "image/png"]
   if(validExtensions.includes(fileType)){ // if an image file
     let fileReader = new FileReader(); // creating fileReader object
     fileReader.onload = () => {
        let fileUrl = fileReader.result// passing user file source in fileUrl variable
        console.log(fileUrl);
        let imgTag = `<img src="${fileUrl}" alt="" >`; // creating an img tag and passing user selected file
        dropArea.innerHTML = imgTag;
     }
     fileReader.readAsDataURL(file);
   }else{
     alert('This is not Image File')
     dropArea.classList.remove("active")
     dropText.textContent= "Drag & Drop to Upload File"
   }
 }
  