#Autor: Robson Vaamonde<br>
#Procedimentos em TI: http://procedimentosemti.com.br<br>
#Bora para Prática: http://boraparapratica.com.br<br>
#Robson Vaamonde: http://vaamonde.com.br<br>
#Facebook Procedimentos em TI: https://www.facebook.com/ProcedimentosEmTi<br>
#Facebook Bora para Prática: https://www.facebook.com/BoraParaPratica<br>
#Instagram Procedimentos em TI: https://www.instagram.com/procedimentoem<br>
#YouTUBE Bora Para Prática: https://www.youtube.com/boraparapratica<br>
#Data de criação: 14/12/2023<br>
#Data de atualização: 15/08/2024<br>
#Versão: 0.08<br>

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO CA SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Instalação da CA realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/03-install-ca.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafioca #desafiocertificado

Conteúdo estudado nesse desafio:<br>
#01_ Instalação da Autoridade Certificadora CA no Mozilla Firefox (GNU/Linux ou Microsoft Windows)<br>
#02_ Instalação da Autoridade Certificadora CA no Google Chrome (GNU/Linux ou Microsoft Windows)<br>
#03_ Instalação da Autoridade Certificadora CA no Microsoft Edge (GNU/Linux ou Microsoft Windows)<br>
#04_ Instalação da Autoridade Certificadora CA no Opera (GNU/Linux ou Microsoft Windows)<br>
#05_ Instalação da Autoridade Certificadora CA no GNU/Linux (Linux Mint ou Ubuntu)<br>
#06_ Instalação da Autoridade Certificadora CA no Microsoft Windows (10 ou 11)<br>
#07_ Instalação da Autoridade Certificadora CA no Android<br>
#08_ Instalação da Autoridade Certificadora CA no MacOS Apple<br>
#09_ Instalação da Autoridade Certificadora CA no iOS Apple

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

A autoridade de certificação (CA), também conhecida como uma Autoridade de Certificação Raiz, é uma empresa ou organização que atua para validar as identidades (como sites, endereços de email, empresas ou pessoas físicas) e vinculá-las a chaves criptográficas através da emissão de documentos eletrônicos conhecidos como certificados digitais.

