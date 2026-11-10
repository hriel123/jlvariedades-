# JL Variedades

![Página inicial do site da JL Variedades](docs/inicio.webp)

**Site:** https://hriel123.github.io/jlvariedades-/

Site da JL Variedades, loja de moda e variedades no Bairro Mutirão, em Cascavel-CE. Apresenta a loja, os produtos (com fotos reais) e leva o cliente direto para o WhatsApp para fazer pedidos.

## Seções

- **Início:** apresentação da loja, com acesso à coleção e ao WhatsApp.
- **Sobre:** a loja e o atendimento em Cascavel.
- **Variedades & Presentes:** kits, presentes e variedades em geral.
- **Moda Feminina & Masculina:** coleção de roupas, com o botão "Ver mais peças".
- **Avaliações:** o que os clientes dizem.
- **Contato:** WhatsApp, e-mail e mapa da loja.

![Seção de moda](docs/roupas.webp)

## Recursos

- Fotos ampliadas ao clicar (lightbox), com setas (ou deslizando no celular) para passar as fotos da seção, fechando com clique fora ou Esc
- Modo escuro, com a escolha salva no navegador
- Botão flutuante do WhatsApp
- Menu para celular e layout responsivo
- Fotos em WebP em três tamanhos: duas para os cards (o navegador escolhe pela tela) e a maior só ao ampliar, para o site carregar rápido no celular

## Tecnologias

HTML, CSS e JavaScript puros, sem frameworks. Hospedado no GitHub Pages.

## Estrutura

```
index.html   página (estilos e scripts principais embutidos)
style.css    estilos
script.js    interações (como o "Ver mais peças")
fotos/       fotos dos produtos: <nome>-500.webp e <nome>-card.webp (cards) e <nome>.webp (ampliada)
fonts/       fontes Playfair Display e DM Sans (licença SIL OFL 1.1)
docs/        imagens deste README
```

### Adicionar uma foto nova

Converter a foto para WebP nos três tamanhos (500px de largura e lado maior com 1000px para o card, lado maior com 1800px para a ampliada), salvar em `fotos/` e usar no card:

```html
<img src="fotos/NOME-card.webp" srcset="fotos/NOME-500.webp 500w, fotos/NOME-card.webp 753w" sizes="(max-width: 768px) calc(50vw - 26px), (max-width: 1111px) 380px, 270px" data-full="fotos/NOME.webp" alt="Descrição da peça" loading="lazy">
```

## Autor

Hariel Silva Fabrício · [Portfólio](https://hriel123.github.io/Portifolio/) · [GitHub](https://github.com/hriel123)
