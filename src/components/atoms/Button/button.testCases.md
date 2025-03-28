# Casos de Teste para o Componente Button

## 1. Renderização

- **Como Botão**: Renderiza um elemento `<button>` quando a prop `href` **não** é fornecida.
- **Como Link**: Renderiza um elemento `<a>` (via `Link` do Next.js) quando a prop `href` é fornecida.

## 2. Variantes

- Aplica a classe CSS correta com base na prop `variant` (ex: `Primary`, `Secondary`).

## 3. Estado Desabilitado

- **Botão**: Possui o atributo `disabled` e estilo de desabilitado.
- **Link**: Possui `aria-disabled="true"`, `tabIndex="-1"` e estilo de desabilitado (para acessibilidade).

## 4. Acessibilidade

- Utiliza a prop `aria-label` quando fornecida, garantindo descrição para leitores de tela.

## 5. Estilos Personalizados

- Aplica `fontSize` (converte números para pixels) e `fontWeight` como estilos inline.
  - Exemplo: `fontSize={16}` → `font-size: 16px`.
  - Valores em string são usados diretamente (ex: `fontSize="1.5rem"`).

## 6. Tipo do Botão

- **Padrão**: Define `type="button"` se não for especificado.
- Aceita a prop `type` para definir outros valores (ex: `type="submit"`).

## 7. Atributos de Link

- Aplica atributos `rel` (ex: `rel="noopener"`) e `target` (ex: `target="_blank"`) em links.

## 8. Props Adicionais

- Propaga props extras para o elemento raiz:
  - Exemplo: `data-testid` para identificação em testes ou `onClick` para eventos de clique.
