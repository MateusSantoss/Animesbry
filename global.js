let temaPagina = 'claro'

function mudarTema (temaPagina) {
			

			

			 
			 window.location.href='index.html?' + temaPagina

		
		}

		function verificarTema () {
			let tema = window.location.search
			tema = tema.replace('?', '')
			console.log(tema)
			if (tema === 'escuro') {
               document.getElementById('conteudo').className = 'tema'
			} 

		}
       

        function tema (pagina) {
        	let tema = window.location.search
			tema = tema.replace('?', '')
			console.log(tema)
        	 window.location.href=pagina + '?' + tema
        }

        



		
     




    

