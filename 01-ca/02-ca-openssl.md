#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 14/12/2023<br>
#Data de atualização: 18/12/2023<br>
#Versão: 0.04<br>

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

A autoridade de certificação (CA), também conhecido como um Autoridade de Certificação,<br>
é uma empresa ou organização que atua para validar as identidades de entidades (como sites,<br>
endereços de email, empresas ou pessoas físicas) e vinculá-las a chaves criptográficas<br> 
através da emissão de documentos eletrônicos conhecidos como certificados digitais.

#01_ Criando a estrutura de diretórios da CA (Certificate Authority) e dos Certificados no Ubuntu Server<br>

	#conhecendo a estrutura de diretórios da CA e dos Certificados Assinados
	/etc/ssl/.............<-- Diretório padrão das configurações do OpenSSL
	/etc/ssl/certs/.......<-- Diretório das CA's Confiáveis do Ubuntu Server
	/etc/ssl/crl/.........<-- Diretório de Requisição de Revogação de Certificados
	/etc/ssl/conf/........<-- Diretório dos Arquivos de Configuração da CA e dos Certificados
	/etc/ssl/newcerts/....<-- Diretório de Criação dos Novos Certificados Assinados
	/etc/ssl/private/.....<-- Diretório das Chaves Públicas e Privadas dos Certificados Assinados
	/etc/ssl/request/.....<-- Diretório das Requisições de Certificados Assinados

	#criando os diretórios para o armazenamento dos arquivos e certificados
	#opção do comando mkdir: -v (verbose)
	#opção do bloco de argumentos {}: Agrupa comandos em um bloco
	sudo mkdir -v /etc/ssl/{certs,conf,crl,newcerts,private,requests}

#02_ Criando os arquivos de Banco de Dados dos Certificados Assinados no Ubuntu Server<br>

	#conhecendo os arquivos de configuração da CA e dos Certificados Assinados
	#mais informações sobre os arquivos acesse: https://pki-tutorial.readthedocs.io/en/latest/cadb.html#
	/etc/ssl/index.txt......<-- Arquivo de Banco de Dados dos Certificados da CA
	/etc/ssl/index.attr.....<-- Arquivo de Banco de Dados de Atributos dos Certificados da CA
	/etc/ssl/serial.........<-- Arquivo de Número de Série de Geração de Certificados
	/etc/ssl/conf/ca.conf...<-- Arquivo de Configuração da Unidade Certificadora Raiz Confiável

	#criando os arquivos de banco de dados, atributos e número de série da CA
	#opção do bloco de argumentos {}: Agrupa comandos em um bloco
	sudo touch /etc/ssl/{index.txt,index.txt.attr,serial}
	
	#adicionando um valor de sequência numérica de solicitações de certificados
	#assinados no arquivo serial para o controle e gerenciamentos dos certificados
	#emitidos pela nossa CA
	#opção do redirecionador de saída >>: Redireciona a saída padrão, anexando
	sudo echo "1234" >> /etc/ssl/serial

	#download do arquivo de configuração da CA do Ubuntu Server
	#opção do comando wget: -v (verbose), -O (output file)
	sudo wget -v -O /etc/ssl/conf/ca.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/ca.conf

#03_ Editando o arquivo de Configuração da CA (Certificate Authority) no Ubuntu Server<br>

	#editando o arquivo de configuração da CA
	sudo vim /etc/ssl/conf/ca.conf
	INSERT

		#alterar as informações principais da CA a partir da linha: 20
		#Bloco de configuração das informações do Subject da CA e dos certificados.
		#Alterar as variáveis conforme a sua necessidade e suas configurações.

		#alterar as informações principais da CA a partir da linha: 47
		# Bloco de configuração avançada da CA.
		# Define os parâmetros avançados da criação e geração da CA e certificados.
		# OBSERVAÇÃO: CUIDADO COM A LOCALIZAÇÃO E NOME DA CHAVE E CERTIFICADO DA CA.

	#salvar e sair do arquivo
	ESC SHIFT : x <Enter>

#04_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada da CA (Certificate Authority) no Ubuntu Server<br>

	#Tipo de criptografia da chave raiz privada com as opções de: -aes128, -aes192, -aes256, -camellia128, 
	#-camellia192, -camellia256, -des, -des3 ou -idea, padrão utilizado: -aes256

	#Tamanho da chave raiz privada utilizada em todas as configurações dos certificados, opções de: 1024, 
	#2048, 3072 ou 4096, padrão utilizado: 2048 bits
	
	#criando a chave raiz privada da CA
	#opções do comando openssl: genrsa (command generates an RSA private key), -out (The output file to 
	#write to, or standard output if not specified), -passout (The output file password source), pass: 
	#(The actual password is password), bits (The size of the private key to generate in bits)
	sudo openssl genrsa -aes256 -out /etc/ssl/private/pti-ca.key.old -passout pass:pti@2018 2048

