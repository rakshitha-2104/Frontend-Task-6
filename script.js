const profiles = [
    "Ram has 2 years experience in frontend development and loves building creative websites.",
    "Lucky enjoys crafting fast,responsible web apps from sleek UI interface to scalable backend Services.",
    "David loves python programming and developing useful software applications."
];
function viewProfile(index) {
    const info=document.getElementById("info-" + index);
    const button=document.querySelectorAll(".profile-btn")
    [index];
    if(info.textContent ==="") {
        info.textContent = profiles[index];
        button.textContent="Hide Profile";
    } else {
        info.textContent ="";
        button.textContent="View Profile";
    }
}