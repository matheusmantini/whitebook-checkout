# Documentação de Casos de Teste - Componente CardBrands

## 1. Renderização de Marcas

- **Verificação:** Exibe todas as bandeiras de cartão disponíveis
- **Bandeiras Obrigatórias:**
  - Visa
  - Mastercard
  - Elo
  - American Express
  - Diners Club

## 2. Seleção de Bandeira

- **Destaque Visual:** Aplica estilo especial para bandeira selecionada
- **Comportamento:**
  - Classe `Selected` para bandeira ativa
  - Classe `Grayscale` para demais bandeiras

# 3. Seção de Pagamento

- **Texto Fixo:** Exibe mensagem "Pagamentos por"
- **Logo Iugu:** Renderiza ícone da plataforma de pagamentos

# 4. Acessibilidade

- **Atributos ARIA:**
  - `role="img"` para todos os ícones
  - `aria-label` descritivo para cada bandeira