[![Install CA](http://img.youtube.com/vi/2Jp_4g2RYvI/0.jpg)](https://www.youtube.com/watch?v=2Jp_4g2RYvI "Install CA")

Link da vídeo aula: https://www.youtube.com/watch?v=2Jp_4g2RYvI

#01_ Instalação da Autoridade Certificadora CA no Mozilla Firefox (GNU/Linux ou Microsoft Windows)<br>
```bash
#baixando o certificado do nosso servidor via navegador:
firefox ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#OBSERVAÇÃO IMPORTANTE: no Windows ou no GNU/Linux o Mozilla Firefox utiliza o seu próprio
#sistema de gerenciamento de Unidades Certificadoras e Certificados Assinados, ele não usa
#o do sistema operacional.

#instalando o certificado no Mozilla Firefox
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

#consultando o certificado no Mozilla Firefox
Autoridades
  Bora para Pratica
    wsvaamonde.pti.intra
```

#02_ Instalação da Autoridade Certificadora CA no Google Chrome (GNU/Linux ou Microsoft Windows)<br>
```bash
#baixando o certificado do nosso servidor via navegador:
firefox ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#OBSERVAÇÃO IMPORTANTE: o Google Chrome no GNU/Linux utiliza o seu próprio sistema de
#gerenciamento de Unidades Certificadoras e Certificados Assinados, ele não usa o do
#sistema operacional GNU/Linux, já no Windows ele usa do próprio sistema operacional
#não sendo necessário fazer esse procedimento.

#instalando o certificado no Google Chrome
chrome://settings/certificates
  Autoridades
    Importar: pti-ca.crt
      Yes: Confiar neste certificado para a identificação de websites.
      Yes: Confiar neste certificado para identificar usuários de e-mail
      Yes: Confiar neste certificado para a identificação de criadores de software
    <OK>

#consultando o certificado no Google Chrome
Autoridades
  org-Bora para Pratica
    wsvaamonde.pti.intra

#reiniciando o navegador Google Chrome
chrome://restart
```

#03_ Instalação da Autoridade Certificadora CA no Microsoft Edge (GNU/Linux ou Microsoft Windows)<br>
```bash
#baixando o certificado do nosso servidor de navegador:
firefox ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#OBSERVAÇÃO IMPORTANTE: o Microsoft Edge no GNU/Linux utiliza o seu próprio sistema de
#gerenciamento de Unidades Certificadoras e Certificados Assinados, ele não usa o do
#sistema operacional GNU/Linux, já no Windows ele usa do próprio sistema operacional
#não sendo necessário fazer esse procedimento.

#OBSERVAÇÃO IMPORTANTE: O Microsoft Edge é um navegador baseado no Chromium e usa um 
#armazenamento privado semelhante ao Chromium. O Edge usa um keystore em ~/.pki e você 
#precisa do programa utilitário CertUtil para instalar o certificado no Edge.
#Mais informações acesse: 
https://chromium.googlesource.com/chromium/src/+/master/docs/linux/cert_management.md

#instalando a biblioteca Libnss3
sudo apt update
sudo apt install libnss3-tools

#acessar o diretório de Download do Linux Mint
cd ~/Download

#instalando a Unidade Certificadora no Microsoft Edge utilizando o comando certutil
#opções do comando certutil: -d (directory), -A (Add an existing certificate to a certificate database), 
#-t (trustargs), -n (nickname), -i (input_file), -L (List all the certificates)
certutil -d sql:$HOME/.pki/nssdb -A -t "C,," -n BoraParaPratica -i pti-ca.crt
certutil -d sql:$HOME/.pki/nssdb -L

#instalando o certificado no Microsoft Edge
Abrir menu de Aplicativo
  Configurações
    Gerenciar Certificados
      Autoridades
        Importar
```

#04_ Instalação da Autoridade Certificadora CA no Opera (GNU/Linux ou Microsoft Windows)<br>
```bash
#baixando o certificado do nosso servidor via navegador:
firefox ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#OBSERVAÇÃO IMPORTANTE: O navegador Opera utiliza o mesmo gerenciador de Certificado do 
#Google Chrome, se você já importou o certificado no Google Chrome na hora de importar
#o certificado no Navegador Opera a seguinte mensagem de erro aparece para você: 
#Certification Authority Import Error: The file contained one certificate, which was not 
#imported: wsvaamonde.pti.intra: Certificate already exists.

#instalando o certificado no Opera
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

#consultando o certificado no Opera
Autoridades
  org-Bora para Pratica
    wsvaamonde.pti.intra
```

#05_ Instalação da Autoridade Certificadora CA no GNU/Linux (Linux Mint ou Ubuntu)<br>
```bash
#baixando o certificado do nosso servidor via navegador:
firefox ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#instalando o certificado no Linux Mint
Pasta: Download
  Abrir como Root (Botão direito do Mouse: Abrir como root)
    Copiar: pti-ca.crt
    Para: /usr/local/share/ca-certificates/
  Abrir o Terminal como Root (Botão direito do Mouse: Abrir no Terminal)

#instalando e atualizando as Unidades Certificadores Raiz no Linux Mint
sudo apt update
sudo apt install ca-certificates
sudo update-ca-certificates

#verificando a criação do link PEM (Privacy Enhanced Mail) no Linux Mint
#opção do comando ls: -l (long listing), -h (human readable), -a (all)
ls -lha /etc/ssl/certs/pti-ca*
```

#06_ Instalação da Autoridade Certificadora CA no Microsoft Windows (10 ou 11)<br>
```bash
#baixando o certificado do nosso servidor via navegador:
edge, firefox ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#instalando a CA no sistema operacional Microsoft
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

#pesquisando o certificado instalado no sistema operacional Microsoft
Pesquisa do Windows
  Gerenciar Certificados de Computador <Sim>
    Autoridades de Certificação Raiz Confiáveis
      Certificados
        Emitido para:
          wsvaamonde.pti.intra
```

#07_ Instalação da Autoridade Certificadora CA no Smartphone Android<br>
```bash
#baixando o certificado do nosso servidor via navegador:
google chrome: http://endereço_ipv4_ubuntuserver/ca/

#OBSERVAÇÃO IMPORTANTE: QUANDO VOCÊ FAZ O DOWNLOAD DE UNIDADES CERTIFICADORAS OU
#CERTIFICADO VIA NAVEGADOR NO SMARTPHONE ANDROID ELE JÁ INICIAR O PROCEDIMENTO DE
#INSTALAÇÃO DO CERTIFICADO.

#instalando o certificado no Smartphone Android
Configurações
  Senhas e Segurança
    Privacidade
      Criptografia e Credenciais
        Armazenamento de Credenciais: Credenciais confiáveis
          Sistema: Utilizado em todo o sistema 
          Usuário: Específico para o usuário
        Instalar do Cartão SD
          Menu: Download
            Arquivo: pti-ca.crt
```

#08_ Instalação da Autoridade Certificadora CA no MacOS Apple<br>
```bash
#baixando o certificado do nosso servidor via navegador:
safari ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#instalando o certificado no MacOS Apple
Pasta: Download
  pti-ca.crt (clicar duas vezes em cima do certificado)
    Adicionar Certificados
      Chaves: Sistema
    <Adicionar>
  Acesso às Chaves
    Usuário: SEU_USUÁRIO
    Senha: SUA_SENHA
  <Modificar Chaves>

#habilitando o certificado confiável da CA no MacOS Apple
Acesso às Chaves
  Sistema
    wsvaamonde.pti.intra (clicar duas vezes em cima do certificado)
      Confiança
        Ao usar este certificado: Confiar Sempre
      <Fechar>
  Acesso às Chaves
    Usuário: SEU_USUÁRIO
    Senha: SUA_SENHA
  <Atualizar Ajustes>
```

#09_ Instalação da Autoridade Certificadora CA no iOS Apple<br>
```bash
#baixando o certificado do nosso servidor via navegador:
safari ou google chrome: http://endereço_ipv4_ubuntuserver/ca/

#instalando o certificado no iOS
Pasta: Download
  Ajustes
    Instalar
      Digite sua senha do dispositivo
    <Instalar>
```

=========================================================================================

OBSERVAÇÃO IMPORTANTE: COMENTAR NO VÍDEO DO CA SE VOCÊ CONSEGUIU FAZER O A INSTALAÇÃO COM A SEGUINTE FRASE: Instalação da CA realizado com sucesso!!! #BoraParaPrática

COMPARTILHAR O SELO DO DESAFIO NAS SUAS REDES SOCIAIS (LINKEDIN, FACEBOOK, INSTAGRAM) MARCANDO: ROBSON VAAMONDE COM AS HASHTAGS E COPIANDO O CONTEÚDO DO DESAFIO ABAIXO: 

LINK DO SELO: https://github.com/vaamonde/ca-certificates/blob/main/selos/03-install-ca.png

#boraparapratica #boraparaprática #vaamonde #robsonvaamonde #procedimentosemti #ubuntuserver #ubuntuserver2204 #desafiovaamonde #desafioboraparapratica #desafica #desaficertificado