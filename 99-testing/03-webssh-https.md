#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 17/12/2023<br>
#Data de atualização: 21/07/2024<br>
#Versão: 0.03<br>

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO WEBSSH SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM 
A SEGUINTE FRASE: Instalação da Certificado no WebSSH-TLS realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM)
MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver 
#ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafitomcat10 #desaficertificado

Conteúdo estudado nesse desafio:<br>
#01_ Fazendo o download do Arquivo de Configuração do Certificado do WebSSH<b
#02_ Editando o arquivo de Arquivo de Configuração do Certificado do WebSSH<br>
#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do WebSSH no Ubuntu Server<br>
#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do WebSSH no Ubuntu Server<br>
#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do WebSSH no Ubuntu Server<br>
#06_ Criando o arquivo CSR (Certificate Signing Request) do WebSSH no Ubuntu Server<br>
#07_ Criando o arquivo CRT (Certificate Request Trust) do WebSSH no Ubuntu Server<br>
#08_ Verificando o arquivo CRT (Certificate Request Trust) do WebSSH no Ubuntu Server<br>
#09_ Editando o arquivo de Serviço do WebSSH no Ubuntu Server<br>
#10_ Reinicializar o Serviço do WebSSH no Ubuntu Server<br>
#11_ Verificando a Porta de Conexão do WebSSH no Ubuntu Server<br
#12_ Testando o Certificado TLS/SSL do WebSSH no ubuntu Server<br>
#13_ Testando o HTTPS do WebSSH no navegador

Site Oficial do OpenSSH: https://www.openssh.com/<br>
Site Oficial do OpenSSL: https://www.openssl.org/<br>
Site Oficial do WebSSH: https://github.com/huashengdun/webssh<br>
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

OpenSSH é um conjunto de utilitários de rede relacionado à segurança que provém a criptografia<br> 
em sessões de comunicações em uma rede de computadores usando o protocolo SSH.

WebSSH é um aplicativo web simples para ser usado como cliente ssh para conectar-se aos seus <br>
servidores ssh. Está escrito em Python, baseado em tornado, paramiko e xterm.js.

#01_ Fazendo o download do Arquivo de Configuração do Certificado do WebSSH<br>
```bash
#download do arquivo de configuração do Certificado do WebSSH
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/ssl/conf/webssh.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/webssh.conf
```

#02_ Editando o arquivo de Arquivo de Configuração do Certificado do WebSSH<br>
```bash
#editando o arquivo de configuração do Certificado do WebSSH
sudo vim /etc/ssl/conf/webssh.conf
INSERT

	#alterar as informações principais do Subject da CA a partir da linha: 23
	# Bloco de configuração das informações do Subject da CA e dos certificados.
	# Alterar as variáveis conforme a sua necessidade e suas configurações.
	# OBSERVAÇÃO IMPORTANTE: esse bloco é igual ao utilizada na criação da CA.

	#alterar as informações principais das opções Avançadas da CA a partir da linha: 51
	# Bloco de configuração avançada da CA.
	# Define os parâmetros avançados da criação e geração da CA e certificados.
	# OBSERVAÇÃO: CUIDADO COM A LOCALIZAÇÃO E NOME DA CHAVE E CERTIFICADO DA CA.

	#alterar as informações principais da requisição x509 da Ca a partir da linha: 81
	# Bloco de configuração das requisições x509 da CA.
	# Esta seção define extensões x509 v3 a serem solicitadas em nossas solicitações.

	#alterar as informações principais dos Nomes Alternativos do Certificado a partir da linha: 92
	# Bloco de configuração dos nomes alternativos do certificado do WebSSH
	# Adicionar todos os Nomes e Endereços IPv4 de acesso ao Servidor WebSSH

#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do WebSSH no Ubuntu Server<br>
```bash
#Tipo de criptografia da chave raiz privada com as opções de: -aes128, -aes192, -aes256, -camellia128, 
#-camellia192, -camellia256, -des, -des3 ou -idea, padrão utilizado: -aes256

#Tamanho da chave raiz privada utilizada em todas as configurações dos certificados, opções de: 1024, 
#2048, 3072 ou 4096, padrão utilizado: 2048 bits

#criando a chave raiz priva do WebSSH
#opções do comando openssl: genrsa (command generates an RSA private key), -out (The output file to 
#write to, or standard output if not specified), -passout (The output file password source), pass: 
#(The actual password is password), bits (The size of the private key to generate in bits)
sudo openssl genrsa -aes256 -out /etc/ssl/private/webssh.old -passout pass:pti@2018 2048
```

#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do WebSSH no Ubuntu Server<br>
```bash
#removendo a senha do arquivo de chave raiz privada e criando o novo arquivo sem senha
#opções do comando openssl: rsa (command processes RSA keys), -in (The input file to read from, or 
#standard input if not specified), -out (The output file to write to, or standard output if not 
# specified), -passin (The key password source), pass: (The actual password is password)
sudo openssl rsa -in /etc/ssl/private/webssh.key.old -out /etc/ssl/private/webssh.key -passin pass:pti@2018

