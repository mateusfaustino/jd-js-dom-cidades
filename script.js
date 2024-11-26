const cidades = [
    { uf: "SP", nome: "São Paulo" },
    { uf: "RJ", nome: "Rio de Janeiro" },
    { uf: "MG", nome: "Belo Horizonte" },
    { uf: "BA", nome: "Salvador" },
    { uf: "RS", nome: "Porto Alegre" },
    { uf: "PR", nome: "Curitiba" },
    { uf: "PE", nome: "Recife" },
    { uf: "CE", nome: "Fortaleza" },
    { uf: "SC", nome: "Florianópolis" },
    { uf: "GO", nome: "Goiânia" },
    { uf: "MT", nome: "Cuiabá" },
    { uf: "MA", nome: "São Luís" },
    { uf: "AL", nome: "Maceió" },
    { uf: "PB", nome: "João Pessoa" },
    { uf: "ES", nome: "Vitória" },
    { uf: "AC", nome: "Rio Branco" },
    { uf: "AM", nome: "Manaus" },
    { uf: "PI", nome: "Teresina" },
    { uf: "RN", nome: "Natal" },
    { uf: "SE", nome: "Aracaju" },
    { uf: "SP", nome: "Campinas" },
    { uf: "RJ", nome: "Niterói" },
    { uf: "MG", nome: "Uberlândia" },
    { uf: "BA", nome: "Xique Xique" },
    { uf: "RS", nome: "Caxias do Sul" },
    { uf: "PR", nome: "Londrina" },
    { uf: "PE", nome: "Olinda" },
    { uf: "CE", nome: "Juazeiro do Norte" },
    { uf: "SC", nome: "Joinville" },
    { uf: "GO", nome: "Anápolis" },
    { uf: "MT", nome: "Várzea Grande" },
    { uf: "MA", nome: "Imperatriz" },
    { uf: "AL", nome: "Arapiraca" },
    { uf: "PB", nome: "Campina Grande" },
    { uf: "ES", nome: "Serra" },
    { uf: "AC", nome: "Sena Madureira" },
    { uf: "AM", nome: "Parintins" },
    { uf: "PI", nome: "Picos" },
    { uf: "RN", nome: "Mossoró" },
    { uf: "SE", nome: "Lagarto" },
    { uf: "SP", nome: "São Bernardo do Campo" },
    { uf: "RJ", nome: "Duque de Caxias" },
    { uf: "MG", nome: "Contagem" },
    { uf: "BA", nome: "Vitória da Conquista" },
    { uf: "RS", nome: "Pelotas" },
    { uf: "PR", nome: "Maringá" },
    { uf: "PE", nome: "Jaboatão dos Guararapes" },
    { uf: "CE", nome: "Sobral" },
    { uf: "SC", nome: "Blumenau" },
    { uf: "GO", nome: "Rio Verde" },
    { uf: "MT", nome: "Rondonópolis" },
    { uf: "MA", nome: "Caxias" },
    { uf: "CE", nome: "Quixeramobim" }
];

function filtrarEstado(){
    let $select = document.getElementById("select-estados")
    let selectValue = $select.value
    
    if(selectValue==''){
        renderLocais(cidades)
        return
    }

    let cidadesFiltradas = cidades.filter((c)=>{
        return(c.uf==selectValue)
    })

    renderLocais(cidadesFiltradas)
}

function renderLocais(locais) {
    $locais = document.getElementById("locais")
    $locais.innerHTML = ""

    locais.forEach((c) => {
        $locais.innerHTML += `
        <li>
            <span>${c.uf}</span>:    
            <span>${c.nome}</span>    
            </li>
            `
    })
}

renderLocais(cidades)