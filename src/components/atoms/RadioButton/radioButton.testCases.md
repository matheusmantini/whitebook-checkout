# Documentação de Testes - Componente RadioButton

## 1. Renderização

- **Verificação:** Garante que o `radio button` e seu `label` são renderizados corretamente

## 2. Estado Checked

- **Comportamento:** Reflete corretamente o estado checked recebido via props

## 3. Agrupamento de Opções

- **Funcionalidade:** Usa atributo `name` para agrupar `radio buttons`

## 4. Evento de Mudança

- **Comportamento:** Dispara o callback onChange com estado invertido ao clicar

## 5. Estilização Visual

- **Estados:**

  - Normal: Exibe círculo vazio
  - Marcado: Exibe círculo preenchido (controlado por CSS)
