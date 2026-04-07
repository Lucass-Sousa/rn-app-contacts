# Contact Manager Pro 👋

Um aplicativo mobile moderno para gerenciamento de contatos desenvolvido com **React Native** e **Expo**.

## 📱 Funcionalidades

- **Autenticação Segura**: Fluxo de login protegido com gerenciamento de estado global.
- **Gerenciamento de Contatos (CRUD)**:
  - Adicionar novos contatos com nome, telefone e foto.
  - Editar informações de contatos existentes.
  - Excluir contatos com confirmação de segurança.
- **Seleção de Fotos**: Integração com a galeria do dispositivo para personalizar avatares de contatos.
- **Simulação de Chamada**: Tela dedicada para simular uma ligação ativa com timer e interface premium.
- **Design Moderno**: Tema escuro (Dark Mode) com glassmorphism, micro-animações e componentes personalizados (Bottom Sheets).
- **Sincronização em Tempo Real**: Uso de Context API para garantir que as alterações sejam refletidas instantaneamente em todas as telas.

## 🚀 Tecnologias Utilizadas

- [Expo](https://expo.dev) - Framework para desenvolvimento universal.
- [React Native](https://reactnative.dev) - Biblioteca para interfaces nativas.
- [Expo Router](https://docs.expo.dev/router/introduction/) - Navegação baseada em arquivos.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animações fluidas de 60fps.
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/image-picker/) - Seleção de mídia.
- [Context API](https://react.dev/reference/react/useContext) - Gerenciamento de estado global (Auth e Contatos).

## 🛠️ Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar o projeto

```bash
npx expo start
```

### 3. Abrir no dispositivo

Escaneie o QR Code gerado no terminal usando o aplicativo **Expo Go** (Android) ou a câmera (iOS) para visualizar o aplicativo no seu celular.

## 📁 Estrutura de Pastas

- `src/app/auth`: Telas de autenticação.
- `src/app/protected`: Telas principais após login (Lista de contatos, Chamadas).
- `src/components`: Componentes reutilizáveis (Bottom Sheets, etc).
- `src/context`: Contextos globais (Autenticação e Lista de Contatos).
- `src/theme`: Definições de cores e constantes do tema.
- `src/mocks`: Dados simulados para o estado inicial.

## 👤 Autor

Desenvolvido por Lucas Sousa durante o treinamento FAP 2026.1.
