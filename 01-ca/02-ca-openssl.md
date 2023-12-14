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

OpenSSL é uma implementação de código aberto dos protocolos SSL e TLS. A biblioteca<br>
(escrita na linguagem C) implementa as funções básicas de criptografia e disponibiliza<br>
várias funções utilitárias. Também estão disponíveis wrappers que permitem o uso desta<br>
biblioteca em várias outras linguagens. 

O OpenSSL está disponível para a maioria dos sistemas do tipo Unix, incluindo Linux,<br>
Mac OS X, as quatro versões do BSD de código aberto e também para o Microsoft Windows.<br>
O OpenSSL é baseado no SSLeay de Eric Young e Tim Hudson. O OpenSSL é utilizado para<br>
gerar certificados de autenticação de serviços/protocolos em servidores (servers).

O Transport Layer Security (TLS), assim como o seu antecessor Secure Sockets Layer<br>
(SSL), é um protocolo de segurança projetado para fornecer segurança nas comunicações<br>
sobre uma rede de computadores. Várias versões do protocolo encontram amplo uso em<br>
aplicativos como navegação na web, email, mensagens instantâneas e voz sobre IP (VoIP).<br>
Os sites podem usar o TLS para proteger todas as comunicações entre seus servidores e<br>
navegadores web.

#01_ Criando a estrutura de diretórios da CA e dos Certificados no Ubuntu Server<br>

	#conhecendo a estrutura de diretórios da CA e dos Certificados Assinados
	/etc/ssl/.............<-- Diretório padrão das configurações do OpenSSL
	/etc/ssl/certs/.......<-- Diretório das CA's Confiáveis do Ubuntu Server
	/etc/ssl/crl/.........<-- Diretório
	/etc/ssl/conf/........<-- Diretório dos Arquivos de Configuração da CA e dos Certificados
	/etc/ssl/newcerts/....<-- Diretório de Criação dos Novos Certificados Assinados
	/etc/ssl/private/.....<-- Diretório das Chaves Públicas e Privadas dos Certificados Assinados
	/etc/ssl/request/.....<-- Diretório das Requisições de Certificados Assinados

	#opção do comando mkdir: -v (verbose)
	#opção do bloco de argumentos {}: Agrupa comandos em um bloco
	sudo mkdir -v /etc/ssl/{certs,conf,crl,newcerts,private,requests}

#02_ Criando os arquivos de Indexação de Solicitação de Certificados Assinados no Ubuntu Server<br>

	#conhecendo os arquivos de configuração da CA e dos Certificados Assinados
	/etc/ssl/index.txt......<--
	/etc/ssl/index.attr.....<--
	/etc/ssl/serial.........<--
	/etc/ssl/conf/ca.conf...<-- 

	#opção do bloco de argumentos {}: Agrupa comandos em um bloco
	sudo touch /etc/ssl/{index.txt,index.txt.attr,serial}
	
	#adicionando um valor de sequência de números de solicitação de certificados
	#assinados no arquivo serial para o controle e gerenciamentos dos certificados
	#opção do redirecionador de saída >>: Redireciona a saída padrão, anexando
	sudo echo "1234" >> /etc/ssl/serial

	#download de arquivo de configuração da CA do Ubuntu Server
	#opção do comando wget: -v (verbose), -O (output file)
	sudo wget -v -O /etc/ssl/conf/ca.conf 

#03_ Editando o arquivo de Configuração da CA no Ubuntu Server<br>

	#arquivo de configuração da CA
	sudo /etc/ssl/conf/ca.conf
	INSERT

		#alterar as informações principais da CA a partir da linha: 20
		#Bloco de configuração das informações do Subject da CA e dos certificados.
		#Alterar as variáveis conforme a sua necessidade e suas configurações.

	#salvar e sair do arquivo
	ESC SHIFT : x <Enter>

#04_ Criando o Chave Raiz RSA Privada da CA no Ubuntu Server<br>

	#opções do comando openssl: genrsa (command generates an RSA private key),
	#-criptokey (Encrypt the private key with the AES, CAMELLIA, DES, triple DES or the IDEA ciphers)
	#-out (The output file to write to, or standard output if not specified), 
	#-passout (The output file password source), pass: (The actual password is password), 
	#bits (The size of the private key to generate in bits)
	sudo openssl genrsa -aes256 -out /etc/ssl/private/pti-ca.key.old -passout pass:"pti@2018" 2048

