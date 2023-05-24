//Por padrão o tema é claro
let temaPagina = 'claro'
//\\\\a função é chamada nos icones na pagina inicial
//os parametros são string, claro ou escuro
function mudarTema (temaPagina) {
			

			

			 //A pagina index.html é recarregado concatenada com o tema escolhido
			 window.location.href='index.html?' + temaPagina

		
		}
        //Função chamada no onload da página
		function verificarTema () {
			let temaEscuro = false
			//variavel tema recuperar o tema na url
			let tema = window.location.search
			//substitui o "?" por um espaço vazio
			tema = tema.replace('?', '')
			console.log(tema)
			//se o tema na url for escuro
			if (tema === 'escuro') {
               
                temaEscuro = true
               
			} 
			if (temaEscuro) {
				document.getElementById('conteudo').className = 'tema'
			}



		}
       

        function tema (pagina) {
        	let tema = window.location.search
			tema = tema.replace('?', '')
			console.log(tema)
        	 window.location.href=pagina + '?' + tema
        }
        

       function paginaIncial () {
        	let tema = window.location.search
			tema = tema.replace('?', '')

			
			window.location.href = "index.html?" + tema
		
				

               }        

        


		
     




    

