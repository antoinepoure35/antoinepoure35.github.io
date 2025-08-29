// Définir un tableau de classes (vous pouvez le remplacer par vos propres données)
let classes = [
    { name: "6C", students: ["B.Louan", "B.Alice", "B.Oscar", "D.Edwin", "DF.Maxence", "D.Gaspard", "FP.Ethan", "G.Maëlia", "H.Eloïne", "H.Agathe", "H.Jules", "L.Paco", "L.Charles", "L.Clémence", "LC.Timothée", "L.Julia", "L.Louis", "M.Léon", "M.Naoufel", "M.Léa", "M.Amandine", "M.Manon", "N.Antonin", "PS.Maéna", "P.Yanis", "SQ.Mathéo", "T.Suzie", "V.Thomas"] },
    { name: "6D", students: ["A.Louise", "A.Adem", "B.Lola", "B.Nael", "B.Camille", "B.Lucas", "C.Leo", "C.Jules", "D.Valentin", "F.Timothée", "F.Victoire", "G.Marie-Perrine", "G.Timéo", "HC.Mathias", "L.Augustin", "M.Antoine", "M.Faustine", "M.Baptiste", "NO.Marine-Eden", "P.Gabryel", "P.Raphaëlle", "R.Maina", "RT.Elisabeth", "S.Mathéo", "SF.Romann", "T.Enzo", "V.Paul", "V.Pauline"] },
    { name: "4B", students: ["B.Clément", "B.Camille", "B.Coralie", "C.Edouard", "C.Corentin", "C.Pierre", "D.Alexis", "E.Simon", "G.Malo", "GT.Thomas", "G.Antone", "J.Roxane", "J.Laura", "J.Hugo", "LL.Juliette", "LQ.Bertille", "LR.Martin", "L.Adam", "M.Lucie", "MS.Evan", "M.Samuel", "MDF.Ombeline", "O.Natasha", "P.Elouan", "PP.Driss", "RM.Clementine", "R.Ziad", "R.Clémence", "R.Jeanne", "S.Louann"] },
    { name: "3A", students: ["A.Antonin", "A.Héloïse", "B.Jade", "B.Adèle", "B.Yasmine", "B.Lise", "C.Maxence", "C.Robin", "C.Samuel", "C.Léandre", "DB.Diane", "D.Keziah", "D.Faustine", "D.Colin", "E.Martin", "F.Edouard", "G.Joan", "H.Antonin", "J.Maïwen", "J.Aaron", "LL.Joséphine", "L.Anton", "M.Charlie", "NG.Jocelin", "P.Adélaïde", "P.Anaïs", "Q.Nina", "R.Solenn", "T.Céleste", "T.Louis"] },
    // Ajoutez plus de classes ici...
];

// Fonction pour afficher la liste des classes
function displayClasses() {
    const classList = document.getElementById("class-list");
    classList.innerHTML = ""; // Effacer le contenu existant

    classes.forEach((classe) => {
        const classLink = document.createElement("a");
        classLink.textContent = classe.name;
        classLink.href = "#"; // Lien fictif pour l'instant
        classLink.addEventListener("click", () => displayStudents(classe.students));
        classList.appendChild(classLink);
    });
}

// Fonction pour afficher les élèves d'une classe
function displayStudents(students) {
    const studentsList = document.getElementById("students-list");
    studentsList.innerHTML = ""; // Effacer le contenu existant

    students.forEach((student) => {
        const studentInfo = document.createElement("div");
        studentInfo.className = "student-info";
        studentInfo.innerHTML = `
            <h2>${student}</h2>
            <button onclick="addWorkNotDone('${student}')">Travail non fait</button>
            <button onclick="addMisbehavior('${student}')">Comportement pénible</button>
            <button onclick="addForgottenItems('${student}')">Oubli d'affaires</button>
        `;
        studentsList.appendChild(studentInfo);
    });
}

// Fonction pour ajouter une classe
function addClass() {
    const className = prompt("Entrez le nom de la nouvelle classe :");
    if (className) {
        classes.push({ name: className, students: [] });
        displayClasses();
    }
}

// Fonctions pour ajouter des informations sur les élèves
function addWorkNotDone(student) {
    // À implémenter : ajouter le travail non fait pour l'élève
}

function addMisbehavior(student) {
    // À implémenter : ajouter le comportement pénible pour l'élève
}

function addForgottenItems(student) {
    // À implémenter : ajouter l'oubli d'affaires pour l'élève
}

// Appeler la fonction pour afficher les classes au chargement de la page
displayClasses();
