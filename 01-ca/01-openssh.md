#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 14/12/2023<br>
#Data de atualização: 08/01/2024<br>
#Versão: 0.03<br>

Site Oficial do OpenSSH: https://www.openssh.com/<br>
Site Oficial do OpenSSL: https://www.openssl.org/<br>
Site Oficial do PuTTY: https://www.putty.org/

OpenSSL é uma implementação de código aberto dos protocolos SSL e TLS. A biblioteca<br>
(escrita na linguagem C) implementa as funções básicas de criptografia e disponibiliza<br>
várias funções utilitárias. Também estão disponíveis wrappers que permitem o uso desta<br>
biblioteca em várias outras linguagens. 

O OpenSSL está disponível para a maioria dos sistemas do tipo Unix, incluindo Linux,<br>
Mac OS X, as quatro versões do BSD de código aberto e também para o Microsoft Windows.<br>
O OpenSSL é baseado no SSLeay de Eric Young e Tim Hudson. O OpenSSL é utilizado para<br>
gerar certificados de autenticação de serviços/protocolos em servidores (servers).

OpenSSH é um conjunto de utilitários de rede relacionado à segurança que provém a criptografia<br> 
em sessões de comunicações em uma rede de computadores usando o protocolo SSH.

#01_ Acessando remotamente o OpenSSH Server via Terminal, Powershell e pelo software PuTTY<br>

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
	#opção do comando last: -a (hostlast)
	#opção do comando grep: -i (ignore-case)
	#opção do comando netstat: -t (tcp), -n (numeric), -p (program), -a (all)
	#opção do comando ps: -a (all processes), -x (must have a tty), -f (full-format listing), -j (Jobs format)
	sudo who -Ha (show who is logged on)
	sudo w (Show who is logged on and what they are doing)
	sudo users (print the user names of users currently logged in to the current host)
	sudo last -a | grep -i 'still logged in' (show a listing of last logged in users)
	sudo ss | grep -i ssh (another utility to investigate sockets)
	sudo netstat -tnpa | grep -i 'ESTABLISHED.*sshd' (show networking connection)
	sudo ps -axfj | grep sshd (report a snapshot of the current processes)

#02_ Gerando os pares de Chaves Pública/Privadas utilizando o GNU/Linux (Mint)<br>

	Linux Mint Terminal: Ctrl+Alt+T
		
		#gerando o par de chaves no perfil do usuário local
		ssh-keygen
			Enter file in which to save the key (/home/vaamonde/.ssh/id_rsa): /home/vaamonde/.ssh/vaamonde <Enter>
			Enter passphrase (empty for no passphrase): <Enter>
			Enter same passphrase again: <Enter>
		
		#copiando a chave pública para o servidor Ubuntu
		ssh-copy-id vaamonde@172.16.1.20

#03_ Importando o Par de chaves Pública/Privada utilizando o Powershell (Windows)<br>

	Windows Powershell: Menu, Powershell 
		Primeira etapa: clicar com o botão direito do mouse e selecionar: Abrir como Administrador
			Get-Service ssh-agent <Enter>
			Set-Service ssh-agent -StartupType Automatic <Enter> (Ou mudar para: Manual)
			Start-Service ssh-agent <Enter>

		Segunda etapa: Powershell do perfil do usuário sem ser como administrador
			ssh-add .\vaamonde <Enter>

#04_ Editando o arquivo de configuração do OpenSSH Server no Ubuntu Server<br>

	#editando o arquivo de configuração do OpenSSH Server
	sudo vim /etc/ssh/sshd_config
	INSERT

		# alterar as informações principais dos métodos de autenticação a partir da linha: 29
		# Métodos de Autenticação do OpenSSH, utilizar chaves públicas e autenticação por senha
		# Por padrão o Servidor de OpenSSH não trabalhar com Chaves Pública para autenticação, 
		# utilizando o arquivo /etc/passwd para se autenticar no servidor, por motivos de segurança, 
		# é recomendado utilizar chaves públicas e senhas para se autenticar no servidor
		# Descomentar essa opção depois de configurar a chave pública no client e no servidor
		AuthenticationMethods publickey,password
	
	#salvar e sair do arquivo
	ESC SHIFT :x <Enter>

	#reiniciar o serviço do OpenSSH Server
	sudo systemctl restart ssh
	sudo systemctl status ssh

#05_ Testando novamente a conexão com o OpenSSH e Certificado no Ubuntu Server<br>

		Linux
		Terminal: Ctrl + Alt + T
			ssh vaamonde@172.16.1.20 (alterar o usuário e endereço IPv4 do seu servidor)