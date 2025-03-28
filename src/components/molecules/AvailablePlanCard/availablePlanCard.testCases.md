# Documentação de Testes - Componente AvailablePlanCard

## 1. Renderização

- **Verificação:** Exibe todas as informações do plano corretamente
- **Elementos Obrigatórios:**
  - Título do plano
  - Preço original e promocional
  - Botão de rádio

## 2. Estado Selecionado

- **Comportamento:** Destaca visualmente quando selecionado
- **Indicadores:**
  - Estilo visual diferente (classe `Selected`)
  - Botão de rádio marcado

## 3. Interatividade

- **Clique:** Seleciona o plano ao clicar em qualquer área do card
- **Teclado:** Ativa seleção com tecla Enter
- **Acessibilidade:**
  - Atributo `role="button"`
  - `tabIndex` para navegação por teclado

## 4. Conteúdo Condicional

- **Desconto:** Exibe tag somente quando houver desconto
- **Parcelamento:** Mostra opção de parcelamento quando disponível
