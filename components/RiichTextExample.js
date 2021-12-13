{
    children: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Alguns meses atrás comecei a fazer uma especialização sobre '
          },
          {
            rel: 'noopener ugc nofollow',
            href: 'https://www.coursera.org/specializations/data-mining',
            type: 'link',
            children: [ { text: 'Mineração de Dados no Coursera' } ],
            className: 'ay pd',
            openInNewTab: true
          },
          {
            text: ' e o segundo curso dessa especialização não me parecia muito atrativo no começo mas acabou se mostrando muito útil no entendimento de uma das ferramentas de trabalho que usamos na '
          },
          {
            rel: 'noopener ugc nofollow',
            href: 'http://www.extremedigital.com.br/eds/',
            type: 'link',
            children: [ { text: 'Extreme Digital Solutions' } ],
            className: 'ay pd',
            openInNewTab: true
          },
          { text: ': o elasticsearch.' }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Boa parte do conteúdo teórico que irei apresentar são anotações pessoais que fiz do curso '
          },
          {
            rel: 'noopener ugc nofollow',
            href: 'https://www.coursera.org/learn/text-retrieval?specialization=data-mining',
            type: 'link',
            children: [ { text: 'Recuperação de Texto e Motores de Busca' } ],
            className: 'ay pd',
            openInNewTab: true
          },
          { text: '.' }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'O propósito desse artigo é ser algo mais expositivo e não pretende explicar de forma exaustiva cada assunto mas mostrar os caminho “das pedras” e referências para o caso de você desejar ir mais a fundo.'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [ { text: 'Ao final espero que você aprenda sobre:' } ]
      },
      {
        type: 'bulleted-list',
        children: [
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text: 'Qual é o problema que um mecanismo de busca textual precisa resolver.'
                  }
                ]
              }
            ]
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  { text: 'Como o ' },
                  { text: 'eslasticsearch', italic: true },
                  {
                    text: ' consegue resolver esse problema de forma rápida.'
                  }
                ]
              }
            ]
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text: 'As possíveis formas de se medir a relevância de um documento e qual é a forma padrão usada pelo '
                  },
                  { text: 'elasticsearch?', italic: true }
                ]
              }
            ]
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text: 'Como interpretar e ajustar a função de transformação BM25 usada pelo '
                  },
                  { text: 'elasticsearch', italic: true },
                  { text: '?' }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'heading-three',
        children: [
          { text: 'Formulação Formal de um Mecanismo de Busca Textual' }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Vamos começar dando “nomes aos bois” usando notação matemática.'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Suponha que você tenha um coleção de documentos textuais. Todas as palavras, ou termos, que existem dentro desses documentos formam um “vocabulário” que chamaremos de V e as palavras desse vocabulário iremos chamar de w (w de word).'
          }
        ]
      },
      {
        src: 'https://media.graphcms.com/resize=,width:807,height:78/AGnYSVaoTOGunYcmnwJQ',
        type: 'image',
        title: 'v.png',
        width: 807,
        handle: 'AGnYSVaoTOGunYcmnwJQ',
        height: 78,
        altText: 'v.png',
        children: [ { text: '' } ],
        mimeType: 'image/png'
      },
      {
        type: 'paragraph',
        children: [
          { text: 'As queries que um usuário digita chamaremos de ' },
          { text: 'q e ', italic: true },
          {
            text: 'que é formada pelas palavras “q1”, “q2”, etc. Palavras essas que pertencem ao vocabulário V:'
          }
        ]
      },
      {
        src: 'https://media.graphcms.com/uMMGpIHmRnOM1RSWZS2Y',
        type: 'image',
        title: 'q.png',
        width: 375,
        handle: 'uMMGpIHmRnOM1RSWZS2Y',
        height: 45,
        children: [ { text: '' } ],
        mimeType: 'image/png'
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Um documento textual “d” de índice i é formado por palavras “d_i_j” (palavra j do documento i) que pertencem ao vocabulário V.'
          }
        ]
      },
      {
        src: 'https://media.graphcms.com/TrzU6lCfRcG4wislLbaO',
        type: 'image',
        title: 'di.png',
        width: 388,
        handle: 'TrzU6lCfRcG4wislLbaO',
        height: 38,
        children: [ { text: '' } ],
        mimeType: 'image/png'
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Vamos chamar nossa coleção de M documentos de C, ou seja, se tivemos 100 documentos então M=100 e C é o conjunto de todos esses 100 documentos:'
          }
        ]
      },
      {
        src: 'https://media.graphcms.com/S5deo0JLT7e5GYdGMNHS',
        type: 'image',
        title: 'c.png',
        width: 267,
        handle: 'S5deo0JLT7e5GYdGMNHS',
        height: 53,
        children: [ { text: '' } ],
        mimeType: 'image/png'
      },
      {
        type: 'paragraph',
        children: [
          {
            bold: true,
            text: 'Um mecanismo de busca textual deve ser capaz de encontrar um subconjunto de documentos relevantes com base na query'
          },
          { text: ' ', italic: true },
          { bold: true, text: 'textual escrita pelo usuário, ' },
          { text: 'ou seja, em “matematiquês” ficaria 𝑅(𝑞) ⊆ 𝐶 . A ' },
          { text: 'query ', italic: true },
          {
            text: '𝑞 é uma “dica” de quais documentos irão ser ranqueados'
          },
          { text: ' ', italic: true },
          { text: 'pela função 𝑅(𝑞).' }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'A tarefa de um mecanismo de busca textual é computar 𝑅′(𝑞)≈𝑅(𝑞), ou seja, estimar os parâmetros da suposta função ideal 𝑅(𝑞).'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Temos dois principais tipos de estratégias para estimar 𝑅(𝑞):'
          }
        ]
      },
      {
        type: 'bulleted-list',
        children: [
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  { bold: true, text: 'Seleção de documentos' },
                  {
                    text: ': 𝑅′(𝑞)={𝑑 ∈ 𝐶 | 𝑓(𝑑,𝑞)=1}, onde 𝑓(𝑑,𝑞)∈{0,1} é uma função indicadora do tipo classificador binário. O sistema tem que decidir se o documento será listado ou não ao usuário.'
                  }
                ]
              }
            ]
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  { bold: true, text: 'Ranqueamento de documentos' },
                  {
                    text: ': 𝑅′(𝑞)={𝑑∈𝐶 | 𝑓(𝑑,𝑞) ≥ 𝜃} , onde 𝑓(𝑑,𝑞)∈𝑅 é uma função que mede relevância e 𝜃 é um limiar pré-definido. O sistema terá que listar os documentos e indicar seus graus de relevância.'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Iremos tratar do segundo caso por ser o caminho usado pelo '
          },
          { text: 'elasticsearch', italic: true },
          { text: '.' }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Essa função 𝑅(𝑞) pode seguir modelos probabilísticos, inferenciais ou modelos baseados em similaridade.'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'O elasticsearch segue o modelo baseado em similaridade. Algumas possíveis funções de similaridade: distância euclidiana, produto interno e cosseno de similaridade.'
          }
        ]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Mas para calcular essa função de similaridade precisamos primeiro construir um espaço vetorial que tornará possível a obtenção desse resultado.'
          }
        ]
      }
    ]
  }