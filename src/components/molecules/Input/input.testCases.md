# Documentação de Casos de Teste - Componente Input

# 1. Renderização

- **Verificação:** Exibe input padrão sem máscara
- **Atributos:**
  - Rótulo associado via `htmlFor`
  - Placeholder quando fornecido

# 2. Aplicação de Máscaras

- **Funcionalidade:** Aplica máscaras de formatação via maskKey

# 3. Tratamento de Erros

- **Exibição:** Mostra mensagem de erro e destaque visual
- **Integração:** Compatível com react-hook-form
- **Comportamento:**
  - Classe de erro no container
  - Mensagem abaixo do input
