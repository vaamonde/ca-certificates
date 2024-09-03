#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 17/12/2023<br>
#Data de atualização: 03/09/2024<br>
#Versão: 0.05<br>

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO TOMCAT10 SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Instalação da Certificado no Tomcat10 realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/05-tomcat.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafitomcat10 #desaficertificado

Conteúdo estudado nesse desafio:<br>
#01_ Fazendo o download do Arquivo de Configuração do Certificado do Apache TomCAT 10 Server<br>
#02_ Editando o arquivo de Arquivo de Configuração do Certificado do Apache TomCAT 10 Server<br>
#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache TomCAT 10 Server no Ubuntu Server<br>
#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache TomCAT 10 Server no Ubuntu Server<br>
#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache TomCAT 10 Server no Ubuntu Server<br>
#06_ Criando o arquivo CSR (Certificate Signing Request) do Apache TomCAT 10 Server no Ubuntu Server<br>
#07_ Criando o arquivo CRT (Certificate Request Trust) do Apache TomCAT 10 Server no Ubuntu Server<br>
#08_ Verificando o arquivo CRT (Certificate Request Trust) do Apache TomCAT 10 Server no Ubuntu Server<br>
#09_ Exportando o certificado PKCS#12 PEM (Privacy Enhanced Mail) do Apache TomCAT 10 Server no Ubuntu Server<br>
#10_ Importando o certificado PKCS#12 PEM (Privacy Enhanced Mail) no arquivo JKS (Java KeyStore) do Apache TomCAT 10 Server no Ubuntu Server<br>
#11_ Alterando as Permissões do Certificado PKCS#12 do Apache TOMCAT 10 Server no Ubuntu Server<br>
#12_ Fazendo o download do Arquivo de Configuração do HTTPS do Apache TomCAT 10 Server<br>
#13_ Editando o arquivo de Configuração do HTTPS do Apache TomCAT 10 Server<br>
#14_ Reinicializar o Serviço do Apache TomCAT Server no Ubuntu Server<br>
#15_ Verificando a Porta de Conexão do Apache TomCAT Server no Ubuntu Server<br>
#16_ Testando o Certificado TLS/SSL do Apache TomCAT Server no ubuntu Server<br>
#17_ Testando o HTTPS do Apache TomCAT Server no navegador<br>
#18_ Usuário e Senha de Administração do Apache TomCAT Server

Site Oficial do Apache2: https://httpd.apache.org/<br>
Site Oficial do Apache Tomcat: https://tomcat.apache.org/<br>
Site Oficial do OpenJDK: https://openjdk.org/<br>
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

O Tomcat é um servidor web Java, mais especificamente, um container de servlets. O Tomcat implementa, dentre outras de menor relevância, as tecnologias Java Servlet e JavaServer Pages e não é um container Enterprise JavaBeans. Desenvolvido pela Apache Software Foundation, é distribuído como software livre.

#01_ Fazendo o download do Arquivo de Configuração do Certificado do Apache TomCAT 10 Server<br>
```bash
#download do arquivo de configuração do Certificado do Apache TomCAT 10 Server
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/ssl/conf/tomcat10.conf https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/tomcat10.conf
```

#02_ Editando o arquivo de Arquivo de Configuração do Certificado do Apache TomCAT 10 Server<br>
```bash
#editando o arquivo de configuração do Certificado do Apache TomCAT 10 Server
sudo vim /etc/ssl/conf/tomcat10.conf
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
	# Bloco de configuração dos nomes alternativos do certificado do Apache TomCAT 10 Server
	# Adicionar todos os Nomes e Endereços IPv4 de acesso ao Servidor Apache TomCAT 10 Server

#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

#03_ Criando o Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache TomCAT 10 Server no Ubuntu Server<br>
```bash
#Tipo de criptografia da chave raiz privada com as opções de: -aes128, -aes192, -aes256, -camellia128, 
#-camellia192, -camellia256, -des, -des3 ou -idea, padrão utilizado: -aes256

#Tamanho da chave raiz privada utilizada em todas as configurações dos certificados, opções de: 1024, 
#2048, 3072 ou 4096, padrão utilizado: 2048 bits

#criando a chave raiz priva do Apache TomCAT 10 Server
#opções do comando openssl: genrsa (command generates an RSA private key), -out (The output file to 
#write to, or standard output if not specified), -passout (The output file password source), pass: 
#(The actual password is password), bits (The size of the private key to generate in bits)
sudo openssl genrsa -aes256 -out /etc/ssl/private/tomcat10.key.old -passout pass:pti@2018 2048
```

#04_ Removendo a Senha da Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache TomCAT 10 Server no Ubuntu Server<br>
```bash
#removendo a senha do arquivo de chave raiz privada e criando o novo arquivo sem senha
#opções do comando openssl: rsa (command processes RSA keys), -in (The input file to read from, or 
#standard input if not specified), -out (The output file to write to, or standard output if not 
# specified), -passin (The key password source), pass: (The actual password is password)
sudo openssl rsa -in /etc/ssl/private/tomcat10.key.old -out /etc/ssl/private/tomcat10.key -passin pass:pti@2018