#05_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada da CA (Certificate Authority) no Ubuntu Server<br>

	#removendo a senha do arquivo de chave raiz privada e criando o novo arquivo sem senha
	#opções do comando openssl: rsa (command processes RSA keys), -in (The input file to read from, or 
	#standard input if not specified), -out (The output file to write to, or standard output if not 
	# specified), -passin (The key password source), pass: (The actual password is password)
	sudo openssl rsa -in /etc/ssl/private/pti-ca.key.old -out /etc/ssl/private/pti-ca.key -passin pass:pti@2018
	
	#removendo o arquivo temporário de Chave Raiz RSA com senha
	# opção do comando rm: -v (verbose)	
	sudo rm -v /etc/ssl/private/pti-ca.key.old

#06_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada da CA (Certificate Authority) no Ubuntu Server<br>

	#opções do comando openssl: rsa (command processes RSA keys), -noout (Do not output the encoded 
	#version of the key), -modulus (Print the value of the modulus of the key), -in (The input file 
	#to read from, or standard input if not specified), md5 (The message digest to use MD5 checksums)
	#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
	sudo openssl rsa -noout -modulus -in /etc/ssl/private/pti-ca.key | openssl md5

#07_ Criando o arquivo CSR (Certificate Signing Request) da CA (Certificate Authority) no Ubuntu Server<br>

	#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
	#ou -sha512, padrão utilizado: sha256

	#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
	#opções do comando openssl: req (command primarily creates and processes certificate requests in 
	#PKCS#10 format), -new (Generate a new certificate request), -nodes (Do not encrypt the private key), 
	#-key (The file to read the private key from), -out (The output file to write to, or standard output 
	#if not specified), -config (Specify an alternative configuration file)
	sudo openssl req -new -sha256 -nodes -key /etc/ssl/private/pti-ca.key -out /etc/ssl/requests/pti-ca.csr \
	-config /etc/ssl/conf/ca.conf

#08_ Criando o arquivo CRT (Certificate Request Trust) da CA (Certificate Authority) no Ubuntu Server<br>

	#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
	#ou -sha512, padrão utilizado: -sha256

	#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
	#opções do comando openssl: req (command primarily creates and processes certificate requests in 
	#PKCS#10 format), -new (Generate a new certificate request), -x509 (Output a self-signed certificate 
	#instead of a certificate request), -days (Specify the number of days to certify the certificate for), 
	#-in (The input file to read from, or standard input if not specified), -key (The file to read the 
	#private key from), -out (The output file to write to, or standard output if not specified), -config 
	#(Specify an alternative configuration file).
	sudo openssl req -new -x509 -sha256 -days 3650 -in /etc/ssl/requests/pti-ca.csr -key /etc/ssl/private/pti-ca.key \
	-out /etc/ssl/newcerts/pti-ca.crt -config /etc/ssl/conf/ca.conf

#09_ Verificando o arquivo CRT (Certificate Request Trust) da CA (Certificate Authority) no Ubuntu Server<br>

	#opções do comando openssl: x509 (command is a multi-purpose certificate utility), -noout (Do not output 
	#the encoded version of the request), -modulus (Print the value of the modulus of the public key contained 
	#in the certificate), -text (Print the full certificate in text form), -in (The input file to read from, 
	#or standard input if not specified), md5 (The message digest to use MD5 checksums)
	#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
	sudo openssl x509 -noout -modulus -in /etc/ssl/newcerts/pti-ca.crt | openssl md5
	sudo openssl x509 -noout -text -in /etc/ssl/newcerts/pti-ca.crt

#10_ Instalando o certificado CRT (Certificate Request Trust) e criando o arquivo PEM (Privacy Enhanced Mail) da CA (Certificate Authority) no Ubuntu Server<br>

	#copiando o arquivo CRT da CA para o diretório de CA Certificates
	#opção do comando cp: -v (verbose)
	sudo cp -v /etc/ssl/newcerts/pti-ca.crt /usr/local/share/ca-certificates/

	#instalando e atualizando as Unidades Certificadores Raiz no Ubuntu Server
	sudo apt update
	sudo apt install ca-certificates
	sudo update-ca-certificates

	#verificando a criação do link PEM no Ubuntu Server
	ls -lha /etc/ssl/certs/pti-ca*