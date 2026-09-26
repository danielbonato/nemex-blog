---
title: "Site lento: o que pode ser e como resolver"
description: "O que deixa um site lento, como testar do jeito que o cliente vê e o que resolve cada causa. Com o critério para saber quando o ajuste basta."
pubDate: "2026-11-11"
heroImage: "../../assets/site-lento-o-que-pode-ser-cover.png"
categories:
  - "Site"
  - "SEO"
author: "Equipe Nemex"
---

Um site fica lento quase sempre por causa do que ele mesmo carrega, e raramente por causa da internet de quem abre. As causas mais comuns são imagens maiores do que a tela precisa, código e plugins que carregam sem ser usados, e hospedagem fraca. Para confirmar, teste no celular fora do wi-fi e no PageSpeed Insights, a ferramenta gratuita do Google. Este artigo mostra como testar, o que cada causa significa e o que resolve.

## Por que o dono quase nunca percebe

O dono abre o próprio site do escritório, no computador, com internet boa. O navegador já guardou parte da página nas visitas anteriores, então ela aparece rápido. É o cenário mais favorável possível.

O cliente chega de outro jeito. Abre pelo celular, no 4G, numa página que nunca visitou, às vezes com o sinal fraco. É ali que a lentidão aparece, e é ali que ele desiste.

## Como testar o seu site

### O teste do celular

Desligue o wi-fi do celular. Abra uma página do seu site que você nunca visitou, de preferência uma página de serviço. Conte quanto tempo leva até dar para ler o conteúdo principal.

O Google considera bom quando o maior elemento da página aparece em até [2,5 segundos](https://web.dev/articles/lcp), e ruim acima de 4 segundos. Se você contou mais que isso, o cliente também está esperando.

### O teste do Google

Cole o endereço da página no [PageSpeed Insights](https://pagespeed.web.dev/) e espere o resultado. Olhe primeiro a aba de celular, que é a referência do Google.

A nota vai de 0 a 100. Ela ajuda a comparar antes e depois de um ajuste, mas sozinha diz pouco. Olhe as métricas logo abaixo, em especial o Largest Contentful Paint, que mede quanto tempo o conteúdo principal leva para aparecer. E olhe a lista de oportunidades, que aponta o que está pesando.

A nota também varia de um teste para outro. Rode duas ou três vezes antes de tirar conclusão.

## O que deixa um site lento

### Imagens maiores do que a tela precisa

É uma das causas mais comuns. Uma foto tirada com celular pode ter vários megabytes e milhares de pixels de largura, e vai aparecer numa tela pequena. O navegador baixa tudo para mostrar uma fração.

O que resolve: gerar cada imagem no tamanho em que ela aparece, em formato moderno como WebP, e carregar as imagens do fim da página só quando o visitante chega nelas.

### Código e plugins que carregam sem ser usados

Chat, galeria, formulário, animação, contador de visitas. Cada recurso instalado costuma carregar os próprios arquivos em todas as páginas, mesmo nas que não o usam. Um de cada vez parece pouco. Somados, fazem o celular trabalhar antes de mostrar qualquer coisa.

O que resolve: tirar o que ninguém usa e carregar cada recurso só na página em que ele aparece.

### Tema pronto que traz tudo junto

Temas prontos são feitos para servir a muitos sites diferentes, então trazem recursos para todos eles. O seu site usa uma parte e carrega o resto.

O que resolve: aqui o ajuste tem limite. Dá para desligar partes do tema, mas a base continua pesada. Quando a lentidão vem da estrutura, construir do zero só com o que a página usa resolve de uma vez.

### Vídeo de fundo e efeitos

Vídeo que toca sozinho no topo da página fica bonito no computador e pesa no celular. O mesmo vale para animações que dependem de muito código.

O que resolve: trocar o vídeo por uma imagem bem escolhida na versão de celular, ou tirar.

### Hospedagem fraca

Servidor lento atrasa tudo antes mesmo de a página começar a carregar. O PageSpeed mostra isso como tempo de resposta do servidor.

O que resolve: hospedagem de qualidade e cache, que guarda versões prontas das páginas para entregar mais rápido.

## Ajustar ou refazer

Se o problema é uma imagem pesada ou um plugin sobrando, o ajuste resolve. Se o site é lento porque a base carrega coisa demais, o ajuste melhora um pouco e para. Nesse caso, a velocidade se decide na construção.

Velocidade é só um dos cinco pontos que mostram se um site ficou para trás. O artigo sobre [como saber se o site da empresa está ultrapassado](https://blog.nemex.com.br/blog/como-saber-se-o-site-da-empresa-esta-ultrapassado/) traz os outros quatro testes.

Na Nemex, cada site é construído do zero, com cada imagem no tamanho que a tela usa e só o código que a página precisa.

## Perguntas frequentes

**Por que meu site está lento só no celular?**
Porque no celular a conexão costuma ser mais lenta, o processador é mais fraco e a página muitas vezes não está guardada no navegador. O que é pesado no computador fica bem mais pesado no celular.

**Qual velocidade um site precisa ter?**
O Google considera bom quando o conteúdo principal aparece em até 2,5 segundos e ruim acima de 4 segundos, medidos na maior parte das visitas.

**A nota do PageSpeed afeta a posição no Google?**
A velocidade faz parte dos [sinais de experiência](https://developers.google.com/search/docs/appearance/core-web-vitals) que o Google considera, mas não decide sozinha a posição. Conteúdo que responde a busca continua pesando mais. Mesmo assim, página lenta perde o visitante antes de qualquer posição importar.

**Site em WordPress é sempre lento?**
Não. WordPress com tema leve, poucos plugins e imagens bem tratadas pode ser rápido. A lentidão costuma vir do acúmulo de plugins e de temas que carregam recursos demais.

**Mudar de hospedagem resolve?**
Resolve quando o servidor é o gargalo. Se o peso está nas imagens e no código, a hospedagem nova ajuda pouco. O PageSpeed mostra qual dos dois é o problema.

**Com que frequência devo testar a velocidade do site?**
Sempre que adicionar um recurso novo e, no mínimo, algumas vezes por ano. Site fica lento aos poucos, um plugin de cada vez.
