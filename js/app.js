console.log("Thisssssssss")
showNotes();



/// if user add a note add it to local storage............

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();

})


// for showing the NOtes to the user

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {

        html += ` <div id="notes" class="row container-fluid">

        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">delete note</button>
            </div>
        </div>


    </div>`

    })

    let noteselm = document.getElementById('notes');
    if (notesObj.length != 0) {
        if (html.length != 0) {
            noteselm.innerHTML = html
        }

    } else {

        noteselm.innerHTML = `<h1>Nothnig to show</h1>`;

    }

}


// for deleting the notes 

function deleteNote(index) {
    console.log("I am deleting", index);


    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();



}