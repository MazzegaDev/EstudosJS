let programadores = [
    {Nome:'Gui',Skills: ['Html','CSS','JavaScript']},
    {Nome:'Lidia', Skills: ['Python','Sql','Linux']}
];

function Exibir(Obj){
    for(i=0; i<Obj.length; i++){
        console.log(`O programador ${Obj[i].Nome} tem os skills ${Obj[i].Skills}`);
    }
}

Exibir(programadores);