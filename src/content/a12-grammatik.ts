import type { Module } from './types'

// A1.2 — GRAMMATIK (módulos 01–10)
// Construído a partir das aulas particulares reais (DEUTSCHUNTERRICHT 11 e 13)
// + currículo padrão A1.2 (Menschen/Goethe). Frases das aulas preservadas.

export const A12_GRAMMATIK: Module[] = [
  // ═══ 01 · Modalverben ═══
  {
    id: 'a12-modalverben',
    level: 'a12',
    num: '01',
    title: 'Modalverben',
    subtitle: 'können, dürfen, möchten, wollen, müssen, sollen — e a moldura da frase',
    shape: 'circle',
    minutes: 40,
    vocabTags: ['gramatica', 'verbos'],
    sections: [
      {
        kind: 'text',
        title: 'A ideia central',
        body: 'Verbos modais não descrevem a ação — descrevem a sua RELAÇÃO com a ação: se você pode, deve, quer ou precisa fazer algo. Eles nunca andam sozinhos (no A1): sempre carregam um segundo verbo, e esse segundo verbo vai para o FIM da frase, no infinitivo.\nIch muss heute Deutsch lernen. → muss (modal, 2ª posição) ... lernen (infinitivo, última palavra).\nEssa estrutura em duas partes se chama Satzklammer — a "moldura da frase" — e é um dos padrões mais importantes de todo o alemão: você vai reencontrá-la nos verbos separáveis (módulo 10) e no Perfekt (módulo 09).'
      },
      {
        kind: 'table',
        title: 'Conjugação — os 6 modais de uma vez',
        head: ['', 'können', 'dürfen', 'möchten', 'wollen', 'müssen', 'sollen'],
        rows: [
          ['ich', 'kann', 'darf', 'möchte', 'will', 'muss', 'soll'],
          ['du', 'kannst', 'darfst', 'möchtest', 'willst', 'musst', 'sollst'],
          ['er/sie/es', 'kann', 'darf', 'möchte', 'will', 'muss', 'soll'],
          ['wir', 'können', 'dürfen', 'möchten', 'wollen', 'müssen', 'sollen'],
          ['ihr', 'könnt', 'dürft', 'möchtet', 'wollt', 'müsst', 'sollt'],
          ['sie/Sie', 'können', 'dürfen', 'möchten', 'wollen', 'müssen', 'sollen']
        ],
        note: 'Repare: ich e er/sie/es são IGUAIS — e sem a terminação -t. É a marca registrada dos modais. E no singular a vogal muda (können→kann, dürfen→darf, müssen→muss); só möchten e sollen mantêm a vogal.'
      },
      {
        kind: 'text',
        title: 'A Satzklammer — a moldura em ação',
        body: 'A frase com modal tem duas âncoras fixas:\n• Posição 2: o modal conjugado.\n• Última posição: o verbo principal no infinitivo.\nTudo o mais (tempo, modo, lugar) mora DENTRO da moldura:\n\nIch | muss | heute zu Hause Deutsch | lernen.\nWir | wollen | am Samstag mit dem Zug nach München | fahren.\nDarfst | du | hier | parken? (pergunta sim/não: o modal abre a frase, o infinitivo continua no fim)\nWas | möchtest | du heute Abend | essen? (W-Frage: interrogativa, modal, sujeito... infinitivo no fim)\nA moldura NUNCA quebra — não importa o quanto a frase cresça no meio.'
      },
      {
        kind: 'tip',
        title: 'A fórmula da aula',
        body: 'Sujeito + Modalverb (conjugado) + wann? + wie? + wo? + Verbo (Infinitiv no fim).\nEx.: Ich muss heute zu Hause Deutsch lernen.\nGrave essa ordem interna: primeiro QUANDO, depois COMO, depois ONDE — e o infinitivo fecha a porta.'
      },
      {
        kind: 'table',
        title: 'Quando usar cada modal',
        head: ['Modal', 'Sentido', 'Exemplo'],
        rows: [
          ['können', 'habilidade, possibilidade', 'Thomas kann sehr gut Hip-Hop tanzen.'],
          ['dürfen', 'permissão (man darf nicht = proibido)', 'Darf ich bitte Wasser trinken?'],
          ['möchten', 'desejo educado ("gostaria")', 'Ich möchte ein Brot, bitte.'],
          ['wollen', 'vontade forte ("quero")', 'Daniel will nach Deutschland reisen.'],
          ['müssen', 'obrigação, necessidade', 'Morgen habe ich eine Prüfung — ich muss heute lernen.'],
          ['sollen', 'conselho, ordem de terceiro', 'Der Arzt sagt, Silvie soll zu Hause bleiben.']
        ],
        note: 'sollen carrega sempre uma voz externa: alguém (médico, chefe, mãe) disse que você deve. É o modal do Ratschlag (conselho).'
      },
      {
        kind: 'text',
        title: 'mögen vs. möchten — parentes, não gêmeos',
        body: 'möchten é historicamente uma forma de mögen, mas no dia a dia funcionam como dois verbos diferentes:\n• mögen = GOSTAR de algo (permanente): Ich mag Kaffee. = Eu gosto de café.\n• möchten = QUERER algo agora, educadamente: Ich möchte einen Kaffee. = Eu gostaria de um café (neste momento).\n\nConjugação de mögen: ich mag, du magst, er/sie/es mag, wir mögen, ihr mögt, sie/Sie mögen.\nmögen costuma vir SEM segundo verbo (Ich mag Pizza), enquanto möchten aceita os dois usos: Ich möchte eine Pizza. / Ich möchte eine Pizza essen.\nNa padaria: Ich möchte zwei Brötchen, bitte. — nunca "Ich mag zwei Brötchen" (isso significaria "eu gosto de dois pãezinhos", sem sentido de pedido).'
      },
      {
        kind: 'table',
        title: 'A pegadinha da negação: nicht müssen ≠ nicht dürfen',
        head: ['Frase', 'Significado real', 'Equivalente PT'],
        rows: [
          ['Du musst nicht kommen.', 'não há obrigação — vir é opcional', 'você NÃO PRECISA vir'],
          ['Du darfst nicht kommen.', 'há proibição — vir é proibido', 'você NÃO PODE vir'],
          ['Man muss hier nicht bezahlen.', 'pagar é opcional (é grátis)', 'não é preciso pagar'],
          ['Man darf hier nicht rauchen.', 'fumar é proibido', 'é proibido fumar'],
          ['Ich muss morgen nicht arbeiten.', 'estou de folga', 'não preciso trabalhar amanhã'],
          ['Ich darf keinen Alkohol trinken.', 'proibição (médico, idade...)', 'não posso beber álcool']
        ],
        note: 'Em português "não deve" é ambíguo — em alemão não: nicht müssen = dispensa, nicht dürfen = proibição. Confundir os dois muda TOTALMENTE a mensagem.'
      },
      {
        kind: 'examples',
        title: 'Frases da aula (ouça e repita)',
        items: [
          { de: 'Kannst du Deutsch sprechen?', pt: 'Você sabe falar alemão?' },
          { de: 'Man darf nicht in der Klasse essen.', pt: 'Não é permitido comer na sala.' },
          { de: 'Ich möchte ein Brot, bitte.', pt: 'Eu gostaria de um pão, por favor.' },
          { de: 'Daniel will nach Deutschland reisen.', pt: 'Daniel quer viajar para a Alemanha.' },
          { de: 'Ich muss heute Deutsch lernen.', pt: 'Eu preciso estudar alemão hoje.' },
          { de: 'Du sollst diesen Film sehen!', pt: 'Você deveria ver esse filme!' },
          { de: 'Thomas kann sehr gut Hip-Hop tanzen.', pt: 'Thomas sabe dançar hip-hop muito bem.' },
          { de: 'Darf ich bitte Wasser trinken?', pt: 'Posso beber água, por favor?' },
          { de: 'Der Arzt sagt, Silvie soll zu Hause bleiben.', pt: 'O médico diz que a Silvie deve ficar em casa.' },
          { de: 'Ich mag Kaffee, aber jetzt möchte ich einen Tee.', pt: 'Eu gosto de café, mas agora quero um chá.' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Kino oder Deutsch lernen?',
        lines: [
          { who: 'Lena', de: 'Paulo, willst du heute Abend ins Kino gehen?', pt: 'Paulo, você quer ir ao cinema hoje à noite?' },
          { who: 'Paulo', de: 'Ich möchte gern, aber ich kann nicht. Ich muss Deutsch lernen.', pt: 'Eu adoraria, mas não posso. Preciso estudar alemão.' },
          { who: 'Lena', de: 'Schon wieder? Du musst nicht jeden Tag lernen!', pt: 'De novo? Você não precisa estudar todo dia!' },
          { who: 'Paulo', de: 'Doch! Morgen habe ich eine Prüfung. Ich will die B1-Prüfung bestehen.', pt: 'Preciso sim! Amanhã tenho uma prova. Quero passar na prova B1.' },
          { who: 'Lena', de: 'Okay, verstehe. Soll ich dir helfen?', pt: 'Ok, entendo. Quer que eu te ajude?' },
          { who: 'Paulo', de: 'Ja, bitte! Du kannst die Fragen lesen und ich antworte.', pt: 'Sim, por favor! Você pode ler as perguntas e eu respondo.' },
          { who: 'Lena', de: 'Gut. Aber wir dürfen keine Pause mit Netflix machen!', pt: 'Certo. Mas não podemos fazer pausa com Netflix!' },
          { who: 'Paulo', de: 'Versprochen. Und am Samstag können wir ins Kino gehen.', pt: 'Prometido. E no sábado podemos ir ao cinema.' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros (alguns da própria aula!)',
        pairs: [
          { falsch: 'Ich kann sprechen Deutsch.', richtig: 'Ich kann Deutsch sprechen.', why: 'O infinitivo vai para o FIM da frase — sempre. A ordem do português (posso falar alemão) não vale.' },
          { falsch: 'Sie kann nicht in den Arbeit gehen.', richtig: 'Sie kann nicht zur Arbeit gehen.', why: '"Arbeit" é feminino e o uso idiomático é zu: zur Arbeit.' },
          { falsch: 'Ich möchte gehen am Arzt.', richtig: 'Ich möchte zum Arzt gehen.', why: 'Infinitivo no fim + direção a pessoa/profissional = zu (zum Arzt).' },
          { falsch: 'Er musst lernen.', richtig: 'Er muss lernen.', why: 'er/sie/es é igual ao ich nos modais: sem terminação. musst é só para du.' },
          { falsch: 'Du darfst nicht kommen. (querendo dizer "não precisa vir")', richtig: 'Du musst nicht kommen.', why: 'nicht dürfen = proibido; nicht müssen = opcional. São mensagens opostas!' },
          { falsch: 'Ich mag einen Kaffee, bitte.', richtig: 'Ich möchte einen Kaffee, bitte.', why: 'Para pedir algo agora usa-se möchten. mögen é gosto permanente (Ich mag Kaffee).' }
        ]
      },
      {
        kind: 'text',
        title: 'Palavrinhas que vieram junto na aula',
        body: 'man = "a gente" impessoal, conjuga como er/sie/es: Man darf hier nicht rauchen. (Não se pode fumar aqui.)\neinmal / zweimal / dreimal pro Woche = 1×/2×/3× por semana: Ich lerne dreimal pro Woche Deutsch.\nempfehlen = recomendar: Ich kann dieses Restaurant empfehlen.\nder Ratschlag (die Ratschläge) = conselho — é exatamente o que o sollen expressa.\ndie Prüfung = prova, exame. bestehen = passar (na prova).'
      },
      {
        kind: 'tip',
        title: 'Treino relâmpago',
        body: 'Monte 6 frases sobre a sua semana, uma com cada modal:\nIch kann... (algo que você sabe fazer) · Ich darf nicht... (algo proibido) · Ich möchte... (um desejo educado) · Ich will... (uma meta forte) · Ich muss... (uma obrigação) · Ich soll... (um conselho que recebeu).\nDiga em voz alta com o infinitivo SEMPRE no fim. Seis frases por dia durante uma semana e a Satzklammer vira reflexo.'
      }
    ],
    quiz: [
      { kind: 'gap', before: '', after: ' du ins Kino gehen? — Nein, ich muss Deutsch lernen.', answer: ['Willst', 'Möchtest', 'Kannst'], hint: 'vontade' },
      { kind: 'gap', before: '', after: ' du Auto fahren? — Ja, aber ich darf nicht. Ich bin noch 17.', answer: ['Kannst'], hint: 'habilidade' },
      { kind: 'gap', before: 'Meine Mutter hat Fieber. Sie ', after: ' nicht zur Arbeit gehen.', answer: ['kann', 'soll', 'darf'], hint: 'ela não consegue / não deve' },
      { kind: 'gap', before: 'Anita ist krank. Der Arzt sagt, sie ', after: ' zu Hause bleiben.', answer: ['soll'], hint: 'conselho de terceiro' },
      { kind: 'choice', prompt: '"Man darf nicht in der Klasse essen" significa…', options: ['Ninguém quer comer na sala', 'É proibido comer na sala', 'Não é preciso comer na sala', 'A gente não consegue comer na sala'], answer: 1 },
      { kind: 'choice', prompt: 'Qual expressa um desejo EDUCADO?', options: ['Ich will einen Kaffee.', 'Ich möchte einen Kaffee.', 'Ich muss einen Kaffee.', 'Ich soll einen Kaffee.'], answer: 1 },
      { kind: 'choice', prompt: '"Du musst nicht kommen" significa…', options: ['Você não pode vir (proibido)', 'Você não precisa vir (opcional)', 'Você não quer vir', 'Você não deveria vir'], answer: 1, hint: 'nicht müssen = dispensa, não proibição.' },
      { kind: 'choice', prompt: '"Eu gosto de chocolate" (gosto permanente) =', options: ['Ich möchte Schokolade.', 'Ich mag Schokolade.', 'Ich will Schokolade.', 'Ich soll Schokolade.'], answer: 1, hint: 'mögen = gostar; möchten = querer agora.' },
      { kind: 'order', words: ['Ich', 'muss', 'heute', 'Deutsch', 'lernen'], answer: 'Ich muss heute Deutsch lernen', hint: 'modal na 2ª posição, infinitivo no fim' },
      { kind: 'order', words: ['Daniel', 'will', 'nach', 'Deutschland', 'reisen'], answer: 'Daniel will nach Deutschland reisen', hint: 'a moldura: will ... reisen' },
      { kind: 'gap', before: 'Er ', after: ' sehr gut kochen. (können)', answer: ['kann'], hint: 'er/sie/es = forma do ich, sem -t.' },
      { kind: 'choice', prompt: 'Qual frase está com a ordem CORRETA?', options: ['Ich möchte essen eine Pizza.', 'Ich eine Pizza möchte essen.', 'Ich möchte eine Pizza essen.', 'Möchte ich eine Pizza essen heute.'], answer: 2 },
      { kind: 'gap', before: 'Hier ', after: ' man nicht parken. (dürfen)', answer: ['darf'], hint: 'man conjuga como er/sie/es.' }
    ]
  },

  // ═══ 02 · Wohin? — nach, in, zu, an ═══
  {
    id: 'a12-wohin',
    level: 'a12',
    num: '02',
    title: 'Wohin? — nach, in, zu, an',
    subtitle: 'As quatro preposições de direção — para onde você vai',
    shape: 'triangle',
    minutes: 40,
    vocabTags: ['lugares', 'gramatica'],
    sections: [
      {
        kind: 'text',
        title: 'A pergunta certa',
        body: 'Três perguntas organizam todo o espaço em alemão:\n• Wohin? = PARA ONDE? (direção, movimento) — o tema deste módulo.\n• Wo? = ONDE? (posição parada) — módulo 08.\n• Woher? = DE ONDE? (origem: aus, von).\nA resposta de Wohin? depende do TIPO de lugar: país sem artigo? nach. Vai entrar? in. Só se aproxima ou é compromisso? zu. Beira, superfície, ponto? an. Este módulo destrincha as quatro.'
      },
      {
        kind: 'table',
        title: 'O mapa das 4 preposições de direção',
        head: ['Prep.', 'Usada para', 'Formas', 'Exemplo'],
        rows: [
          ['NACH', 'países e cidades sem artigo, regiões, casa', 'nach + nome / nach Hause', 'Ich fliege nach Deutschland.'],
          ['IN', 'entrar DENTRO do lugar', 'in die (fem.) / in den (masc.) / ins (neutro)', 'Ich gehe in die Schule.'],
          ['ZU', 'direção a lugar/pessoa SEM entrar (ou sem focar no interior)', 'zur (fem.) / zum (masc.+neutro) / zu + nome próprio', 'Ich gehe zum Supermarkt.'],
          ['AN', 'proximidade, beira, superfície', 'an die / an den / ans', 'Wir fahren an den Strand.']
        ],
        note: 'Contrações obrigatórias: ins = in das · zum = zu dem · zur = zu der · ans = an das.'
      },
      {
        kind: 'text',
        title: 'NACH — o mais simples (e o mais restrito)',
        body: 'nach serve para destinos que NÃO têm artigo:\n• Países: nach Deutschland, nach Brasilien, nach Portugal.\n• Cidades: nach Berlin, nach São Paulo, nach München.\n• Regiões e continentes: nach Bayern, nach Europa, nach Süddeutschland.\n• Casa: nach Hause (expressão fixa!).\nComo esses nomes não têm artigo, nach nunca aparece com die/der/das. "nach dem Supermarkt" com sentido de direção NÃO existe — supermercado pede zu ou in.\n(Obs.: nach + artigo existe só com sentido de "depois de": nach dem Unterricht = depois da aula — isso é o nach temporal do módulo 07.)'
      },
      {
        kind: 'table',
        title: 'A exceção: países COM artigo usam in',
        head: ['País', 'Wohin?', 'Por quê'],
        rows: [
          ['die Schweiz', 'in die Schweiz', 'feminino → in die'],
          ['die Türkei', 'in die Türkei', 'feminino → in die'],
          ['die USA (pl.)', 'in die USA', 'plural → in die'],
          ['die Niederlande (pl.)', 'in die Niederlande', 'plural → in die'],
          ['der Iran', 'in den Iran', 'masculino → in den'],
          ['der Libanon', 'in den Libanon', 'masculino → in den'],
          ['Deutschland, Brasilien...', 'nach Deutschland', 'sem artigo → nach']
        ],
        note: 'A frase da aula: Elio fliegt in die Schweiz — nunca "nach die Schweiz". A maioria dos países não tem artigo; decore os poucos que têm.'
      },
      {
        kind: 'text',
        title: 'IN — quando você ENTRA',
        body: 'in é a preposição do interior: você atravessa a porta e fica DENTRO.\n• feminino → in die: Ich gehe in die Schule / in die Kirche / in die Stadt.\n• masculino → in den: Wir gehen in den Park / in den Supermarkt.\n• neutro → ins: Ich gehe ins Kino / ins Restaurant / ins Bett.\nO teste: a atividade acontece lá dentro? Cinema (assistir), escola (estudar), restaurante (comer) → in. Por isso "ins Kino gehen" é a forma padrão de "ir ao cinema".'
      },
      {
        kind: 'text',
        title: 'ZU — direção sem entrar (e para pessoas)',
        body: 'zu aponta para o destino sem prometer entrada — ou quando o interior não importa. É também a ÚNICA opção para pessoas e profissionais:\n• zum (masc. + neutro): Ich gehe zum Arzt / zum Bahnhof / zum Supermarkt.\n• zur (fem.): Ich gehe zur Schule / zur Bank / zur Arbeit.\n• zu + nome próprio (sem artigo): Wir gehen zu Lena. / Wir gehen zu Burger King.\nzu e in às vezes competem: Ich gehe zum Supermarkt (rumo a ele) ≈ Ich gehe in den Supermarkt (entro para comprar). As duas estão certas — zu é a mais neutra no dia a dia.\nE a expressão fixa: zur Arbeit (para o trabalho) — como na frase corrigida da aula: Sie kann nicht zur Arbeit gehen.'
      },
      {
        kind: 'text',
        title: 'AN — beira, superfície, ponto de contato',
        body: 'an é a preposição do ENCOSTO: beira d\'água, superfície vertical, ponto exato.\n• an den Strand = à praia (beira do mar) — Fährst du gern an den Strand?\n• an den See = ao lago · ans Meer = ao mar\n• an die Wand = na/para a parede (superfície): Das Bild hängt an der Wand.\n• an die Haltestelle, an die Universität — pontos da aula.\nRegra mental: se o destino é uma LINHA ou SUPERFÍCIE (costa, margem, parede, porta, ponto), é an.'
      },
      {
        kind: 'table',
        title: 'nach Hause vs. zu Hause — a dupla que todo mundo confunde',
        head: ['Expressão', 'Pergunta', 'Significado', 'Exemplo'],
        rows: [
          ['nach Hause', 'Wohin?', 'PARA casa (movimento)', 'Ich gehe jetzt nach Hause.'],
          ['zu Hause', 'Wo?', 'EM casa (parado)', 'Ich bin heute zu Hause.'],
          ['nach Hause kommen', 'Wohin?', 'chegar em casa', 'Er kommt um 18 Uhr nach Hause.'],
          ['zu Hause bleiben', 'Wo?', 'ficar em casa', 'Silvie soll zu Hause bleiben.']
        ],
        note: 'Movimento = nach Hause. Parado = zu Hause. É exatamente o contrário da intuição de quem pensa "zu = para"... decore o par, não a lógica.'
      },
      {
        kind: 'examples',
        title: 'Frases da aula',
        items: [
          { de: 'Ich fliege nach Deutschland.', pt: 'Eu vou (de avião) para a Alemanha.' },
          { de: 'Ich gehe in die Schule.', pt: 'Eu vou para a escola (entro nela).' },
          { de: 'Ich gehe zum Supermarkt.', pt: 'Eu vou ao supermercado.' },
          { de: 'Das Bild hängt an der Wand.', pt: 'O quadro está pendurado na parede.' },
          { de: 'Fährst du gern an den Strand?', pt: 'Você gosta de ir à praia?' },
          { de: 'Ich gehe nach Hause.', pt: 'Eu vou para casa.' },
          { de: 'Elio fliegt jeden Monat in die Schweiz.', pt: 'Elio voa todo mês para a Suíça.' },
          { de: 'Fliegt Anika gern nach Italien?', pt: 'A Anika gosta de voar para a Itália?' },
          { de: 'Geht ihr gern in die Disko?', pt: 'Vocês gostam de ir à balada?' },
          { de: 'Wir gehen am Wochenende zu Burger King.', pt: 'No fim de semana vamos ao Burger King.' }
        ]
      },
      {
        kind: 'tip',
        title: 'O fluxograma de 4 perguntas',
        body: 'Diante de qualquer destino, pergunte em ordem:\n1. É país/cidade sem artigo ou "casa"? → NACH (nach Berlin, nach Hause).\n2. É país com artigo? → IN + artigo no acusativo (in die Schweiz).\n3. Vou ENTRAR e a atividade é lá dentro? → IN (ins Kino, in die Schule).\n4. É pessoa, profissional ou só direção/compromisso? → ZU (zu Lena, zum Arzt, zur Bank).\nE se for beira, margem ou superfície → AN (an den Strand, an die Wand).'
      },
      {
        kind: 'dialog',
        title: 'Wohin gehst du?',
        lines: [
          { who: 'Lena', de: 'Paulo, wohin gehst du? Du hast es ja eilig!', pt: 'Paulo, aonde você vai? Você está com pressa!' },
          { who: 'Paulo', de: 'Ich muss zur Bank und dann zum Supermarkt.', pt: 'Preciso ir ao banco e depois ao supermercado.' },
          { who: 'Lena', de: 'Und danach? Kommst du mit ins Kino?', pt: 'E depois? Você vem junto ao cinema?' },
          { who: 'Paulo', de: 'Ich kann nicht. Ich fahre am Abend zu meiner Tante.', pt: 'Não posso. À noite vou para a casa da minha tia.' },
          { who: 'Lena', de: 'Schade! Und am Wochenende? Fahren wir an den Strand?', pt: 'Que pena! E no fim de semana? Vamos à praia?' },
          { who: 'Paulo', de: 'Gute Idee! Aber am Sonntag fliege ich nach München.', pt: 'Boa ideia! Mas no domingo eu voo para Munique.' },
          { who: 'Lena', de: 'Nach München? Warum?', pt: 'Para Munique? Por quê?' },
          { who: 'Paulo', de: 'Meine Firma hat dort ein Büro. Danach fliege ich in die Schweiz — nach Zürich!', pt: 'Minha empresa tem um escritório lá. Depois voo para a Suíça — para Zurique!' },
          { who: 'Lena', de: 'In die Schweiz UND nach Zürich — sehr gut, Herr Andrade!', pt: 'In die Schweiz E nach Zürich — muito bem, senhor Andrade!' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich gehe nach dem Supermarkt.', richtig: 'Ich gehe zum Supermarkt.', why: 'nach é só para países/cidades sem artigo e nach Hause — nunca com artigo de lugar.' },
          { falsch: 'Elio fliegt nach die Schweiz.', richtig: 'Elio fliegt in die Schweiz.', why: 'Países COM artigo (die Schweiz, die Türkei, die USA) usam in + acusativo.' },
          { falsch: 'Ich gehe im Kino.', richtig: 'Ich gehe ins Kino.', why: 'Direção (Wohin?) = ins. "im Kino" é posição parada (Wo?): Ich bin im Kino.' },
          { falsch: 'Ich gehe zu Hause.', richtig: 'Ich gehe nach Hause.', why: 'Movimento para casa = nach Hause. zu Hause é estar EM casa (parado).' },
          { falsch: 'Ich gehe zu die Schule.', richtig: 'Ich gehe zur Schule.', why: 'zu + der (Dativo feminino) contrai obrigatoriamente para zur.' },
          { falsch: 'Wir fahren in den Strand.', richtig: 'Wir fahren an den Strand.', why: 'Praia é beira d\'água — você não entra "dentro" dela. Beira/margem = an.' }
        ]
      },
      {
        kind: 'text',
        title: 'Schreib die Sätze richtig — os 6 exercícios da aula',
        body: 'A aula 13 trouxe 6 frases embaralhadas para ordenar. O gabarito:\n1. ins Kino | gehst | du | wann? → Wann gehst du ins Kino?\n2. in die Schweiz | Thomas | nicht | reist | gern → Thomas reist nicht gern in die Schweiz.\n3. heute | zum Supermarkt | fahren | wir → Wir fahren heute zum Supermarkt.\n4. du | gern | an den Strand | fährst? → Fährst du gern an den Strand?\n5. gern | Anika | fliegt | nach Italien? → Fliegt Anika gern nach Italien?\n6. ihr | in die | gern | geht | Disko? → Geht ihr gern in die Disko?\nPadrão: W-Frage → interrogativa + verbo + sujeito; pergunta sim/não → verbo primeiro; afirmativa → sujeito + verbo. E o destino (Wohin?) fecha a frase. Todos os seis caem no quiz abaixo.'
      },
      {
        kind: 'tip',
        title: 'Decore em pares de frase',
        body: 'Não decore regra solta — decore uma frase-âncora por preposição:\n• nach → Ich fliege nach Deutschland.\n• in → Ich gehe ins Kino.\n• zu → Ich gehe zum Arzt.\n• an → Wir fahren an den Strand.\nNa dúvida real, compare o destino novo com a âncora: "Bäckerei é mais parecida com Arzt (compromisso rápido) → zur Bäckerei."'
      }
    ],
    quiz: [
      { kind: 'gap', before: 'Anika möchte heute ', after: ' Stadion gehen.', answer: ['ins'], hint: 'das Stadion — entrar' },
      { kind: 'gap', before: 'Gehen wir ', after: ' Bäckerei?', answer: ['zur'], hint: 'die Bäckerei — compromisso rápido' },
      { kind: 'gap', before: 'Julius muss ', after: ' Krankenhaus fahren.', answer: ['ins', 'zum'], hint: 'das Krankenhaus' },
      { kind: 'gap', before: 'Elio fliegt jeden Monat ', after: ' Schweiz.', answer: ['in die'], hint: 'die Schweiz tem artigo!' },
      { kind: 'gap', before: 'Ich fliege ', after: ' Deutschland.', answer: ['nach'], hint: 'país sem artigo' },
      { kind: 'choice', prompt: '"Eu vou para casa" =', options: ['Ich gehe zu Hause.', 'Ich gehe nach Hause.', 'Ich gehe ins Haus.', 'Ich gehe an Hause.'], answer: 1, hint: 'zu Hause = EM casa; nach Hause = PARA casa' },
      { kind: 'choice', prompt: '"Estou em casa" =', options: ['Ich bin nach Hause.', 'Ich bin zu Hause.', 'Ich bin in Hause.', 'Ich bin an Hause.'], answer: 1 },
      { kind: 'order', words: ['Wann', 'gehst', 'du', 'ins', 'Kino', '?'], answer: 'Wann gehst du ins Kino ?', hint: 'exercício 1 da aula: W-Frage' },
      { kind: 'order', words: ['Thomas', 'reist', 'nicht', 'gern', 'in', 'die', 'Schweiz'], answer: 'Thomas reist nicht gern in die Schweiz', hint: 'exercício 2: nicht gern juntos, destino no fim' },
      { kind: 'order', words: ['Wir', 'fahren', 'heute', 'zum', 'Supermarkt'], answer: 'Wir fahren heute zum Supermarkt', hint: 'exercício 3: tempo antes do destino' },
      { kind: 'order', words: ['Fährst', 'du', 'gern', 'an', 'den', 'Strand', '?'], answer: 'Fährst du gern an den Strand ?', hint: 'exercício 4: pergunta sim/não — verbo primeiro' },
      { kind: 'order', words: ['Fliegt', 'Anika', 'gern', 'nach', 'Italien', '?'], answer: 'Fliegt Anika gern nach Italien ?', hint: 'exercício 5 da aula' },
      { kind: 'order', words: ['Geht', 'ihr', 'gern', 'in', 'die', 'Disko', '?'], answer: 'Geht ihr gern in die Disko ?', hint: 'exercício 6 da aula' },
      { kind: 'choice', prompt: 'O quadro vai PARA a parede. Qual preposição?', options: ['nach', 'zu', 'an', 'in'], answer: 2, hint: 'superfície vertical = an' }
    ]
  },

  // ═══ 03 · Die Lokale ═══
  {
    id: 'a12-lokale',
    level: 'a12',
    num: '03',
    title: 'Die Lokale',
    subtitle: 'Os ~30 lugares da cidade — com artigo, Wohin? e Wo?',
    shape: 'square',
    minutes: 35,
    vocabTags: ['lugares'],
    sections: [
      {
        kind: 'text',
        title: 'Por que decorar COM artigo',
        body: 'O artigo decide TUDO: a preposição de direção (in die / in den / ins), a de posição (in der / im) e o Dativo inteiro. Quem decora "Kino" solto trava na hora de falar. Quem decora "das Kino" fala "ins Kino" e "im Kino" sem pensar.\nEsta é a lista completa da aula 13 — cerca de 30 lugares, organizados por gênero. Trate cada linha como uma unidade: artigo + substantivo, sempre juntos.'
      },
      {
        kind: 'table',
        title: 'DIE (femininos) → Wohin? in die / zur · Wo? in der',
        head: ['Lugar', 'Tradução', 'Frase-âncora'],
        rows: [
          ['die Schule', 'escola', 'Ich gehe in die Schule.'],
          ['die Apotheke', 'farmácia', 'Sie geht zur Apotheke.'],
          ['die Bank', 'banco', 'Er muss zur Bank.'],
          ['die Post', 'correio', 'Ich gehe zur Post.'],
          ['die Bäckerei', 'padaria', 'Wir kaufen Brot in der Bäckerei.'],
          ['die Kirche', 'igreja', 'Sonntags gehen sie in die Kirche.'],
          ['die Haltestelle', 'ponto de ônibus', 'Ich warte an der Haltestelle.'],
          ['die Tankstelle', 'posto de gasolina', 'Er fährt zur Tankstelle.'],
          ['die Kneipe', 'bar, boteco', 'Freitags gehen wir in die Kneipe.'],
          ['die Fabrik', 'fábrica', 'Mein Onkel arbeitet in der Fabrik.'],
          ['die Praxis', 'consultório', 'Die Praxis ist heute geschlossen.'],
          ['die Disko', 'balada', 'Geht ihr gern in die Disko?'],
          ['die Universität', 'universidade', 'Sie studiert an der Universität.'],
          ['die U-Bahn', 'metrô', 'Ich fahre mit der U-Bahn.']
        ],
        note: 'Universität e Haltestelle preferem an (ponto, instituição): an der Uni, an der Haltestelle.'
      },
      {
        kind: 'table',
        title: 'DER (masculinos) → Wohin? in den / zum · Wo? im',
        head: ['Lugar', 'Tradução', 'Frase-âncora'],
        rows: [
          ['der Supermarkt', 'supermercado', 'Ich gehe zum Supermarkt.'],
          ['der Bahnhof', 'estação de trem', 'Der Zug kommt am Bahnhof an.'],
          ['der Markt', 'mercado, feira', 'Samstags gehe ich auf den Markt.'],
          ['der Flohmarkt', 'feira de usados', 'Sonntags gehe ich zum Flohmarkt.'],
          ['der Platz', 'praça', 'Die Kinder spielen auf dem Platz.'],
          ['der Garten', 'jardim, quintal', 'Oma ist im Garten.'],
          ['der Zoo', 'zoológico', 'Wir fahren in den Zoo.'],
          ['der Zirkus', 'circo', 'Das Kind will in den Zirkus.'],
          ['der Imbissstand', 'barraca de lanche', 'Wir essen am Imbissstand.'],
          ['der Bauernhof', 'fazenda, sítio', 'Sie wohnt auf dem Bauernhof.'],
          ['der Strand', 'praia', 'Fährst du gern an den Strand?'],
          ['der Park', 'parque', 'Ich jogge im Park.']
        ],
        note: 'Markt, Platz e Bauernhof usam auf (superfície aberta): auf den Markt, auf dem Platz. Strand usa an (beira).'
      },
      {
        kind: 'table',
        title: 'DAS (neutros) → Wohin? ins / zum · Wo? im',
        head: ['Lugar', 'Tradução', 'Frase-âncora'],
        rows: [
          ['das Kino', 'cinema', 'Wann gehst du ins Kino?'],
          ['das Theater', 'teatro', 'Heute Abend gehen wir ins Theater.'],
          ['das Restaurant', 'restaurante', 'Wir essen im Restaurant.'],
          ['das Stadion', 'estádio', 'Anika möchte ins Stadion gehen.'],
          ['das Museum', 'museu', 'Das Museum ist montags geschlossen.'],
          ['das Hotel', 'hotel', 'Wir schlafen im Hotel.'],
          ['das Café', 'café (o lugar)', 'Treffen wir uns im Café?'],
          ['das Krankenhaus', 'hospital', 'Julius muss ins Krankenhaus.'],
          ['das Schwimmbad', 'piscina pública', 'Im Sommer gehen wir ins Schwimmbad.']
        ],
        note: 'Cuidado com dois falsos amigos da aula: estádio = das Stadion (Stadium é inglês) e o lugar café = das Café (der Kaffee é a bebida!).'
      },
      {
        kind: 'tip',
        title: 'Padrões que entregam o gênero',
        body: 'Terminou em -e? Quase sempre DIE (Schule, Kirche, Kneipe, Apotheke, Haltestelle, Tankstelle).\nTerminou em -ei? DIE (Bäckerei).\nTerminou em -ik? DIE (Fabrik).\nTerminou em -hof? DER (Bahnhof, Bauernhof).\nTerminou em -markt? DER (Supermarkt, Flohmarkt).\nLugar "importado" (Kino, Café, Hotel, Restaurant, Museum, Stadion)? Costuma ser DAS.\nCom esses seis padrões você acerta o artigo de quase toda a lista sem decorar um por um.'
      },
      {
        kind: 'table',
        title: 'A tabela dupla: Wohin? (movimento) vs. Wo? (parado)',
        head: ['Gênero', 'Wohin? — vou para lá', 'Wo? — estou lá'],
        rows: [
          ['feminino (die Schule)', 'in die Schule / zur Schule', 'in der Schule'],
          ['masculino (der Zoo)', 'in den Zoo / zum Zoo', 'im Zoo'],
          ['neutro (das Kino)', 'ins Kino / zum Kino', 'im Kino'],
          ['beira/ponto (der Strand)', 'an den Strand', 'am Strand'],
          ['superfície (der Markt)', 'auf den Markt', 'auf dem Markt'],
          ['casa', 'nach Hause', 'zu Hause']
        ],
        note: 'Movimento = Akkusativ (in die/in den/ins). Parado = Dativ (in der/im). Essa dupla volta com força total no módulo 08 (Wechselpräpositionen).'
      },
      {
        kind: 'text',
        title: 'Lendo a tabela dupla na prática',
        body: 'A mesma frase, nas duas versões:\n• Ich gehe in die Schule. (indo — Wohin?) → Ich bin in der Schule. (lá dentro — Wo?)\n• Wir fahren ins Kino. → Wir sind im Kino.\n• Er geht in den Supermarkt. → Er ist im Supermarkt.\n• Sie fährt an den Strand. → Sie liegt am Strand. (ela está deitada na praia)\nO verbo já dá a pista: gehen/fahren/fliegen = movimento → acusativo. sein/bleiben/arbeiten/wohnen/warten = parado → dativo.'
      },
      {
        kind: 'examples',
        title: 'Os lugares em frases reais',
        items: [
          { de: 'Ich kaufe Brot in der Bäckerei.', pt: 'Compro pão na padaria.' },
          { de: 'Der Zug kommt am Bahnhof an.', pt: 'O trem chega na estação.' },
          { de: 'Wir essen heute im Restaurant.', pt: 'Hoje comemos no restaurante.' },
          { de: 'Sonntags gehe ich zum Flohmarkt.', pt: 'Aos domingos vou à feira de usados.' },
          { de: 'Ich warte an der Haltestelle.', pt: 'Estou esperando no ponto de ônibus.' },
          { de: 'Meine Schwester arbeitet im Krankenhaus.', pt: 'Minha irmã trabalha no hospital.' },
          { de: 'Er holt Geld bei der Bank.', pt: 'Ele saca dinheiro no banco.' },
          { de: 'Die Kinder wollen in den Zoo.', pt: 'As crianças querem ir ao zoológico.' },
          { de: 'Ich brauche Medikamente aus der Apotheke.', pt: 'Preciso de remédios da farmácia.' },
          { de: 'Am Freitagabend gehen wir in die Kneipe.', pt: 'Sexta à noite vamos ao bar.' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Ein Tag in der Stadt',
        lines: [
          { who: 'Lena', de: 'Paulo, ich muss heute in die Stadt. Kommst du mit?', pt: 'Paulo, hoje preciso ir ao centro. Você vem junto?' },
          { who: 'Paulo', de: 'Ja, gern! Ich muss sowieso zur Post und zur Apotheke.', pt: 'Sim, com prazer! De qualquer forma preciso ir ao correio e à farmácia.' },
          { who: 'Lena', de: 'Gut. Zuerst gehe ich zur Bank, dann in die Bäckerei.', pt: 'Certo. Primeiro vou ao banco, depois à padaria.' },
          { who: 'Paulo', de: 'Und wo treffen wir uns danach?', pt: 'E onde nos encontramos depois?' },
          { who: 'Lena', de: 'Im Café am Platz? Um halb zwölf?', pt: 'No café da praça? Onze e meia?' },
          { who: 'Paulo', de: 'Perfekt. Und am Nachmittag will ich noch ins Museum.', pt: 'Perfeito. E à tarde ainda quero ir ao museu.' },
          { who: 'Lena', de: 'Ins Museum? Das ist montags geschlossen!', pt: 'Ao museu? Ele fecha às segundas!' },
          { who: 'Paulo', de: 'Ach nein! Dann gehen wir eben ins Kino.', pt: 'Ah não! Então vamos ao cinema mesmo.' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'das Stadium', richtig: 'das Stadion', why: 'Stadium é inglês. O estádio alemão é das Stadion (plural: die Stadien).' },
          { falsch: 'Ich trinke einen Café.', richtig: 'Ich trinke einen Kaffee. (no das Café)', why: 'das Café = o lugar; der Kaffee = a bebida. Duas palavras, dois gêneros.' },
          { falsch: 'die Bauernhof', richtig: 'der Bauernhof', why: 'Palavras em -hof são masculinas: der Bahnhof, der Bauernhof.' },
          { falsch: 'der U-Bahn', richtig: 'die U-Bahn', why: 'Bahn é feminino: die Bahn, die U-Bahn, die S-Bahn.' },
          { falsch: 'Ich bin ins Kino.', richtig: 'Ich bin im Kino.', why: 'sein é verbo de posição (Wo?) → Dativo: im Kino. ins Kino é só com verbos de movimento.' },
          { falsch: 'Ich gehe in der Schule. (indo para lá)', richtig: 'Ich gehe in die Schule.', why: 'Movimento (Wohin?) pede acusativo: in die. "in der Schule" é onde você JÁ está.' }
        ]
      },
      {
        kind: 'tip',
        title: 'Treino dos 30 lugares',
        body: 'Pegue a lista e monte, para cada lugar, o PAR de frases: "Ich gehe in/zu/an ..." + "Ich bin in/an/auf ...".\nEx.: die Post → Ich gehe zur Post. / Ich bin in der Post.\nFaça 10 lugares por dia, em voz alta. Em três dias você cobriu a cidade inteira — e o módulo 08 (Wechselpräpositionen) vai parecer revisão.'
      }
    ],
    quiz: [
      { kind: 'choice', prompt: '___ Krankenhaus', options: ['der', 'die', 'das'], answer: 2 },
      { kind: 'choice', prompt: '___ Bäckerei', options: ['der', 'die', 'das'], answer: 1 },
      { kind: 'choice', prompt: '___ Bahnhof', options: ['der', 'die', 'das'], answer: 0 },
      { kind: 'choice', prompt: '___ Stadion', options: ['der', 'die', 'das'], answer: 2 },
      { kind: 'choice', prompt: '___ Haltestelle', options: ['der', 'die', 'das'], answer: 1 },
      { kind: 'choice', prompt: '___ U-Bahn', options: ['der', 'die', 'das'], answer: 1, hint: 'Bahn é feminino.' },
      { kind: 'gap', before: 'Ich gehe ', after: ' Kirche. (die Kirche)', answer: ['in die', 'zur'] },
      { kind: 'gap', before: 'Wir fahren ', after: ' Zoo. (der Zoo)', answer: ['in den', 'zum'] },
      { kind: 'gap', before: 'Er wartet ', after: ' der Haltestelle.', answer: ['an'], hint: 'ponto = an + Dativo' },
      { kind: 'gap', before: 'Wir essen heute ', after: ' Restaurant. (das Restaurant, parados lá)', answer: ['im'], hint: 'Wo? → Dativo contraído' },
      { kind: 'choice', prompt: '"Estou no cinema" =', options: ['Ich bin ins Kino.', 'Ich bin im Kino.', 'Ich bin in die Kino.', 'Ich bin zum Kino.'], answer: 1, hint: 'parado = Wo? = Dativo' },
      { kind: 'choice', prompt: 'Qual lugar NÃO é feminino?', options: ['Apotheke', 'Tankstelle', 'Supermarkt', 'Kneipe'], answer: 2 },
      { kind: 'gap', before: 'Samstags gehe ich auf ', after: ' Markt. (der Markt)', answer: ['den'], hint: 'auf + movimento = acusativo' }
    ]
  },

  // ═══ 04 · Verkehrsmittel ═══
  {
    id: 'a12-verkehrsmittel',
    level: 'a12',
    num: '04',
    title: 'Verkehrsmittel',
    subtitle: 'Transporte: mit dem/der, gehen vs. fahren vs. fliegen e a ordem da frase',
    shape: 'half',
    minutes: 35,
    vocabTags: ['transporte', 'gramatica'],
    sections: [
      {
        kind: 'text',
        title: 'Como se diz "de carro, de trem, de avião"',
        body: 'Em português usamos "de": vou DE carro, DE ônibus. Em alemão usa-se mit + Dativo: mit dem Auto, mit dem Bus, mit der U-Bahn.\nComo mit SEMPRE pede Dativo (módulo 07), a conta é simples: masculino e neutro viram dem, feminino vira der. Só existe uma exceção que dispensa veículo: zu Fuß = a pé.'
      },
      {
        kind: 'table',
        title: 'Os meios de transporte da aula',
        head: ['Transporte', 'Tradução', 'Como se diz "de…"'],
        rows: [
          ['das Auto', 'carro', 'mit dem Auto'],
          ['das Fahrrad', 'bicicleta', 'mit dem Fahrrad'],
          ['das Flugzeug', 'avião', 'mit dem Flugzeug'],
          ['das Schiff', 'navio', 'mit dem Schiff'],
          ['das Motorrad', 'moto', 'mit dem Motorrad'],
          ['das Taxi', 'táxi', 'mit dem Taxi'],
          ['der Bus', 'ônibus', 'mit dem Bus'],
          ['der Zug', 'trem', 'mit dem Zug'],
          ['die U-Bahn', 'metrô', 'mit der U-Bahn'],
          ['die S-Bahn', 'trem urbano', 'mit der S-Bahn'],
          ['die Straßenbahn', 'bonde', 'mit der Straßenbahn'],
          ['die Bahn', 'trem/ferrovia', 'mit der Bahn'],
          ['—', 'a pé', 'zu Fuß']
        ],
        note: 'Regra da aula: mit + masculino/neutro = mit dem · mit + feminino = mit der. Repare que quase todos os veículos são neutros (das) — os femininos são as "Bahnen".'
      },
      {
        kind: 'text',
        title: 'gehen vs. fahren vs. fliegen — o verbo certo para cada deslocamento',
        body: 'O alemão escolhe o verbo pelo MEIO de transporte:\n• gehen = a pé, andando: Ich gehe zu Fuß zur Schule.\n• fahren = qualquer veículo terrestre ou aquático: Auto, Bus, Zug, Fahrrad, Schiff... Ich fahre mit dem Bus.\n• fliegen = avião: Ich fliege nach Deutschland.\nPor isso "Ich gehe mit dem Auto" soa errado ao ouvido alemão — se há rodas, é FAHREN. E lembre (módulo anterior do A1.1): fahren é verbo forte — du fährst, er fährt.'
      },
      {
        kind: 'table',
        title: 'A ordem da frase (da aula): Subjekt + Verb + Adverb + Wie? + Wohin?',
        head: ['Posição', 'O que entra', 'Exemplo'],
        rows: [
          ['1. Subjekt', 'quem', 'Ich'],
          ['2. Verb', 'verbo conjugado', 'fahre'],
          ['3. Adverb (tempo)', 'quando', 'heute'],
          ['4. Wie? (modo)', 'como / transporte', 'mit dem Taxi'],
          ['5. Wohin? (lugar)', 'destino', 'nach Rio de Janeiro.']
        ],
        note: 'O destino fecha a frase. O "como" vem antes do "aonde". Tempo antes de modo, modo antes de lugar — os alemães chamam esse instinto de TeKaMoLo (Tempo, Causa, Modo, Lugar).'
      },
      {
        kind: 'examples',
        title: 'Frases da aula',
        items: [
          { de: 'Ich fahre mit dem Taxi nach Rio de Janeiro.', pt: 'Vou de táxi para o Rio de Janeiro.' },
          { de: 'Juli fährt heute mit dem Auto ins Kino.', pt: 'Juli vai hoje de carro ao cinema.' },
          { de: 'Wir gehen am Wochenende zu Fuß zu Burger King.', pt: 'No fim de semana vamos a pé ao Burger King.' },
          { de: 'Ich fahre mit der U-Bahn zur Arbeit.', pt: 'Vou de metrô para o trabalho.' },
          { de: 'Er fliegt morgen mit dem Flugzeug nach Berlin.', pt: 'Ele voa amanhã de avião para Berlim.' },
          { de: 'Fährst du mit dem Fahrrad zur Uni?', pt: 'Você vai de bicicleta para a universidade?' },
          { de: 'Der Zug fährt um acht Uhr ab.', pt: 'O trem parte às oito.' },
          { de: 'Wir nehmen den Bus.', pt: 'Nós pegamos o ônibus. (nehmen + Akkusativ também funciona!)' }
        ]
      },
      {
        kind: 'table',
        title: 'ein-, aus-, umsteigen — entrar, sair e trocar',
        head: ['Verbo', 'Significado', 'Exemplo'],
        rows: [
          ['einsteigen', 'entrar (no veículo), embarcar', 'Ich steige in den Bus ein.'],
          ['aussteigen', 'sair (do veículo), descer', 'Wir steigen am Bahnhof aus.'],
          ['umsteigen', 'fazer baldeação, trocar de linha', 'In Frankfurt muss ich umsteigen.'],
          ['abfahren', 'partir (veículo)', 'Der Zug fährt um 9 Uhr ab.'],
          ['ankommen', 'chegar', 'Wir kommen um 12 Uhr in München an.']
        ],
        note: 'Todos são SEPARÁVEIS (módulo 10): o prefixo voa para o fim. Steigen Sie hier um? = O senhor faz baldeação aqui?'
      },
      {
        kind: 'text',
        title: 'Frases de sobrevivência no transporte',
        body: 'No guichê ou no aplicativo:\n• Eine Fahrkarte nach München, bitte. = Uma passagem para Munique, por favor.\n• Einfach oder hin und zurück? = Só ida ou ida e volta?\n• Wann fährt der nächste Zug? = Quando parte o próximo trem?\n• Von welchem Gleis? = De qual plataforma?\n• Muss ich umsteigen? = Preciso fazer baldeação?\n• Wo muss ich aussteigen? = Onde devo descer?\nA resposta clássica: Der Zug fährt um 14:30 Uhr von Gleis 7 ab. — prefixo ab lá no fim.'
      },
      {
        kind: 'dialog',
        title: 'Am Bahnhof',
        lines: [
          { who: 'Paulo', de: 'Entschuldigung, ich muss nach München. Wann fährt der nächste Zug?', pt: 'Com licença, preciso ir a Munique. Quando parte o próximo trem?' },
          { who: 'Lena', de: 'Um Viertel nach zehn, von Gleis 5.', pt: 'Às dez e quinze, da plataforma 5.' },
          { who: 'Paulo', de: 'Muss ich umsteigen?', pt: 'Preciso fazer baldeação?' },
          { who: 'Lena', de: 'Ja, in Nürnberg. Sie steigen dort aus und nehmen den ICE.', pt: 'Sim, em Nuremberg. O senhor desce lá e pega o ICE.' },
          { who: 'Paulo', de: 'Und wie lange dauert die Fahrt?', pt: 'E quanto tempo dura a viagem?' },
          { who: 'Lena', de: 'Ungefähr drei Stunden. Sie kommen um halb zwei in München an.', pt: 'Mais ou menos três horas. O senhor chega em Munique à uma e meia.' },
          { who: 'Paulo', de: 'Perfekt. Eine Fahrkarte, bitte — hin und zurück.', pt: 'Perfeito. Uma passagem, por favor — ida e volta.' },
          { who: 'Lena', de: 'Gern. Das macht 89 Euro. Gute Reise!', pt: 'Pois não. São 89 euros. Boa viagem!' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich gehe mit dem Auto.', richtig: 'Ich fahre mit dem Auto.', why: 'gehen é só a pé. Com veículo terrestre, o verbo é fahren.' },
          { falsch: 'Ich fahre nach Deutschland. (de avião)', richtig: 'Ich fliege nach Deutschland.', why: 'Avião pede fliegen. fahren para voo intercontinental soa estranho.' },
          { falsch: 'mit die U-Bahn', richtig: 'mit der U-Bahn', why: 'mit pede Dativo: die → der.' },
          { falsch: 'mit dem Fuß', richtig: 'zu Fuß', why: '"A pé" é expressão fixa com zu, sem artigo: zu Fuß.' },
          { falsch: 'Ich fahre nach Rio mit dem Taxi.', richtig: 'Ich fahre mit dem Taxi nach Rio.', why: 'Ordem da aula: Wie? (mit dem Taxi) vem ANTES de Wohin? (nach Rio). O destino fecha a frase.' },
          { falsch: 'Der Zug abfährt um 9 Uhr.', richtig: 'Der Zug fährt um 9 Uhr ab.', why: 'abfahren é separável: o prefixo ab vai para o FIM da frase.' }
        ]
      },
      {
        kind: 'tip',
        title: 'A frase-esqueleto',
        body: 'Decore UMA frase-modelo e troque as peças:\nIch fahre [heute] [mit dem Bus] [zur Arbeit].\n         quando?   como?           aonde?\nTroque: morgen / am Montag · mit dem Zug / mit der U-Bahn / zu Fuß (com gehen!) · ins Kino / zur Uni / nach Hause.\nUma frase, três slots, dezenas de combinações — é assim que a ordem TeKaMoLo entra no automático.'
      }
    ],
    quiz: [
      { kind: 'gap', before: 'Ich fahre mit ', after: ' Bus zur Schule. (der Bus)', answer: ['dem'] },
      { kind: 'gap', before: 'Wir fahren mit ', after: ' U-Bahn. (die U-Bahn)', answer: ['der'] },
      { kind: 'choice', prompt: 'Como se diz "a pé"?', options: ['mit dem Fuß', 'zu Fuß', 'mit Fuß', 'am Fuß'], answer: 1 },
      { kind: 'choice', prompt: 'Você vai de bicicleta. Qual verbo?', options: ['gehen', 'fahren', 'fliegen', 'laufen'], answer: 1, hint: 'tem rodas → fahren' },
      { kind: 'choice', prompt: '"Ele voa para Berlim" =', options: ['Er fährt nach Berlin.', 'Er fliegt nach Berlin.', 'Er geht nach Berlin.', 'Er flieht nach Berlin.'], answer: 1 },
      { kind: 'order', words: ['Juli', 'fährt', 'heute', 'mit', 'dem', 'Auto', 'ins', 'Kino'], answer: 'Juli fährt heute mit dem Auto ins Kino', hint: 'frase da aula: Tempo → Como → Aonde' },
      { kind: 'order', words: ['Ich', 'fahre', 'mit', 'dem', 'Taxi', 'nach', 'Rio'], answer: 'Ich fahre mit dem Taxi nach Rio', hint: 'como antes do destino' },
      { kind: 'gap', before: 'Der Zug fährt um 9 Uhr ', after: '. (abfahren)', answer: ['ab'], hint: 'separável: prefixo no fim' },
      { kind: 'gap', before: 'In Frankfurt muss ich ', after: '. (trocar de trem)', answer: ['umsteigen'], hint: 'com modal, o verbo separável vai inteiro para o fim' },
      { kind: 'gap', before: 'Wir steigen am Bahnhof ', after: '. (aussteigen)', answer: ['aus'] },
      { kind: 'choice', prompt: 'Qual transporte é FEMININO?', options: ['der Zug', 'das Auto', 'die Straßenbahn', 'der Bus'], answer: 2 },
      { kind: 'choice', prompt: '"Ida e volta" =', options: ['einfach', 'hin und zurück', 'ab und an', 'vor und nach'], answer: 1 }
    ]
  },

  // ═══ 05 · Die Uhrzeit (informell) ═══
  {
    id: 'a12-uhrzeit',
    level: 'a12',
    num: '05',
    title: 'Die Uhrzeit (informell)',
    subtitle: 'A hora do dia a dia — nach, vor, halb, Viertel',
    shape: 'circle',
    minutes: 30,
    vocabTags: ['tempo'],
    sections: [
      { kind: 'text', title: 'Formal vs. informal', body: 'A hora FORMAL (A1.1) lê os números: 17:04 = "siebzehn Uhr vier". A hora INFORMAL é como os alemães realmente falam: "fünf nach fünf" — cinco (minutos) depois das cinco. Este módulo domina a informal, que cai na prova e na rua.' },
      {
        kind: 'table',
        title: 'As 4 palavras-chave',
        head: ['Palavra', 'Significa', 'Exemplo'],
        rows: [
          ['nach', 'DEPOIS da hora', '17:04 → fünf nach fünf'],
          ['vor', 'ANTES da hora', '10:48 → zehn vor elf'],
          ['halb', 'MEIA para a PRÓXIMA hora', '05:30 → halb sechs'],
          ['Viertel', 'quarto (15 min)', '03:45 → Viertel vor vier'],
        ],
        note: 'ARMADILHA: halb sechs = 5:30, NÃO 6:30. O alemão pensa "meia hora ATÉ as seis".',
      },
      {
        kind: 'table',
        title: 'Exemplos da aula (DEUTSCHUNTERRICHT 13)',
        head: ['Relógio', 'Em alemão'],
        rows: [
          ['17:04', 'kurz nach fünf / fünf nach fünf'],
          ['09:18', 'zwanzig nach neun'],
          ['10:05', 'fünf nach zehn'],
          ['08:20', 'zwanzig nach acht / zehn vor halb neun'],
          ['01:33', 'kurz nach halb zwei'],
          ['17:25', 'fünf vor halb sechs'],
          ['05:30', 'halb sechs'],
          ['03:45', 'Viertel vor vier'],
          ['04:35', 'fünf nach halb fünf'],
          ['09:40', 'zwanzig vor zehn / zehn nach halb zehn'],
          ['10:48', 'zehn vor elf'],
          ['11:55', 'fünf vor zwölf'],
          ['13:00', 'es ist eins'],
          ['08:25', 'fünf vor halb neun'],
        ],
        note: 'No informal usa-se só 1–12 ("es ist eins" às 13:00). kurz nach = pouquinho depois.',
      },
      {
        kind: 'tip',
        title: 'O mapa mental do relógio',
        body: 'Minuto 1–20: "X nach [hora]". Minuto 21–29: "X vor halb [hora+1]". Minuto 30: "halb [hora+1]". Minuto 31–39: "X nach halb [hora+1]". Minuto 40–59: "X vor [hora+1]". 15 e 45 = Viertel nach / Viertel vor.',
      },
      {
        kind: 'table',
        title: 'Três perguntas de horário',
        head: ['Pergunta', 'Uso', 'Resposta'],
        rows: [
          ['Wie spät ist es?', 'que horas são agora', 'Es ist halb sechs.'],
          ['Um wie viel Uhr…?', 'a que horas acontece', 'Um acht Uhr.'],
          ['Wann…?', 'quando (mais vago)', 'Am Abend. / Gegen neun.'],
        ],
        note: 'Resposta de horário exato quase sempre com "um": um acht (Uhr). "gegen acht" = por volta das oito.',
      },
      {
        kind: 'examples',
        title: 'Ouça e repita',
        items: [
          { de: 'Wie spät ist es? — Es ist halb sechs.', pt: 'Que horas são? — Cinco e meia.' },
          { de: 'Es ist Viertel vor vier.', pt: 'São quinze para as quatro.' },
          { de: 'Es ist kurz nach halb zwei.', pt: 'É pouco depois de uma e meia.' },
          { de: 'Um wie viel Uhr beginnt der Film?', pt: 'A que horas começa o filme?' },
          { de: 'Der Zug fährt um Viertel nach acht.', pt: 'O trem parte às oito e quinze.' },
          { de: 'Ich stehe um halb sieben auf.', pt: 'Levanto às seis e meia.' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Verpassen wir den Film?',
        lines: [
          { who: 'Paulo', de: 'Wie spät ist es? Der Film beginnt bald.', pt: 'Que horas são? O filme começa logo.' },
          { who: 'Lena', de: 'Es ist schon zehn vor acht.', pt: 'Já são dez para as oito.' },
          { who: 'Paulo', de: 'Und um wie viel Uhr beginnt er?', pt: 'E a que horas ele começa?' },
          { who: 'Lena', de: 'Um Viertel nach acht. Wir haben noch Zeit.', pt: 'Às oito e quinze. Ainda temos tempo.' },
          { who: 'Paulo', de: 'Gut. Der Bus kommt um fünf nach acht, oder?', pt: 'Bom. O ônibus vem às oito e cinco, né?' },
          { who: 'Lena', de: 'Nein, um halb neun! Wir gehen besser zu Fuß.', pt: 'Não, às oito e meia! É melhor irmos a pé.' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'halb sechs = 6:30', richtig: 'halb sechs = 5:30', why: 'halb aponta para a PRÓXIMA hora: meia ATÉ as 6.' },
          { falsch: 'Es ist halb zu sechs.', richtig: 'Es ist halb sechs.', why: 'Não existe "zu": só halb + próxima hora.' },
          { falsch: 'Um wie viel Uhr ist es?', richtig: 'Wie spät ist es?', why: '"Que horas são" = Wie spät. "Um wie viel Uhr" pergunta quando um evento acontece.' },
        ],
      },
      { kind: 'tip', title: 'Método', body: 'Toda vez que olhar o relógio hoje, diga a hora informal em voz alta. 15–20 repetições reais valem mais que uma tabela decorada.' },
    ],
    quiz: [
      { kind: 'choice', prompt: '05:30 =', options: ['halb fünf', 'halb sechs', 'fünf halb', 'sechs halb'], answer: 1, hint: 'meia ATÉ a próxima' },
      { kind: 'choice', prompt: '03:45 =', options: ['Viertel nach drei', 'Viertel vor drei', 'Viertel vor vier', 'Viertel nach vier'], answer: 2 },
      { kind: 'choice', prompt: '"zehn vor elf" =', options: ['10:11', '11:10', '10:50', '11:50'], answer: 2 },
      { kind: 'choice', prompt: '17:25 =', options: ['fünf nach halb sechs', 'fünf vor halb sechs', 'fünf vor sechs', 'halb fünf'], answer: 1, hint: '25 = 5 antes da meia' },
      { kind: 'choice', prompt: '04:35 =', options: ['fünf vor halb fünf', 'fünf nach halb fünf', 'fünf nach halb vier', 'Viertel nach vier'], answer: 1 },
      { kind: 'gap', before: '09:18 → ', after: ' nach neun.', answer: ['zwanzig'], hint: 'arredonda para 20' },
      { kind: 'gap', before: 'Wie ', after: ' ist es? (que horas)', answer: ['spät'] },
      { kind: 'choice', prompt: '"a que horas começa?" =', options: ['Wie spät beginnt?', 'Um wie viel Uhr beginnt es?', 'Wann spät?', 'Was Uhr?'], answer: 1 },
      { kind: 'choice', prompt: '13:00 no informal =', options: ['es ist dreizehn', 'es ist eins', 'es ist ein Uhr dreizehn', 'es ist halb eins'], answer: 1 },
      { kind: 'gap', before: 'Der Zug fährt um ', after: ' nach acht. (08:15)', answer: ['Viertel'] },
    ],
  },

  // ═══ 06 · Der Dativ ═══
  {
    id: 'a12-dativ',
    level: 'a12',
    num: '06',
    title: 'Der Dativ',
    subtitle: 'O terceiro caso — para quem? a quem?',
    shape: 'square',
    minutes: 35,
    vocabTags: ['gramatica'],
    sections: [
      { kind: 'text', title: 'O que é o Dativo', body: 'Nominativ = quem faz. Akkusativ = o que sofre a ação. DATIV = quem RECEBE / para quem / a quem. Pergunta-chave: WEM? (a quem?). É o caso do destinatário.' },
      {
        kind: 'table',
        title: 'Artigos no Dativo',
        head: ['', 'masc.', 'fem.', 'neutro', 'plural'],
        rows: [
          ['definido', 'dem', 'der', 'dem', 'den +n'],
          ['indefinido', 'einem', 'einer', 'einem', '—'],
          ['negação', 'keinem', 'keiner', 'keinem', 'keinen +n'],
          ['possessivo', 'meinem', 'meiner', 'meinem', 'meinen +n'],
        ],
        note: 'No plural o SUBSTANTIVO ganha -n: mit den Kindern, mit den Freunden.',
      },
      {
        kind: 'table',
        title: 'Pronomes pessoais no Dativo',
        head: ['Nominativ', 'Dativ', 'Exemplo'],
        rows: [
          ['ich', 'mir', 'Kannst du MIR helfen?'],
          ['du', 'dir', 'Ich gebe DIR das Buch.'],
          ['er', 'ihm', 'Das Auto gehört IHM.'],
          ['sie', 'ihr', 'Die Pizza schmeckt IHR.'],
          ['es', 'ihm', 'Ich gebe dem Kind → IHM Milch.'],
          ['wir', 'uns', 'Der Film gefällt UNS.'],
          ['ihr', 'euch', 'Ich danke EUCH.'],
          ['sie/Sie', 'ihnen/Ihnen', 'Wir helfen IHNEN.'],
        ],
      },
      {
        kind: 'table',
        title: 'Verbos que SEMPRE pedem Dativo',
        head: ['Verbo', 'Tradução', 'Exemplo'],
        rows: [
          ['helfen', 'ajudar', 'Ich helfe meiner Mutter.'],
          ['gefallen', 'agradar', 'Das Bild gefällt mir.'],
          ['gehören', 'pertencer', 'Das Handy gehört dem Kind.'],
          ['danken', 'agradecer', 'Ich danke dir!'],
          ['antworten', 'responder', 'Antworte mir bitte!'],
          ['schmecken', 'ter bom gosto', 'Der Kuchen schmeckt uns.'],
          ['passen', 'servir/combinar', 'Der Termin passt mir.'],
          ['wehtun', 'doer', 'Der Kopf tut mir weh.'],
        ],
      },
      {
        kind: 'tip',
        title: 'Dativo + Akkusativ juntos',
        body: 'Verbo como geben/schenken/zeigen pede os dois: Dativo (a quem) + Akkusativ (o quê). Com dois substantivos, Dativo vem PRIMEIRO: "Ich gebe dem Kind (Dat) einen Apfel (Akk)."',
      },
      {
        kind: 'examples',
        title: 'Ouça o padrão',
        items: [
          { de: 'Kannst du mir helfen?', pt: 'Você pode me ajudar?' },
          { de: 'Das Auto gehört meinem Vater.', pt: 'O carro pertence ao meu pai.' },
          { de: 'Die Stadt gefällt mir sehr.', pt: 'Gosto muito da cidade.' },
          { de: 'Ich danke Ihnen!', pt: 'Agradeço ao senhor/à senhora!' },
          { de: 'Ich gebe dem Kind einen Apfel.', pt: 'Dou uma maçã à criança.' },
          { de: 'Wie geht es dir?', pt: 'Como você está? (lit.: como vai a ti)' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Ein Geschenk',
        lines: [
          { who: 'Lena', de: 'Der Rucksack ist schön. Gehört er dir?', pt: 'A mochila é bonita. É sua?' },
          { who: 'Paulo', de: 'Nein, er gehört meinem Bruder. Gefällt er dir?', pt: 'Não, é do meu irmão. Você gosta dela?' },
          { who: 'Lena', de: 'Ja, sehr! Hilfst du mir? Ich suche ein Geschenk für Anna.', pt: 'Sim, muito! Você me ajuda? Procuro um presente para a Anna.' },
          { who: 'Paulo', de: 'Klar. Wir kaufen ihr ein Buch. Bücher gefallen ihr immer.', pt: 'Claro. Compramos um livro para ela. Livros sempre agradam a ela.' },
          { who: 'Lena', de: 'Gute Idee! Und ich danke dir für die Hilfe.', pt: 'Boa ideia! E te agradeço pela ajuda.' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich helfe dich.', richtig: 'Ich helfe dir.', why: 'helfen pede Dativo: dich → dir.' },
          { falsch: 'Das gefällt mich.', richtig: 'Das gefällt mir.', why: 'gefallen pede Dativo: mich → mir.' },
          { falsch: 'mit die Kinder', richtig: 'mit den Kindern', why: 'Dativo plural: den + substantivo com -n.' },
          { falsch: 'Ich gebe einen Apfel dem Kind.', richtig: 'Ich gebe dem Kind einen Apfel.', why: 'Dois substantivos: Dativo antes do Akkusativo.' },
        ],
      },
      { kind: 'tip', title: 'Mnemônico', body: 'DEM–DER–DEM–DEN(+n): masc DEM, fem DER, neutro DEM, plural DEN com -n no nome. Cante como um beat até virar reflexo.' },
    ],
    quiz: [
      { kind: 'gap', before: 'Kannst du ', after: ' helfen? (a mim)', answer: ['mir'] },
      { kind: 'gap', before: 'Das Buch gehört ', after: ' Lehrer. (der Lehrer)', answer: ['dem'] },
      { kind: 'gap', before: 'Ich fahre mit ', after: ' Freundin. (die Freundin, minha)', answer: ['meiner'] },
      { kind: 'choice', prompt: 'Qual verbo NÃO pede Dativo?', options: ['helfen', 'gefallen', 'kaufen', 'danken'], answer: 2, hint: 'kaufen pede Akkusativ' },
      { kind: 'gap', before: 'Die Pizza schmeckt ', after: ' nicht. (a ele)', answer: ['ihm'] },
      { kind: 'choice', prompt: 'Dativo plural de "die Kinder":', options: ['den Kinder', 'den Kindern', 'dem Kindern', 'der Kinder'], answer: 1 },
      { kind: 'gap', before: 'Wie geht es ', after: '? (a você)', answer: ['dir'] },
      { kind: 'order', words: ['Ich', 'gebe', 'dem', 'Kind', 'einen', 'Apfel'], answer: 'Ich gebe dem Kind einen Apfel', hint: 'Dativo antes do Akkusativo' },
      { kind: 'gap', before: 'Ich danke ', after: '! (a vocês, informal)', answer: ['euch'] },
      { kind: 'choice', prompt: '"Das gefällt ___" (a mim):', options: ['mich', 'mir', 'ich', 'mein'], answer: 1 },
    ],
  },

  // ═══ 07 · Präpositionen + Dativ ═══
  {
    id: 'a12-praep-dativ',
    level: 'a12',
    num: '07',
    title: 'Präpositionen + Dativ',
    subtitle: 'mit, von, zu, bei, seit, nach, aus — sempre Dativo',
    shape: 'cross',
    minutes: 25,
    vocabTags: ['gramatica'],
    sections: [
      { kind: 'text', title: 'O clube do Dativo', body: 'Sete preposições pedem Dativo SEMPRE, sem exceção. Decore o grupo como um bloco e metade do Dativo do dia a dia está resolvida — porque essas preposições aparecem em quase toda frase.' },
      {
        kind: 'table',
        title: 'As 7 + contrações',
        head: ['Prep.', 'Sentido', 'Exemplo'],
        rows: [
          ['mit', 'com; de (transporte)', 'Ich fahre mit dem Bus.'],
          ['von', 'de (origem/posse/autor)', 'Das ist das Auto von meinem Bruder.'],
          ['zu', 'para (direção a lugar/pessoa)', 'Ich gehe zum Arzt. / zur Schule.'],
          ['bei', 'na casa de; na empresa', 'Ich wohne bei meinen Eltern. / bei Google.'],
          ['seit', 'desde, há (tempo)', 'Ich lerne seit einem Jahr Deutsch.'],
          ['nach', 'depois de; para (país/casa)', 'Nach dem Unterricht gehe ich nach Hause.'],
          ['aus', 'de dentro de; origem', 'Ich komme aus Brasilien.'],
        ],
        note: 'Contrações: zu+dem=zum · zu+der=zur · bei+dem=beim · von+dem=vom',
      },
      {
        kind: 'table',
        title: 'Dois sentidos que confundem',
        head: ['Prep.', 'Sentido 1', 'Sentido 2'],
        rows: [
          ['nach', 'depois (tempo): nach dem Essen', 'para (país/casa): nach Berlin, nach Hause'],
          ['bei', 'na casa de: bei mir', 'na empresa: bei Siemens'],
          ['von', 'de (posse): das Buch von Anna', 'de (lugar): von Berlin nach München'],
        ],
      },
      { kind: 'tip', title: 'Mnemônico clássico', body: 'Cante no ritmo: "mit–nach–bei–seit–von–zu–aus — Dativ!". As sete de uma vez. Sempre que uma aparecer, o artigo vira dem/der/dem/den.' },
      { kind: 'tip', title: 'seit = há quanto tempo', body: 'Para "faço X há N tempo", alemão usa seit + Dativo + PRESENTE: "Ich lerne seit einem Jahr Deutsch" (aprendo alemão há um ano — e ainda aprendo).' },
      {
        kind: 'examples',
        title: 'No uso real',
        items: [
          { de: 'Ich lerne seit einem Jahr Deutsch.', pt: 'Estudo alemão há um ano.' },
          { de: 'Nach dem Unterricht gehe ich nach Hause.', pt: 'Depois da aula vou para casa.' },
          { de: 'Ich wohne bei meinen Eltern.', pt: 'Moro na casa dos meus pais.' },
          { de: 'Das Geschenk ist von meiner Schwester.', pt: 'O presente é da minha irmã.' },
          { de: 'Fährst du mit dem Auto oder mit der Bahn?', pt: 'Você vai de carro ou de trem?' },
          { de: 'Ich komme gerade aus der Apotheke.', pt: 'Estou vindo agora da farmácia.' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Seit wann in Berlin?',
        lines: [
          { who: 'Lena', de: 'Seit wann wohnst du in Berlin?', pt: 'Desde quando você mora em Berlim?' },
          { who: 'Paulo', de: 'Seit einem Jahr. Ich wohne bei einem Freund.', pt: 'Há um ano. Moro na casa de um amigo.' },
          { who: 'Lena', de: 'Und wie kommst du zur Arbeit?', pt: 'E como você vai para o trabalho?' },
          { who: 'Paulo', de: 'Mit der U-Bahn. Nach der Arbeit gehe ich oft ins Fitnessstudio.', pt: 'De metrô. Depois do trabalho vou muito à academia.' },
          { who: 'Lena', de: 'Arbeitest du bei einer großen Firma?', pt: 'Você trabalha numa empresa grande?' },
          { who: 'Paulo', de: 'Nein, bei einem Start-up. Der Chef kommt aus Portugal.', pt: 'Não, numa startup. O chefe vem de Portugal.' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich fahre mit der Auto.', richtig: 'Ich fahre mit dem Auto.', why: 'Auto é neutro → Dativo dem.' },
          { falsch: 'seit ein Jahr', richtig: 'seit einem Jahr', why: 'seit pede Dativo: ein → einem.' },
          { falsch: 'Ich wohne bei meine Eltern.', richtig: 'Ich wohne bei meinen Eltern.', why: 'Dativo plural: meinen + Eltern.' },
          { falsch: 'nach die Arbeit', richtig: 'nach der Arbeit', why: 'nach pede Dativo: die → der.' },
        ],
      },
      { kind: 'tip', title: 'Método', body: 'Escreva 7 frases sobre a SUA vida, uma para cada preposição (mit o quê, bei quem, seit quando…). Ancorar na vida real fixa a regência.' },
    ],
    quiz: [
      { kind: 'gap', before: 'Ich fahre mit ', after: ' Zug. (der Zug)', answer: ['dem'] },
      { kind: 'gap', before: 'Sie wohnt bei ', after: ' Großmutter. (die Großmutter, dela)', answer: ['ihrer'] },
      { kind: 'gap', before: 'Ich lerne seit ', after: ' Monat Deutsch. (ein Monat)', answer: ['einem'] },
      { kind: 'choice', prompt: 'zu + der =', options: ['zur', 'zum', 'zudem', 'zus'], answer: 0 },
      { kind: 'choice', prompt: 'Qual NÃO é do grupo do Dativo?', options: ['mit', 'seit', 'für', 'bei'], answer: 2, hint: 'für pede Akkusativ' },
      { kind: 'gap', before: 'Nach ', after: ' Unterricht gehe ich nach Hause. (der Unterricht)', answer: ['dem'] },
      { kind: 'gap', before: 'Das Buch ist ', after: ' meiner Schwester. (de/posse)', answer: ['von'] },
      { kind: 'choice', prompt: 'bei + dem =', options: ['beim', 'beid', 'bem', 'zum'], answer: 0 },
      { kind: 'gap', before: 'Ich komme ', after: ' der Apotheke. (de dentro de)', answer: ['aus'] },
      { kind: 'order', words: ['Ich', 'wohne', 'bei', 'meinen', 'Eltern'], answer: 'Ich wohne bei meinen Eltern' },
    ],
  },

  // ═══ 08 · Wechselpräpositionen ═══
  {
    id: 'a12-wechselpraep',
    level: 'a12',
    num: '08',
    title: 'Wechselpräpositionen',
    subtitle: 'As 9 que trocam: Wohin?→Akkusativ / Wo?→Dativ',
    shape: 'cross',
    minutes: 35,
    vocabTags: ['gramatica', 'wohnung'],
    sections: [
      { kind: 'text', title: 'A grande sacada', body: 'Nove preposições espaciais mudam de caso conforme a PERGUNTA. Wohin? (movimento, para onde) → Akkusativ. Wo? (posição, onde) → Dativ. A mesma preposição, dois casos — por isso "Wechsel" (troca).' },
      {
        kind: 'table',
        title: 'As 9 preposições',
        head: ['Prep.', 'Sentido', 'Wohin? (Akk)', 'Wo? (Dat)'],
        rows: [
          ['in', 'em, dentro', 'in die Küche', 'in der Küche'],
          ['an', 'junto a, na beira', 'an die Wand', 'an der Wand'],
          ['auf', 'sobre', 'auf den Tisch', 'auf dem Tisch'],
          ['über', 'acima de', 'über das Sofa', 'über dem Sofa'],
          ['unter', 'sob', 'unter den Stuhl', 'unter dem Stuhl'],
          ['vor', 'diante de', 'vor die Tür', 'vor der Tür'],
          ['hinter', 'atrás de', 'hinter das Haus', 'hinter dem Haus'],
          ['neben', 'ao lado de', 'neben das Bett', 'neben dem Bett'],
          ['zwischen', 'entre', 'zwischen die Stühle', 'zwischen die… → den Stühlen'],
        ],
        note: 'Contrações Wohin: ans, aufs, ins. Wo: am, im. "Das Bild hängt an der Wand" (Wo) vs. "Ich hänge das Bild an die Wand" (Wohin).',
      },
      {
        kind: 'table',
        title: 'Os pares de verbos que denunciam o caso',
        head: ['Wohin? (Akk) — ação', 'Wo? (Dat) — posição'],
        rows: [
          ['stellen (pôr em pé)', 'stehen (estar em pé)'],
          ['legen (deitar)', 'liegen (estar deitado)'],
          ['setzen (sentar)', 'sitzen (estar sentado)'],
          ['hängen (pendurar)', 'hängen (estar pendurado)'],
        ],
        note: 'Verbo de MOVIMENTO (stellen/legen/setzen/hängen+alguém) → Akk. Verbo de ESTADO (stehen/liegen/sitzen) → Dat.',
      },
      { kind: 'tip', title: 'O teste de 1 segundo', body: 'Pergunte "para onde?" ou "onde?". Se a coisa se MOVE para o lugar → Akkusativ. Se já ESTÁ lá parada → Dativ. "Ich gehe in die Küche" (movimento) vs. "Ich bin in der Küche" (posição).' },
      {
        kind: 'examples',
        title: 'O mesmo objeto, dois casos',
        items: [
          { de: 'Ich hänge das Bild an die Wand.', pt: 'Penduro o quadro NA parede. (movimento → Akk)' },
          { de: 'Das Bild hängt an der Wand.', pt: 'O quadro está pendurado na parede. (posição → Dat)' },
          { de: 'Ich lege das Buch auf den Tisch.', pt: 'Coloco o livro sobre a mesa. (Akk)' },
          { de: 'Das Buch liegt auf dem Tisch.', pt: 'O livro está sobre a mesa. (Dat)' },
          { de: 'Die Katze läuft unter das Sofa.', pt: 'O gato corre para debaixo do sofá. (Akk)' },
          { de: 'Die Katze schläft unter dem Sofa.', pt: 'O gato dorme debaixo do sofá. (Dat)' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Wohin mit dem Sofa?',
        lines: [
          { who: 'Lena', de: 'Wohin stellen wir das Sofa?', pt: 'Onde pomos o sofá?' },
          { who: 'Paulo', de: 'Stell es an die Wand, neben das Fenster.', pt: 'Põe junto à parede, ao lado da janela.' },
          { who: 'Lena', de: 'Und der Tisch? Er steht jetzt in der Mitte.', pt: 'E a mesa? Ela está agora no meio.' },
          { who: 'Paulo', de: 'Leg die Bücher auf den Tisch und stell ihn vor das Sofa.', pt: 'Põe os livros sobre a mesa e coloca-a diante do sofá.' },
          { who: 'Lena', de: 'Perfekt. Und die Lampe? Wo ist sie?', pt: 'Perfeito. E a lâmpada? Onde está?' },
          { who: 'Paulo', de: 'Sie steht hinter dem Sofa, in der Ecke.', pt: 'Está atrás do sofá, no canto.' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich gehe in der Küche.', richtig: 'Ich gehe in die Küche.', why: 'Movimento (gehen) → Wohin → Akkusativ (die).' },
          { falsch: 'Das Bild hängt an die Wand.', richtig: 'Das Bild hängt an der Wand.', why: 'Posição (hängt parado) → Wo → Dativo (der).' },
          { falsch: 'Ich lege das Buch auf dem Tisch.', richtig: 'Ich lege das Buch auf den Tisch.', why: 'legen = movimento → Akkusativ (den).' },
          { falsch: 'Ich bin in die Schule. (estou)', richtig: 'Ich bin in der Schule.', why: 'sein = posição → Dativo.' },
        ],
      },
      { kind: 'tip', title: 'Método', body: 'Descreva seu quarto DUAS vezes: arrumando (movimento, Akk: "Ich stelle den Stuhl an den Tisch") e depois pronto (posição, Dat: "Der Stuhl steht am Tisch"). O contraste fixa a regra.' },
    ],
    quiz: [
      { kind: 'gap', before: 'Ich hänge das Bild an ', after: ' Wand. (movimento — die Wand)', answer: ['die'] },
      { kind: 'gap', before: 'Das Bild hängt an ', after: ' Wand. (posição — die Wand)', answer: ['der'] },
      { kind: 'gap', before: 'Ich gehe in ', after: ' Küche. (movimento — die Küche)', answer: ['die'] },
      { kind: 'gap', before: 'Ich bin in ', after: ' Küche. (posição — die Küche)', answer: ['der'] },
      { kind: 'choice', prompt: '"O livro está sobre a mesa" =', options: ['Das Buch liegt auf den Tisch.', 'Das Buch liegt auf dem Tisch.', 'Das Buch legt auf dem Tisch.', 'Das Buch liegt auf der Tisch.'], answer: 1 },
      { kind: 'choice', prompt: 'Verbo de MOVIMENTO (pede Akk):', options: ['stehen', 'liegen', 'stellen', 'sitzen'], answer: 2 },
      { kind: 'gap', before: 'Die Katze schläft unter ', after: ' Sofa. (das Sofa, posição)', answer: ['dem'] },
      { kind: 'order', words: ['Stell', 'das', 'Sofa', 'an', 'die', 'Wand'], answer: 'Stell das Sofa an die Wand', hint: 'movimento → Akk' },
      { kind: 'choice', prompt: 'Wohin? → qual caso?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], answer: 1 },
      { kind: 'gap', before: 'Die Lampe steht ', after: ' dem Sofa. (atrás de)', answer: ['hinter'] },
    ],
  },

  // ═══ 09 · Das Perfekt ═══
  {
    id: 'a12-perfekt',
    level: 'a12',
    num: '09',
    title: 'Das Perfekt',
    subtitle: 'O passado falado — haben/sein + Partizip II',
    shape: 'circle',
    minutes: 40,
    vocabTags: ['verbos'],
    sections: [
      { kind: 'text', title: 'O passado do dia a dia', body: 'No alemão FALADO, o passado é o Perfekt: haben ou sein (conjugado, 2ª posição) + Partizip II (no FIM da frase). "Ich habe Pizza gegessen." Mesma lógica de moldura (Satzklammer) dos modais.' },
      {
        kind: 'table',
        title: 'Partizip II — regulares (ge- + radical + -t)',
        head: ['Infinitivo', 'Partizip II', 'Exemplo'],
        rows: [
          ['machen', 'gemacht', 'Ich habe Sport gemacht.'],
          ['lernen', 'gelernt', 'Ich habe Deutsch gelernt.'],
          ['kaufen', 'gekauft', 'Wir haben Brot gekauft.'],
          ['spielen', 'gespielt', 'Er hat Fußball gespielt.'],
          ['arbeiten', 'gearbeitet', 'Sie hat viel gearbeitet.'],
          ['hören', 'gehört', 'Ich habe Musik gehört.'],
        ],
      },
      {
        kind: 'table',
        title: 'Partizip II — irregulares (ge- + … + -en)',
        head: ['Infinitivo', 'Partizip II', 'Auxiliar'],
        rows: [
          ['essen', 'gegessen', 'haben'],
          ['trinken', 'getrunken', 'haben'],
          ['sehen', 'gesehen', 'haben'],
          ['lesen', 'gelesen', 'haben'],
          ['sprechen', 'gesprochen', 'haben'],
          ['nehmen', 'genommen', 'haben'],
          ['schlafen', 'geschlafen', 'haben'],
          ['gehen', 'gegangen', 'SEIN'],
          ['fahren', 'gefahren', 'SEIN'],
          ['fliegen', 'geflogen', 'SEIN'],
          ['kommen', 'gekommen', 'SEIN'],
          ['bleiben', 'geblieben', 'SEIN'],
        ],
      },
      {
        kind: 'table',
        title: 'Sem ge-! (as 3 exceções)',
        head: ['Tipo', 'Regra', 'Exemplo'],
        rows: [
          ['inseparáveis be-/ver-/er-/ent-', 'sem ge-', 'besuchen → besucht, verstehen → verstanden'],
          ['verbos em -ieren', 'sem ge-', 'studieren → studiert, telefonieren → telefoniert'],
          ['separáveis', 'ge- NO MEIO', 'aufstehen → aufgestanden, einkaufen → eingekauft'],
        ],
      },
      { kind: 'tip', title: 'Quando usar SEIN', body: 'sein para MOVIMENTO de A→B (gehen, fahren, fliegen, kommen) e MUDANÇA DE ESTADO (aufstehen, werden), + bleiben e sein. Todo o resto: haben. Pergunte: "o verbo me move ou me transforma?" → sein.' },
      { kind: 'tip', title: 'war e hatte — mais comuns que Perfekt!', body: 'sein e haben quase nunca vão para o Perfekt. Usa-se o Präteritum: ich WAR (eu estava/fui), ich HATTE (eu tinha). "Gestern war ich müde und hatte keine Zeit."' },
      {
        kind: 'examples',
        title: 'O padrão na orelha',
        items: [
          { de: 'Ich habe gestern Deutsch gelernt.', pt: 'Ontem estudei alemão.' },
          { de: 'Wir sind ins Kino gegangen.', pt: 'Fomos ao cinema.' },
          { de: 'Er ist nach Berlin geflogen.', pt: 'Ele voou para Berlim.' },
          { de: 'Was hast du am Wochenende gemacht?', pt: 'O que você fez no fim de semana?' },
          { de: 'Ich habe meine Oma besucht.', pt: 'Visitei minha avó. (besucht — sem ge-)' },
          { de: 'Gestern war ich krank und hatte Fieber.', pt: 'Ontem eu estava doente e com febre.' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Was hast du gemacht?',
        lines: [
          { who: 'Lena', de: 'Was hast du am Wochenende gemacht?', pt: 'O que você fez no fim de semana?' },
          { who: 'Paulo', de: 'Ich bin nach Hamburg gefahren und habe Freunde getroffen.', pt: 'Fui a Hamburgo e encontrei amigos.' },
          { who: 'Lena', de: 'Schön! Und was habt ihr gemacht?', pt: 'Que legal! E o que vocês fizeram?' },
          { who: 'Paulo', de: 'Wir haben viel gegessen und sind am Hafen spazieren gegangen.', pt: 'Comemos muito e passeamos pelo porto.' },
          { who: 'Lena', de: 'Ich bin nur zu Hause geblieben. Ich war müde.', pt: 'Eu só fiquei em casa. Estava cansada.' },
          { who: 'Paulo', de: 'Hast du wenigstens gut geschlafen?', pt: 'Você pelo menos dormiu bem?' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich habe nach Berlin gefahren.', richtig: 'Ich bin nach Berlin gefahren.', why: 'fahren = movimento → sein.' },
          { falsch: 'Ich bin Pizza gegessen.', richtig: 'Ich habe Pizza gegessen.', why: 'essen não é movimento → haben.' },
          { falsch: 'Ich habe gegessen Pizza.', richtig: 'Ich habe Pizza gegessen.', why: 'Partizip II SEMPRE no fim.' },
          { falsch: 'Ich habe meine Oma gebesucht.', richtig: 'Ich habe meine Oma besucht.', why: 'be- é inseparável → sem ge-.' },
        ],
      },
      { kind: 'tip', title: 'Método', body: 'Todo dia, conte em 5 frases o que você fez ONTEM (Perfekt). Você vai naturalmente repetir os 20 verbos mais frequentes até os Partizipien saírem sozinhos.' },
    ],
    quiz: [
      { kind: 'gap', before: 'Ich ', after: ' gestern Fußball gespielt.', answer: ['habe'] },
      { kind: 'gap', before: 'Wir ', after: ' ins Kino gegangen.', answer: ['sind'] },
      { kind: 'gap', before: 'Er hat das Buch ', after: '. (lesen)', answer: ['gelesen'] },
      { kind: 'gap', before: 'Sie ist nach Rom ', after: '. (fliegen)', answer: ['geflogen'] },
      { kind: 'choice', prompt: 'Qual usa SEIN no Perfekt?', options: ['essen', 'kaufen', 'bleiben', 'hören'], answer: 2 },
      { kind: 'order', words: ['Ich', 'habe', 'gestern', 'Musik', 'gehört'], answer: 'Ich habe gestern Musik gehört', hint: 'Partizip no fim' },
      { kind: 'choice', prompt: 'Partizip II de "besuchen":', options: ['gebesucht', 'besucht', 'gebesuch', 'besuchte'], answer: 1, hint: 'be- inseparável, sem ge-' },
      { kind: 'choice', prompt: 'Partizip II de "studieren":', options: ['gestudiert', 'studiert', 'gestudieren', 'studierte'], answer: 1, hint: '-ieren, sem ge-' },
      { kind: 'gap', before: 'Gestern ', after: ' ich müde. (sein — Präteritum)', answer: ['war'] },
      { kind: 'gap', before: 'Ich habe meine Oma ', after: '. (aufstehen? não — besuchen)', answer: ['besucht'] },
    ],
  },

  // ═══ 10 · Trennbare Verben ═══
  {
    id: 'a12-trennbar',
    level: 'a12',
    num: '10',
    title: 'Trennbare Verben',
    subtitle: 'Verbos separáveis — o prefixo voa para o fim',
    shape: 'half',
    minutes: 30,
    vocabTags: ['verbos', 'alltag'],
    sections: [
      { kind: 'text', title: 'Como funciona', body: 'aufstehen = auf + stehen. No presente, o verbo conjuga na 2ª posição e o PREFIXO vai para o FIM: "Ich stehe um sieben auf." O alemão adora essa moldura — o sentido só fecha na última palavra.' },
      {
        kind: 'table',
        title: 'Os separáveis do dia a dia',
        head: ['Verbo', 'Tradução', 'Exemplo'],
        rows: [
          ['aufstehen', 'levantar-se', 'Ich stehe um 7 auf.'],
          ['einkaufen', 'fazer compras', 'Wir kaufen im Supermarkt ein.'],
          ['fernsehen', 'ver TV', 'Abends sehe ich fern.'],
          ['anrufen', 'telefonar', 'Ich rufe dich morgen an.'],
          ['mitkommen', 'vir junto', 'Kommst du mit?'],
          ['mitbringen', 'trazer junto', 'Ich bringe Kuchen mit.'],
          ['einladen', 'convidar', 'Ich lade dich ein.'],
          ['aufräumen', 'arrumar', 'Ich räume mein Zimmer auf.'],
          ['anfangen', 'começar', 'Der Film fängt um 20 Uhr an.'],
          ['abholen', 'buscar (alguém)', 'Ich hole dich ab.'],
        ],
        note: 'Prefixos separáveis: auf-, ein-, fern-, an-, mit-, zurück-, ab-, aus-, vor-, zu-.',
      },
      {
        kind: 'table',
        title: 'Separável vs. INseparável',
        head: ['Separáveis (prefixo voa)', 'Inseparáveis (grudam sempre)'],
        rows: [
          ['auf-, ein-, an-, mit-, ab-, aus-', 'be-, ge-, er-, ver-, ent-, emp-, zer-'],
          ['aufstehen → steht … auf', 'verstehen → versteht (não separa!)'],
          ['einkaufen → kauft … ein', 'bekommen → bekommt'],
        ],
        note: 'be-/ver-/er-/ent- NUNCA separam e não levam ge- no Perfekt.',
      },
      {
        kind: 'table',
        title: 'O prefixo em cada contexto',
        head: ['Situação', 'O que acontece', 'Exemplo'],
        rows: [
          ['Presente', 'prefixo no fim', 'Ich stehe früh auf.'],
          ['Com modal', 'verbo INTEIRO no fim', 'Ich muss früh aufstehen.'],
          ['Perfekt', '-ge- entra no MEIO', 'Ich bin früh aufgestanden.'],
          ['Imperativ', 'prefixo no fim', 'Steh auf!'],
        ],
      },
      { kind: 'tip', title: 'O sotaque denuncia', body: 'Em separáveis, a força da voz cai no PREFIXO: ÁUFstehen, ÉINkaufen. Em inseparáveis, cai no radical: verSTÉHen, beKÓMMen. Ouvir a tônica ajuda a classificar.' },
      {
        kind: 'examples',
        title: 'Sinta a moldura',
        items: [
          { de: 'Ich stehe jeden Tag um sechs auf.', pt: 'Levanto todo dia às seis.' },
          { de: 'Rufst du mich heute Abend an?', pt: 'Você me liga hoje à noite?' },
          { de: 'Ich muss morgen früh aufstehen.', pt: 'Preciso levantar cedo amanhã.' },
          { de: 'Der Unterricht fängt um acht an.', pt: 'A aula começa às oito.' },
          { de: 'Ich lade dich zu meiner Party ein.', pt: 'Eu te convido para a minha festa.' },
          { de: 'Am Samstag räume ich die Wohnung auf.', pt: 'No sábado arrumo o apartamento.' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Die Einladung',
        lines: [
          { who: 'Paulo', de: 'Ich lade dich zu meiner Party ein. Kommst du?', pt: 'Eu te convido para a minha festa. Você vem?' },
          { who: 'Lena', de: 'Klar! Wann fängt sie an?', pt: 'Claro! Quando ela começa?' },
          { who: 'Paulo', de: 'Um acht. Bringst du etwas mit?', pt: 'Às oito. Você traz algo?' },
          { who: 'Lena', de: 'Ich bringe einen Kuchen mit. Holst du mich ab?', pt: 'Trago um bolo. Você me busca?' },
          { who: 'Paulo', de: 'Ja, ich hole dich um halb acht ab.', pt: 'Sim, te busco às sete e meia.' },
          { who: 'Lena', de: 'Super. Vorher räume ich noch schnell auf.', pt: 'Ótimo. Antes ainda arrumo tudo rapidinho.' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich aufstehe um sieben.', richtig: 'Ich stehe um sieben auf.', why: 'Prefixo separável vai para o fim.' },
          { falsch: 'Ich muss aufstehe früh.', richtig: 'Ich muss früh aufstehen.', why: 'Com modal, o verbo fica inteiro no fim.' },
          { falsch: 'Ich habe aufgestanden.', richtig: 'Ich bin aufgestanden.', why: 'Mudança de estado → sein.' },
          { falsch: 'Ich verstehe … ver auf.', richtig: 'Ich verstehe.', why: 'ver- é inseparável — nunca separa.' },
        ],
      },
      { kind: 'tip', title: 'Método', body: 'Sua rotina é cheia de separáveis (aufstehen, einkaufen, fernsehen, aufräumen). Narre o dia inteiro e você treina a moldura dezenas de vezes sem esforço.' },
    ],
    quiz: [
      { kind: 'order', words: ['Ich', 'stehe', 'um', 'sieben', 'auf'], answer: 'Ich stehe um sieben auf', hint: 'prefixo no fim' },
      { kind: 'gap', before: 'Der Film fängt um 20 Uhr ', after: '.', answer: ['an'] },
      { kind: 'gap', before: 'Ich rufe dich morgen ', after: '.', answer: ['an'] },
      { kind: 'order', words: ['Ich', 'muss', 'früh', 'aufstehen'], answer: 'Ich muss früh aufstehen', hint: 'com modal o verbo NÃO separa' },
      { kind: 'choice', prompt: 'Perfekt de "aufstehen":', options: ['hat aufgestanden', 'ist aufgestanden', 'ist geaufstanden', 'hat aufstehen'], answer: 1, hint: 'mudança de estado → sein; ge no meio' },
      { kind: 'gap', before: 'Abends sehe ich ', after: '. (fernsehen)', answer: ['fern'] },
      { kind: 'choice', prompt: 'Qual verbo NÃO separa?', options: ['einkaufen', 'anrufen', 'verstehen', 'mitkommen'], answer: 2, hint: 'ver- é inseparável' },
      { kind: 'gap', before: 'Ich lade dich zur Party ', after: '. (einladen)', answer: ['ein'] },
      { kind: 'order', words: ['Bringst', 'du', 'etwas', 'mit', '?'], answer: 'Bringst du etwas mit ?' },
      { kind: 'gap', before: 'Am Samstag räume ich die Wohnung ', after: '. (aufräumen)', answer: ['auf'] },
    ],
  },
]
