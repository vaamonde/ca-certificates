#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 01/06/2024<br>
#Data de atualização: 25/07/2024<br>
#Versão: 0.03<br>

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO WEBSSH SE VOCÊ CONSEGUIU FAZER O A IMPLEMENTAÇÃO COM 
A SEGUINTE FRASE: Implementação do WebSSH realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM)
MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver 
#ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioopenssh #desafiowebssh

Conteúdo estudado nesse desafio:<br>
#01_ Instalando as Dependências do WebSHH no Ubuntu Server<br>
#02_ Instalando o WebSSH via Python Pip no Ubuntu Server<br>
#03_ Baixando o arquivo de Serviço do WebSSH no Ubuntu Server<br>
#04_ Editando o arquivo de Serviço do WebSSH no Ubuntu Server<br>
#05_ Habilitando o Serviço do WebSSH e verificando sua Versão no Ubuntu Server<br>
#06_ Verificando a Porta de Conexão do WebSSH<br>
#07_ Localização do Binário e Arquivos de Configuração do WebSSH<br>
#08_ Liberando no Firewall a Conexão na Porta do WebSSH<br>
#09_ Testando WebSSH no navegador<br>

Site Oficial do OpenSSH: https://www.openssh.com/<br>
Site Oficial do OpenSSL: https://www.openssl.org/<br>
Site Oficial do WebSSH: https://github.com/huashengdun/webssh

OpenSSH é um conjunto de utilitários de rede relacionado à segurança que provém a criptografia<br> 
em sessões de comunicações em uma rede de computadores usando o protocolo SSH.

WebSSH é um aplicativo web simples para ser usado como cliente ssh para conectar-se aos seus <br>
servidores ssh. Está escrito em Python, baseado em tornado, paramiko e xterm.js.

#01_ Instalando as Dependências do WebSHH no Ubuntu Server<br>
```bash
#atualizando as listas do apt
sudo apt update

#instalando as dependências do WebSSH
sudo apt install python3 python3-pip

#verificando a versão do pip instalado
sudo pip3 --version
```

#02_ Instalando o WebSSH via Python Pip no Ubuntu Server<br>
```bash
#instalando o Webssh via pip
sudo pip3 install webssh

#localizando o binário da instalação do WebSSH
sudo which wssh
	/usr/local/bin/wssh (localização padrão)
```

#03_ Baixando o arquivo de Serviço do WebSSH no Ubuntu Server<br>
```bash
#download do arquivo de serviço do WebSSH
#opção do comando wget: -v (verbose), -O (output file)
sudo wget -v -O /etc/systemd/system/webssh.service https://raw.githubusercontent.com/vaamonde/ca-certificates/main/conf/webssh.service
```

#04_ Editando o arquivo de Serviço do WebSSH no Ubuntu Server<br>
```bash
#editando o arquivo de serviço do WebSSH
sudo vim /etc/systemd/system/webssh.service
INSERT

	#OBSERVAÇÃO IMPORTANTE: a porta padrão de conexão do WebSSH é a: 8888, foi alterado
	#a porta para não entrar em conflito com o Virtualhost do GLPI que está configurado
	#nessa porta.
	#altere os valores das opções de inicialização do WebSSH a partir da linha: 9
	--address='172.16.1.20' --port=2222 --encoding='utf-8' --fbidhttp=False

#salvar e sair do arquivo
ESC SHIFT : x <Enter>
```

#05_ Habilitando o Serviço do WebSSH e verificando sua Versão no Ubuntu Server<br>
```bash
#habilitando o serviço do WebSSH
sudo systemctl daemon-reload
sudo systemctl enable webssh
sudo systemctl start webssh

#verificando o serviço do WebSSH
sudo systemctl status webssh
sudo systemctl restart webssh
sudo systemctl reload webssh
sudo systemctl stop webssh
sudo systemctl start webssh

#analisando os Log's e mensagens de erro do WebSSH
#opção do comando journalctl: x (catalog), e (pager-end), u (unit)
sudo journalctl -xeu webssh

#verificando a versão do WebSSH
sudo wssh --version
```

#06_ Verificando a Porta de Conexão do WebSSH<br>
```bash
#OBSERVAÇÃO IMPORTANTE: no Ubuntu Server as Regras de Firewall utilizando o comando: 
#iptables ou: ufw está desabilitado por padrão (INACTIVE), caso você tenha habilitado 
#algum recurso de Firewall é necessário fazer a liberação do Fluxo de Entrada, Porta 
#e Protocolo TCP do Serviço corresponde nas tabelas do firewall e testar a conexão.

#opção do comando lsof: -n (network number), -P (port number), -i (list IP Address), -s (alone directs)
sudo lsof -nP -iTCP:'2222' -sTCP:LISTEN
```

#07_ Localização do Binário e Arquivos de Configuração do WebSSH<br>
```bash
/usr/local/bin/wssh                               Binário do WebSSH
/usr/local/lib/python3.10/dist-packages/webssh/*  Diretório dos arquivos de configuração do WebSSH
/etc/systemd/system/webssh.service                Arquivo de Serviço do WebSSH
```

#08_ Liberando no Firewall UFW a Conexão na Porta 2222 do WebSSH<br>
```bash
#Limitando (LIMIT) e Logando Tudo (LOG-ALL) da Sub-rede 172.16.1.0/24 (FROM) acessar o servidor
#(TO) do WebSSH na porta (PORT) 2222 via protocolo TCP (PROTO TCP)
sudo ufw limit log-all from 172.16.1.0/24 to 172.16.1.20 port 2222 proto tcp comment 'Limitando a sub-rede para acessar o WebSSH'

#Verificando as Regras Detalhadas padrão do UFW em modo Numerado
sudo ufw status verbose
```

#09_ Testando WebSSH no navegador<br>
```bash
#utilizar os navegadores para testar suas páginas
firefox ou google chrome: http://endereço_ipv4_ubuntuserver:2222

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

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO WEBSSH SE VOCÊ CONSEGUIU FAZER O A IMPLEMENTAÇÃO COM 
A SEGUINTE FRASE: Implementação do WebSSH realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM)
MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: 

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver 
#ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioopenssh #desafiowebssh