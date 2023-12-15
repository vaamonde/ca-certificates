#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 14/12/2023<br>
#Data de atualização: 14/12/2023<br>
#Versão: 0.01<br>

Site Oficial do OpenSSH: https://www.openssh.com/<br>
Site Oficial do OpenSSL: https://www.openssl.org/<br>
Site Oficial do PuTTY: https://www.putty.org/

OpenSSH é um conjunto de utilitários de rede relacionado à segurança que provém a criptografia<br> 
em sessões de comunicações em uma rede de computadores usando o protocolo SSH.

#01_ Editando o arquivo de configuração do OpenSSH Server<br>

	#editando o arquivo de configuração do OpenSSH Server
	sudo vim /etc/ssh/sshd_config
	INSERT

	#salvar e sair do arquivo
	ESC SHIFT :x <Enter>

	#reiniciar o serviço do OpenSSH Server
	sudo systemctl restart ssh
	sudo systemctl status ssh

#07_ Acessando remotamente o OpenSSH Server via Powershell e pelo software PuTTY<br>

	Windows
		Pesquisa do Windows
			Powershell

	ssh vaamonde@172.16.1.20 (alterar para o endereço IPv4 do seu servidor)

	Windows
		Pesquisa do Windows
			PuTTY

	Category
		Session
			Host Name (or IP address): vaamonde@172.16.1.20 (alterar para o endereço IPv4 do seu servidor)
			Port: 22
			SSH: On
	<Open>

	Linux
		Terminal: Ctrl + Alt + T
			ssh vaamonde@172.16.1.20 (alterar o usuário e endereço IPv4 do seu servidor)
	
	#verificando os usuários logados remotamente no Ubuntu Server
	#opção do comando who: -H (heading), -a (all)
	w
	who -Ha
	users