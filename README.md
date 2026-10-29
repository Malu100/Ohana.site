# Ohana Multimarcas — modelo de página inicial

Modelo simples de página inicial inspirado na referência enviada, feito apenas com **HTML, CSS e JavaScript puro**.

## Estrutura

```text
ohana-landing-template/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── imagens/
│   └── hero-modelos.jpg
└── README.md
```

## Como abrir

1. Descarregue a pasta completa.
2. Abra `index.html` no navegador.
3. Para editar, utilize o Visual Studio Code ou outro editor.
4. Guarde as alterações e atualize a página.

## Onde alterar cada parte

### Nome da loja e categorias

Abra `index.html`.

- Nome da loja: procure por `OHANA` e `MULTIMARCAS`.
- Categorias do menu: procure por `CALÇA JEANS`, `CALÇA MOLETOM`, `CAMISETAS`, `BERMUDAS`, `BONÉS` e `CALÇADOS`.
- Título principal: procure por `ESTILO DE FAMÍLIA`.
- Texto do banner: procure pela frase `As melhores marcas`.
- Botões: procure por `VER NOVIDADES` e `CATEGORIAS`.

### Imagem principal

A imagem do banner está em:

```text
imagens/hero-modelos.jpg
```

Para usar outra imagem, substitua esse ficheiro mantendo o mesmo nome. Se quiser mudar o posicionamento da imagem, edite no `css/style.css` a linha da classe `.hero`:

```css
background: #a9481c url('../imagens/hero-modelos.jpg') center center / cover no-repeat;
```

As opções mais úteis são:

```css
center center
center top
right center
left center
```

### Cores

No início de `css/style.css`, altere as variáveis dentro de `:root`:

```css
--creme: #f5f0e7;
--laranja: #ef5f22;
--castanho: #2b1a13;
```

Pode trocar os códigos por outras cores hexadecimais, por exemplo `#000000` para preto ou `#ffffff` para branco.

### Produtos

Na secção `Novidades da semana` do `index.html`, cada produto está dentro de um bloco `<article class="produto">`.

Para editar um produto, altere:

- o nome dentro de `<h3>`;
- a descrição dentro de `<p>`;
- o preço dentro de `<strong>`;
- a categoria no `id` do artigo.

Para adicionar outro produto, copie um `<article class="produto">` inteiro.

As imagens dos cartões são, neste modelo, criadas com cores em CSS. Para usar fotografias reais, pode substituir a `div` `.produto-imagem` por uma imagem:

```html
<div class="produto-imagem">
  <img src="imagens/camiseta.jpg" alt="Camiseta da coleção Ohana">
</div>
```

### Menu no telemóvel

O menu móvel é controlado pelo `js/script.js`. Em princípio, não precisa de ser alterado.

## Importante

Os produtos, preços, links das redes sociais e imagem são exemplos. Substitua-os pelos dados reais da loja antes de publicar o site.
