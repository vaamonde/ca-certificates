#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 14/12/2023<br>
#Data de atualização: 03/09/2023<br>
#Versão: 0.05<br>

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO APACHE2 SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Configuração do Certificado no Apache2 realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/04-apache2.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioapache2 #desafiocertificado

Conteúdo estudado nesse desafio:<br>
#01_ Fazendo o download do Arquivo de Configuração do Certificado do Apache2 Server<br>
#02_ Editando o arquivo de Arquivo de Configuração do Certificado do Apache2 Server<br>
#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache2 Server no Ubuntu Server<br>
#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache2 Server no Ubuntu Server<br>
#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache2 Server no Ubuntu Server<br>
#06_ Criando o arquivo CSR (Certificate Signing Request) do Apache2 Server no Ubuntu Server<br>
#07_ Criando o arquivo CRT (Certificate Request Trust) do Apache2 Server no Ubuntu Server<br>
#08_ Verificando o arquivo CRT (Certificate Request Trust) do Apache2 Server no Ubuntu Server<br>
#09_ Fazendo o download do Arquivo de Configuração do HTTPS do Apache2 Server<br>
#11_ Habilitando o suporte ao TLS/SSL no Site HTTPS do Apache2 Server no Ubuntu Server<br>
#12_ Verificando a Porta de Conexão do Apache2 Server no Ubuntu Server<br>
#14_ Testando o HTTP e HTTPs do Apache2 Server no navegador<br>
#15_ Desativar o Site Padrão HTTP do Apache2 Server no Ubuntu Server.

Site Oficial do Apache2: https://httpd.apache.org/<br>
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

OpenSSL é uma implementação de código aberto dos protocolos SSL e TLS. A biblioteca (escrita na linguagem C) implementa as funções básicas de criptografia e disponibiliza várias funções utilitárias. Também estão disponíveis wrappers que permitem o uso desta biblioteca em várias outras linguagens. 

O OpenSSL está disponível para a maioria dos sistemas do tipo Unix, incluindo Linux, Mac OS X, as quatro versões do BSD de código aberto e também para o Microsoft Windows. O OpenSSL é baseado no SSLeay de Eric Young e Tim Hudson. O OpenSSL é utilizado para gerar certificados de autenticação de serviços/protocolos em servidores (servers).

O Transport Layer Security (TLS), assim como o seu antecessor Secure Sockets Layer (SSL), é um protocolo de segurança projetado para fornecer segurança nas comunicações sobre uma rede de computadores. Várias versões do protocolo encontram amplo uso em aplicativos como navegação na web, email, mensagens instantâneas e voz sobre IP (VoIP). Os sites podem usar o TLS para proteger todas as comunicações entre seus servidores e navegadores web.

O Servidor HTTP Apache ou Servidor Apache ou HTTP Daemon Apache ou somente Apache, é o servidor web livre criado em 1995 por um grupo de desenvolvedores da NCSA, tendo como base o servidor web NCSA HTTPd criado por Rob McCool.