#removendo o arquivo temporário de Chave Raiz RSA com senha
# opção do comando rm: -v (verbose)	
sudo rm -v /etc/ssl/private/webssh.key.old
```

#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do WebSSH no Ubuntu Server<br>
```bash
#opções do comando openssl: rsa (command processes RSA keys), -noout (Do not output the encoded 
#version of the key), -modulus (Print the value of the modulus of the key), -in (The input file 
#to read from, or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl rsa -noout -modulus -in /etc/ssl/private/webssh.key | openssl md5
```

#06_ Criando o arquivo CSR (Certificate Signing Request) do WebSSH no Ubuntu Server<br>
```bash
#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
#ou -sha512, padrão utilizado: sha256

#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
#opções do comando openssl: req (command primarily creates and processes certificate requests in 
#PKCS#10 format), -new (Generate a new certificate request), -nodes (Do not encrypt the private 
#key), -key (The file to read the private key from), -out (The output file to write to, or standard 
#output if not specified), -extensions (Specify alternative sections to include certificate extensions), 
#-config (Specify an alternative configuration file)
sudo openssl req -new -sha256 -nodes -key /etc/ssl/private/webssh.key -out /etc/ssl/requests/webssh.csr \
-extensions v3_req -config /etc/ssl/conf/webssh.conf
```

#07_ Criando o arquivo CRT (Certificate Request Trust) do WebSSH no Ubuntu Server<br>
```bash
#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
#ou -sha512, padrão utilizado: -sha256

#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
#opções do comando openssl: ca (command is a minimal certificate authority (CA) application), -in (The input 
#file to read from, or standard input if not specified), -out (The output file to write to, or standard output 
#if none is specified), -config (Specify an alternative configuration file), -extensions (The section to add 
#certificate extensions from), -extfile (File containing certificate extensions to use).
#
# Sign the certificate? [y/n]: y <Enter>
# 1 out of 1 certificate request certified, commit? [y/n]: y <Enter>	
sudo openssl ca -in /etc/ssl/requests/webssh.csr -out /etc/ssl/newcerts/webssh.crt -config /etc/ssl/conf/ca.conf \
-extensions v3_req -extfile /etc/ssl/conf/webssh.conf
```

#08_ Verificando o arquivo CRT (Certificate Request Trust) do WebSSH no Ubuntu Server<br>
```bash
#opções do comando openssl: x509 (command is a multi-purpose certificate utility), -noout (Do not output 
#the encoded version of the request), -modulus (Print the value of the modulus of the public key contained 
#in the certificate), -text (Print the full certificate in text form), -in (The input file to read from, 
#or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl x509 -noout -modulus -in /etc/ssl/newcerts/webssh.crt | openssl md5
sudo openssl x509 -noout -text -in /etc/ssl/newcerts/webssh.crt

#listando o conteúdo do banco de dados do certificados emitidos
sudo cat /etc/ssl/index.txt
sudo cat /etc/ssl/index.txt.attr
sudo cat /etc/ssl/serial
```

#09_ Editando o arquivo de Serviço do WebSSH no Ubuntu Server<br>
```bash
#editando o arquivo de serviço do WebSSH
sudo vim /etc/systemd/system/webssh.service
INSERT

	#OBSERVAÇÃO IMPORTANTE: descomentar as configurações do TLS/SSL a partir da linha: 10
	#configuração do certificado para as conexões em HTTPS
	--certfile='/etc/ssl/newcerts/webssh.crt' --keyfile='/etc/ssl/private/webssh.key'
	--ssladdress='172.16.1.20' --redirect='true' --sslport='4433'

#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

#10_ Reinicializar o Serviço do WebSSH no Ubuntu Server<br>
```bash
#reiniciando o Serviços do WebSSH
sudo systemctl restart webssh
sudo systemctl status webssh
```

#11_ Verificando a Porta de Conexão do WebSSH no Ubuntu Server<br>
```bash
#verificando as portas 80 HTTP e 443 HTTPS do WebSSH
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'4433' -sTCP:LISTEN
```

#12_ Testando o Certificado TLS/SSL do WebSSH no ubuntu Server<br>
```bash
#testando o certificado do WebSSH no Ubuntu Server
#opção do comando echo: | (piper, faz a função de Enter no comando)
#opções do comando openssl: s_client (command implements a generic SSL/TLS client which 
#connects to a remote host using SSL/TLS), -connect (The host and port to connect to),
#-servername (Include the TLS Server Name Indication (SNI) extension in the ClientHello 
#message), -showcerts (Display the whole server certificate chain: normally only the server 
#certificate itself is displayed)
echo | openssl s_client -connect localhost:4433 -servername 172.16.1.20 -showcerts
```

#13_ Testando o HTTPS do WebSSH no navegador<br>
```bash
#utilizar os navegadores para testar o HTTPS
firefox ou google chrome: https://endereço_ipv4_ubuntuserver:4433


	Hostname: 172.16.1.20
	Port: 22
	Username: vaamonde
	Password: pti@2018
	Private Key: /home/vaamonde/.ssh/wsvaamonde
	Passphrase: (SÓ UTILIZAR ESSA OPÇÃO SE O SEU CERTIFICADO TIVER SENHA DE ACESSO)
	Totp (time-based one-time password): (UTILIZAR ESSA OPÇÃO SOMENTE SE VOCÊ TIVER O 2FA)
	<Connect>
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO TOMCAT10 SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM 
A SEGUINTE FRASE: Instalação da Certificado no Tomcat10 realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM)
MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver 
#ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafitomcat10 #desaficertificado