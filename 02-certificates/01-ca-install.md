#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 14/12/2023<br>
#Data de atualização: 15/12/2023<br>
#Versão: 0.01<br>

Site Oficial do OpenSSL: https://www.openssl.org/<br>
Manual do OpenSSL: https://man.openbsd.org/openssl.1<br>
Site Oficial do Certbot (Let's Encrypt): https://certbot.eff.org/

CA (Certificate Authority Trust) Autoridades Certificadoras Validas<br>
SSL.com: https://www.ssl.com/<br>
Secured Signing: https://www.securedsigning.com/<br>
Globalsing: https://www.globalsign.com/<br>
D-Trust: https://www.d-trust.net/<br>
Digicert: https://www.digicert.com<br>
Verisign: https://www.verisign.com/<br>
Let's Encrypt: https://letsencrypt.org/


#01_ Instalação da Autoridade Certificadora CA no Mozilla Firefox (GNU/Linux ou Microsoft Windows)<br>

	#OBSERVAÇÃO IMPORTANTE: no Windows ou no GNU/Linux o Mozilla Firefox utiliza o seu próprio
	#sistema de gerenciamento de Unidades Certificadoras e Certificados Assinados, ele não usa
	#o do sistema operacional.

	Abrir menu de Aplicativo
		Preferências ou Opções ou Configurações
			Pesquisar em preferências: Ver certificados
				Autoridades
					Importar: pti-ca.crt
						Yes: Confiar nesta CA para identificar sites
						Yes: Confiar nesta autoridade certificadora para identificar usuários de email
						<Ver> Examinar certificado da CA
					<OK>
				<OK>

				Autoridades
					Bora para Pratica
						wsvaamonde.pti.intra

#02_ # Instalação da Autoridade Certificadora CA no Google Chrome (GNU/Linux ou Microsoft Windows)<br>

	#OBSERVAÇÃO IMPORTANTE: o Google Chrome no GNu/Linux utiliza o seu próprio sistema de
	#gerenciamento de Unidades Certificadoras e Certificados Assinados, ele não usa o do
	#sistema operacional GNU/Linux, já no Windows ele usa do próprio sistema operacional
	#não sendo necessário fazer esse procedimento.

	chrome://settings/certificates
		Autoridades
			Importar: pti-ca.crt
				Yes: Confiar neste certificado para a identificação de websites.
				Yes: Confiar neste certificado para identificar usuários de e-mail
				Yes: Confiar neste certificado para a identificação de criadores de software
			<OK>

		Autoridades
			org-Bora para Pratica
				wsvaamonde.pti.intra
	chrome://restart

#03_ Instalação da Autoridade Certificadora CA no Microsoft Edge (GNU/Linux ou Microsoft Windows)<br>

	#OBSERVAÇÃO IMPORTANTE: o Microsoft Edge no GNu/Linux utiliza o seu próprio sistema de
	#gerenciamento de Unidades Certificadoras e Certificados Assinados, ele não usa o do
	#sistema operacional GNU/Linux, já no Windows ele usa do próprio sistema operacional
	#não sendo necessário fazer esse procedimento.

	#OBSERVAÇÃO IMPORTANTE: O Microsoft Edge é um navegador baseado no Chromium e usa um 
	#armazenamento privado semelhante ao Chromium. O Edge usa um keystore em ~/.pki e você 
	#precisa do programa utilitário CertUtil para instalar o certificado no Edge.
	#Mais informações acesse: https://chromium.googlesource.com/chromium/src/+/master/docs/linux/cert_management.md

	#instalando a biblioteca Libnss3
	sudo apt update
	sudo apt install libnss3-tools

	#instalando a Unidades Certificadora no Microsoft Edge utilizando o comando certutil
	certutil -d sql:$HOME/.pki/nssdb -A -t "C,," -n BoraParaPratica -i pti-ca.crt
	certutil -d sql:$HOME/.pki/nssdb -L

	Abrir menu de Aplicativo
		Configurações
			Gerenciar Certificados
				Autoridades
					Importar

#04_ Instalação da Autoridade Certificadora CA no Opera (GNU/Linux ou Microsoft Windows)<br>

	#OBSERVAÇÃO IMPORTANTE: O navegador Opera utiliza o mesmo gerenciador de Certificado do 
	#Google Chrome, se você já importou o certificado no Google Chrome na hora de importar
	#o certificado no Navegador Opera a seguinte mensagem de erro aparece para você: 
	#Certification Authority Import Error: The file contained one certificate, which was not 
	#imported: wsvaamonde.pti.intra: Certificate already exists.

	Abrir o Menu de Configuração Fácil
		Ir para as configurações completas do navegador
			Configurações de pesquisa: certificado
				Segurança
					Gerenciar Certificados
						Autoridades
							Importar
								Yes: Confie neste certificado para identificar sites
								Yes: Confie neste certificado para identificar usuários de e-mail
								Yes: Confie neste certificado para identificar fabricantes de software
							<OK>
						Autoridades
							org-Bora para Pratica
								wsvaamonde.pti.intra

#05_ Instalação da Autoridade Certificadora CA no GNU/Linux (Linux Mint ou Ubuntu)<br>

	Pasta: Download
			Abrir como Root (Botão direito do Mouse: Abrir como root)
				Copiar: pti-ca.crt
				Para: /usr/local/share/ca-certificates/

			Abrir o Terminal como Root (Botão direito do Mouse: Abrir no Terminal)

				#instalando e atualizando as Unidades Certificadores Raiz no Linux Mint
				sudo update-ca-certificates

				#verificando a criação do link PEM no Linux Mint
				ls -lha /etc/ssl/certs/pti-ca*

#06_ Instalação da Autoridade Certificadora CA no Microsoft Windows (10 ou 11)<br>

	Pasta: Download
			pti-ca.crt (clicar duas vezes em cima do certificado)
				Abrir
					Instalar Certificado...
						Assistente para Importação de Certificados
							Máquina Local <Avançar>
								Deseja permitir que este aplicativo faça alterações no seu dispositivo? <sim>
									Colocar todos os certificados no repositório a seguir
										Repositório de Certificados <Procurar>
											Autoridades de Certificação Raiz Confiáveis <OK>
											<Avançar>
											<Concluir>
											<OK>
											<OK>

	Pesquisa do Windows
		Gerenciar Certificados de Computador <Sim>
			Autoridades de Certificação Raiz Confiáveis
				Certificados
					Emitido para:
						wsvaamonde.pti.intra

#07_ Instalação da Autoridade Certificadora CA no Android<br>

	#EM DESENVOLVIMENTO

#08_ Instalação da Autoridade Certificadora CA no iOS Apple<br>

	#EM DESENVOLVIMENTO

#08_ Instalação da Autoridade Certificadora CA no MacOS Apple<br>

	#EM DESENVOLVIMENTO