#05_ Removendo a Senha da Chaves Raiz Privada da CA no Ubuntu Server<br>

	#removendo a senha do arquivo de Chave Raiz RSA e criando o arquivo sem senha
	#opção do comando: &>> (redirecionar a saída padrão)
	#opções do comando openssl: rsa (command processes RSA keys), -in (The input file to read from, or 
	#standard input if not specified), -out (The output file to write to, or standard output if not 
	# specified), -passin (The key password source), pass: (The actual password is password)
	sudo openssl rsa -in /etc/ssl/private/pti-ca.key.old -out /etc/ssl/private/pti-ca.key -passin pass:"pti@2018"
	
	#removendo o arquivo temporário de Chave Raiz RSA com senha
	# opção do comando rm: -v (verbose)	
	sudo rm -v /etc/ssl/private/pti-ca.key.old

#06_ Verificando o arquivo de Chave Raiz sem Senha da CA no Ubuntu Server<br>

	#opções do comando openssl: rsa (command processes RSA keys), -noout (Do not output the encoded 
	#version of the key), -modulus (Print the value of the modulus of the key), -in (The input file 
	#to read from, or standard input if not specified), md5 (The message digest to use MD5 checksums)
	#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
	sudo openssl rsa -noout -modulus -in /etc/ssl/private/pti-ca.key | openssl md5

#07_ Criando o arquivo CSR (Certificate Signing Request) no Ubuntu Server<br>

	#opções do comando openssl: req (command primarily creates and processes certificate requests in 
	#PKCS#10 format), -new (Generate a new certificate request), -criptocert (The message digest to 
	#sign the request with) -nodes (Do not encrypt the private key), -key (The file to read the private 
	#key from), -out (The output file to write to, or standard output if not specified), -extensions 
	#(Specify alternative sections to include certificate extensions), -config (Specify an alternative 
	#configuration file)
	#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
	sudo openssl req -new -sha256 -nodes -key /etc/ssl/private/pti-ca.key -out /etc/ssl/requests/pti-ca.csr \
	-config /etc/ssl/conf/ca.conf

#08_ Criando o arquivo CRT (Certificate Request Trust) no Ubuntu Server<br>

	#opções do comando openssl: req (command primarily creates and processes certificate requests in 
	#PKCS#10 format), -new (Generate a new certificate request), -x509 (Output a self-signed certificate 
	#instead of a certificate request), -criptocert (The message digest to sign the request with) -days 
	#(Specify the number of days to certify the certificate for), -in (The input file to read from, or 
	#standard input if not specified), -key (The file to read the private key from), -out (The output file 
	#to write to, or standard output if not specified), -set_serial (Serial number to use when outputting 
	#a self-signed certificate), -extensions (Specify alternative sections to include certificate extensions),
	#-config (Specify an alternative configuration file).
	#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
	sudo openssl req -new -x509 -sha256 -days 3650 -in /etc/ssl/requests/pti-ca.csr -key /etc/ssl/private/pti-ca.key \
	-out /etc/ssl/newcerts/pti-ca.crt -config /etc/ssl/conf/ca.conf

#09_ Verificando o arquivo CRT (Certificate Request Trust) da CA no Ubuntu Server<br>

	#opções do comando openssl: x509 (command is a multi-purpose certificate utility), -noout (Do not output 
	#the encoded version of the request), -modulus (Print the value of the modulus of the public key contained 
	#in the certificate), -text (Print the full certificate in text form), -in (The input file to read from, 
	#or standard input if not specified), md5 (The message digest to use MD5 checksums)
	#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
	sudo openssl x509 -noout -modulus -in /etc/ssl/newcerts/pti-ca.crt | openssl md5
	sudo openssl x509 -noout -text -in /etc/ssl/newcerts/pti-ca.crt

#10_ Instalando o certificado CRT (Certificate Request Trust) Criando o arquivo PEM (Privacy Enhanced Mail) da CA no Ubuntu Server<br>

	#copiando o arquivo CRT da CA para o diretório de CA Certificates
	#opção do comando cp: -v (verbose)
	sudo cp -v /etc/ssl/newcerts/pti-ca.crt /usr/local/share/ca-certificates/

	#instalando e atualizando as Unidades Certificadores Raiz no Ubuntu Server
	sudo update-ca-certificates

	#verificando a criação do link PEM no Ubuntu Server
	ls -lha /etc/ssl/certs/pti-ca*