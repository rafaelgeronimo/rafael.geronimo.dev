---
title: 'Introdução ao React'
excerpt: 'Uma rápida apresentação dos princípios básicos do React.'
coverImage: '/assets/blog/2019/react/01.png'
date: '2019-05-17'
author:
  name: Rafael Gerônimo
  picture: 'http://github.com/rafaelgeronimo.png'
ogImage:
  url: '/assets/blog/2019/react/01.png'
---

## Tutorial rápido para começar com a mais famosa biblioteca JavaScript do momento

Esse tutorial vai proporcionar um básico e rápido entendimento do React através da criação de uma aplicação **muito** simples. Vamos deixar de fora tudo que não for essencial.

## O básico

Para começar a usar o React, vamos usar a configuração mais simples possível: um arquivo `html` que importe as bibliotecas _React_ e _ReactDOM_, usando as tags de `script`.

```htmlmixed=
<html>
    <head>
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/babel" src="script.js"></script>
    </body>
</html>
```

Nós também importamos o _Babel_. Pois o React utiliza o JSX para escrever as marcações, e o _Babel_ será o encarregado de transformar o JSX em JavaScript, para que o navegador consiga interpretá-lo.

Além disso, adicionamos uma `<div>` com o `id` "app". Este é o ponto de entrada para o nosso aplicativo. Aqui é onde nosso código vai ganhar vida.

Por último, adicionamos a nossa chamada para um arquivo externo, chamado `script.js`. É nesse arquivo que vamos escrever nosso código React.

Pronto. Nosso arquivo `.html` está preparado, esperando o React fazer sua mágica.

## Components

Tudo no React é um _component_, e este geralmente possui as mesmas características que as classes do JavaScript. Criamos um _component_ usando a classe `React-Component`. Vamos criar um _component_ chamado `Hello`:

```jsx=
class Hello extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
```

E então, definimos os métodos para nosso _component_. No exemplo temos apenas um método, e esse é chamado de `render()`.

Dentro do `render()` devemos colocar o que realmente desejamos mostrar na página. No caso acima, queremos simplesmente que ele exiba uma tag `h1` com o texto `Hello world!` dentro dele.

Para que nosso conteúdo seja renderizado na tela, vamos precisar usar o `ReactDOM.render()`:

```jsx=
ReactDOM.render(<Hello />, document.getElementById("app"));
```

É aqui que conectamos o nosso _component_ `Hello` com o ponto de entrada do aplicativo no código _html_ (`<div id="app"></div>`).

> _Então, estamos simplesmente dizendo_: Ei React! Por favor, renderize o _component_ `Hello` dentro do elemento do DOM com o `id` igual a `app`!

E o resultado é esse:

![](https://i.imgur.com/iKqk8Hd.png)

A sintaxe `html` que vemos tomar forma no resultado acima (`<h1>` e `<Hello />`) é o nosso código JSX mencionado anteriormente. E isso não é realmente HTML, é muito mais poderoso! Embora tudo que escrevemos acabe tornando-se tags HTML no DOM.

O próximo passo é fazer com que nosso aplicativo manipule dados.

## Manipulando dados

Existem dois tipos de dados no React: `props` e `state`. A diferença entre os dois é um pouco difícil de entender no começo, então não se preocupe se achar um pouco confuso. Será mais fácil quando você começar a trabalhar com eles.

A principal diferença entre os dois é que o `state` é privado e pode ser alterado a partir do próprio _component_ onde se encontra. Já os `props` são externos e não são controlados pelo _component_ proprietário diretamente. Seus dados transitam entre os _components_, e todos o controlam.

**Um _component_ pode alterar seu `state` interno diretamente, mas não pode mudar seus próprios `props`.**

Vamos dar uma olhada nos `props` primeiro.

## Props

Nosso _component_ `Hello` é completamente estático. Ele processa sempre a mesma mensagem, não importa qual ela seja. No entanto, uma das grandes características do React é a sua capacidade de reutilização, ou seja, a capacidade de escrever um _component_ uma vez e, em seguida, reutilizá-lo em outro caso. Por exemplo, para exibir mensagens diferentes.

Para alcançar esse tipo de reutilização, adicionaremos `props`. E é assim que você passa `props` para um _component_:

```jsx=
ReactDOM.render(<Hello message="my friend" />, document.getElementById("app"));
```

Essa `props` é chamada de `message` e tem o valor 'my friend'. Podemos acessar essa `props` dentro do _component_ `Hello` referenciando `this.props.message`, assim:

```jsx=
class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.message}!</h1>;
  }
}
```

Como resultado, teremos isso renderizado na tela:

![](https://i.imgur.com/B4B7Lvd.png)

A razão pela qual estamos escrevendo `{this.props.message}` com chaves é porque precisamos informar ao JSX que queremos adicionar uma expressão JavaScript. Isso é chamado de **escaping**.

Agora, temos um _component_ reutilizável, que pode renderizar qualquer mensagem que quisermos na página! Yeah!

No entanto, e se quisermos que o _component_ possa alterar seus próprios dados? Então temos que usar o `state` em vez disso!

## State

Outra maneira de armazenar dados no React é no _component_ `state`. E, ao contrário da `props` - que não pode ser alterada diretamente pelo _component_ - o `state` pode.

Portanto, se você quiser que os dados do seu aplicativo sejam alterados, por exemplo, com base nas interações do usuário, ele deve ser armazenado no `state` de um _component_ em algum lugar do aplicativo.

### Inicializando o `state`

```jsx=
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "my friend (from state)!"
    };
  }
  render() {
    return <h1>Hello {this.state.message}!</h1>;
  }
}
```

Antes de definirmos o `state`, temos que chamar o `super()` no `constructor`. Isso ocorre porque ele não pode ser inicializado sem que o `super()` tenha sido chamado.

### Alterando o `state`

Para modificar o `state`, simplesmente chame **this.setState()**, passando o novo objeto `state` como argumento. Faremos isso dentro de um método que chamaremos de `updateMessage`.

```jsx=
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "my friend (from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage() {
    this.setState({
      message: "my friend (from changed state)!"
    });
  }
  render() {
    return <h1>Hello {this.state.message}!</h1>;
  }
}
```

> Nota: Para que isso funcione, também precisamos vincular (`bind`) a palavra chave `this` ao método `updateMessage`. Caso contrário, não teríamos acesso ao conteúdo dentro do método.

## Manipuladores de Eventos

O próximo passo é criar um botão para clicar e acionar o método `updateMessage()`.

Então, adicionemos o botão ao `render()`:

```jsx=
render() {
    return (
        <div>
            <h1>Hello {this.state.message}!</h1>
            <button onClick={this.updateMessage}>Click me!</button>
        </div>
    )
}
```

Aqui, estamos adicionando um _event listener_ no botão quando adicionamos o eventos `onClick`. Esse, ao ser acionado, chama o método `updateMessage`.

Aqui está o _component_ inteiro:

```jsx=
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "my frien (from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.setState({
      message: "my friend (from changed state)!"
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.message}!</h1>
        <button onClick={this.updateMessage}>Click me!</button>
      </div>
    );
  }
}
```

O método `updateMessage` chama então o `this.setState()`, que altera o valor `this.state.message`. E quando clicamos no botão, temos esse resultado:

![](https://i.imgur.com/I54n2VZ.gif)

Parabéns! Agora você tem uma compreensão básica dos conceitos mais importantes do React.