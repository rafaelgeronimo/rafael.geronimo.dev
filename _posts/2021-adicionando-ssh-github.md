---
title: 'Adicionando chave SSH ao GitHub'
excerpt: 'Pode ser muito fácil seguir a documentação oficial do GitHub sobre como adicionar sua chave SSH à sua conta. Porém aqui você vai encontrar uma forma muito mais rápida de adicionar sua chave SSH ao GitHub.'
coverImage: '/assets/blog/2021/ssh-github/01.png'
date: '2021-01-11T05:35:07.322Z'
author:
  name: Rafael Gerônimo
  picture: 'http://github.com/rafaelgeronimo.png'
ogImage:
  url: '/assets/blog/2021/ssh-github/01.png'
---

## Gerando uma chave SSH
### Verifique a existência de uma chave:
> ⚠ O comandos devem ser executados no Terminal (Linux/Mac) ou no Powershell (Windows). ⚠

Comece executando esse comando para verificar se já existe alguma chave SSH gerada em seu sistema:

```shell
ls ~/.ssh
```

O nome do seu arquivo de chaves públicas pode ser algum da lista abaixo:

- id_rsa.pub
- id_dsa.pub
- id_ecdsa.pub
- id_ed25519.pub

### Gere uma nova chave SSH se necessário
Se não encontrar nenhum dos arquivos da lista, significa que não há nenhuma chave SSH salva no diretório. Então, será necessário gerar uma nova chave. Execute esse comando:

```shell
ssh-keygen -t rsa -b 4096 -C "seu_email@exemplo.com"
```

Essa mensagem será exibida no terminal:

- linux
```shell
> Enter a file in which to save the key (/home/seu_nome/.ssh/id_rsa): [Aperte enter]
```

- windows
```shell
> Enter file in which to save the key
(C:\Users\seu_nome/.ssh/id_rsa): [Aperter enter]
```
A mensagem solicita um local e um nome para o seu arquivo de chave pública. Nesse caso, basta apenas pressionar a tecla [enter] para usar o local e o nome padrão ou então informar uma de sua preferência.

Em seguida, será solicitada a criação de uma senha, porém não é obrigatória. Caso prefira usar a segurança, não esqueça de anotar a senha em um local seguro, como um gerenciador de senhas.

### Adicionando a chave SSH ao ssh-agent
Verifique se o ssh-agent está em execução ou então inicie o serviço com o comando:

- linux
```shell
$ eval `ssh-agent -s`
```

- windows
```shell
ssh-agent -s
```

Agora adicione a sua chave SSH privada ao ssh-agent com o comando:
```shell
ssh-add ~/.ssh/id_rsa.pub
```

### Adicionando uma chave SSH ao GitHub
Para exibir sua chave SSH pública, execute o comando ls ~/.ssh, identifique o nome do arquivo e então mostre o conteúdo do arquivo no console com o comando:
```shell
cat ~/.ssh/id_rsa.pub
```

Então:

- Copie a chave que é exibida no seu console após a execução do comando acima
- Vá para a [página de configuração de chaves SSH e GPG do GitHub](https://github.com/settings/keys)
- Clique em [New SSH Key](https://github.com/settings/ssh/new)
- Preencha o campo `Title`. Escolha um nome para identificar o computador, como `Notebook Ubuntu Empresa`
- Cole a sua chave SSH no campo `Key`, pressionando o botão `Add SSH key` em seguida.

A partir de agora, todas as interações entre o seu computador e o GitHub, como `clone`, `push`, `pull` e outros, podem ser realizados com segurança, sem a necessidade de informar seu nome de usuário e senha todas as vezes que executar um novo comando.