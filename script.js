const persons = [
    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    ];

const newPersons=persons.map(MineurMajeur);

function MineurMajeur(element){
    if(element.age>=18){
    element.status="majeur"
  }
  else
    element.status="mineur"

    return element;
};


//console.log(newPersons)


const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';

function FormatToArray(str1){
const liste=nomPrenom=str1.split("-").map(element => {
    let obj={}
    element=element.split("&");
    obj.firstname=element[0];
    obj.lasttname=element[1];
    return obj
});;
return liste;
}
//console.log(FormatToArray(str1))


const users = [
    { name : "sarah" , comment : "j'aime ce poste <3" },
    { name : "monya" , comment : "le poste est null :( " },
    { name : "carlos" , comment : "salut l'algérie" }
]


users.map(MoodDetect);

function MoodDetect(element){
    obj={name:element.name}
    if (element.comment.includes("<3"))
        obj.etat="heureux";
    else if(element.comment.includes(":("))
        obj.etat="triste";
    else
        obj.etat="neutre";

return obj
}
//  console.log(users.map(MoodDetect))


const etudiants = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ]

const etudiantsFiltred=etudiants.filter(element => element.note!=undefined);
const notes=etudiantsFiltred.map(element =>element.note);
let moy = 0;
moy=(notes.reduce(  (previousValue, currentValue) => previousValue + currentValue,moy))/notes.length;

const newListe=etudiantsFiltred.sort((a ,b) => b.note  - a.note).map(FailedStudent)

function FailedStudent(element){
    if(element.note>=moy)
        element.mention="bien"
    else
        element.mention="passable"

    return element
}

//console.log(newListe)