#removendo o arquivo temporário de Chave Raiz RSA com senha
# opção do comando rm: -v (verbose)	
sudo rm -v /etc/ssl/private/tomcat10.key.old
```

#05_ Verificando o arquivo de Chave Raiz RSA (Rivest-Shamir-Adleman) Privada do Apache TomCAT 10 Server no Ubuntu Server<br>
```bash
#opções do comando openssl: rsa (command processes RSA keys), -noout (Do not output the encoded 
#version of the key), -modulus (Print the value of the modulus of the key), -in (The input file 
#to read from, or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl rsa -noout -modulus -in /etc/ssl/private/tomcat10.key | openssl md5
```

#06_ Criando o arquivo CSR (Certificate Signing Request) do Apache TomCAT 10 Server no Ubuntu Server<br>
```bash
#Assinatura da chave de criptografia privada com as opções de: -md5, -sha1, -sha224, -sha256, -sha384 
#ou -sha512, padrão utilizado: sha256

#opção do caractere: \ (contra barra): utilizado para quebra de linha em comandos grandes
#opções do comando openssl: req (command primarily creates and processes certificate requests in 
#PKCS#10 format), -new (Generate a new certificate request), -nodes (Do not encrypt the private 
#key), -key (The file to read the private key from), -out (The output file to write to, or standard 
#output if not specified), -extensions (Specify alternative sections to include certificate extensions), 
#-config (Specify an alternative configuration file)
sudo openssl req -new -sha256 -nodes -key /etc/ssl/private/tomcat10.key -out /etc/ssl/requests/tomcat10.csr \
-extensions v3_req -config /etc/ssl/conf/tomcat10.conf
```

#07_ Criando o arquivo CRT (Certificate Request Trust) do Apache TomCAT 10 Server no Ubuntu Server<br>
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
sudo openssl ca -in /etc/ssl/requests/tomcat10.csr -out /etc/ssl/newcerts/tomcat10.crt -config /etc/ssl/conf/ca.conf \
-extensions v3_req -extfile /etc/ssl/conf/tomcat10.conf
```

#08_ Verificando o arquivo CRT (Certificate Request Trust) do Apache TomCAT 10 Server no Ubuntu Server<br>
```bash
#opções do comando openssl: x509 (command is a multi-purpose certificate utility), -noout (Do not output 
#the encoded version of the request), -modulus (Print the value of the modulus of the public key contained 
#in the certificate), -text (Print the full certificate in text form), -in (The input file to read from, 
#or standard input if not specified), md5 (The message digest to use MD5 checksums)
#opção do redirecionador de saída |: Conecta a saída padrão com a entrada padrão de outro comando
sudo openssl x509 -noout -modulus -in /etc/ssl/newcerts/tomcat10.crt | openssl md5
sudo openssl x509 -noout -text -in /etc/ssl/newcerts/tomcat10.crt

#listando o conteúdo do banco de dados do certificados emitidos
#opção do comando cat: -n (numeric)
sudo cat -n /etc/ssl/index.txt
sudo cat -n /etc/ssl/serial
```

#09_ Exportando o certificado PKCS#12 PEM (Privacy Enhanced Mail) do Apache TomCAT 10 Server no Ubuntu Server<br>
```bash
#criando o certificado PEM do Apache TomCAT Server
#opções do comando openssl: pkcs12: (PKCS#12 Data Management) -export: (The export file PEM PKCS#12 file 
#export with private key data and root certification unit), -in: (The input file to read from, or standard 
#input if not specified), -inkey: (The input file private key), -out: (The output file to write to, or 
#standard output if none is specified), -name: (The alias name of the certificate export), -CAfile: (The 
#file containing the unit's signed certificate Root Certificate), -caname: (The Root certification unit 
#name), -passout (The output file password source), pass: (The actual password is password)
sudo openssl pkcs12 -export -in /etc/ssl/newcerts/tomcat10.crt -inkey /etc/ssl/private/tomcat10.key \
-out /opt/tomcat/conf/tomcat10.pem -name tomcat -CAfile /etc/ssl/newcerts/pti-ca.crt -caname root \
-passout pass:pti@2018
```

