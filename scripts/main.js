function read_display_Quote() {
  //get into the right collection
  db.collection("quotes").doc("tuesday")
    .onSnapshot(tuesdayDoc => {
      console.log(tuesdayDoc.data());
      document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;
    })

}
read_display_Quote()