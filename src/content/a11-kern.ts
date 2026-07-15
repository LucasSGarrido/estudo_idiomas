import type { Module } from './types'

export const A11_KERN: Module[] = [
  // ═══ 01 · Das Alphabet & die Aussprache ═══
  {
    id: 'a11-alphabet',
    level: 'a11',
    num: '01',
    title: 'Das Alphabet & die Aussprache',
    subtitle: 'O alfabeto, os sons do alemão e como soletrar seu nome',
    shape: 'circle',
    minutes: 30,
    vocabTags: ['apresentacao', 'frases'],
    sections: [
      {
        kind: 'text',
        title: 'Por que começar pelo som',
        body: 'O alemão é uma língua foneticamente regular: cada letra (ou grupo de letras) tem um som previsível. Quem aprende as regras de pronúncia uma vez consegue ler QUALQUER palavra alemã em voz alta — mesmo sem saber o que significa.\nComparação: o inglês é caótico (though, through, tough soam diferentes). O alemão não. Isso é uma vantagem enorme para você.\nAlém disso, saber soletrar é habilidade de sobrevivência: seu nome brasileiro vai precisar ser soletrado em cadastros, telefones e consultórios na Alemanha o tempo todo.'
      },
      {
        kind: 'table',
        title: 'O alfabeto de A a Z',
        head: ['Letra', 'Nome em alemão', 'Como soa (aproximação PT)'],
        rows: [
          ['A', 'Ah', '"á"'],
          ['B', 'Beh', '"bê"'],
          ['C', 'Tseh', '"tsê"'],
          ['D', 'Deh', '"dê"'],
          ['E', 'Eh', '"ê"'],
          ['F', 'Ef', '"éf"'],
          ['G', 'Geh', '"guê"'],
          ['H', 'Hah', '"rá" (h aspirado, como no inglês house)'],
          ['I', 'Ih', '"i"'],
          ['J', 'Jot', '"iót"'],
          ['K', 'Kah', '"cá"'],
          ['L', 'El', '"él"'],
          ['M', 'Em', '"ém"'],
          ['N', 'En', '"én"'],
          ['O', 'Oh', '"ô"'],
          ['P', 'Peh', '"pê"'],
          ['Q', 'Kuh', '"ku" (u fechado)'],
          ['R', 'Er', '"ér" (r gutural, da garganta)'],
          ['S', 'Es', '"és"'],
          ['T', 'Teh', '"tê"'],
          ['U', 'Uh', '"u"'],
          ['V', 'Fau', '"fáu"'],
          ['W', 'Weh', '"vê"'],
          ['X', 'Iks', '"íks"'],
          ['Y', 'Ypsilon', '"üpsilon"'],
          ['Z', 'Zett', '"tsét"']
        ],
        note: 'Ao soletrar ao telefone, os alemães dizem o NOME da letra: Paulo = Peh, Ah, Uh, El, Oh.'
      },
      {
        kind: 'table',
        title: 'As quatro letras extras: ä, ö, ü, ß',
        head: ['Letra', 'Nome', 'Som', 'Exemplo'],
        rows: [
          ['ä', 'A-Umlaut', '"é" aberto, como em "pé"', 'Mädchen (menina)'],
          ['ö', 'O-Umlaut', 'boca de "ô", língua dizendo "ê"', 'schön (bonito)'],
          ['ü', 'U-Umlaut', 'boca de "u" (biquinho), língua dizendo "i"', 'fünf (cinco)'],
          ['ß', 'Eszett / scharfes S', '"ss" — sempre s surdo', 'Straße (rua)']
        ],
        note: 'Sem teclado alemão? Escreva ae, oe, ue e ss: Strasse, fuenf. Todo alemão entende. Mas o ß nunca começa palavra.'
      },
      {
        kind: 'table',
        title: 'Letras-problema para brasileiros',
        head: ['Letra', 'Som real', 'Exemplo', 'Pegadinha'],
        rows: [
          ['W', '"v" de vaca', 'Wasser = "vásser" (água)', 'NÃO é o w do inglês (uó)'],
          ['V', '"f" de faca', 'Vater = "fáter" (pai)', 'NÃO é v'],
          ['Z', '"ts"', 'Zeit = "tsáit" (tempo)', 'nunca z de zebra'],
          ['J', '"i" de iodo', 'ja = "iá" (sim)', 'NÃO é j de janela'],
          ['S + vogal', '"z" de casa', 'Sonne = "zóne" (sol)', 's inicial vibra'],
          ['R', 'gutural, da garganta', 'rot (vermelho)', 'parecido com rr carioca'],
          ['H depois de vogal', 'MUDO — só alonga a vogal', 'wohnen = "vôônen" (morar)', 'não pronuncie o h']
        ]
      },
      {
        kind: 'text',
        title: 'Os dígrafos: ch, sch, sp, st',
        body: 'ch tem DOIS sons, e a vogal anterior decide:\n• Depois de i, e, ä, ö, ü, ei → som suave, um "x" soprado com a língua no céu da boca: ich (eu), nicht (não), München.\n• Depois de a, o, u, au → som áspero de garganta, como rr forte: ach!, Buch (livro), auch (também).\n\nsch → "x" de xícara: Schule = "xúle" (escola), schön = "xén" (bonito).\n\nsp e st no COMEÇO de palavra ou de radical ganham som de sch:\n• sprechen = "chprérren" (falar)\n• Straße = "chtrasse" (rua)\n• verstehen = "ferchtêen" (entender — o st inicia o radical stehen)\nNo meio ou fim da palavra, sp/st soam normais: Fenster = "fênster" (janela).'
      },
      {
        kind: 'table',
        title: 'Combinações de vogais',
        head: ['Grupo', 'Som', 'Exemplos'],
        rows: [
          ['ei', '"ái" (como em pai)', 'nein (não), mein (meu), Wein (vinho)'],
          ['ie', '"i" longo', 'Liebe (amor), vier (quatro), sieben (sete)'],
          ['eu / äu', '"ói" (como em herói)', 'Deutsch (alemão), neun (nove), Häuser (casas)'],
          ['au', '"áu" (como em mau)', 'Haus (casa), Frau (mulher), auch (também)']
        ]
      },
      {
        kind: 'tip',
        title: 'O truque do ei vs. ie',
        body: 'Leia a SEGUNDA letra como se fosse o nome dela em inglês:\n• ei → a segunda é o i, que em inglês se chama "ai" → nein = "náin"\n• ie → a segunda é o e, que em inglês se chama "i" → Liebe = "líibe"\nOu memorize o par: Wein ("váin", vinho) vs. Wien ("víin", Viena). Errar essa dupla muda a palavra.'
      },
      {
        kind: 'examples',
        title: 'Ouça e repita',
        items: [
          { de: 'Ja.', pt: 'Sim. (soa "iá")' },
          { de: 'Nein.', pt: 'Não. (soa "náin")' },
          { de: 'Danke.', pt: 'Obrigado. (soa "dânke")' },
          { de: 'Ich spreche Deutsch.', pt: 'Eu falo alemão. ("ich chprérre dóitch")' },
          { de: 'Das Wasser ist gut.', pt: 'A água é boa. ("vásser")' },
          { de: 'Die Straße ist lang.', pt: 'A rua é longa. ("chtrásse")' },
          { de: 'Mein Vater wohnt in Wien.', pt: 'Meu pai mora em Viena. ("fáter", "vôônt", "víin")' },
          { de: 'Sieben, neun, zehn.', pt: 'Sete, nove, dez. ("zíiben", "nóin", "tsêen")' },
          { de: 'Das Buch ist schön.', pt: 'O livro é bonito. ("burr" áspero, "xén")' }
        ]
      },
      {
        kind: 'text',
        title: 'Wie schreibt man das? — soletrando na prática',
        body: 'As frases essenciais:\n• Wie schreibt man das? = Como se escreve isso?\n• Können Sie das bitte buchstabieren? = Pode soletrar, por favor?\n• Man schreibt das... = Escreve-se...\n\nDetalhes que os alemães falam ao soletrar:\n• groß / klein = maiúscula / minúscula ("großes B" = B maiúsculo)\n• Doppel-s, Doppel-t = ss, tt (letras dobradas)\n• Umlaut: diga "A-Umlaut" para ä, "O-Umlaut" para ö, "U-Umlaut" para ü\n• ß = "Eszett" ou "scharfes S"\nExemplo: Müller = Em, U-Umlaut, El, El, Eh, Er.'
      },
      {
        kind: 'dialog',
        title: 'Am Telefon: soletrando o sobrenome',
        lines: [
          { who: 'Lena', de: 'Firma Weber, guten Tag. Wie ist Ihr Name, bitte?', pt: 'Firma Weber, bom dia. Qual é o seu nome, por favor?' },
          { who: 'Paulo', de: 'Guten Tag, mein Name ist Paulo Andrade.', pt: 'Bom dia, meu nome é Paulo Andrade.' },
          { who: 'Lena', de: 'Entschuldigung, wie schreibt man das?', pt: 'Desculpe, como se escreve isso?' },
          { who: 'Paulo', de: 'Andrade: Ah – En – Deh – Er – Ah – Deh – Eh.', pt: 'Andrade: A – N – D – R – A – D – E.' },
          { who: 'Lena', de: 'Ah, En, Deh, Er, Ah, Deh, Eh... Andrade. Ist das richtig?', pt: 'A, N, D, R, A, D, E... Andrade. Está correto?' },
          { who: 'Paulo', de: 'Ja, genau. Und der Vorname ist Paulo: Peh – Ah – Uh – El – Oh.', pt: 'Sim, exato. E o primeiro nome é Paulo: P – A – U – L – O.' },
          { who: 'Lena', de: 'Perfekt. Danke schön, Herr Andrade!', pt: 'Perfeito. Muito obrigada, senhor Andrade!' },
          { who: 'Paulo', de: 'Bitte schön. Auf Wiederhören!', pt: 'De nada. Até logo! (despedida de telefone)' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Wasser = "uásser"', richtig: 'Wasser = "vásser"', why: 'W em alemão soa como o nosso V. O som "uó" do inglês não existe no alemão.' },
          { falsch: 'Vater = "váter"', richtig: 'Vater = "fáter"', why: 'V em palavras alemãs soa como F. (Em estrangeirismos como Video, soa v mesmo.)' },
          { falsch: 'Zeit = "záit" (z de zebra)', richtig: 'Zeit = "tsáit"', why: 'Z alemão é sempre "ts", como em pizza.' },
          { falsch: 'wohnen = "vo-RÊ-nen" (pronunciando o h)', richtig: 'wohnen = "vôônen"', why: 'H depois de vogal é mudo: só serve para alongar a vogal anterior.' },
          { falsch: 'Liebe = "li-É-be" (separando i-e)', richtig: 'Liebe = "líibe"', why: 'ie é UM som só: i longo. Nunca separe as duas vogais.' }
        ]
      },
      {
        kind: 'tip',
        title: 'Treino diário de 2 minutos',
        body: 'Soletre em voz alta, com os nomes alemães das letras: seu nome completo, sua rua e sua cidade. São as três coisas que você mais vai soletrar na vida real.\nDepois leia qualquer palavra alemã que encontrar (placas, embalagens, títulos de vídeo) aplicando as regras. Se você seguir as regras, a pronúncia sai certa — confie nelas.'
      }
    ],
    quiz: [
      { kind: 'choice', prompt: 'Como se pronuncia o W de Wasser?', options: ['Como o U de "uau"', 'Como o V de "vaca"', 'Como o F de "faca"', 'É mudo'], answer: 1, hint: 'W alemão = nosso V.' },
      { kind: 'choice', prompt: 'Qual palavra tem o som de "i" longo?', options: ['nein', 'Liebe', 'Haus', 'heute'], answer: 1, hint: 'ie = i longo; ei = "ái".' },
      { kind: 'choice', prompt: 'A letra ß se pronuncia como...', options: ['"ss"', '"z" de zebra', '"x" de xícara', '"ts"'], answer: 0 },
      { kind: 'gap', before: 'Entschuldigung, wie', after: 'man das?', answer: ['schreibt', 'buchstabiert'], hint: 'A pergunta clássica para pedir a escrita de uma palavra.' },
      { kind: 'choice', prompt: 'Em Straße, o "St" inicial soa como...', options: ['"st" normal, como em estado', '"cht" — a palavra começa com som de sch', '"ts"', '"sd"'], answer: 1, hint: 'sp/st no início de palavra ganham som de sch.' },
      { kind: 'choice', prompt: 'O "ch" de ich é...', options: ['um rr forte de garganta', 'um som suave, tipo um "x" soprado', 'como "k"', 'mudo'], answer: 1, hint: 'Depois de i/e o ch é suave; depois de a/o/u é áspero.' },
      { kind: 'order', words: ['Wie', 'schreibt', 'man', 'das'], answer: 'Wie schreibt man das', hint: 'Pergunta com palavra interrogativa: verbo na 2ª posição.' },
      { kind: 'gap', before: 'Straße schreibt man mit', after: ', nicht mit Doppel-s.', answer: ['ß', 'Eszett', 'eszett', 'scharfem S'], hint: 'O nome da letra que parece um B.' },
      { kind: 'choice', prompt: 'Qual é a pronúncia correta de Zeit?', options: ['"záit"', '"tsáit"', '"sáit"', '"cháit"'], answer: 1 },
      { kind: 'choice', prompt: 'O H de wohnen serve para...', options: ['dar um som de rr', 'alongar a vogal anterior (é mudo)', 'separar as sílabas com pausa', 'nada — é erro de escrita'], answer: 1 }
    ]
  },

  // ═══ 02 · Begrüßung & Verabschiedung ═══
  {
    id: 'a11-begruessung',
    level: 'a11',
    num: '02',
    title: 'Begrüßung & Verabschiedung',
    subtitle: 'Cumprimentos, despedidas e a decisão du vs. Sie',
    shape: 'square',
    minutes: 25,
    vocabTags: ['apresentacao', 'frases', 'alltag'],
    sections: [
      {
        kind: 'text',
        title: 'As primeiras palavras que você vai usar todo dia',
        body: 'Cumprimentar em alemão envolve duas decisões: QUE HORAS são (o cumprimento muda com o relógio) e QUEM é a pessoa (tratamento informal du ou formal Sie).\nErrar o horário é bobagem simpática. Errar o du/Sie pode soar grosseiro — por isso este módulo trata as duas coisas juntas.'
      },
      {
        kind: 'table',
        title: 'Saudações por hora do dia',
        head: ['Saudação', 'Quando usar', 'Registro'],
        rows: [
          ['Guten Morgen!', 'ao acordar até ±11h', 'neutro/formal'],
          ['Guten Tag!', 'de ±11h até ±18h', 'neutro/formal'],
          ['Guten Abend!', 'a partir de ±18h', 'neutro/formal'],
          ['Hallo!', 'qualquer hora', 'informal'],
          ['Gute Nacht!', 'SÓ na despedida, antes de dormir', 'neutro'],
          ['Servus! / Grüß Gott!', 'sul da Alemanha, Áustria', 'regional'],
          ['Moin!', 'norte da Alemanha (a qualquer hora!)', 'regional/informal']
        ],
        note: 'Gute Nacht não é saudação de chegada — é "boa noite, vou dormir". Ao chegar à noite, diga Guten Abend.'
      },
      {
        kind: 'table',
        title: 'Despedidas',
        head: ['Despedida', 'Significado', 'Registro'],
        rows: [
          ['Auf Wiedersehen!', 'até a próxima (lit. até rever)', 'formal'],
          ['Auf Wiederhören!', 'até logo — só ao telefone', 'formal'],
          ['Tschüss!', 'tchau', 'informal/neutro'],
          ['Bis bald!', 'até breve', 'neutro'],
          ['Bis morgen!', 'até amanhã', 'neutro'],
          ['Bis später! / Bis dann!', 'até mais tarde / até lá', 'informal'],
          ['Ciao!', 'tchau (emprestado do italiano)', 'informal']
        ]
      },
      {
        kind: 'text',
        title: 'du vs. Sie — a decisão mais importante do alemão social',
        body: 'O alemão tem dois "você":\n• du = informal. Verbo na forma de du: Kommst du? Wie heißt du?\n• Sie = formal, SEMPRE com S maiúsculo. Verbo na forma de infinitivo: Kommen Sie? Wie heißen Sie?\n\nSie não é "senhor/senhora" opcional como no Brasil — é o padrão obrigatório entre adultos que não se conhecem. Passar para o du é um convite explícito (Duzen wir uns? = Vamos nos tratar por du?), normalmente oferecido pela pessoa mais velha ou hierarquicamente superior.'
      },
      {
        kind: 'table',
        title: 'du ou Sie na prática',
        head: ['Situação', 'Tratamento', 'Exemplo'],
        rows: [
          ['Família, amigos, namorado(a)', 'du', 'Wie geht es dir?'],
          ['Crianças e adolescentes', 'du', 'Wie heißt du?'],
          ['Colegas jovens, festas, internet', 'du (geralmente)', 'Woher kommst du?'],
          ['Desconhecidos adultos', 'Sie', 'Entschuldigung, wie heißen Sie?'],
          ['Chefe, professor, atendimento, repartição', 'Sie', 'Wie geht es Ihnen?'],
          ['Médico, polícia, entrevista de emprego', 'Sie', 'Kommen Sie aus Brasilien?']
        ]
      },
      {
        kind: 'table',
        title: "Wie geht's? e as respostas",
        head: ['Frase', 'Tradução', 'Registro'],
        rows: [
          ['Wie geht es Ihnen?', 'Como vai o senhor / a senhora?', 'formal'],
          ["Wie geht's? / Wie geht es dir?", 'Como vai você?', 'informal'],
          ['Sehr gut, danke!', 'Muito bem, obrigado!', '—'],
          ['Gut, danke. Und Ihnen?', 'Bem, obrigado. E o senhor?', 'formal'],
          ['Gut, danke. Und dir?', 'Bem, obrigado. E você?', 'informal'],
          ['Es geht.', 'Vou indo. / Mais ou menos.', '—'],
          ['Nicht so gut.', 'Não muito bem.', '—']
        ],
        note: 'Na Alemanha, Wie geht es dir? é pergunta de verdade — a pessoa espera uma resposta honesta, não um "tudo bem" automático.'
      },
      {
        kind: 'text',
        title: 'bitte, danke, Entschuldigung — as três palavras-canivete',
        body: 'bitte tem TRÊS usos:\n1. Por favor: Ein Kaffee, bitte.\n2. De nada (resposta a danke): — Danke! — Bitte!\n3. Pois não? / Como? (não entendi): Wie bitte?\n\ndanke = obrigado. Reforços: Danke schön! / Vielen Dank! (muito obrigado).\n\nEntschuldigung = desculpe E com licença — serve para pedir desculpa, chamar atenção de alguém e abrir caminho no metrô. Uma palavra, três problemas resolvidos.'
      },
      {
        kind: 'tip',
        title: 'Na dúvida, Sie',
        body: 'Regra de ouro para brasileiros: com qualquer adulto desconhecido, comece com Sie. O pior que acontece é a pessoa sorrir e dizer "Du kannst du sagen" (pode me chamar de du). O contrário — chamar de du quem esperava Sie — soa invasivo.\nDica extra: se a pessoa te chamou de du primeiro E é do seu nível hierárquico, pode devolver o du sem medo.'
      },
      {
        kind: 'examples',
        title: 'Frases prontas para o dia a dia',
        items: [
          { de: 'Guten Morgen, Frau Schmidt!', pt: 'Bom dia, senhora Schmidt!' },
          { de: 'Guten Tag, Herr Weber. Wie geht es Ihnen?', pt: 'Boa tarde, senhor Weber. Como o senhor vai?' },
          { de: 'Hallo Lena! Wie geht es dir?', pt: 'Oi Lena! Como você vai?' },
          { de: 'Sehr gut, danke. Und dir?', pt: 'Muito bem, obrigado. E você?' },
          { de: 'Es geht. Ich bin müde.', pt: 'Vou indo. Estou cansado.' },
          { de: 'Entschuldigung, ist hier frei?', pt: 'Com licença, este lugar está livre?' },
          { de: 'Vielen Dank! — Bitte schön!', pt: 'Muito obrigado! — De nada!' },
          { de: 'Tschüss, bis morgen!', pt: 'Tchau, até amanhã!' },
          { de: 'Auf Wiedersehen, Frau Hoffmann!', pt: 'Até logo, senhora Hoffmann!' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Formell: primeiro encontro no escritório',
        lines: [
          { who: 'Lena', de: 'Guten Tag! Ich heiße Lena Hoffmann.', pt: 'Boa tarde! Eu me chamo Lena Hoffmann.' },
          { who: 'Paulo', de: 'Guten Tag, Frau Hoffmann. Mein Name ist Paulo Andrade.', pt: 'Boa tarde, senhora Hoffmann. Meu nome é Paulo Andrade.' },
          { who: 'Lena', de: 'Freut mich, Herr Andrade! Wie geht es Ihnen?', pt: 'Prazer, senhor Andrade! Como o senhor vai?' },
          { who: 'Paulo', de: 'Danke, gut. Und Ihnen?', pt: 'Bem, obrigado. E a senhora?' },
          { who: 'Lena', de: 'Auch gut, danke schön.', pt: 'Também bem, muito obrigada.' },
          { who: 'Paulo', de: 'Auf Wiedersehen, Frau Hoffmann!', pt: 'Até logo, senhora Hoffmann!' },
          { who: 'Lena', de: 'Auf Wiedersehen!', pt: 'Até logo!' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Informell: na universidade',
        lines: [
          { who: 'Lena', de: 'Hallo! Ich bin Lena.', pt: 'Oi! Eu sou a Lena.' },
          { who: 'Paulo', de: 'Hi Lena, ich bin Paulo.', pt: 'Oi Lena, eu sou o Paulo.' },
          { who: 'Lena', de: "Na, wie geht's?", pt: 'E aí, como vai?' },
          { who: 'Paulo', de: 'Super, danke. Und dir?', pt: 'Ótimo, obrigado. E você?' },
          { who: 'Lena', de: 'Es geht. Viel Arbeit!', pt: 'Vou indo. Muito trabalho!' },
          { who: 'Paulo', de: 'Verstehe. Bis später, Lena!', pt: 'Entendo. Até mais tarde, Lena!' },
          { who: 'Lena', de: 'Tschüss!', pt: 'Tchau!' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Gute Nacht! (ao chegar numa festa às 21h)', richtig: 'Guten Abend!', why: 'Gute Nacht é exclusivamente despedida antes de dormir. Chegando à noite, é Guten Abend.' },
          { falsch: 'du com o chefe ou com o atendente do banco', richtig: 'Sie (Wie geht es Ihnen?)', why: 'Entre adultos desconhecidos ou em hierarquia, Sie é obrigatório até haver convite explícito para o du.' },
          { falsch: 'Wie geht es dir? como "oi" rápido para qualquer um', richtig: 'Hallo! / Guten Tag!', why: 'Na Alemanha essa pergunta pede resposta real. Para só cumprimentar, use a saudação simples.' },
          { falsch: 'Tschüss! na saída da entrevista de emprego', richtig: 'Auf Wiedersehen!', why: 'Tschüss é casual. Em contexto formal, feche com Auf Wiedersehen.' },
          { falsch: 'responder Danke! com silêncio', richtig: 'Bitte! / Bitte schön!', why: 'Bitte é a resposta padrão para obrigado — o "de nada" alemão.' }
        ]
      },
      {
        kind: 'tip',
        title: 'Monte seus pares',
        body: 'Memorize saudação e despedida em PARES por registro:\n• Formal: Guten Tag ... Auf Wiedersehen\n• Informal: Hallo ... Tschüss\n• Telefone formal: Guten Tag ... Auf Wiederhören\nAssim você nunca abre formal e fecha informal (erro comum que soa estranho ao ouvido alemão).'
      }
    ],
    quiz: [
      { kind: 'choice', prompt: 'São 8h da manhã. Você entra na padaria e diz...', options: ['Gute Nacht!', 'Guten Abend!', 'Guten Morgen!', 'Bis später!'], answer: 2 },
      { kind: 'choice', prompt: 'Quando se usa Gute Nacht?', options: ['Ao chegar em qualquer lugar à noite', 'Só na despedida, antes de dormir', 'Ao atender o telefone à noite', 'Como cumprimento formal'], answer: 1 },
      { kind: 'choice', prompt: 'Primeiro dia de trabalho, você fala com o chefe. Qual tratamento?', options: ['du, para criar amizade', 'Sie, até ele oferecer o du', 'ihr', 'Tanto faz'], answer: 1 },
      { kind: 'gap', before: 'Guten Tag, Herr Weber. Wie geht es', after: '?', answer: ['Ihnen'], hint: 'Versão formal de "dir".' },
      { kind: 'gap', before: 'Tschüss,', after: 'morgen!', answer: ['bis'], hint: '"Até" amanhã.' },
      { kind: 'order', words: ['Wie', 'geht', 'es', 'dir'], answer: 'Wie geht es dir', hint: 'Pergunta informal: como vai você?' },
      { kind: 'choice', prompt: 'Alguém diz Danke schön! Você responde...', options: ['Danke!', 'Bitte schön!', 'Tschüss!', 'Entschuldigung!'], answer: 1, hint: 'bitte também significa "de nada".' },
      { kind: 'choice', prompt: 'Moin! é típico de qual região?', options: ['Baviera (sul)', 'Áustria', 'Norte da Alemanha', 'Suíça'], answer: 2 },
      { kind: 'gap', before: 'São 19h30. Você chega ao restaurante e diz: Guten', after: '!', answer: ['Abend'], hint: 'A partir das ±18h.' },
      { kind: 'choice', prompt: 'Despedida correta ao telefone formal:', options: ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Gute Nacht!', 'Moin!'], answer: 1, hint: 'hören = ouvir. Ao telefone você não "revê", você "reouve".' }
    ]
  },

  // ═══ 03 · sein & haben ═══
  {
    id: 'a11-sein-haben',
    level: 'a11',
    num: '03',
    title: 'sein & haben',
    subtitle: 'Os dois verbos mais importantes do alemão',
    shape: 'triangle',
    minutes: 30,
    vocabTags: ['verbos', 'gramatica'],
    sections: [
      {
        kind: 'text',
        title: 'Os dois pilares',
        body: 'sein (ser/estar) e haben (ter) são os verbos mais usados do alemão — e os dois são irregulares. Não há como deduzir as formas: é decorar mesmo, como decoramos "sou, és, é" em português.\nA boa notícia: são só 12 formas no total, e você vai usá-las literalmente em toda frase que construir a partir de agora. Em poucos dias elas ficam automáticas.'
      },
      {
        kind: 'table',
        title: 'sein no presente (ser / estar)',
        head: ['Pessoa', 'Forma', 'Exemplo'],
        rows: [
          ['ich', 'bin', 'Ich bin Paulo.'],
          ['du', 'bist', 'Du bist nett. (Você é legal.)'],
          ['er / sie / es', 'ist', 'Sie ist Lehrerin. (Ela é professora.)'],
          ['wir', 'sind', 'Wir sind müde. (Estamos cansados.)'],
          ['ihr', 'seid', 'Ihr seid aus Brasilien. (Vocês são do Brasil.)'],
          ['sie / Sie', 'sind', 'Sie sind hier. (Eles estão aqui. / O senhor está aqui.)']
        ],
        note: 'Cante a ladainha: bin – bist – ist – sind – seid – sind. Repetida 10 vezes, nunca mais sai da cabeça.'
      },
      {
        kind: 'table',
        title: 'haben no presente (ter)',
        head: ['Pessoa', 'Forma', 'Exemplo'],
        rows: [
          ['ich', 'habe', 'Ich habe Zeit. (Tenho tempo.)'],
          ['du', 'hast', 'Du hast ein Auto. (Você tem um carro.)'],
          ['er / sie / es', 'hat', 'Er hat Hunger. (Ele está com fome.)'],
          ['wir', 'haben', 'Wir haben eine Frage. (Temos uma pergunta.)'],
          ['ihr', 'habt', 'Ihr habt Glück. (Vocês têm sorte.)'],
          ['sie / Sie', 'haben', 'Sie haben Recht. (O senhor tem razão.)']
        ],
        note: 'Atenção ao du hast e er hat: o b do radical some. NÃO existe "du habst" nem "er habt".'
      },
      {
        kind: 'text',
        title: 'Quando usar sein',
        body: 'sein cobre o "ser" e o "estar" do português de uma vez:\n• Identidade e nome: Ich bin Paulo.\n• Profissão (SEM artigo!): Sie ist Ärztin. (Ela é médica.)\n• Origem e nacionalidade: Wir sind aus Brasilien. Ich bin Brasilianer.\n• Características: Das Haus ist groß. (A casa é grande.)\n• Estados e sentimentos: Ich bin müde / glücklich / krank. (cansado / feliz / doente)\n• IDADE — a pegadinha: Ich bin 25 Jahre alt. Literalmente "eu SOU 25 anos velho". Em alemão idade usa sein, nunca haben.'
      },
      {
        kind: 'table',
        title: 'O alemão TEM o que o português ESTÁ',
        head: ['Alemão', 'Literal', 'Português real'],
        rows: [
          ['Ich habe Hunger.', 'tenho fome', 'estou com fome'],
          ['Ich habe Durst.', 'tenho sede', 'estou com sede'],
          ['Ich habe Angst.', 'tenho medo', 'estou com medo'],
          ['Er hat Fieber.', 'ele tem febre', 'ele está com febre'],
          ['Sie hat Kopfschmerzen.', 'ela tem dores de cabeça', 'ela está com dor de cabeça'],
          ['Wir haben Durst und Hunger.', 'temos sede e fome', 'estamos com sede e fome']
        ],
        note: 'Sensações físicas em alemão são coisas que você POSSUI — sempre haben + substantivo.'
      },
      {
        kind: 'table',
        title: 'Expressões fixas com haben',
        head: ['Expressão', 'Significado', 'Exemplo'],
        rows: [
          ['Zeit haben', 'ter tempo', 'Hast du heute Zeit?'],
          ['Lust haben', 'estar a fim', 'Ich habe Lust auf Pizza.'],
          ['Recht haben', 'ter razão', 'Du hast Recht!'],
          ['Glück haben', 'ter sorte', 'Wir haben Glück.'],
          ['frei haben', 'estar de folga', 'Ich habe morgen frei.'],
          ['Geburtstag haben', 'fazer aniversário', 'Er hat heute Geburtstag.']
        ]
      },
      {
        kind: 'tip',
        title: 'O teste do "estar com"',
        body: 'Se em português a frase é "estar com X" (fome, sede, medo, febre, pressa, dor) → em alemão vira "X haben".\nEstou com fome → Ich habe Hunger.\nEla está com febre → Sie hat Fieber.\nFunciona em quase 100% dos casos do A1. Grave o padrão, não as frases soltas.'
      },
      {
        kind: 'examples',
        title: 'sein e haben em ação',
        items: [
          { de: 'Ich bin Paulo und ich bin 28 Jahre alt.', pt: 'Eu sou Paulo e tenho 28 anos.' },
          { de: 'Du bist sehr nett.', pt: 'Você é muito legal.' },
          { de: 'Sie ist Ingenieurin.', pt: 'Ela é engenheira.' },
          { de: 'Wir sind aus São Paulo.', pt: 'Nós somos de São Paulo.' },
          { de: 'Ihr seid spät!', pt: 'Vocês estão atrasados!' },
          { de: 'Ich habe zwei Brüder.', pt: 'Eu tenho dois irmãos.' },
          { de: 'Hast du Hunger?', pt: 'Você está com fome?' },
          { de: 'Er hat keine Zeit.', pt: 'Ele não tem tempo.' },
          { de: 'Das Kind hat Fieber.', pt: 'A criança está com febre.' },
          { de: 'Sie haben Recht, Herr Weber.', pt: 'O senhor tem razão, senhor Weber.' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Im Café: Hunger und Durst',
        lines: [
          { who: 'Lena', de: 'Paulo, hast du Hunger?', pt: 'Paulo, você está com fome?' },
          { who: 'Paulo', de: 'Ja, ich habe großen Hunger. Und ich habe auch Durst!', pt: 'Sim, estou com muita fome. E também estou com sede!' },
          { who: 'Lena', de: 'Hier ist ein Café. Hast du Zeit?', pt: 'Aqui tem um café. Você tem tempo?' },
          { who: 'Paulo', de: 'Ja, ich habe heute frei.', pt: 'Sim, hoje estou de folga.' },
          { who: 'Lena', de: 'Perfekt! Ich bin so müde... ich brauche einen Kaffee.', pt: 'Perfeito! Estou tão cansada... preciso de um café.' },
          { who: 'Paulo', de: 'Ich auch. Auf Portugiesisch sage ich "estou com fome", aber auf Deutsch HABE ich Hunger!', pt: 'Eu também. Em português eu digo "estou com fome", mas em alemão eu TENHO fome!' },
          { who: 'Lena', de: 'Genau! Du hast Recht — Deutsch ist logisch.', pt: 'Exato! Você tem razão — alemão é lógico.' },
          { who: 'Paulo', de: 'Na ja... manchmal.', pt: 'Bom... às vezes.' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich habe 25 Jahre.', richtig: 'Ich bin 25 (Jahre alt).', why: 'Idade em alemão usa sein, nunca haben. Literal: "eu sou 25 anos velho".' },
          { falsch: 'Ich bin Hunger.', richtig: 'Ich habe Hunger.', why: 'Hunger é substantivo que se possui. "Estar com fome" = Hunger haben.' },
          { falsch: 'Du bist Recht.', richtig: 'Du hast Recht.', why: 'Recht haben é expressão fixa com haben — "ter razão", igual ao português.' },
          { falsch: 'Ich habe müde.', richtig: 'Ich bin müde.', why: 'müde é adjetivo (cansado), e estados com adjetivo usam sein.' },
          { falsch: 'Er habt / du habst', richtig: 'er hat / du hast', why: 'haben perde o b nessas duas formas. Só existe hast e hat.' }
        ]
      },
      {
        kind: 'text',
        title: 'Aprofundando: profissão e origem sem artigo',
        body: 'Diferença importante para o português:\n• Ich bin Lehrer. = Eu sou professor. (NUNCA "Ich bin ein Lehrer" — sem artigo!)\n• Sie ist Brasilianerin. = Ela é brasileira.\nO artigo só aparece se houver adjetivo: Er ist ein guter Lehrer. (Ele é um bom professor.)\n\nE atenção ao Sie formal: usa a MESMA forma verbal de sie (eles) — sind, haben. O contexto e a maiúscula diferenciam: Sind Sie Herr Weber? (O senhor é o Sr. Weber?)'
      },
      {
        kind: 'tip',
        title: 'Treino relâmpago',
        body: 'Descreva-se em 5 frases usando os dois verbos: Ich bin [nome]. Ich bin [idade] Jahre alt. Ich bin aus [cidade]. Ich habe [família/coisa]. Ich habe [Hunger/Zeit/Lust auf Kaffee].\nEsse mini-monólogo é a base da sua apresentação pessoal — e você acabou de construí-lo sozinho.'
      }
    ],
    quiz: [
      { kind: 'gap', before: 'Ich', after: 'müde.', answer: ['bin'], hint: 'Estado com adjetivo → sein.' },
      { kind: 'gap', before: 'Wir', after: 'Hunger.', answer: ['haben'], hint: '"Estar com fome" = Hunger + ?' },
      { kind: 'choice', prompt: 'Como se diz "eu tenho 25 anos"?', options: ['Ich habe 25 Jahre.', 'Ich bin 25 Jahre alt.', 'Ich habe 25 Jahre alt.', 'Ich bin 25 Jahre haben.'], answer: 1, hint: 'Idade usa sein.' },
      { kind: 'gap', before: 'Du', after: 'Recht!', answer: ['hast'], hint: 'Expressão fixa: ter razão.' },
      { kind: 'choice', prompt: 'Qual é a forma de sein para ihr?', options: ['sind', 'seid', 'ist', 'bist'], answer: 1 },
      { kind: 'order', words: ['Ich', 'habe', 'heute', 'Zeit'], answer: 'Ich habe heute Zeit', hint: 'Sujeito, verbo na 2ª posição...' },
      { kind: 'choice', prompt: 'Er ___ Fieber.', options: ['ist', 'hat', 'bin', 'habt'], answer: 1, hint: 'Sensação física = haben.' },
      { kind: 'gap', before: 'Sie', after: 'Lehrerin. (ela)', answer: ['ist'], hint: 'Profissão usa sein — e sem artigo.' },
      { kind: 'choice', prompt: 'Qual frase está correta?', options: ['Ich habe Angst.', 'Ich bin Angst.', 'Ich bin Hunger.', 'Ich habe müde.'], answer: 0 },
      { kind: 'gap', before: 'Ihr', after: 'aus Brasilien.', answer: ['seid'], hint: 'A única forma de sein com d no fim.' }
    ]
  },

  // ═══ 04 · Präsens & Konjugation ═══
  {
    id: 'a11-praesens',
    level: 'a11',
    num: '04',
    title: 'Präsens & Konjugation',
    subtitle: 'O sistema completo de conjugação no presente',
    shape: 'half',
    minutes: 35,
    vocabTags: ['verbos', 'gramatica'],
    sections: [
      {
        kind: 'text',
        title: 'Um sistema, seis terminações',
        body: 'Conjugar no presente em alemão é matemática simples: pegue o infinitivo (machen = fazer), corte o -en para achar o radical (mach-) e cole a terminação da pessoa.\nSão só 6 terminações — e wir e sie/Sie são sempre iguais ao infinitivo. Na prática você decora 4 coisas. Depois vêm três pequenos ajustes de pronúncia e um grupo de verbos que muda a vogal. É TODO o sistema do presente. Este módulo cobre tudo.'
      },
      {
        kind: 'table',
        title: 'As terminações regulares (exemplo: machen)',
        head: ['Pessoa', 'Terminação', 'Forma', 'Tradução'],
        rows: [
          ['ich', '-e', 'ich mache', 'eu faço'],
          ['du', '-st', 'du machst', 'você faz'],
          ['er / sie / es', '-t', 'er macht', 'ele faz'],
          ['wir', '-en', 'wir machen', 'nós fazemos'],
          ['ihr', '-t', 'ihr macht', 'vocês fazem'],
          ['sie / Sie', '-en', 'sie machen', 'eles fazem / o senhor faz']
        ],
        note: 'Cante: e – st – t – en – t – en. Funciona para lernen, wohnen, kommen, spielen, kaufen, trinken e centenas de outros.'
      },
      {
        kind: 'table',
        title: 'Radical em -t / -d: entra um e de apoio',
        head: ['Infinitivo', 'du', 'er/sie/es', 'ihr'],
        rows: [
          ['arbeiten (trabalhar)', 'du arbeitest', 'er arbeitet', 'ihr arbeitet'],
          ['finden (achar)', 'du findest', 'sie findet', 'ihr findet'],
          ['warten (esperar)', 'du wartest', 'er wartet', 'ihr wartet'],
          ['reden (conversar)', 'du redest', 'sie redet', 'ihr redet']
        ],
        note: 'Sem o e seria impronunciável: "arbeitst". O alemão insere -e- antes de -st e -t quando o radical termina em t ou d.'
      },
      {
        kind: 'table',
        title: 'Radical em -s / -ß / -z: o du perde o s',
        head: ['Infinitivo', 'Forma esperada (errada)', 'Forma real'],
        rows: [
          ['heißen (chamar-se)', 'du heißst', 'du heißt'],
          ['tanzen (dançar)', 'du tanzst', 'du tanzt'],
          ['reisen (viajar)', 'du reisst', 'du reist'],
          ['sitzen (estar sentado)', 'du sitzst', 'du sitzt']
        ],
        note: 'O s da terminação -st funde com o s/ß/z do radical. Resultado: du heißt = er heißt (formas idênticas!).'
      },
      {
        kind: 'text',
        title: 'Verbos em -eln e -ern',
        body: 'Verbos cujo infinitivo termina em -eln ou -ern (não em -en):\n• sammeln (colecionar): ich sammle (o e do radical cai!), du sammelst, er sammelt, wir sammeln, ihr sammelt, sie sammeln\n• wandern (fazer trilha): ich wandere, du wanderst, er wandert, wir wandern, ihr wandert, sie wandern\nRepare: wir e sie são iguais ao infinitivo (sammeln, wandern) — NÃO "sammelen". E no ich dos verbos -eln, o e interno some: ich sammle, ich lächle (eu sorrio).'
      },
      {
        kind: 'table',
        title: 'Mudança de vogal no du e er/sie/es (verbos fortes)',
        head: ['Infinitivo', 'du', 'er/sie/es', 'Tradução'],
        rows: [
          ['fahren (a→ä)', 'du fährst', 'er fährt', 'ir de veículo, dirigir'],
          ['schlafen (a→ä)', 'du schläfst', 'sie schläft', 'dormir'],
          ['sprechen (e→i)', 'du sprichst', 'er spricht', 'falar'],
          ['essen (e→i)', 'du isst', 'sie isst', 'comer'],
          ['geben (e→i)', 'du gibst', 'er gibt', 'dar'],
          ['helfen (e→i)', 'du hilfst', 'er hilft', 'ajudar'],
          ['nehmen (e→i + consoante!)', 'du nimmst', 'er nimmt', 'pegar'],
          ['lesen (e→ie)', 'du liest', 'sie liest', 'ler'],
          ['sehen (e→ie)', 'du siehst', 'er sieht', 'ver']
        ],
        note: 'A mudança acontece SÓ em du e er/sie/es. ich, wir, ihr e sie ficam normais: ich fahre, wir sprechen, ihr lest.'
      },
      {
        kind: 'tip',
        title: 'A dupla que muda',
        body: 'Grave a regra em uma frase: "Só du e er/sie/es mudam a vogal — todo o resto conjuga normal."\nIch spreche, wir sprechen, ihr sprecht → normais.\nDu sprichst, er spricht → mudam.\nE o campeão de pegadinha é nehmen: du nimmst, er nimmt — muda a vogal E a consoante (hm → mm).'
      },
      {
        kind: 'text',
        title: 'A regra de ouro: o verbo mora na 2ª posição',
        body: 'Em toda frase afirmativa alemã, o verbo conjugado ocupa a POSIÇÃO 2 — não necessariamente a segunda palavra, mas o segundo BLOCO da frase:\n• Ich lerne Deutsch. (posição 1: ich | posição 2: lerne)\n• Heute lerne ich Deutsch. (posição 1: heute | posição 2: lerne — o sujeito pula para depois do verbo!)\n• Am Montag arbeitet Paulo. (posição 1: am Montag | posição 2: arbeitet)\nSe algo que não é o sujeito abre a frase, sujeito e verbo INVERTEM. Essa regra (V2) é a espinha dorsal da sintaxe alemã — vamos revisitá-la nos módulos 06 e 13.'
      },
      {
        kind: 'examples',
        title: 'Conjugação em contexto',
        items: [
          { de: 'Ich lerne Deutsch.', pt: 'Eu aprendo alemão.' },
          { de: 'Du arbeitest zu viel.', pt: 'Você trabalha demais.' },
          { de: 'Er spricht drei Sprachen.', pt: 'Ele fala três línguas.' },
          { de: 'Sie liest ein Buch.', pt: 'Ela lê um livro.' },
          { de: 'Wie heißt du?', pt: 'Como você se chama?' },
          { de: 'Wir wohnen in Berlin.', pt: 'Nós moramos em Berlim.' },
          { de: 'Ihr trinkt Kaffee.', pt: 'Vocês bebem café.' },
          { de: 'Er fährt nach München.', pt: 'Ele vai (de veículo) para Munique.' },
          { de: 'Das Kind schläft.', pt: 'A criança dorme.' },
          { de: 'Heute esse ich Pizza.', pt: 'Hoje eu como pizza. (inversão!)' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Was machst du am Wochenende?',
        lines: [
          { who: 'Lena', de: 'Paulo, was machst du am Wochenende?', pt: 'Paulo, o que você faz no fim de semana?' },
          { who: 'Paulo', de: 'Ich fahre nach München. Meine Tante wohnt dort.', pt: 'Eu vou para Munique. Minha tia mora lá.' },
          { who: 'Lena', de: 'Schön! Fährst du allein?', pt: 'Que legal! Você vai sozinho?' },
          { who: 'Paulo', de: 'Nein, mein Bruder kommt auch.', pt: 'Não, meu irmão também vem.' },
          { who: 'Lena', de: 'Und was macht ihr dort?', pt: 'E o que vocês fazem lá?' },
          { who: 'Paulo', de: 'Meine Tante kocht super. Wir essen viel und sprechen Portugiesisch.', pt: 'Minha tia cozinha super bem. Nós comemos muito e falamos português.' },
          { who: 'Lena', de: 'Isst du gern Brezeln?', pt: 'Você gosta de comer brezel?' },
          { who: 'Paulo', de: 'Ja! Und ich lese im Zug — der Zug fährt drei Stunden.', pt: 'Sim! E eu leio no trem — o trem leva três horas.' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'du arbeitst', richtig: 'du arbeitest', why: 'Radical termina em -t → entra o e de apoio antes de -st.' },
          { falsch: 'du heißst', richtig: 'du heißt', why: 'Radical termina em ß → o s da terminação some. du heißt = er heißt.' },
          { falsch: 'er sprecht', richtig: 'er spricht', why: 'sprechen é verbo forte: e→i no du e no er/sie/es.' },
          { falsch: 'er fahrt', richtig: 'er fährt', why: 'fahren é verbo forte: a→ä no du e no er/sie/es.' },
          { falsch: 'Heute ich lerne Deutsch.', richtig: 'Heute lerne ich Deutsch.', why: 'Regra V2: se "heute" abre a frase, o verbo continua na 2ª posição e o sujeito vai para depois dele.' }
        ]
      },
      {
        kind: 'tip',
        title: 'Kit de sobrevivência',
        body: 'Decore a conjugação COMPLETA de 5 verbos-modelo e você cobre todos os padrões:\n• machen (regular)\n• arbeiten (e de apoio)\n• heißen (funde o s)\n• fahren (a→ä)\n• nehmen (e→i radical)\nQualquer verbo novo do A1 vai se comportar como um desses cinco.'
      }
    ],
    quiz: [
      { kind: 'gap', before: 'Du', after: 'bei Siemens. (arbeiten)', answer: ['arbeitest'], hint: 'Radical em -t precisa de e de apoio.' },
      { kind: 'gap', before: 'Er', after: 'sehr gut Deutsch. (sprechen)', answer: ['spricht'], hint: 'Verbo forte: e→i.' },
      { kind: 'gap', before: 'Wie', after: 'du? (heißen)', answer: ['heißt', 'heisst'], hint: 'O s da terminação funde com o ß.' },
      { kind: 'choice', prompt: 'Qual é a forma de fahren para du?', options: ['du fahrst', 'du fährst', 'du fahrest', 'du fährt'], answer: 1 },
      { kind: 'gap', before: 'Ich', after: 'Briefmarken. (sammeln)', answer: ['sammle'], hint: 'Verbos em -eln perdem o e interno no ich.' },
      { kind: 'choice', prompt: 'Qual destes verbos muda a vogal no er/sie/es?', options: ['machen', 'wohnen', 'lesen', 'kaufen'], answer: 2, hint: 'e→ie.' },
      { kind: 'order', words: ['Heute', 'lerne', 'ich', 'Deutsch'], answer: 'Heute lerne ich Deutsch', hint: 'Advérbio na frente → sujeito e verbo invertem.' },
      { kind: 'gap', before: 'Sie', after: 'gern Pizza. (essen — ela)', answer: ['isst'], hint: 'e→i, e o s dobra.' },
      { kind: 'choice', prompt: 'nehmen na forma er é...', options: ['er nehmt', 'er nimmt', 'er niehmt', 'er nimmst'], answer: 1, hint: 'Muda vogal E consoante.' },
      { kind: 'choice', prompt: 'Na frase afirmativa alemã, o verbo conjugado fica...', options: ['sempre no fim', 'sempre na 1ª posição', 'sempre na 2ª posição', 'em qualquer lugar'], answer: 2 }
    ]
  },

  // ═══ 05 · der, die, das & Plural ═══
  {
    id: 'a11-artikel',
    level: 'a11',
    num: '05',
    title: 'der, die, das & Plural',
    subtitle: 'Os três gêneros, as pistas para adivinhar e os cinco padrões de plural',
    shape: 'cross',
    minutes: 35,
    vocabTags: ['gramatica'],
    sections: [
      {
        kind: 'text',
        title: 'Três gêneros, zero lógica aparente — mas MUITAS pistas',
        body: 'O alemão tem três gêneros: der (masculino), die (feminino), das (neutro). E o gênero é GRAMATICAL, não biológico: das Mädchen (a menina) é neutro!\nA má notícia: não dá para traduzir o gênero do português (a casa ≠ die Haus — é das Haus).\nA boa notícia: as TERMINAÇÕES das palavras entregam o gênero na maioria dos casos. Quem aprende as pistas abaixo acerta o artigo de uns 80% das palavras novas sem nunca tê-las visto.'
      },
      {
        kind: 'table',
        title: 'Pistas do DIE (feminino)',
        head: ['Terminação', 'Exemplo', 'Tradução'],
        rows: [
          ['-e (≈90% dos casos)', 'die Lampe, die Blume', 'a lâmpada, a flor'],
          ['-ung', 'die Zeitung, die Wohnung', 'o jornal, o apartamento'],
          ['-heit', 'die Freiheit, die Gesundheit', 'a liberdade, a saúde'],
          ['-keit', 'die Möglichkeit', 'a possibilidade'],
          ['-ei', 'die Bäckerei', 'a padaria'],
          ['-ion', 'die Information, die Nation', 'a informação, a nação'],
          ['-schaft', 'die Freundschaft', 'a amizade'],
          ['-tät', 'die Universität, die Qualität', 'a universidade, a qualidade']
        ],
        note: '-ung, -heit, -keit, -ei, -ion, -schaft e -tät são 100% confiáveis. O -e tem exceções famosas (der Käse, der Name).'
      },
      {
        kind: 'table',
        title: 'Pistas do DER (masculino)',
        head: ['Pista', 'Exemplo', 'Tradução'],
        rows: [
          ['-er (quem faz algo)', 'der Lehrer, der Computer', 'o professor, o computador'],
          ['-ling', 'der Frühling, der Lehrling', 'a primavera, o aprendiz'],
          ['-or', 'der Motor, der Doktor', 'o motor, o doutor'],
          ['dias da semana', 'der Montag, der Freitag', 'a segunda, a sexta'],
          ['meses', 'der Januar, der Juli', 'janeiro, julho'],
          ['estações do ano', 'der Sommer, der Winter', 'o verão, o inverno'],
          ['pontos cardeais', 'der Norden, der Süden', 'o norte, o sul']
        ],
        note: 'Regra prática: tudo que marca o calendário e o clima tende a ser der.'
      },
      {
        kind: 'table',
        title: 'Pistas do DAS (neutro)',
        head: ['Pista', 'Exemplo', 'Tradução'],
        rows: [
          ['-chen (diminutivo)', 'das Mädchen, das Brötchen', 'a menina, o pãozinho'],
          ['-lein (diminutivo)', 'das Büchlein', 'o livrinho'],
          ['-um', 'das Museum, das Zentrum', 'o museu, o centro'],
          ['-ment', 'das Dokument, das Instrument', 'o documento, o instrumento'],
          ['infinitivo virou substantivo', 'das Essen, das Leben', 'a comida, a vida'],
          ['prefixo Ge-', 'das Gebäude, das Gemüse', 'o prédio, o legume']
        ],
        note: 'Diminutivos -chen e -lein são SEMPRE das — por isso das Mädchen é neutro, mesmo sendo uma menina.'
      },
      {
        kind: 'table',
        title: 'ein, eine, kein — os artigos indefinidos',
        head: ['Gênero', 'Definido', 'Indefinido', 'Negativo'],
        rows: [
          ['masculino', 'der Tisch', 'ein Tisch', 'kein Tisch'],
          ['feminino', 'die Lampe', 'eine Lampe', 'keine Lampe'],
          ['neutro', 'das Buch', 'ein Buch', 'kein Buch'],
          ['plural', 'die Bücher', '— (sem artigo)', 'keine Bücher']
        ],
        note: 'ein serve para masculino E neutro. Só o feminino ganha -e: eine. E o plural indefinido não tem artigo: Ich habe Bücher.'
      },
      {
        kind: 'text',
        title: 'Palavras compostas: a última manda',
        body: 'O alemão adora colar palavras: Haus + Tür = Haustür (porta de casa). E o gênero do monstro composto é SEMPRE o da última palavra:\n• das Haus + die Tür → die Haustür\n• der Fuß + der Ball → der Fußball\n• die Stadt + das Zentrum → das Stadtzentrum\nEntão não entre em pânico com palavras gigantes: ache a última peça e você tem o artigo.'
      },
      {
        kind: 'table',
        title: 'Os 5 padrões de plural',
        head: ['Padrão', 'Singular', 'Plural', 'Quem costuma usar'],
        rows: [
          ['-e (às vezes + umlaut)', 'der Tisch / der Stuhl', 'die Tische / die Stühle', 'masculinos curtos'],
          ['-en / -n', 'die Lampe / die Frau', 'die Lampen / die Frauen', 'a maioria dos femininos'],
          ['-er (+ umlaut se possível)', 'das Kind / das Buch', 'die Kinder / die Bücher', 'neutros curtos'],
          ['-s', 'das Auto / das Handy', 'die Autos / die Handys', 'estrangeirismos'],
          ['— (nada, às vezes umlaut)', 'der Lehrer / der Apfel', 'die Lehrer / die Äpfel', 'masc./neutros em -er, -el, -en']
        ],
        note: 'No plural TODOS os gêneros usam die. O plural é o grande igualador do alemão.'
      },
      {
        kind: 'tip',
        title: 'Compre o pacote completo',
        body: 'Nunca aprenda uma palavra "pelada". Aprenda sempre o TRIO: artigo + palavra + plural.\nNão decore "Buch" — decore "das Buch, die Bücher".\nÉ o mesmo esforço de memória e você nunca mais sofre com gênero nem plural dessa palavra. Todo dicionário mostra o trio: Buch, das; ¨-er.'
      },
      {
        kind: 'examples',
        title: 'Artigos e plurais em contexto',
        items: [
          { de: 'Der Tisch ist neu.', pt: 'A mesa é nova.' },
          { de: 'Die Lampe ist schön.', pt: 'A lâmpada é bonita.' },
          { de: 'Das Buch ist interessant.', pt: 'O livro é interessante.' },
          { de: 'Ich habe ein Auto und eine Lampe.', pt: 'Eu tenho um carro e uma lâmpada.' },
          { de: 'Das ist kein Problem.', pt: 'Isso não é problema.' },
          { de: 'Die Kinder spielen.', pt: 'As crianças brincam.' },
          { de: 'Zwei Kaffee und drei Brötchen, bitte.', pt: 'Dois cafés e três pãezinhos, por favor.' },
          { de: 'Die Häuser hier sind alt.', pt: 'As casas aqui são antigas.' },
          { de: 'Die Haustür ist blau.', pt: 'A porta da casa é azul.' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Was ist das? — no apartamento novo',
        lines: [
          { who: 'Lena', de: 'Paulo, was ist das?', pt: 'Paulo, o que é isso?' },
          { who: 'Paulo', de: 'Das ist eine Lampe. Die Lampe ist neu.', pt: 'Isso é uma lâmpada. A lâmpada é nova.' },
          { who: 'Lena', de: 'Und das? Ist das ein Buch?', pt: 'E isso? Isso é um livro?' },
          { who: 'Paulo', de: 'Ja, das ist mein Wörterbuch: das Wörterbuch!', pt: 'Sim, é meu dicionário: das Wörterbuch!' },
          { who: 'Lena', de: 'Wie heißt das auf Deutsch?', pt: 'Como isso se chama em alemão?' },
          { who: 'Paulo', de: 'Der Stuhl. Ein Stuhl, zwei Stühle — mit Umlaut!', pt: 'A cadeira. Uma cadeira, duas cadeiras — com umlaut!' },
          { who: 'Lena', de: 'Der, die, das... und der Plural! So viele Formen!', pt: 'Der, die, das... e o plural! Tantas formas!' },
          { who: 'Paulo', de: 'Ja, aber die Endungen helfen. Lampe endet mit -e: die Lampe!', pt: 'Sim, mas as terminações ajudam. Lampe termina em -e: die Lampe!' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'die Mädchen (para UMA menina)', richtig: 'das Mädchen', why: 'Diminutivos em -chen são sempre neutros, mesmo designando pessoas.' },
          { falsch: 'der Auto', richtig: 'das Auto', why: 'Não traduza o gênero do português ("o carro"). Auto é neutro.' },
          { falsch: 'eine Buch', richtig: 'ein Buch', why: 'Buch é neutro, e neutro usa ein (igual ao masculino). eine é só feminino.' },
          { falsch: 'die Häuser → "der Häuser" porque Haus é das', richtig: 'die Häuser', why: 'No plural o artigo definido é SEMPRE die, para os três gêneros.' },
          { falsch: 'das Haustür (porque Haus é das)', richtig: 'die Haustür', why: 'Em palavras compostas, a ÚLTIMA palavra decide o gênero: die Tür → die Haustür.' }
        ]
      },
      {
        kind: 'text',
        title: 'Aprofundando: as exceções famosas',
        body: 'Algumas palavras muito frequentes desobedecem às pistas — aprenda-as como exceções:\n• der Käse (queijo), der Name (nome), der Junge (menino) — terminam em -e mas são der\n• das Sofa, das Kino — estrangeirismos neutros\n• die Person — é die mesmo se a pessoa for homem\nE lembre: quando estiver em dúvida REAL e sem dicionário, chute die — estatisticamente é o gênero mais comum (≈45% dos substantivos).'
      },
      {
        kind: 'tip',
        title: 'Código de cores',
        body: 'Truque de memorização que funciona: associe cada gênero a uma cor fixa (ex.: der = azul, die = vermelho, das = verde) e visualize a palavra nessa cor.\nEscreva seus vocabulários assim desde o primeiro dia. O cérebro grava a cor junto com a palavra — e o artigo vem de graça na hora de falar.'
      }
    ],
    quiz: [
      { kind: 'choice', prompt: 'Palavras terminadas em -ung são...', options: ['sempre der', 'sempre die', 'sempre das', 'imprevisíveis'], answer: 1 },
      { kind: 'choice', prompt: 'Qual é o artigo de Mädchen (menina)?', options: ['der', 'die', 'das', 'den'], answer: 2, hint: '-chen manda mais que o sexo.' },
      { kind: 'gap', before: '', after: 'Lampe ist schön.', answer: ['Die', 'die'], hint: 'Termina em -e...' },
      { kind: 'choice', prompt: 'das Haus + die Tür = ___ Haustür', options: ['der', 'die', 'das', 'den'], answer: 1, hint: 'A última palavra decide.' },
      { kind: 'gap', before: 'das Buch → die', after: '(plural)', answer: ['Bücher', 'Buecher'], hint: '-er + umlaut.' },
      { kind: 'choice', prompt: 'O plural de das Auto é...', options: ['die Auten', 'die Autos', 'die Autoen', 'die Äuter'], answer: 1, hint: 'Estrangeirismos usam -s.' },
      { kind: 'gap', before: 'Das ist', after: 'Buch. (um)', answer: ['ein'], hint: 'Buch é neutro.' },
      { kind: 'choice', prompt: 'Por que Januar é der Januar?', options: ['Termina em -r', 'Meses são sempre masculinos', 'É estrangeirismo', 'É exceção sem regra'], answer: 1 },
      { kind: 'order', words: ['Das', 'ist', 'eine', 'Lampe'], answer: 'Das ist eine Lampe' },
      { kind: 'choice', prompt: 'O artigo definido do plural (todos os gêneros) é...', options: ['der', 'die', 'das', 'den'], answer: 1 }
    ]
  },

  // ═══ 06 · W-Fragen & Satzbau ═══
  {
    id: 'a11-fragen',
    level: 'a11',
    num: '06',
    title: 'W-Fragen & Satzbau',
    subtitle: 'Todas as perguntas do alemão e a lógica da posição do verbo',
    shape: 'circle',
    minutes: 30,
    vocabTags: ['gramatica', 'frases'],
    sections: [
      {
        kind: 'text',
        title: 'Dois tipos de pergunta, uma regra de posição',
        body: 'O alemão tem exatamente dois formatos de pergunta:\n1. W-Frage (pergunta aberta): começa com palavra interrogativa, verbo na 2ª posição. Woher kommst du?\n2. Ja/Nein-Frage (pergunta fechada): o VERBO abre a frase. Kommst du aus Brasilien?\nQuem domina esses dois moldes consegue perguntar qualquer coisa do A1. E de quebra entende a regra V2, que organiza TODA frase alemã.'
      },
      {
        kind: 'table',
        title: 'As W-Wörter',
        head: ['Palavra', 'Significado', 'Exemplo'],
        rows: [
          ['wer', 'quem (sujeito)', 'Wer ist das? (Quem é?)'],
          ['wen', 'quem (objeto)', 'Wen siehst du? (Quem você vê?)'],
          ['was', 'o quê / que', 'Was machst du? (O que você faz?)'],
          ['wo', 'onde (lugar fixo)', 'Wo wohnst du? (Onde você mora?)'],
          ['wohin', 'para onde', 'Wohin gehst du? (Para onde você vai?)'],
          ['woher', 'de onde', 'Woher kommst du? (De onde você vem?)'],
          ['wann', 'quando', 'Wann beginnt der Kurs? (Quando começa o curso?)'],
          ['wie', 'como', 'Wie heißt du? (Como você se chama?)'],
          ['warum', 'por que', 'Warum lernst du Deutsch? (Por que você aprende alemão?)'],
          ['wie viel', 'quanto (incontável)', 'Wie viel kostet das? (Quanto custa?)'],
          ['wie viele', 'quantos (contável)', 'Wie viele Kinder hast du? (Quantos filhos você tem?)'],
          ['welcher / welche / welches', 'qual', 'Welche Farbe magst du? (Qual cor você gosta?)']
        ]
      },
      {
        kind: 'text',
        title: 'wo, wohin, woher — o GPS do alemão',
        body: 'O português usa "onde" para quase tudo; o alemão exige precisão:\n• wo = posição parada: Wo bist du? — Ich bin zu Hause.\n• wohin = movimento de ida: Wohin fährst du? — Nach Berlin.\n• woher = origem: Woher kommst du? — Aus Brasilien.\nPense num GPS: woher = ponto de partida, wo = localização atual, wohin = destino. Errar entre eles é o erro nº 1 de brasileiros em perguntas.'
      },
      {
        kind: 'table',
        title: 'Ja/Nein-Fragen: o verbo abre a frase',
        head: ['Afirmação', 'Pergunta', 'Tradução'],
        rows: [
          ['Du kommst aus Brasilien.', 'Kommst du aus Brasilien?', 'Você vem do Brasil?'],
          ['Sie ist Lehrerin.', 'Ist sie Lehrerin?', 'Ela é professora?'],
          ['Du hast Zeit.', 'Hast du Zeit?', 'Você tem tempo?'],
          ['Ihr sprecht Deutsch.', 'Sprecht ihr Deutsch?', 'Vocês falam alemão?'],
          ['Er arbeitet heute.', 'Arbeitet er heute?', 'Ele trabalha hoje?']
        ],
        note: 'Sem "do/does", sem "est-ce que": basta jogar o verbo para a frente. Simples assim.'
      },
      {
        kind: 'table',
        title: 'ja, nein, doch — o trio de respostas',
        head: ['Pergunta', 'Resposta', 'Significado'],
        rows: [
          ['Kommst du? (afirmativa)', 'Ja. / Nein.', 'Sim, venho. / Não, não venho.'],
          ['Kommst du nicht? (negativa)', 'Doch!', 'SIM, eu venho! (contraria o não)'],
          ['Kommst du nicht? (negativa)', 'Nein.', 'Confirmo: não venho.'],
          ['Hast du keine Zeit?', 'Doch, ich habe Zeit!', 'Tenho sim!']
        ],
        note: 'doch é a resposta que o português não tem: um "sim" que derruba uma pergunta negativa. Responder ja a pergunta negativa deixa o alemão confuso.'
      },
      {
        kind: 'text',
        title: 'A regra V2 e a inversão',
        body: 'Frase afirmativa alemã = verbo conjugado SEMPRE na 2ª posição. A 1ª posição é flexível:\n• Ich gehe heute ins Kino. (sujeito na frente)\n• Heute gehe ich ins Kino. (advérbio na frente → sujeito pula para trás do verbo)\n• Am Montag gehe ich ins Kino. (bloco de tempo na frente — "am Montag" conta como UMA posição)\nAs três frases estão corretas e significam o mesmo — muda só a ênfase. O que NUNCA muda: o verbo em 2º lugar. "Heute ich gehe" é impossível em alemão.'
      },
      {
        kind: 'tip',
        title: 'wie viel ou wie viele?',
        body: 'Mesma lógica do inglês (much/many):\n• wie viel + incontável/singular: Wie viel Geld? Wie viel Zeit? Wie viel kostet das?\n• wie viele + plural contável: Wie viele Kinder? Wie viele Bücher?\nNa dúvida: se dá para contar de um em um, use wie viele.'
      },
      {
        kind: 'examples',
        title: 'Perguntas para a vida real',
        items: [
          { de: 'Wer ist das?', pt: 'Quem é esse?' },
          { de: 'Was ist das auf Deutsch?', pt: 'O que é isso em alemão?' },
          { de: 'Wo ist der Bahnhof?', pt: 'Onde é a estação de trem?' },
          { de: 'Wohin fährt der Bus?', pt: 'Para onde vai o ônibus?' },
          { de: 'Woher kommen Sie?', pt: 'De onde o senhor vem?' },
          { de: 'Wann beginnt der Film?', pt: 'Quando começa o filme?' },
          { de: 'Wie viel kostet das Brot?', pt: 'Quanto custa o pão?' },
          { de: 'Warum lernst du Deutsch?', pt: 'Por que você aprende alemão?' },
          { de: 'Sprechen Sie Englisch?', pt: 'O senhor fala inglês?' },
          { de: 'Hast du keinen Hunger? — Doch!', pt: 'Você não está com fome? — Estou sim!' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Das Interview für den Kurs',
        lines: [
          { who: 'Lena', de: 'Paulo, ich mache ein Interview für den Kurs. Woher kommst du?', pt: 'Paulo, estou fazendo uma entrevista para o curso. De onde você vem?' },
          { who: 'Paulo', de: 'Ich komme aus Brasilien, aus São Paulo.', pt: 'Eu venho do Brasil, de São Paulo.' },
          { who: 'Lena', de: 'Und wo wohnst du jetzt?', pt: 'E onde você mora agora?' },
          { who: 'Paulo', de: 'Ich wohne in Berlin. Warum fragst du?', pt: 'Eu moro em Berlim. Por que você pergunta?' },
          { who: 'Lena', de: 'Fragen sind mein Job heute! Wann lernst du Deutsch?', pt: 'Perguntas são meu trabalho hoje! Quando você estuda alemão?' },
          { who: 'Paulo', de: 'Abends, nach der Arbeit.', pt: 'À noite, depois do trabalho.' },
          { who: 'Lena', de: 'Und wie findest du die Sprache? Nicht schön?', pt: 'E o que você acha da língua? Não é bonita?' },
          { who: 'Paulo', de: 'Doch! Schwer, aber schön und logisch.', pt: 'É sim! Difícil, mas bonita e lógica.' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Wo kommst du?', richtig: 'Woher kommst du?', why: 'Origem pede woher (de onde). wo é só para posição parada.' },
          { falsch: 'Wo gehst du?', richtig: 'Wohin gehst du?', why: 'Movimento/destino pede wohin (para onde).' },
          { falsch: 'responder Ja a "Kommst du nicht?"', richtig: 'Doch! (se você vem)', why: 'Pergunta negativa se contraria com doch. Ja soa ambíguo e confunde o interlocutor.' },
          { falsch: 'Warum du lernst Deutsch?', richtig: 'Warum lernst du Deutsch?', why: 'Depois da W-Wort vem o VERBO (posição 2), não o sujeito.' },
          { falsch: 'Wie viele Geld hast du?', richtig: 'Wie viel Geld hast du?', why: 'Geld é incontável → wie viel. wie viele é só para plurais contáveis.' }
        ]
      },
      {
        kind: 'text',
        title: 'Aprofundando: welcher concorda com o substantivo',
        body: 'welcher (qual) se flexiona como o artigo definido:\n• der Tag → Welcher Tag ist heute? (Que dia é hoje?)\n• die Farbe → Welche Farbe magst du? (Que cor você gosta?)\n• das Buch → Welches Buch liest du? (Que livro você lê?)\n• plural → Welche Sprachen sprichst du? (Que línguas você fala?)\nPor enquanto, grave os quatro como fórmulas — a declinação completa vem no A1.2.'
      },
      {
        kind: 'tip',
        title: 'O jogo das 5 perguntas',
        body: 'Treino que funciona: escolha qualquer pessoa (real ou fictícia) e faça 5 perguntas sobre ela em voz alta — uma com W-Wort, uma Ja/Nein, uma com wo/woher/wohin, uma com wie viel(e) e uma que mereça um doch como resposta.\nSe você consegue isso, o módulo está dominado.'
      }
    ],
    quiz: [
      { kind: 'gap', before: '', after: 'kommst du? — Aus Brasilien.', answer: ['Woher', 'woher'], hint: 'Origem.' },
      { kind: 'gap', before: '', after: 'wohnst du? — In Berlin.', answer: ['Wo', 'wo'], hint: 'Posição parada.' },
      { kind: 'choice', prompt: '"Para onde você vai?" em alemão é...', options: ['Wo gehst du?', 'Woher gehst du?', 'Wohin gehst du?', 'Wann gehst du?'], answer: 2 },
      { kind: 'order', words: ['Kommst', 'du', 'aus', 'Brasilien'], answer: 'Kommst du aus Brasilien', hint: 'Ja/Nein-Frage: verbo primeiro.' },
      { kind: 'choice', prompt: 'Hast du keine Zeit? — Você TEM tempo. Resposta correta:', options: ['Ja', 'Nein', 'Doch', 'Bitte'], answer: 2, hint: 'O sim que derruba o não.' },
      { kind: 'order', words: ['Heute', 'gehe', 'ich', 'ins', 'Kino'], answer: 'Heute gehe ich ins Kino', hint: 'V2: verbo na 2ª posição, sujeito depois.' },
      { kind: 'gap', before: '', after: 'alt bist du?', answer: ['Wie', 'wie'], hint: 'Pergunta de idade: "quão velho..."' },
      { kind: 'choice', prompt: 'Qual está correto?', options: ['Wie viele Geld hast du?', 'Wie viel Geld hast du?', 'Wie viel Kinder hast du?', 'Wie viele Zeit hast du?'], answer: 1, hint: 'Geld é incontável.' },
      { kind: 'gap', before: '', after: 'kostet das?', answer: ['Wie viel', 'wie viel', 'Was', 'was'], hint: 'Pergunta de preço.' },
      { kind: 'choice', prompt: 'Numa Ja/Nein-Frage, o verbo fica...', options: ['na 2ª posição', 'no fim', 'na 1ª posição', 'depois do sujeito'], answer: 2 }
    ]
  },

  // ═══ 07 · Zahlen 0–1.000.000 ═══
  {
    id: 'a11-zahlen',
    level: 'a11',
    num: '07',
    title: 'Zahlen 0–1.000.000',
    subtitle: 'Números, preços, telefone e anos — com a famosa inversão alemã',
    shape: 'square',
    minutes: 30,
    vocabTags: ['zahlen-zeit'],
    sections: [
      {
        kind: 'text',
        title: 'Números: a ferramenta mais usada do idioma',
        body: 'Preço na padaria, número do ônibus, telefone, CEP, ano de nascimento: você vai usar números em alemão TODO dia, desde o primeiro.\nO sistema é regular e tem uma única esquisitice grande: a partir de 21, o alemão fala as unidades ANTES das dezenas — 21 é literalmente "um-e-vinte" (einundzwanzig). Parece bizarro, vira automático. Vamos por camadas.'
      },
      {
        kind: 'table',
        title: 'De 0 a 12: os únicos (decorar um a um)',
        head: ['Nº', 'Alemão', 'Nº', 'Alemão'],
        rows: [
          ['0', 'null', '7', 'sieben'],
          ['1', 'eins', '8', 'acht'],
          ['2', 'zwei', '9', 'neun'],
          ['3', 'drei', '10', 'zehn'],
          ['4', 'vier', '11', 'elf'],
          ['5', 'fünf', '12', 'zwölf'],
          ['6', 'sechs', '', '']
        ],
        note: 'Como em português (onze, doze), 11 e 12 têm nomes próprios: elf, zwölf.'
      },
      {
        kind: 'table',
        title: 'De 13 a 19: unidade + zehn',
        head: ['Nº', 'Alemão', 'Observação'],
        rows: [
          ['13', 'dreizehn', 'drei + zehn'],
          ['14', 'vierzehn', ''],
          ['15', 'fünfzehn', ''],
          ['16', 'sechzehn', '⚠ sechs perde o s: sechzehn'],
          ['17', 'siebzehn', '⚠ sieben perde o en: siebzehn'],
          ['18', 'achtzehn', ''],
          ['19', 'neunzehn', '']
        ]
      },
      {
        kind: 'table',
        title: 'As dezenas: -zig',
        head: ['Nº', 'Alemão', 'Observação'],
        rows: [
          ['20', 'zwanzig', 'não é "zweizig"'],
          ['30', 'dreißig', '⚠ única com -ßig'],
          ['40', 'vierzig', ''],
          ['50', 'fünfzig', ''],
          ['60', 'sechzig', '⚠ sem o s de sechs'],
          ['70', 'siebzig', '⚠ sem o en de sieben'],
          ['80', 'achtzig', ''],
          ['90', 'neunzig', '']
        ],
        note: 'Os mesmos encurtamentos de 16/17 aparecem em 60/70: sechzig, siebzig.'
      },
      {
        kind: 'text',
        title: 'A inversão: 21 = um-e-vinte',
        body: 'De 21 a 99, a fórmula é: UNIDADE + und + DEZENA, tudo numa palavra só:\n• 21 = einundzwanzig (um-e-vinte) — atenção: eins vira ein-\n• 34 = vierunddreißig (quatro-e-trinta)\n• 57 = siebenundfünfzig (sete-e-cinquenta)\n• 99 = neunundneunzig (nove-e-noventa)\nDica de sobrevivência auditiva: quando um alemão dita um número de dois dígitos, ele fala o SEGUNDO dígito primeiro. Anote de trás para frente.'
      },
      {
        kind: 'table',
        title: 'Centenas, milhares, milhão',
        head: ['Nº', 'Alemão', 'Como se monta'],
        rows: [
          ['100', '(ein)hundert', ''],
          ['200', 'zweihundert', 'zwei + hundert'],
          ['245', 'zweihundertfünfundvierzig', '200 + 45 (inversão só nas dezenas)'],
          ['1.000', '(ein)tausend', ''],
          ['3.000', 'dreitausend', ''],
          ['10.000', 'zehntausend', ''],
          ['100.000', 'hunderttausend', ''],
          ['1.000.000', 'eine Million', 'palavra separada, feminina!']
        ],
        note: 'Tudo até 999.999 se escreve numa palavra só. eine Million é substantivo separado.'
      },
      {
        kind: 'text',
        title: 'Preços, telefone e anos',
        body: 'PREÇOS: o alemão usa vírgula e fala "Euro" no meio: 3,50 € = drei Euro fünfzig. 0,80 € = achtzig Cent. Perguntas: Was kostet das? / Wie viel kostet das?\n\nTELEFONE: dita-se dígito a dígito: 0176 389 45 = null eins sieben sechs, drei acht neun, vier fünf. (O zero é null, nunca "o".)\n\nANOS: até 1999, conta-se em CENTENAS: 1998 = neunzehnhundertachtundneunzig (dezenove-centos...). De 2000 em diante, normal: 2026 = zweitausendsechsundzwanzig. E "em 1998" = 1998 sozinho ou im Jahr 1998 — nunca "in 1998".'
      },
      {
        kind: 'tip',
        title: 'eins perde o s',
        body: 'eins só é "eins" quando está sozinho (contando: eins, zwei, drei...).\nDentro de números compostos e antes de substantivos, vira ein-:\n• 21 = einundzwanzig\n• 101 = hunderteins (exceção: no FIM pode ser eins)\n• 1 hora = ein Uhr\nRegra prática: eins no fim da fala, ein- no meio.'
      },
      {
        kind: 'examples',
        title: 'Números em frases reais',
        items: [
          { de: 'Das kostet drei Euro fünfzig.', pt: 'Isso custa três euros e cinquenta.' },
          { de: 'Ich bin achtundzwanzig Jahre alt.', pt: 'Eu tenho vinte e oito anos.' },
          { de: 'Meine Telefonnummer ist null eins sieben sechs, drei acht neun.', pt: 'Meu telefone é 0176 389.' },
          { de: 'Der Bus Nummer siebenundvierzig kommt.', pt: 'O ônibus número 47 está chegando.' },
          { de: 'Wir haben zweihundertfünfzig Euro.', pt: 'Nós temos 250 euros.' },
          { de: 'Ich wohne hier seit zweitausendsechsundzwanzig.', pt: 'Eu moro aqui desde 2026.' },
          { de: 'Meine Mutter ist neunzehnhundertsiebzig geboren.', pt: 'Minha mãe nasceu em 1970.' },
          { de: 'Ein Kaffee kostet zwei Euro neunzig.', pt: 'Um café custa dois euros e noventa.' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Auf dem Markt: Preise und Nummern',
        lines: [
          { who: 'Lena', de: 'Paulo, wie ist deine Telefonnummer?', pt: 'Paulo, qual é o seu número de telefone?' },
          { who: 'Paulo', de: 'Null eins sieben sechs — drei acht neun — vier fünf.', pt: '0176 — 389 — 45.' },
          { who: 'Lena', de: 'Danke! Und was kostet der Kaffee hier?', pt: 'Obrigada! E quanto custa o café aqui?' },
          { who: 'Paulo', de: 'Drei Euro fünfzig.', pt: 'Três euros e cinquenta.' },
          { who: 'Lena', de: 'Und zwei Croissants?', pt: 'E dois croissants?' },
          { who: 'Paulo', de: 'Vier Euro achtzig. Zusammen: acht Euro dreißig.', pt: 'Quatro euros e oitenta. Total: oito euros e trinta.' },
          { who: 'Lena', de: 'Du rechnest so schnell!', pt: 'Você calcula tão rápido!' },
          { who: 'Paulo', de: 'Ich übe Zahlen jeden Tag — einundzwanzig, zweiundzwanzig, dreiundzwanzig...', pt: 'Eu treino números todo dia — vinte e um, vinte e dois, vinte e três...' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'zwanzigeins (para 21)', richtig: 'einundzwanzig', why: 'A ordem alemã é invertida: unidade + und + dezena, numa palavra só.' },
          { falsch: 'dreizig / dreisig', richtig: 'dreißig', why: '30 é a única dezena com ß: dreißig.' },
          { falsch: 'sechszehn / siebenzig', richtig: 'sechzehn / siebzig', why: '16 e 60 perdem o s de sechs; 17 e 70 perdem o en de sieben.' },
          { falsch: 'eintausendneunhundertachtundneunzig (para o ano 1998)', richtig: 'neunzehnhundertachtundneunzig', why: 'Anos até 1999 se falam em centenas: "dezenove-centos e noventa e oito".' },
          { falsch: 'einsundzwanzig', richtig: 'einundzwanzig', why: 'eins perde o s dentro de números compostos: ein + und + zwanzig.' }
        ]
      },
      {
        kind: 'tip',
        title: 'Treino de rua',
        body: 'Números só entram no automático com uso ESPALHADO no dia:\n• Leia placas de carro em alemão mentalmente.\n• Diga o preço de cada coisa que comprar.\n• Fale seu telefone e seu ano de nascimento em voz alta uma vez por dia.\nMeta: ouvir vierundsiebzig e escrever 74 sem pensar "quatro... e setenta... 74". Isso leva uma semana de prática de rua.'
      }
    ],
    quiz: [
      { kind: 'gap', before: '21 =', after: '', answer: ['einundzwanzig'], hint: 'Unidade primeiro, tudo junto.' },
      { kind: 'choice', prompt: 'Como se escreve 30?', options: ['dreizig', 'dreißig', 'dreisig', 'dreizehn'], answer: 1, hint: 'A única dezena com ß.' },
      { kind: 'gap', before: '16 =', after: '', answer: ['sechzehn'], hint: 'sechs perde o s.' },
      { kind: 'choice', prompt: '70 em alemão é...', options: ['siebenzig', 'siebzig', 'siebenzehn', 'sieben'], answer: 1 },
      { kind: 'gap', before: '3,50 € = drei Euro', after: '', answer: ['fünfzig', 'fuenfzig'], hint: 'Os centavos vêm depois de Euro.' },
      { kind: 'choice', prompt: 'O ano 1998 se diz...', options: ['eintausendneunhundertachtundneunzig', 'neunzehnhundertachtundneunzig', 'neunzehnneunundachtzig', 'neunhundertachtundneunzig'], answer: 1, hint: 'Anos até 1999: em centenas.' },
      { kind: 'gap', before: '2026 =', after: '', answer: ['zweitausendsechsundzwanzig'], hint: 'zwei + tausend + 26 invertido.' },
      { kind: 'choice', prompt: '99 em alemão é...', options: ['neunzigneun', 'neunundneunzig', 'neunneunzig', 'neunzehnneun'], answer: 1 },
      { kind: 'order', words: ['Das', 'kostet', 'drei', 'Euro', 'fünfzig'], answer: 'Das kostet drei Euro fünfzig' },
      { kind: 'choice', prompt: '245 em alemão é...', options: ['zweihundertvierzigfünf', 'zweihundertfünfundvierzig', 'fünfundvierzigzweihundert', 'zweihundertvierundfünfzig'], answer: 1, hint: 'A inversão só acontece nas dezenas: 200 + cinco-e-quarenta.' }
    ]
  }
]
