#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 02/09/2024<br>
#Data de atualização: 03/09/2024<br>
#Versão: 0.02<br>

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO NODE.JS SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Instalação da Certificado no Node.JS realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/06-nodejs.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafinodejs #desaficertificado

Conteúdo estudado nesse desafio:<br>
#01_ Fazendo o download do Arquivo de Configuração do Certificado do Node.JS<br>
#02_ Editando o arquivo de Arquivo de Configuração do Certificado do Node.JS<br>
#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Node.JS no Ubuntu Server<br>
#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Node.JS no Ubuntu Server<br>
#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Node.JS no Ubuntu Server<br>
#06_ Criando o arquivo CSR (Certificate Signing Request) do Node.JS no Ubuntu Server<br>
#07_ Criando o arquivo CRT (Certificate Request Trust) do Node.JS no Ubuntu Server<br>
#08_ Verificando o arquivo CRT (Certificate Request Trust) do Node.JS no Ubuntu Server<br>
#09_ Acessando o diretório do Projeto Simples de Teste do Node.JS<br>
#10_ Atualizando o Código do Node.JS do Projeto de Teste<br>
#11_ Executando o Projeto Simples do Node.JS utilizando o Express e HTTPS<br>
#12_ Verificando a Porta de Conexão do Node.JS Express e HTTPS<br>
#13_ Testando o Certificado TLS/SSL do Node.JS no ubuntu Server<br>
#14_ Acessando o Projeto Simples do Node.JS via HTTPS<br>
#15_ Finalizando a Execução do Projeto Simples do Node.JS Express e HTTPS

Site Oficial do Node.JS: https://nodejs.org/en/<br>
Site Oficial do NPM: https://www.npmjs.com/<br>
Github do Nodesource: https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions<br>
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

O Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.

