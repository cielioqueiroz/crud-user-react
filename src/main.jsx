import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { router } from "./Routers/index";
import { theme } from "./theme/defaults";
import { UserProvider } from "./context/useUserContext";

import "./assets/index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </ThemeProvider>
);

/**
 * Meu chefe parabéns pelo projeto, muito bem organizado, bem estruturado e mostra que vc está sim evoluindo muito no React.
 *
 * Refatorei alguns pontos apenas pra ter como referência e poder pegar umas manhas mais avançadas do React:
 * 1. Sempre prefira use 'name export' ao invés do 'default export' - isso ajuda na melhor legibilidade e te força a usar o mesmo nome para componentes e funções que usou na criação.
 *
 * 2. Dê preferencia por usar recursos mais recentes do Javascript como const, arrow functions, destructuring entre outras, se você observar eu refatorei para usar const ao invés de functions - vai ao teu gosto, mas o ECMAScript aconselha a usar mais const. Olha um exemplo pra ver o quanto fica legal:
 * a) function MyComponent() {
 *   return <h2>Meu Component</h2>
 * }
 *
 * b) const MyComponent = () => {
 *    return <h2>Meu Component</h2>
 * }
 *
 * c) const MyComponent = () => <h2>Meu Component</h2>
 *
 * Olha como a versão da letra C ficou bem menor e melhor de ler.
 *
 * 3. No teu contexto está tudo certo, a única dica é: se tu tem um contexto que retorna muitas propriedades no
 * provider - tu pode usar um useMemo para deixar mais performático, no caso do seu contexto não teria necessidade pois
 * ele só tá retornando a propriedade 'users', mas eu fiz pra tu ver como que fica.
 *
 * 4. Organizar os imports no código é uma boa prática também: primeiro vem a importação do React, depois libs externas,
 * depois componentes, depois utils/context/hooks e por último os estilos CSS, sempre com um linha em branco separando
 *
 * 5. Vi um lugar onde vc faz um map e monta a tabela, a dica nesse caso é sempre que possível usar o
 * destructuring nos arrays e objetos
 *
 * Chefe acho que é isso, se tiver alguma dúvida, ou não entendeu algo - só comentar que tento lhe explicar.
 *
 * Parabéns pelo progresso.
 */
