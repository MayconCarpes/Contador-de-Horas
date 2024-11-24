# Relógio em Tempo Real

Este projeto exibe um relógio em tempo real que muda a aparência de acordo com a hora do dia. O fundo da página é alterado para diferentes imagens dependendo da hora: manhã, tarde ou noite. O relógio é atualizado a cada segundo e é exibido em um formato de hora local.

## Funcionalidade

- Exibe a hora atual no formato `hh:mm:ss`.
- O fundo da página muda de acordo com a hora do dia:
  - Manhã (6h - 12h): Fundo com imagem de manhã.
  - Tarde (12h - 18h): Fundo com imagem de tarde.
  - Noite (18h - 6h): Fundo com imagem de noite.
- O texto da hora também se adapta ao fundo, com a cor branca para garantir boa visibilidade.

## Estrutura do Projeto

O projeto contém três arquivos principais:

1. **HTML (`index.html`)**: Estrutura básica da página e onde o relógio será exibido.
2. **CSS (`style.css`)**: Estilos básicos para a página.
3. **JavaScript (`script.js`)**: Responsável por atualizar o relógio e mudar o fundo da página com base na hora.

## Como Usar

1. **Clone o repositório** ou **faça o download dos arquivos**.
2. Abra o arquivo `index.html` em seu navegador para ver o relógio em tempo real.
3. As imagens de fundo (`morning.jpg`, `afternoon.jpg`, `night.jpg`) devem estar na pasta `assets/`.

## Exemplo de Como Funciona

- Quando o horário estiver entre 6h e 12h, o fundo da página será alterado para uma imagem de manhã.
- Quando o horário estiver entre 12h e 18h, o fundo será alterado para uma imagem de tarde.
- Quando o horário estiver entre 18h e 6h, o fundo será alterado para uma imagem de noite.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma nova branch para suas mudanças (`git checkout -b feature-nova`).
3. Faça as mudanças desejadas.
4. Commit e push para sua branch.
5. Abra um pull request para que suas mudanças sejam analisadas e, possivelmente, mescladas.


## Autor

Maycon Carpes

