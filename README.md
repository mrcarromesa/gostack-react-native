# React Native

- Como configurar o ambiente: [Ambiente React Native](https://react-native.rocketseat.dev/)

- Criar um projeto:

```bash
npx react-native init NOME_DO_APP
```

- Podemos remover o arquivo `.eslint` e o `.prettier`

- Remover também o arquivo `App.js`

- Criar o arquivo `src/index.js`
- No arquivo `./index.js` ajustar para:

```js
import App from './src';
```

- Para executar o aplicativo no IOS:

```bash
yarn ios
```

---

## Chamada de API

- Utilizamos o axios:

```bash
yarn add axios
```

- Criar o arquivo `src/services/api.js`

---

## Components

- `SafeAreaView` utilizamos para exibir os elementos em uma area segura para não sumir atrás da statusbar
- `FlatList` utilizamos para listas performaticas, tem o mesmo comportamento do scrollview porém quando temos muitos elementos ele consegue performar melhor ele não renderiza os itens que aparecem



