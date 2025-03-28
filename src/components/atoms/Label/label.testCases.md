# Documentação de Casos de Teste - Componente Label

## 1. Renderização

- **Label:** Garante que o `label` é renderizado com o conteúdo correto.

## 2. Atributo htmlFor

- **Label:** Assegura que o atributo `for` é corretamente vinculado ao elemento de entrada.

## 3. Estado de Erro

- **Comportamento Esperado:**
  - Aplica classe de erro quando `hasError={true}`.
  - Adiciona `aria-invalid="true"` para acessibilidade.

## 4. Estado Normal (Padrão)

- **Comportamento Padrão:**
  - Não aplica estilos de erro sem a prop `hasError`.
  - Não possui atributo `aria-invalid`.

## 5. Props Adicionais

- **Funcionalidade:** Aceita propriedades adicionais do elemento HTML nativo.