[![HTTPS Apache2](http://img.youtube.com/vi/7yqy-5Qo01k/0.jpg)](https://www.youtube.com/watch?v=7yqy-5Qo01k "HTTPS Apache2")

Link da vídeo aula: https://www.youtube.com/watch?v=7yqy-5Qo01k 

#01_ Fazendo o download do Arquivo de Configuração do Certificado do Apache2 Server<br>
```bash
#download do arquivo de configuração do Certificado do Apache2 Server
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/ssl/conf/apache2.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/apache2.conf
```

#02_ Editando o arquivo de Arquivo de Configuração do Certificado do Apache2 Server<br>
```bash
#editando o arquivo de configuração do Certificado do Apache2 Server
sudo vim /etc/ssl/conf/apache2.conf
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
	# Bloco de configuração dos nomes alternativos do certificado do Apache2 Server
	# Adicionar todos os Nomes e Endereços IPv4 de acesso ao Servidor Apache2 Server

#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache2 Server no Ubuntu Server<br>
```bash
#Tipo de criptografia da chave raiz privada com as opções de: -aes128, -aes192, -aes256, -camellia128, 
#-camellia192, -camellia256, -des, -des3 ou -idea, padrão utilizado: -aes256

#Tamanho da chave raiz privada utilizada em todas as configurações dos certificados, opções de: 1024, 
#2048, 3072 ou 4096, padrão utilizado: 2048 bits

#criando a chave raiz priva do Apache2 Server
#opções do comando openssl: genrsa (command generates an RSA private key), -out (The output file to 
#write to, or standard output if not specified), -passout (The output file password source), pass: 
#(The actual password is password), bits (The size of the private key to generate in bits)
sudo openssl genrsa -aes256 -out /etc/ssl/private/apache2.key.old -passout pass:pti@2018 2048
```

#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache2 Server no Ubuntu Server<br>
```bash
#removendo a senha do arquivo de chave raiz privada e criando o novo arquivo sem senha
#opções do comando openssl: rsa (command processes RSA keys), -in (The input file to read from, or 
#standard input if not specified), -out (The output file to write to, or standard output if not 
# specified), -passin (The key password source), pass: (The actual password is password)
sudo openssl rsa -in /etc/ssl/private/apache2.key.old -out /etc/ssl/private/apache2.key -passin pass:pti@2018

#removendo o arquivo temporário de Chave Raiz RSA com senha
# opção do comando rm: -v (verbose)	
sudo rm -v /etc/ssl/private/apache2.key.old
```

#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache2 Server no Ubuntu Server<br>
```bash
#opções do comando openssl: rsa (command processes RSA keys), -noout (Do not output the encoded 
#version of the key), -modulus (Print the value of the modulus of the key), -in (The input file 
#to read from, or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl rsa -noout -modulus -in /etc/ssl/private/apache2.key | openssl md5
```

#06_ Criando o arquivo CSR (Certificate Signing Request) do Apache2 Server no Ubuntu Server<br>
```bash
#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
#ou -sha512, padrão utilizado: sha256

#opções do comando openssl: req (command primarily creates and processes certificate requests in 
#PKCS#10 format), -new (Generate a new certificate request), -nodes (Do not encrypt the private 
#key), -key (The file to read the private key from), -out (The output file to write to, or standard 
#output if not specified), -extensions (Specify alternative sections to include certificate extensions), 
#-config (Specify an alternative configuration file)
#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
sudo openssl req -new -sha256 -nodes -key /etc/ssl/private/apache2.key -out /etc/ssl/requests/apache2.csr \
-extensions v3_req -config /etc/ssl/conf/apache2.conf
```

#07_ Criando o arquivo CRT (Certificate Request Trust) do Apache2 Server no Ubuntu Server<br>
```bash
#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
#ou -sha512, padrão utilizado: -sha256

#opções do comando openssl: ca (command is a minimal certificate authority (CA) application), -in (The input 
#file to read from, or standard input if not specified), -out (The output file to write to, or standard output 
#if none is specified), -config (Specify an alternative configuration file), -extensions (The section to add 
#certificate extensions from), -extfile (File containing certificate extensions to use).
#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
#
# Sign the certificate? [y/n]: y <Enter>
# 1 out of 1 certificate request certified, commit? [y/n]: y <Enter>	
sudo openssl ca -in /etc/ssl/requests/apache2.csr -out /etc/ssl/newcerts/apache2.crt -config /etc/ssl/conf/ca.conf \
-extensions v3_req -extfile /etc/ssl/conf/apache2.conf
```

#08_ Verificando o arquivo CRT (Certificate Request Trust) do Apache2 Server no Ubuntu Server<br>
```bash
#opções do comando openssl: x509 (command is a multi-purpose certificate utility), -noout (Do not output 
#the encoded version of the request), -modulus (Print the value of the modulus of the public key contained 
#in the certificate), -text (Print the full certificate in text form), -in (The input file to read from, 
#or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída | (pipe): Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl x509 -noout -modulus -in /etc/ssl/newcerts/apache2.crt | openssl md5
sudo openssl x509 -noout -text -in /etc/ssl/newcerts/apache2.crt

#listando o conteúdo do banco de dados do certificados emitidos e assinados da nossa CA
#opção do comando cat: -n (number line)
sudo cat -n /etc/ssl/index.txt
sudo cat -n /etc/ssl/serial
```

#09_ Fazendo o download do Arquivo de Configuração do HTTPS do Apache2 Server<br>
```bash
#download do arquivo de configuração do HTTPS do Apache2 Server
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/apache2/sites-available/default-ssl.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/default-ssl.conf
```

#10_ Editando o arquivo de Configuração do HTTPS do Apache2 Server<br>
```bash
#editando o arquivo de configuração do HTTPS do Apache2 Server
sudo vim /etc/apache2/sites-available/default-ssl.conf
INSERT

	#alterar as informações principais do endereços IP e nomes na linha: 20
	# Configuração do Nome de Domínio e dos Apelidos (CNAMES) do Apache2 Server
	# OBSERVAÇÃO IMPORTANTE: na geração do Certificado Assinado é recomendado que os
	# configurados no Apache2 Server seja o mesmo configurado na geração do certificado

	#alterar as informações principais de email na linha: 29
	# Email do administrador do Apache2 Server

	#alterar as informações principais da Pasta Raiz na linha: 32
	# Pasta raiz da hospedagem dos sites do Apache2 Server

	#alterar as informações principais dos Certificados na linha: 39
	# Configuração do suporte ao TLS/SSL utilizando o certificado criado pelo OpenSSL

#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#editando o arquivo de portas do Apache2 Server
sudo vim /etc/apache2/ports.conf
INSERT

	#verificar as variáveis Listen a partir da 5
	Listen 80     #porta padrão do HTTP do Apache2
	Listen 8888   #porta de conexão do GLPI Help Desk
	
	#verificar o bloco de configuração HTTP a partir da 8
	<IfModule ssl_module>
		Listen 443
	</IfModule>
	
	<IfModule mod_gnutls.c>
		Listen 443
	</IfModule>

#salvar e sair do arquivo
ESC SHIFT :x <Enter>
```

#11_ Habilitando o suporte ao TLS/SSL no Site HTTPS do Apache2 Server no Ubuntu Server<br>
```bash
#habilitando os módulos do TLS/SSL e cabeçalhos do Apache2 Server
sudo a2enmod ssl headers

#verificando as informações dos arquivos de configuração do Apache2 Server
sudo apache2ctl configtest

#habilitando o Site HTTPS do Apache2 Server
sudo a2ensite default-ssl

#reiniciando o Serviços do Apache2 Server
sudo systemctl restart apache2
sudo systemctl status apache2

#analisando os Log's e mensagens de erro do Servidor do Apache2
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu apache2
```

#12_ Verificando as Portas de Conexões do Apache2 Server no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão

#verificando as portas 80 HTTP e 443 HTTPS do Apache2 Server 
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'80,443' -sTCP:LISTEN
```

#13_ Testando o Certificado TLS/SSL do Apache2 Server no Ubuntu Server<br>
```bash
#testando o certificado do Apache2 Server no Ubuntu Server
#opção do comando echo: | (piper, faz a função de Enter no comando)
#opções do comando openssl: s_client (command implements a generic SSL/TLS client which 
#connects to a remote host using SSL/TLS), -connect (The host and port to connect to),
#-servername (Include the TLS Server Name Indication (SNI) extension in the ClientHello 
#message), -showcerts (Display the whole server certificate chain: normally only the server 
#certificate itself is displayed)
echo | openssl s_client -connect localhost:443 -servername 172.16.1.20 -showcerts
```

#14_ Testando o HTTP e HTTPs do Apache2 Server no navegador<br>
```bash
#utilizar os navegadores para testar o HTTP e HTTPS
firefox ou google chrome: http://endereço_ipv4_ubuntuserver
firefox ou google chrome: https://endereço_ipv4_ubuntuserver/
```

#15_ Desativar o Site Padrão HTTP do Apache2 Server no Ubuntu Server<br>
```bash
#desabilitando o Site HTTP do Apache2 Server
sudo a2dissite 000-default.conf

#desativando a porta de conexão 80 HTTP do Apache2
sudo vim /etc/apache2/ports.conf
INSERT

	#verificar as variáveis Listen a partir da 5
	#Listen 80     #comentar a porta padrão do HTTP do Apache2
	Listen 8888    #porta de conexão do GLPI Help Desk

#salvar e sair do arquivo
ESC SHIFT :x <Enter>

#reiniciando o Serviços do Apache2 Server
sudo systemctl restart apache2
sudo systemctl status apache2

#analisando os Log's e mensagens de erro do Servidor do Apache2
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu apache2

#verificando as portas 80 HTTP e 443 HTTPS do Apache2 Server 
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'80,443' -sTCP:LISTEN

#utilizar os navegadores para testar o HTTP e HTTPS
firefox ou google chrome: http://endereço_ipv4_ubuntuserver
firefox ou google chrome: https://endereço_ipv4_ubuntuserver
```

#16_ Testando Sites do Apache2 Server no Ubuntu Server (NÃO COMENTADO NO VÍDEO)<br>
```bash
#testando o site de Teste do Apache2
firefox ou google chrome: https://endereço_ipv4_ubuntuserver/teste

#testando o site do Wordpress instalado no Apache2
firefox ou google chrome: https://endereço_ipv4_ubuntuserver/wp
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO APACHE2 SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Configuração do Certificado no Apache2 realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/04-apache2.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiapache2 #desaficertificado