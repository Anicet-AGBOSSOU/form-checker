let bouton = document.getElementById('submit')
bouton.addEventListener(`click`,function()
{console.log(`vous avez cliqué sur le bouton`);
})

let naissance=document.getElementById(`dateNaissance`)
let inscriptions=document.getElementById(`inscription`)
inscriptions.onsubmit = function() { return validateBirthdate();
};






document.getElementById("inscription").addEventListener("submit", function(event) {
    event.preventDefault();

    let nom = document.getElementById("nom").value.trim();
    let prenoms = document.getElementById("prenoms").value.trim();
    let naissance = document.getElementById("dateNaissance").value;
    let ages = document.getElementById("age").value;
    let telephone = document.getElementById("telephone").value.trim();
    let motivation = document.getElementById("motivation").value.trim();
    let email = document.getElementById("email").value;
    let commentaire = document.getElementById("commentaire").value;


    if (!/^(01)\d{8}$/.test(telephone)) {
        alert("Le numéro de téléphone doit commencer par '01' et contenir 10 chiffres.");
        return;
    }

    if (motivation.length < 1000 || motivation.length > 2500) {
        alert("La motivation doit contenir entre 1000 et 2500 caractères.");
        return;
    }

//  Affiché si réussi
document.getElementById(`resNom`).innerText=nom;
document.getElementById(`resPrenoms`).innerText=prenoms;
document.getElementById(`resDateNaissance`).innerText=naissance;
document.getElementById(`resAge`).innerText=ages;
document.getElementById(`resTel`).innerText=telephone;
document.getElementById(`resMotivation`).innerText=motivation;
document.getElementById(`resEmail`).innerText=email;
document.getElementById(`resCommentaire`).innerText=commentaire

//pour afficher le résultat
document.getElementById(`reussi`).classList.remove(`hidden`)
});

function validateBirthdate() {
    let birthdate = new Date(naissance.value);
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDiff = today.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("Vous devez avoir au moins 18 ans avant de vous inscrire à la formation Dev Web du programme D-CLIC.");
        return false; // Empêche l'envoi du formulaire
    }
    return true; // Permet l'envoi du formulaire
}