#10_ Importando o certificado PKCS#12 PEM (Privacy Enhanced Mail) no arquivo JKS (Java KeyStore) do Apache TomCAT 10 Server no Ubuntu Server<br>
```bash
#criando o arquivo de chaves JKS do Apache TomCAT Server
#opções do comando keytool: importkeystore: (Imports one or all entries from another keystore),
#-deststorepass: (Destination keystore password), -destkeypass: (Destination key password)
#-destkeystore: (Destination keystore name), -srckeystore: (Source keystore name), -srcstoretype: 
#(Source keystore type), -srcstorepass: (Source keystore password), -alias: (Source alias)
sudo keytool -importkeystore -deststorepass pti@2018 -destkeypass pti@2018 -destkeystore \
/opt/tomcat/conf/tomcat10.jks -srckeystore /opt/tomcat/conf/tomcat10.pem -srcstoretype PKCS12 \
-srcstorepass pti@2018 -alias tomcat
```

#11_ Alterando as Permissões do Certificado PKCS#12 do Apache TOMCAT 10 Server no Ubuntu Server<br>
```bash
#alterando as permissões de Dono e Grupo padrão dos Certificados
#opção do comando chown: -v (verbose)
sudo chown -v tomcat:tomcat tomcat10.jks tomcat10.pem

#listando os arquivos de Certificados do Apache TomCAT
#opção do comando ls: -l (long listing format), -h (human-readable)
sudo ls -lh /opt/tomcat/conf/tomcat10.jks
sudo ls -lh /opt/tomcat/conf/tomcat10.pem
```

#12_ Fazendo o download do Arquivo de Configuração do HTTPS do Apache TomCAT 10 Server<br>
```bash
#download do arquivo de configuração do HTTPS do Apache TomCAT 10 Server
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /opt/tomcat/conf/server.xml https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/server.xml
```

#13_ Editando o arquivo de Configuração do HTTPS do Apache TomCAT 10 Server<br>
```bash
#editando o arquivo de configuração do HTTPS do Apache TomCAT 10 Server
sudo vim /opt/tomcat/conf/server.xml
INSERT

	#comentar as configurações de HTTP do Apache TomCAT Server a partir da linha: 39 até 41
	# Configuração principal do Tomcat referente a Porta padrão (8080 - HTTPS), Timeout e
	# Porta Segura (8443 - HTTPS)

	#descomentar as configurações de HTTPS do Apache TomCAT Server a partir da linha: 50 até 61
	# Configuração do suporte ao SSL/TLS do Tomcat utilizando o software Keytool
	# e Certificados Assinados utilizando o OpenSSL
	# Comando para a geração do certificado do Tomcat SSL/TLS não assinado pela CA
	# keytool -genkey -alias tomcat -keyalg RSA -keystore /opt/tomcat/conf/tomcat10.jks 
	# Descomentar as linhas abaixo depois de configurar o TLS/SSL do Apache Tomcat

#salvar e sair do arquivo
ESC SHIFT :x <Enter>
```

#14_ Reinicializar o Serviço do Apache TomCAT Server no Ubuntu Server<br>
```bash
#reiniciando o Serviços do Apache TomCAT Server
sudo systemctl restart tomcat10
sudo systemctl status tomcat10
```

#15_ Verificando as Portas de Conexões do Apache TomCAT Server no Ubuntu Server<br>
```bash
#verificando as portas 8080 HTTP e 8443 HTTPS do Apache TomCAT Server
#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'8080,8443' -sTCP:LISTEN
```

#16_ Testando o Certificado TLS/SSL do Apache TomCAT Server no ubuntu Server<br>
```bash
#testando o certificado do Apache TomCAT Server no Ubuntu Server
#opção do comando echo: | (piper, faz a função de Enter no comando)
#opções do comando openssl: s_client (command implements a generic SSL/TLS client which 
#connects to a remote host using SSL/TLS), -connect (The host and port to connect to),
#-servername (Include the TLS Server Name Indication (SNI) extension in the ClientHello 
#message), -showcerts (Display the whole server certificate chain: normally only the server 
#certificate itself is displayed)
echo | openssl s_client -connect localhost:8443 -servername 172.16.1.20 -showcerts
```

#17_ Testando o HTTPS do Apache TomCAT Server no navegador<br>
```bash
#utilizar os navegadores para testar o HTTPS
firefox ou google chrome: https://endereço_ipv4_ubuntuserver:8443
```

#18_ Usuário e Senha de Administração do Apache TomCAT Server<br>
```bash
Clique em: Manager App
	Usuário padrão: admin
	Senha padrão..: pti@2018
<Fazer Login>
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO TOMCAT10 SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Instalação da Certificado no Tomcat10 realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/05-tomcat.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafitomcat10 #desaficertificado