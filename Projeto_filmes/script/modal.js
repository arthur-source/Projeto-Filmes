  

const salvar = document.getElementById('save')
salvar.addEventListener('click', function (e){ 

e.preventDefault()


    const nome = document.getElementById('name-text')
    const valorNome = nome.value

    const ano = document.getElementById('ano-text')
    const valorAno = ano.value

    const diretor = document.getElementById('diretor-text')
    const valorDiretor = diretor.value

    const genero = document.getElementById('genero-text')
    const valorGenero = genero.value

    const sinopseText = document.getElementById('sinopse-text')
    const sinopse = sinopseText.value

    const reviewText = document.getElementById('review-text')
    const review = reviewText.value

    const resultado = ['nome: ' + valorNome, 'Ano: ' + valorAno, 'Diretor: ' + valorDiretor,'Gênero: ' + valorGenero, 'Sinopse: ' + sinopse, 'Review: ' + review]

    console.log(resultado)

  const teste = document.getElementById('div1')
  teste.textContent = 'Fazendo um teste JS'  

    
   
})


