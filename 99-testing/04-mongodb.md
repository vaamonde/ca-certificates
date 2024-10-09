#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 10/09/2024<br>
#Data de atualização: 11/09/2024<br>
#Versão: 0.02<br>

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO MONGODB SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Configuração do Certificado no MongoDB realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/07-mongodb.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiomongodb #desaficertificado

Conteúdo estudado nesse desafio:<br>


Site Oficial do MongoDB: https://www.mongodb.com/<br>
Site Oficial do MongoDB Compass: https://www.mongodb.com/products/compass<br>
Site Oficial da MongoDB Atlas: https://www.mongodb.com/atlas/database<br>
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

MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.

[![MongoDB TLS](http://img.youtube.com/vi//0.jpg)]( "MongoDB TLS")

Link da vídeo aula: 

#01_ Fazendo o download do Arquivo de Configuração do Certificado do MongoDB Sever<br>
```bash
#download do arquivo de configuração do Certificado do MongoDB Sever
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/ssl/conf/mongodb.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/mongodb.conf
```

#02_ Editando o arquivo de Arquivo de Configuração do Certificado do MongoDB Sever<br>
```bash
#editando o arquivo de configuração do Certificado do MongoDB Sever
sudo vim /etc/ssl/conf/mongodb.conf
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
	# Bloco de configuração dos nomes alternativos do certificado do MongoDB Sever
	# Adicionar todos os Nomes e Endereços IPv4 de acesso ao Servidor MongoDB Sever

#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do MongoDB Sever no Ubuntu Server<br>
```bash
#Tipo de criptografia da chave raiz privada com as opções de: -aes128, -aes192, -aes256, -camellia128, 
#-camellia192, -camellia256, -des, -des3 ou -idea, padrão utilizado: -aes256

#Tamanho da chave raiz privada utilizada em todas as configurações dos certificados, opções de: 1024, 
#2048, 3072 ou 4096, padrão utilizado: 2048 bits

#criando a chave raiz priva do MongoDB Sever
#opções do comando openssl: genrsa (command generates an RSA private key), -out (The output file to 
#write to, or standard output if not specified), -passout (The output file password source), pass: 
#(The actual password is password), bits (The size of the private key to generate in bits)
sudo openssl genrsa -aes256 -out /etc/ssl/private/mongodb.key.old -passout pass:pti@2018 2048
```

#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do MongoDB Sever no Ubuntu Server<br>
```bash
#removendo a senha do arquivo de chave raiz privada e criando o novo arquivo sem senha
#opções do comando openssl: rsa (command processes RSA keys), -in (The input file to read from, or 
#standard input if not specified), -out (The output file to write to, or standard output if not 
# specified), -passin (The key password source), pass: (The actual password is password)
sudo openssl rsa -in /etc/ssl/private/mongodb.key.old -out /etc/ssl/private/mongodb.key -passin pass:pti@2018

#removendo o arquivo temporário de Chave Raiz RSA com senha
# opção do comando rm: -v (verbose)
sudo rm -v /etc/ssl/private/mongodb.key.old
```

#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do MongoDB Sever no Ubuntu Server<br>
```bash
#opções do comando openssl: rsa (command processes RSA keys), -noout (Do not output the encoded 
#version of the key), -modulus (Print the value of the modulus of the key), -in (The input file 
#to read from, or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl rsa -noout -modulus -in /etc/ssl/private/mongodb.key | openssl md5
```

#06_ Criando o arquivo CSR (Certificate Signing Request) do MongoDB Sever no Ubuntu Server<br>
```bash
#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
#ou -sha512, padrão utilizado: sha256

#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
#opções do comando openssl: req (command primarily creates and processes certificate requests in 
#PKCS#10 format), -new (Generate a new certificate request), -nodes (Do not encrypt the private 
#key), -key (The file to read the private key from), -out (The output file to write to, or standard 
#output if not specified), -extensions (Specify alternative sections to include certificate extensions), 
#-config (Specify an alternative configuration file)
sudo openssl req -new -sha256 -nodes -key /etc/ssl/private/mongodb.key -out /etc/ssl/requests/mongodb.csr \
-extensions v3_req -config /etc/ssl/conf/mongodb.conf
```

#07_ Criando o arquivo CRT (Certificate Request Trust) do MongoDB Sever no Ubuntu Server<br>
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
sudo openssl ca -in /etc/ssl/requests/mongodb.csr -out /etc/ssl/newcerts/mongodb.crt -config /etc/ssl/conf/ca.conf \
-extensions v3_req -extfile /etc/ssl/conf/mongodb.conf
```

#08_ Verificando o arquivo CRT (Certificate Request Trust) do MongoDB Sever no Ubuntu Server<br>
```bash
#opções do comando openssl: x509 (command is a multi-purpose certificate utility), -noout (Do not output 
#the encoded version of the request), -modulus (Print the value of the modulus of the public key contained 
#in the certificate), -text (Print the full certificate in text form), -in (The input file to read from, 
#or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl x509 -noout -modulus -in /etc/ssl/newcerts/mongodb.crt | openssl md5
sudo openssl x509 -noout -text -in /etc/ssl/newcerts/mongodb.crt

#listando o conteúdo do banco de dados do certificados emitidos
#opção do comando cat: -n (numeric)
sudo cat -n /etc/ssl/index.txt
sudo cat -n /etc/ssl/serial
```

#09_ Combinando a Chave Privada e o Certificado Assinado no Arquivo PEM ()<br>
```bash
#OBSERVAÇÃO IMPORTANTE: Nas configurações do MongoDB Server ele só utilizar uma variável para
#configurar as opções de certificados e chave privada, nesse cenário recomendo criar o arquivo
#de certificado PEM adicionando o Certificado Assinado e a Chave Primária.

#se autenticando como Root no Ubuntu Server
#OBSERVAÇÃO IMPORTANTE: o comando abaixo só funciona como Root devido a permissões de criação
#do certificado
#opção do comando sudo: -i (login)
sudo -i

#criando o certificado PEM com os arquivos de Certificado Assinado e Chave Privada do MongoDB
#opção do redirecionar de saída > (maior): Redireciona a saída padrão (STDOUT)
sudo cat /etc/ssl/newcerts/mongodb.crt /etc/ssl/private/mongodb.key > /etc/ssl/certs/mongodb.pem

#saindo o usuário Root e voltando para o usuário normal
exit

#listando o Certificado PEM MongoDB Server
#opção do comando ls: -l (long listing), -h (human-readable), -a (all)
ls -lha /etc/ssl/certs/mongodb.pem
```

#10_ Atualizando o arquivo de configuração do MongoDB Server no Ubuntu Server<br>
```bash
#fazendo o backup do arquivo de configuração do MongoDB Server
#opção do comando cp: -v (verbose)
sudo cp -v /etc/mongod.conf /etc/mongod.conf.bkp

#visualizando os backup do arquivo de configuração do MongoDB Server
#listando o Certificado PEM MongoDB Server
#opção do comando ls: -l (long listing), -h (human-readable), * (asterisco - all/tudo)
ls -lh /etc/mongod.*

#atualizando o arquivo de configuração do MongoDB Server
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/mongod.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/mongod.conf
```

#11_ Configurando o MongoDB Server para suportar TLS/SSL nas Conexões Remotas<br>
```bash
#editando o arquivo de configuração do MongoDB Server
sudo vim /etc/mongod.conf
INSERT
	
	#habilitando o suporte remoto do MongoDB Server na linha: 28
	#alterar a linha: bindIp: 127.0.0.1 para: bindIp: 0.0.0.0
	net:
	  port: 27017
	  bindIp: 0.0.0.0

	  #adicionando o suporte ao TLS do MongoDB Server na linha: 33
	  tls:
	    #configurando do modo de requisição do certificado: Requerido ou Preferencial
	    #OBSERVAÇÃO: foi configurado o modo Preferencial pois permiti conexão segura
	    #e não segura utilizando TLS/SSL para se conectar no Banco de Dados MongoDB
	    mode: preferTLS
	    certificateKeyFile: /etc/ssl/certs/mongodb.pem
	    CAFile: /etc/ssl/certs/pti-ca.pem
	    #define se certificados inválidos devem ser aceitos. Para produção, deixe como false
	    allowInvalidCertificates: false
	    #define se o MongoDB deve aceitar certificados onde o nome do host não corresponde ao nome no certificado.
	    allowInvalidHostnames: false

	#habilitando o recurso de autenticação do MongoDB Server na linha: 45
	#descomentar a linha: #security, adicionar o valor: authorization: enabled
	security:
	  authorization: enabled

#salvar e sair do arquivo
ESC SHIFT :x <ENTER>

#reiniciar o serviço do MongoDB Server
sudo systemctl restart mongod
sudo systemctl status mongod

#analisando os Log's e mensagens de erro do Servidor do MongoDB (NÃO COMENTADO NO VÍDEO)
#opção do comando journalctl: -t (identifier), x (catalog), e (pager-end), u (unit)
sudo journalctl -t mongod
sudo journalctl -xeu mongod
```

#12_ Verificando a Porta de Conexão do MongoDB Sever no Ubuntu Server<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão..

#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'27017' -sTCP:LISTEN
```

#13_ Testando o Certificado TLS/SSL do MongoDB Server no ubuntu Server<br>
```bash
#testando o certificado do MongoDB Server no Ubuntu Server
#opção do comando echo: | (piper, faz a função de Enter no comando)
#opções do comando openssl: s_client (command implements a generic SSL/TLS client which 
#connects to a remote host using SSL/TLS), -connect (The host and port to connect to),
#-servername (Include the TLS Server Name Indication (SNI) extension in the ClientHello 
#message), -showcerts (Display the whole server certificate chain: normally only the server 
#certificate itself is displayed)
echo | openssl s_client -connect localhost:27017 -servername 172.16.1.20 -showcerts
```

mongo --host localhost --port 27017 --tls --tlsCAFile /etc/ssl/certs/pti-ca.pem

mongo --host localhost --port 27017 --tls --tlsCAFile /etc/ssl/certs/pti-ca.pem --tlsCertificateKeyFile /etc/ssl/newcerts/mongodb.crt --tlsPrivateKeyFile /etc/ssl/private/mongodb.key


mongosh "mongodb://localhost:27017" --tls --tlsCAFile /etc/ssl/certs/pti-ca.pem --tlsCertificateKeyFile /etc/ssl/newcerts/mongodb.crt --tlsPrivateKeyFile /etc/ssl/private/mongodb.key


mongosh "mongodb://localhost:27017" --tls --tlsCAFile /etc/ssl/certs/pti-ca.pem --tlsCertificateKeyFile /etc/ssl/newcerts/mongodb.crt --tlsPrivateKeyFile /etc/ssl/private/mongodb.key -u admin -p pti@2018 --authenticationDatabase admin

mongosh "mongodb://localhost:27017" --tls --tlsCAFile /etc/ssl/certs/pti-ca.pem -u admin -p pti@2018 --authenticationDatabase admin

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO MONGODB SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Configuração do Certificado no MongoDB realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/07-mongodb.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafiomongodb #desaficertificado