[![HTTPS Node.JS](http://img.youtube.com/vi//0.jpg)]( "HTTPS Node.JS")

Link da vídeo aula: 

#01_ Fazendo o download do Arquivo de Configuração do Certificado do Node.JS<br>
```bash
#download do arquivo de configuração do Certificado do Node.JS
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/ssl/conf/nodejs.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/nodejs.conf
```

#02_ Editando o arquivo de Arquivo de Configuração do Certificado do Node.JS<br>
```bash
#editando o arquivo de configuração do Certificado do Node.JS
sudo vim /etc/ssl/conf/nodejs.conf
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
	# Bloco de configuração dos nomes alternativos do certificado do Node.JS
	# Adicionar todos os Nomes e Endereços IPv4 de acesso ao Servidor Node.JS

#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Node.JS no Ubuntu Server<br>
```bash
#Tipo de criptografia da chave raiz privada com as opções de: -aes128, -aes192, -aes256, -camellia128, 
#-camellia192, -camellia256, -des, -des3 ou -idea, padrão utilizado: -aes256

#Tamanho da chave raiz privada utilizada em todas as configurações dos certificados, opções de: 1024, 
#2048, 3072 ou 4096, padrão utilizado: 2048 bits

#criando a chave raiz priva do Node.JS
#opções do comando openssl: genrsa (command generates an RSA private key), -out (The output file to 
#write to, or standard output if not specified), -passout (The output file password source), pass: 
#(The actual password is password), bits (The size of the private key to generate in bits)
sudo openssl genrsa -aes256 -out /etc/ssl/private/nodejs.old -passout pass:pti@2018 2048
```

#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Node.JS no Ubuntu Server<br>
```bash
#removendo a senha do arquivo de chave raiz privada e criando o novo arquivo sem senha
#opções do comando openssl: rsa (command processes RSA keys), -in (The input file to read from, or 
#standard input if not specified), -out (The output file to write to, or standard output if not 
# specified), -passin (The key password source), pass: (The actual password is password)
sudo openssl rsa -in /etc/ssl/private/nodejs.key.old -out /etc/ssl/private/nodejs.key -passin pass:pti@2018

#removendo o arquivo temporário de Chave Raiz RSA com senha
# opção do comando rm: -v (verbose)
sudo rm -v /etc/ssl/private/nodejs.key.old
```

#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Node.JS no Ubuntu Server<br>
```bash
#opções do comando openssl: rsa (command processes RSA keys), -noout (Do not output the encoded 
#version of the key), -modulus (Print the value of the modulus of the key), -in (The input file 
#to read from, or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl rsa -noout -modulus -in /etc/ssl/private/nodejs.key | openssl md5
```

#06_ Criando o arquivo CSR (Certificate Signing Request) do Node.JS no Ubuntu Server<br>
```bash
#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
#ou -sha512, padrão utilizado: sha256

#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
#opções do comando openssl: req (command primarily creates and processes certificate requests in 
#PKCS#10 format), -new (Generate a new certificate request), -nodes (Do not encrypt the private 
#key), -key (The file to read the private key from), -out (The output file to write to, or standard 
#output if not specified), -extensions (Specify alternative sections to include certificate extensions), 
#-config (Specify an alternative configuration file)
sudo openssl req -new -sha256 -nodes -key /etc/ssl/private/nodejs.key -out /etc/ssl/requests/nodejs.csr \
-extensions v3_req -config /etc/ssl/conf/nodejs.conf
```

#07_ Criando o arquivo CRT (Certificate Request Trust) do Node.JS no Ubuntu Server<br>
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
sudo openssl ca -in /etc/ssl/requests/nodejs.csr -out /etc/ssl/newcerts/nodejs.crt -config /etc/ssl/conf/ca.conf \
-extensions v3_req -extfile /etc/ssl/conf/nodejs.conf
```

#08_ Verificando o arquivo CRT (Certificate Request Trust) do Node.JS no Ubuntu Server<br>
```bash
#opções do comando openssl: x509 (command is a multi-purpose certificate utility), -noout (Do not output 
#the encoded version of the request), -modulus (Print the value of the modulus of the public key contained 
#in the certificate), -text (Print the full certificate in text form), -in (The input file to read from, 
#or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl x509 -noout -modulus -in /etc/ssl/newcerts/nodejs.crt | openssl md5
sudo openssl x509 -noout -text -in /etc/ssl/newcerts/nodejs.crt

#listando o conteúdo do banco de dados do certificados emitidos
#opção do comando cat: -n (numeric)
sudo cat -n /etc/ssl/index.txt
sudo cat -n /etc/ssl/serial
```

#09_ Acessando o diretório do Projeto Simples de Teste do Node.JS<br>
```bash
#acessando o diretório do projeto do Node.JS
cd nodejs-hello/

#listando o conteúdo do diretório do projeto do Node.JS
#opção do comando ls: -l (long listing), -h (human-readable)
ls -lh

#Instalando o Módulo/Pacote HTTPS do Node.JS
#opção do comando npm: install (install package in directory)
npm install https

#Listando o conteúdo do diretório do projeto do Node.JS
#opção do comando ls: -l (long listing), -h (human-readable), -a (all)
ls -lha
```

#10_ Atualizando o Código do Node.JS do Projeto de Teste<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Microsoft Windows utilizando o Powershell no processo de copiar e 
#colar o código JavaScript ele desconfigura o código, recomendo no Windows utilizar o software 
#PuTTY ou Git Bash para editar os códigos ou copiar e colar. No Linux Mint e macOS essa falha 
#não acontece.

#OBSERVAÇÃO: tanto no Microsoft Windows como no GNU/Linux (Linux Mint, Ubuntu Desktop, etc) ou
#no macOS recomendo sempre utilizar o Editor de Texto em Modo Gráfico IDE Microsoft Visual Studio, 
#por padrão ele já entende toda a codificação HTML, PHP, JavaScript, JSON, etc..., facilitando 
#a criação e modificação arquivos desse curso.

#Editando o arquivo index.js do projeto do Node.JS
vim index.js

#Apagando todo o conteúdo do arquivo index.js
ESC d G

#Editando o arquivo
INSERT
```
```js
// Criando as variáveis do Express, HTTPS, FS e do App do Node.JS
var express = require('express'); 
var https = require('https');
var fs = require('fs');
var app = express();

// Carregando os certificados assinados do Node.JS
var options = {
    key: fs.readFileSync('/etc/ssl/private/nodejs.key'),
    cert: fs.readFileSync('/etc/ssl/newcerts/nodejs.crt'),
    // Opcional: adicionar se precisar validar a cadeia de certificação com a CA
    ca: fs.readFileSync('/etc/ssl/certs/pti-ca.pem')
};

// Mensagem que será mostrada no browser (navegador) 
app.get('/', function (req, res) {
    res.send('Robson Vaamonde - Projeto #BoraParaPrática!!!');
});

// Porta padrão utilizada pela aplicação do Node.JS com HTTPS
https.createServer(options, app).listen(3000, function() {
    console.log('Aplicativo de exemplo ouvindo na porta 3000 com HTTPS');
});
```
```bash
#salvar e sair do arquivo
ESC SHIFT :x <Enter>
```

#11_ Executando o Projeto Simples do Node.JS utilizando o Express e HTTPS<br>
```bash
#opção do comando &: background
#OBSERVAÇÃO IMPORTANTE: existe também o comando: bg que faz a mesma coisa do caractere: & 
#(E-Comercial) colocando a aplicação em background e liberando o terminal.
node index.js &
```

#12_ Verificando a Porta de Conexão do Node.JS Express e HTTPS<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão..

#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'3000' -sTCP:LISTEN
```

#13_ Testando o Certificado TLS/SSL do Node.JS no ubuntu Server<br>
```bash
#testando o certificado do Node.JS no Ubuntu Server
#opção do comando echo: | (piper, faz a função de Enter no comando)
#opções do comando openssl: s_client (command implements a generic SSL/TLS client which 
#connects to a remote host using SSL/TLS), -connect (The host and port to connect to),
#-servername (Include the TLS Server Name Indication (SNI) extension in the ClientHello 
#message), -showcerts (Display the whole server certificate chain: normally only the server 
#certificate itself is displayed)
echo | openssl s_client -connect localhost:3000 -servername 172.16.1.20 -showcerts
```

#14_ Acessando o Projeto Simples do Node.JS via HTTPS<br>
```bash
#utilizar os navegadores para testar o Node.JS
firefox ou google chrome: https://endereço_ipv4_ubuntuserver:3000
```

#15_ Finalizando a Execução do Projeto Simples do Node.JS Express e HTTPS<br>
```bash
#verificando os processos em segundo plano (background)
jobs

#trazendo o processo em segundo plano do Node.JS para o primeiro plano (foreground)
fg

#finalizando o processo do Node.JS Express
Ctrl + C

#OBSERVAÇÃO IMPORTANTE: caso você não consiga trazer os processos que estão em Segundo
#Plano (Background) para o Primeiro Plano (Foreground) para finalizar o processo, você
#pode utilizar o comando: ps -u e na coluna: PID finalizar o processo com o comando:
#kill -9 PID

#exemplo de finalizar o processo utilizando o comando ps para descobrir o PID (Process ID)
#opção do comando ps: -u (userlist)
ps -u

#opção do comando kill: -9 (Kill all processes you can kill)
kill -9 15939
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO NODE.JS SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Instalação da Certificado no Node.JS realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/06-nodejs.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafinodejs #desaficertificado