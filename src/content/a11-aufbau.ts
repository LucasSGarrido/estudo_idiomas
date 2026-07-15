import type { Module } from './types'

export const A11_AUFBAU: Module[] = [
  // ═══ 08 · Uhrzeit formal & Tageszeiten ═══
  {
    id: 'a11-uhrzeit-formal',
    level: 'a11',
    num: '08',
    title: 'Uhrzeit formal & Tageszeiten',
    subtitle: 'A hora oficial, as partes do dia e as preposições de tempo',
    shape: 'triangle',
    minutes: 35,
    vocabTags: ['zahlen-zeit', 'alltag', 'frases'],
    sections: [
      {
        kind: 'text',
        title: 'A hora que aparece em todo lugar',
        body: 'Estação de trem, consultório, repartição pública, TV: a Alemanha oficial fala a hora no formato 24h — e ela é ridiculamente simples. A fórmula é sempre: NÚMERO DA HORA + Uhr + NÚMERO DOS MINUTOS.\n14:30 = vierzehn Uhr dreißig. Só isso. Nada de "meia", "quinze para" ou contas mentais — você recicla direto os números do módulo 07.\nAs perguntas: Wie spät ist es? / Wie viel Uhr ist es? = Que horas são? → resposta com Es ist...\nE para eventos: Wann beginnt der Kurs? / Um wie viel Uhr kommst du? → resposta com Um...'
      },
      {
        kind: 'table',
        title: 'A fórmula: Stunde + Uhr + Minuten',
        head: ['Relógio', 'Em alemão', 'Português'],
        rows: [
          ['07:00', 'sieben Uhr', 'sete horas'],
          ['07:05', 'sieben Uhr fünf', 'sete e cinco'],
          ['09:15', 'neun Uhr fünfzehn', 'nove e quinze'],
          ['12:00', 'zwölf Uhr (mittags)', 'meio-dia'],
          ['13:00', 'dreizehn Uhr', 'treze horas'],
          ['14:30', 'vierzehn Uhr dreißig', 'quatorze e trinta'],
          ['18:45', 'achtzehn Uhr fünfundvierzig', 'dezoito e quarenta e cinco'],
          ['21:10', 'einundzwanzig Uhr zehn', 'vinte e uma e dez'],
          ['00:00', 'null Uhr / Mitternacht', 'meia-noite'],
          ['01:00', 'ein Uhr (nachts)', 'uma hora — atenção: EIN Uhr, sem -s']
        ],
        note: 'Depois do meio-dia o alemão oficial continua contando: 13, 14... 23 Uhr. E entre hora e minutos NÃO entra "und": 20:30 = zwanzig Uhr dreißig.'
      },
      {
        kind: 'table',
        title: 'Preposições de tempo com a hora',
        head: ['Preposição', 'Significado', 'Exemplo'],
        rows: [
          ['um', 'às (hora exata)', 'Der Kurs beginnt um 9 Uhr.'],
          ['gegen', 'por volta de', 'Ich komme gegen 18 Uhr.'],
          ['von ... bis', 'de ... até', 'Ich arbeite von 8 bis 17 Uhr.'],
          ['ab', 'a partir de', 'Ab 19 Uhr bin ich zu Hause.'],
          ['bis', 'até', 'Der Supermarkt ist bis 22 Uhr geöffnet.'],
          ['zwischen ... und', 'entre ... e', 'Der Techniker kommt zwischen 10 und 12 Uhr.']
        ],
        note: 'Wann? com hora exata → sempre um. Nunca "in 9 Uhr" nem "am 9 Uhr": às 9h = um 9 Uhr.'
      },
      {
        kind: 'table',
        title: 'As partes do dia',
        head: ['Substantivo', 'Advérbio (-s)', 'Faixa aproximada'],
        rows: [
          ['der Morgen', 'morgens', '±6h–10h'],
          ['der Vormittag', 'vormittags', '±10h–12h'],
          ['der Mittag', 'mittags', '±12h–14h'],
          ['der Nachmittag', 'nachmittags', '±14h–18h'],
          ['der Abend', 'abends', '±18h–22h'],
          ['die Nacht', 'nachts', '±22h–6h']
        ],
        note: 'A forma com -s e minúscula (morgens) = "de manhã, habitualmente". Com o substantivo usa-se am: am Morgen, am Abend — exceção: in der Nacht.'
      },
      {
        kind: 'text',
        title: 'um, am, im — o trio das preposições de tempo',
        body: 'O alemão divide o tempo em três tamanhos, e cada tamanho tem sua preposição:\n• um + hora: um 8 Uhr (às 8h)\n• am + dia ou parte do dia: am Montag, am Wochenende, am Morgen, am Nachmittag\n• im + mês ou estação: im Januar, im Sommer\n\nOs dias da semana (todos der, todos com am): Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.\nOs meses (todos com im): Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.\nAs estações (com im): der Frühling, der Sommer, der Herbst, der Winter.\nAno fica sozinho, sem preposição: Ich komme 2026 nach Deutschland.'
      },
      {
        kind: 'table',
        title: 'Um dia inteiro em horários',
        head: ['Uhrzeit', 'Frase', 'Tradução'],
        rows: [
          ['06:30', 'Um sechs Uhr dreißig klingelt der Wecker.', 'Às 6h30 o despertador toca.'],
          ['08:00', 'Morgens um acht beginnt die Arbeit.', 'De manhã às 8 começa o trabalho.'],
          ['10:30', 'Vormittags trinke ich einen Kaffee.', 'No meio da manhã tomo um café.'],
          ['12:30', 'Mittags esse ich in der Kantine.', 'Ao meio-dia como na cantina.'],
          ['15:00', 'Nachmittags habe ich einen Termin.', 'À tarde tenho um compromisso.'],
          ['17:30', 'Um siebzehn Uhr dreißig fahre ich nach Hause.', 'Às 17h30 vou para casa.'],
          ['20:00', 'Abends sehe ich die Nachrichten.', 'À noite vejo o noticiário.'],
          ['23:00', 'Nachts schlafe ich.', 'De noite eu durmo.']
        ],
        note: 'No formato 24h você não precisa de morgens/abends: 20 Uhr já diz que é noite. Com números de 1 a 12, adicione a parte do dia: um acht Uhr abends = às 20h.'
      },
      {
        kind: 'tip',
        title: 'um vs. gegen — o detalhe que salva reuniões',
        body: 'um 15 Uhr = às 15h EM PONTO. gegen 15 Uhr = lá pelas 15h.\nNa Alemanha, um 15 Uhr significa 15:00:00 — chegar 14:55 é educado, chegar 15:10 é atraso de verdade, com pedido de desculpas e tudo. Se você quer margem, diga gegen. Se o alemão disse um, chegue antes.'
      },
      {
        kind: 'examples',
        title: 'Horas oficiais em ação',
        items: [
          { de: 'Wie spät ist es? — Es ist vierzehn Uhr dreißig.', pt: 'Que horas são? — São 14h30.' },
          { de: 'Der Zug nach Berlin fährt um sechzehn Uhr siebenundvierzig.', pt: 'O trem para Berlim parte às 16h47.' },
          { de: 'Der Film beginnt um zwanzig Uhr fünfzehn.', pt: 'O filme começa às 20h15.' },
          { de: 'Ich arbeite von neun bis achtzehn Uhr.', pt: 'Eu trabalho das 9h às 18h.' },
          { de: 'Ab elf Uhr bin ich im Büro.', pt: 'A partir das 11h estou no escritório.' },
          { de: 'Ich komme gegen sieben Uhr abends.', pt: 'Eu chego lá pelas 7 da noite.' },
          { de: 'Um Mitternacht schlafe ich schon.', pt: 'À meia-noite eu já estou dormindo.' },
          { de: 'Es ist ein Uhr. / Es ist eins.', pt: 'É uma hora. (com Uhr: ein, sem -s; sozinho: eins)' }
        ]
      },
      {
        kind: 'text',
        title: 'Öffnungszeiten — lendo placas e sites',
        body: 'Vocabulário de sobrevivência para portas de loja:\n• geöffnet = aberto | geschlossen = fechado\n• die Öffnungszeiten = horário de funcionamento\n• Die Bank öffnet um 9 Uhr und schließt um 16 Uhr. (abre / fecha)\n• durchgehend geöffnet = aberto direto, sem pausa de almoço\n• der Ruhetag = dia de descanso do restaurante (Montag Ruhetag = fecha às segundas)\nChoque cultural: na Alemanha quase TUDO fecha aos domingos — supermercado inclusive (sonntags geschlossen). Planeje as compras no sábado, ou o domingo será de geladeira vazia.'
      },
      {
        kind: 'table',
        title: 'A placa de uma clínica, decifrada',
        head: ['Placa', 'Como se lê', 'Significado'],
        rows: [
          ['Mo–Fr 8:00–18:00 Uhr', 'montags bis freitags von acht bis achtzehn Uhr', 'seg a sex, das 8h às 18h'],
          ['Sa 9:00–13:00 Uhr', 'samstags von neun bis dreizehn Uhr', 'sáb, das 9h às 13h'],
          ['So geschlossen', 'sonntags geschlossen', 'fechado aos domingos'],
          ['Mittagspause 12–14 Uhr', 'Mittagspause von zwölf bis vierzehn Uhr', 'pausa de almoço das 12h às 14h']
        ],
        note: 'montags, dienstags... (dia + s, minúscula) = "toda segunda, toda terça". Compare: am Montag = na segunda(-feira).'
      },
      {
        kind: 'examples',
        title: 'Marcando compromissos',
        items: [
          { de: 'Haben Sie am Donnerstag um 10 Uhr Zeit?', pt: 'O senhor tem tempo na quinta às 10h?' },
          { de: 'Der Termin ist am Freitag um 14:30 Uhr.', pt: 'A consulta é na sexta às 14h30.' },
          { de: 'Wann sind Sie geöffnet? — Von Montag bis Freitag.', pt: 'Quando vocês abrem? — De segunda a sexta.' },
          { de: 'Die Apotheke ist mittags geschlossen.', pt: 'A farmácia fecha ao meio-dia.' },
          { de: 'Im Sommer arbeite ich nur vormittags.', pt: 'No verão trabalho só de manhã.' },
          { de: 'Am Wochenende habe ich frei.', pt: 'No fim de semana estou de folga.' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Ein Termin beim Zahnarzt',
        lines: [
          { who: 'Lena', de: 'Zahnarztpraxis Dr. Weber, guten Tag!', pt: 'Consultório odontológico Dr. Weber, bom dia!' },
          { who: 'Paulo', de: 'Guten Tag, hier ist Paulo Andrade. Ich brauche einen Termin.', pt: 'Bom dia, aqui é Paulo Andrade. Eu preciso de um horário.' },
          { who: 'Lena', de: 'Gern. Geht es am Mittwoch um 9 Uhr?', pt: 'Claro. Pode ser na quarta às 9h?' },
          { who: 'Paulo', de: 'Am Mittwoch arbeite ich vormittags. Geht es auch nachmittags?', pt: 'Na quarta eu trabalho de manhã. Dá também à tarde?' },
          { who: 'Lena', de: 'Moment... Mittwoch um 15:30 Uhr?', pt: 'Um momento... quarta às 15h30?' },
          { who: 'Paulo', de: 'Um fünfzehn Uhr dreißig? Ja, das passt gut.', pt: 'Às 15h30? Sim, encaixa bem.' },
          { who: 'Lena', de: 'Gut, also Mittwoch um 15:30 Uhr. Kommen Sie bitte zehn Minuten früher.', pt: 'Ótimo, então quarta às 15h30. Venha dez minutos mais cedo, por favor.' },
          { who: 'Paulo', de: 'Kein Problem. Wie lange dauert der Termin?', pt: 'Sem problema. Quanto tempo dura a consulta?' },
          { who: 'Lena', de: 'Ungefähr eine halbe Stunde.', pt: 'Aproximadamente meia hora.' },
          { who: 'Paulo', de: 'Perfekt. Vielen Dank, auf Wiederhören!', pt: 'Perfeito. Muito obrigado, até logo (ao telefone)!' },
          { who: 'Lena', de: 'Auf Wiederhören, Herr Andrade!', pt: 'Até logo, senhor Andrade!' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Der Kurs beginnt in 9 Uhr.', richtig: 'Der Kurs beginnt um 9 Uhr.', why: 'Hora exata usa um — nunca in. O "in" do inglês/português não vale para horas.' },
          { falsch: 'Am 15 Uhr habe ich einen Termin.', richtig: 'Um 15 Uhr habe ich einen Termin.', why: 'am é para dias (am Montag); hora é sempre um.' },
          { falsch: 'Im Montag arbeite ich nicht.', richtig: 'Am Montag arbeite ich nicht.', why: 'Dias da semana usam am. im fica para meses e estações (im Januar, im Sommer).' },
          { falsch: 'Es ist eine Uhr.', richtig: 'Es ist ein Uhr. / Es ist eins.', why: 'ein Uhr (sem terminação) = 1h no relógio. Eine Uhr = UM RELÓGIO (o objeto).' },
          { falsch: 'zwanzig Uhr und dreißig', richtig: 'zwanzig Uhr dreißig', why: 'Na hora oficial não existe und entre hora e minutos.' },
          { falsch: 'Der Film dauert zwei Uhr.', richtig: 'Der Film dauert zwei Stunden.', why: 'Uhr = hora do relógio (que horas são); Stunde = duração de 60 minutos (quanto tempo).' }
        ]
      },
      {
        kind: 'text',
        title: 'Radar: a hora informal (halb, Viertel)',
        body: 'No dia a dia os alemães também usam a hora informal, contada de 1 a 12:\n• Viertel nach acht = 8h15 (um quarto DEPOIS das 8)\n• halb neun = 8h30 — CUIDADO: literalmente "metade do caminho PARA as nove". halb neun NÃO é 9h30!\n• Viertel vor neun = 8h45 (um quarto ANTES das 9)\n• kurz nach acht / kurz vor acht = pouco depois / pouco antes das 8\nRegra de sobrevivência: a hora FORMAL (acht Uhr dreißig) funciona em qualquer situação e ninguém entende errado — use-a até a informal virar natural. Mas quando um alemão disser halb neun, o alarme tem que tocar: 8h30, não 9h30. Esse mal-entendido já perdeu muito voo.'
      },
      {
        kind: 'tip',
        title: 'Método: o relógio narrado',
        body: 'Durante uma semana, toda vez que olhar as horas, diga a hora em voz alta no formato oficial: 16:42 → sechzehn Uhr zweiundvierzig. São 10-15 repetições diárias de graça.\nDepois narre a agenda de amanhã em 5 frases com as preposições: Um 9 Uhr beginne ich die Arbeit. Von 12 bis 13 Uhr esse ich. Ab 18 Uhr bin ich frei. Gegen 22 Uhr schlafe ich. Am Samstag habe ich frei. Hora + preposição juntas é o que a prova (e a vida) cobra.'
      }
    ],
    quiz: [
      { kind: 'choice', prompt: '14:30 na hora oficial é...', options: ['vierzehn Uhr dreißig', 'halb vierzehn', 'vier Uhr dreißig', 'vierzehn und dreißig Uhr'], answer: 0, hint: 'Hora + Uhr + minutos, sem und.' },
      { kind: 'gap', before: 'Der Deutschkurs beginnt', after: '9 Uhr.', answer: ['um'], hint: 'Hora exata.' },
      { kind: 'gap', before: 'Ich arbeite', after: '8 bis 17 Uhr.', answer: ['von'], hint: 'de ... até = ? ... bis.' },
      { kind: 'choice', prompt: '"Ich komme gegen 18 Uhr" significa...', options: ['às 18h em ponto', 'lá pelas 18h', 'a partir das 18h', 'até as 18h'], answer: 1, hint: 'gegen = aproximação.' },
      { kind: 'gap', before: 'Der Termin ist', after: 'Montag.', answer: ['am'], hint: 'Dia da semana.' },
      { kind: 'gap', before: 'Ich habe', after: 'Juli Geburtstag.', answer: ['im'], hint: 'Mês → im.' },
      { kind: 'choice', prompt: 'É 01:00. Você diz...', options: ['Es ist eine Uhr.', 'Es ist ein Uhr.', 'Es ist eins Uhr.', 'Es ist erste Uhr.'], answer: 1, hint: 'eine Uhr = um relógio (objeto)!' },
      { kind: 'choice', prompt: 'O que significa "halb neun"?', options: ['9h30', '8h30', '9h15', '8h45'], answer: 1, hint: 'Metade do caminho PARA as nove.' },
      { kind: 'order', words: ['Abends', 'sehe', 'ich', 'die', 'Nachrichten'], answer: 'Abends sehe ich die Nachrichten', hint: 'Tempo na 1ª posição → sujeito e verbo invertem.' },
      { kind: 'gap', before: 'Die Bank ist', after: '22 Uhr geöffnet.', answer: ['bis'], hint: 'até.' },
      { kind: 'choice', prompt: '"So geschlossen" na porta da loja significa...', options: ['fechado para sempre', 'fechado aos domingos', 'fechado no verão', 'aberto só de manhã'], answer: 1, hint: 'So = Sonntag.' },
      { kind: 'choice', prompt: 'Der Film dauert zwei ___.', options: ['Uhr', 'Uhren', 'Stunden', 'Stunde'], answer: 2, hint: 'Duração = Stunde(n); Uhr = hora do relógio.' },
      { kind: 'gap', before: '15:45 = fünfzehn Uhr', after: '', answer: ['fünfundvierzig', 'fuenfundvierzig'], hint: 'Minutos como número normal (módulo 07).' }
    ]
  },

  // ═══ 09 · Der Akkusativ ═══
  {
    id: 'a11-akkusativ',
    level: 'a11',
    num: '09',
    title: 'Der Akkusativ',
    subtitle: 'O caso do objeto direto — onde só o masculino trabalha',
    shape: 'half',
    minutes: 35,
    vocabTags: ['gramatica', 'comida', 'verbos'],
    sections: [
      {
        kind: 'text',
        title: 'O primeiro caso que muda alguma coisa',
        body: 'O alemão marca a FUNÇÃO das palavras na frase com casos. Até aqui você usou o Nominativ: o caso do sujeito (quem faz a ação). Agora entra o Akkusativ: o caso do objeto direto (quem RECEBE a ação).\nDer Mann trinkt einen Kaffee. → der Mann é sujeito (Nominativ), einen Kaffee é objeto (Akkusativ).\nA notícia excelente: no Akkusativ, feminino, neutro e plural ficam EXATAMENTE iguais ao Nominativ. Só o masculino muda — e muda sempre do mesmo jeito: ganha -en. Todo o caso se resume a isso.'
      },
      {
        kind: 'table',
        title: 'Nominativ → Akkusativ: a tabela completa',
        head: ['Gênero', 'Nominativ', 'Akkusativ', 'Exemplo'],
        rows: [
          ['masculino', 'der / ein / kein / mein', 'den / einen / keinen / meinen', 'Ich sehe den Mann.'],
          ['feminino', 'die / eine / keine / meine', 'die / eine / keine / meine (igual!)', 'Ich sehe die Frau.'],
          ['neutro', 'das / ein / kein / mein', 'das / ein / kein / mein (igual!)', 'Ich sehe das Kind.'],
          ['plural', 'die / — / keine / meine', 'die / — / keine / meine (igual!)', 'Ich sehe die Kinder.']
        ],
        note: 'Toda a energia do Akkusativ mora numa célula só: o masculino ganha -en (den, einen, keinen, meinen, deinen, seinen, ihren...).'
      },
      {
        kind: 'tip',
        title: 'A regra dos 25%',
        body: 'Só 1 em cada 4 gêneros muda no Akkusativ. Se o substantivo NÃO é masculino, você não pensa em nada — a forma é idêntica ao Nominativ.\nPor isso vale dobrar o investimento em decorar gêneros (módulo 05): quem sabe que Tisch é der acerta einen Tisch automaticamente. Quem não sabe, erra os dois.'
      },
      {
        kind: 'table',
        title: 'Verbos que pedem Akkusativ — os campeões do A1',
        head: ['Verbo', 'Significado', 'Exemplo'],
        rows: [
          ['haben', 'ter', 'Ich habe einen Bruder.'],
          ['kaufen', 'comprar', 'Er kauft einen Tisch.'],
          ['essen', 'comer', 'Sie isst einen Apfel.'],
          ['trinken', 'beber', 'Wir trinken einen Kaffee.'],
          ['sehen', 'ver', 'Siehst du den Film?'],
          ['suchen', 'procurar', 'Ich suche meinen Schlüssel.'],
          ['brauchen', 'precisar de', 'Sie braucht einen Stift.'],
          ['nehmen', 'pegar / "vou querer"', 'Ich nehme den Salat.'],
          ['lieben', 'amar', 'Er liebt seinen Job.'],
          ['möchten', 'querer (educado)', 'Ich möchte einen Tee.'],
          ['es gibt', 'há / tem', 'Es gibt einen Park.']
        ],
        note: 'A grande maioria dos verbos alemães pede Akkusativ. Os que pedem Dativ são a minoria — chegam no A1.2.'
      },
      {
        kind: 'text',
        title: 'es gibt — o "tem" do alemão',
        body: 'Para dizer que algo existe (há / tem), o alemão usa es gibt — SEMPRE com Akkusativ:\n• Es gibt einen Supermarkt in der Nähe. (Tem um supermercado perto.)\n• Gibt es hier eine Toilette? (Tem banheiro aqui?)\n• Es gibt keinen Parkplatz. (Não tem estacionamento.)\nO es é um sujeito fantasma que nunca muda. A coisa que existe é o OBJETO de gibt — por isso o masculino ganha -en.\nBônus idiomático: Was gibt es heute zum Mittagessen? = O que tem hoje de almoço?'
      },
      {
        kind: 'table',
        title: 'Pronomes pessoais no Akkusativ',
        head: ['Nominativ', 'Akkusativ', 'Exemplo'],
        rows: [
          ['ich', 'mich', 'Siehst du mich?'],
          ['du', 'dich', 'Ich liebe dich.'],
          ['er', 'ihn', 'Ich sehe ihn nicht.'],
          ['sie (ela)', 'sie', 'Ich besuche sie morgen.'],
          ['es', 'es', 'Ich kaufe es.'],
          ['wir', 'uns', 'Er besucht uns.'],
          ['ihr', 'euch', 'Ich höre euch nicht.'],
          ['sie (eles)', 'sie', 'Ich kenne sie gut.'],
          ['Sie (formal)', 'Sie', 'Ich verstehe Sie.']
        ],
        note: 'er → ihn é o único pronome que muda de cara — e combina com der → den. sie, es, Sie ficam iguais.'
      },
      {
        kind: 'text',
        title: 'Wer? Wen? Was? — perguntando pelo sujeito e pelo objeto',
        body: '• Wer? = quem (SUJEITO, Nominativ): Wer kommt heute? — Paulo kommt.\n• Wen? = quem (OBJETO, Akkusativ): Wen besuchst du? — Meinen Onkel.\n• Was? = o quê (serve para sujeito e objeto): Was ist das? / Was kaufst du?\n\nO teste do objeto direto, importado do português: pergunte "verbo + o quê/quem?".\nIch kaufe... o quê? → einen Tisch → objeto direto → Akkusativ.\nSe a resposta é uma pessoa, a pergunta alemã é Wen?; se é coisa, Was?.'
      },
      {
        kind: 'examples',
        title: 'Akkusativ no dia a dia',
        items: [
          { de: 'Ich habe einen Hund und eine Katze.', pt: 'Eu tenho um cachorro e uma gata.' },
          { de: 'Er trinkt morgens einen Kaffee.', pt: 'Ele toma um café de manhã.' },
          { de: 'Wir kaufen einen Tisch und vier Stühle.', pt: 'Compramos uma mesa e quatro cadeiras.' },
          { de: 'Ich esse ein Brötchen und einen Apfel.', pt: 'Como um pãozinho e uma maçã.' },
          { de: 'Sie sucht ihren Schlüssel.', pt: 'Ela procura a chave dela.' },
          { de: 'Ich nehme den Fisch, bitte.', pt: 'Vou querer o peixe, por favor. (no restaurante)' },
          { de: 'Es gibt hier keinen Aufzug.', pt: 'Não tem elevador aqui.' }
        ]
      },
      {
        kind: 'tip',
        title: 'einen = "vou querer um"',
        body: 'Superpoder de balcão: o alemão corta a frase e deixa só o objeto — que continua no Akkusativ mesmo sem verbo, porque o "ich möchte" fica subentendido:\n• Einen Kaffee, bitte! / Einen Orangensaft, bitte!\nÉ por isso que você ouve einen e não ein no café. E o clássico Einen Moment, bitte! (Um momento!) é o mesmo fenômeno.'
      },
      {
        kind: 'examples',
        title: 'Pronomes em ação',
        items: [
          { de: 'Kennst du Paulo? — Ja, ich kenne ihn gut.', pt: 'Você conhece o Paulo? — Sim, eu o conheço bem.' },
          { de: 'Wo ist mein Handy? Ich suche es.', pt: 'Onde está meu celular? Estou procurando ele.' },
          { de: 'Ich besuche dich am Samstag.', pt: 'Eu te visito no sábado.' },
          { de: 'Verstehen Sie mich?', pt: 'O senhor está me entendendo?' },
          { de: 'Magst du den Film? — Ja, ich finde ihn super.', pt: 'Você gosta do filme? — Sim, eu o acho ótimo.' },
          { de: 'Er besucht uns im Winter.', pt: 'Ele nos visita no inverno.' }
        ]
      },
      {
        kind: 'dialog',
        title: 'Auf dem Markt',
        lines: [
          { who: 'Lena', de: 'Guten Morgen! Was möchten Sie?', pt: 'Bom dia! O que o senhor deseja?' },
          { who: 'Paulo', de: 'Guten Morgen! Ich brauche Tomaten und einen Salat.', pt: 'Bom dia! Preciso de tomates e um pé de alface.' },
          { who: 'Lena', de: 'Gern. Wie viele Tomaten?', pt: 'Claro. Quantos tomates?' },
          { who: 'Paulo', de: 'Ein Kilo, bitte. Haben Sie auch Käse?', pt: 'Um quilo, por favor. A senhora também tem queijo?' },
          { who: 'Lena', de: 'Ja, wir haben einen Bergkäse aus Österreich. Möchten Sie ihn probieren?', pt: 'Sim, temos um queijo de montanha da Áustria. Quer provar (ele)?' },
          { who: 'Paulo', de: 'Ja, gern! ... Mmh, der ist gut. Ich nehme ihn.', pt: 'Sim, claro! ... Mmm, esse é bom. Vou levar (ele).' },
          { who: 'Lena', de: 'Zweihundert Gramm?', pt: 'Duzentos gramas?' },
          { who: 'Paulo', de: 'Ja, genau. Und ich suche noch einen Blumenkohl.', pt: 'Sim, exato. E ainda estou procurando uma couve-flor.' },
          { who: 'Lena', de: 'Tut mir leid, Blumenkohl haben wir heute nicht. Aber es gibt einen schönen Brokkoli.', pt: 'Sinto muito, couve-flor não temos hoje. Mas tem um brócolis bonito.' },
          { who: 'Paulo', de: 'Gut, dann nehme ich den Brokkoli. Das ist alles.', pt: 'Está bem, então levo o brócolis. É só isso.' },
          { who: 'Lena', de: 'Das macht acht Euro zwanzig.', pt: 'Deu oito euros e vinte.' },
          { who: 'Paulo', de: 'Bitte schön. Danke, tschüss!', pt: 'Aqui está. Obrigado, tchau!' }
        ]
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich habe ein Bruder.', richtig: 'Ich habe einen Bruder.', why: 'Bruder é masculino e objeto de haben → ein ganha -en.' },
          { falsch: 'Ich sehe der Film.', richtig: 'Ich sehe den Film.', why: 'der Film é objeto direto de sehen → der vira den.' },
          { falsch: 'Es gibt ein Park in der Nähe.', richtig: 'Es gibt einen Park in der Nähe.', why: 'es gibt SEMPRE pede Akkusativ — e Park é masculino.' },
          { falsch: 'Ich liebe du.', richtig: 'Ich liebe dich.', why: 'Objeto direto → pronome no Akkusativ: du vira dich.' },
          { falsch: 'Kennst du Herrn Weber? — Ja, ich kenne er.', richtig: 'Ja, ich kenne ihn.', why: 'er (Nominativ) vira ihn no Akkusativ — a mesma mudança de der → den.' },
          { falsch: 'Wer besuchst du?', richtig: 'Wen besuchst du?', why: 'Perguntando pelo OBJETO (quem você visita) usa-se Wen. Wer é só para o sujeito.' }
        ]
      },
      {
        kind: 'text',
        title: 'Cuidado: sein não pede Akkusativ',
        body: 'Depois de sein (e de heißen e werden), os dois lados da frase ficam no Nominativ — não há ação passando para um objeto, é uma igualdade:\n• Das ist ein guter Film. (NUNCA "einen guten Film" — ist não é ação!)\n• Er ist mein Bruder. / Das ist der Chef.\nCompare: Ich sehe einen Film (Akkusativ — ação de ver) vs. Das ist ein Film (Nominativ — igualdade).\nOutra curiosidade que você já viu sem saber: expressões de tempo sem preposição usam Akkusativ — jeden Tag (todo dia), nächsten Monat (mês que vem). Por enquanto, decore como blocos prontos; a lógica completa vem depois.'
      },
      {
        kind: 'tip',
        title: 'Método: caça ao -en',
        body: 'Pegue qualquer texto curto em alemão e circule todos os den / einen / keinen / meinen. Para cada um, pergunte: qual verbo causou isso? Você vai encontrar os mesmos suspeitos (haben, es gibt, kaufen, brauchen...).\nDepois produza: escreva 5 frases "tenho / compro / procuro / preciso de + coisa masculina" — Hund, Tisch, Stuhl, Schlüssel, Computer. Uma semana disso e o -en entra no automático.'
      }
    ],
    quiz: [
      { kind: 'gap', before: 'Ich habe', after: 'Bruder. (ein)', answer: ['einen'], hint: 'Bruder é masculino, objeto de haben.' },
      { kind: 'choice', prompt: 'Qual gênero muda no Akkusativ?', options: ['todos', 'só o masculino', 'masculino e neutro', 'só o plural'], answer: 1 },
      { kind: 'gap', before: 'Siehst du', after: 'Mann dort? (der)', answer: ['den'], hint: 'der → ? no Akkusativ.' },
      { kind: 'choice', prompt: 'Es gibt ___ Supermarkt hier.', options: ['ein', 'einen', 'einem', 'der'], answer: 1, hint: 'es gibt + Akkusativ.' },
      { kind: 'gap', before: 'Ich liebe', after: '. (você, informal)', answer: ['dich'], hint: 'du no Akkusativ.' },
      { kind: 'choice', prompt: 'Kennst du Herrn Weber? — Ja, ich kenne ___ gut.', options: ['er', 'ihm', 'ihn', 'sie'], answer: 2, hint: 'er → ihn, como der → den.' },
      { kind: 'choice', prompt: 'Qual pergunta combina com a resposta "Meinen Schlüssel"?', options: ['Wer suchst du?', 'Wen suchst du?', 'Was suchst du?', 'Wo suchst du?'], answer: 2, hint: 'Chave é coisa, não pessoa.' },
      { kind: 'gap', before: 'Ich möchte', after: 'Kaffee, bitte.', answer: ['einen'], hint: 'der Kaffee + möchten.' },
      { kind: 'order', words: ['Es', 'gibt', 'hier', 'keinen', 'Parkplatz'], answer: 'Es gibt hier keinen Parkplatz', hint: 'es gibt + Akkusativ.' },
      { kind: 'choice', prompt: 'Qual frase está correta?', options: ['Das ist einen guter Film.', 'Das ist ein guter Film.', 'Ich sehe ein Film.', 'Es gibt ein Park.'], answer: 1, hint: 'Depois de sein: Nominativ.' },
      { kind: 'gap', before: 'Sie sucht', after: 'Schlüssel. (o dela)', answer: ['ihren'], hint: 'Possessivo + masculino + Akkusativ = -en.' },
      { kind: 'choice', prompt: 'Ich nehme ___ Salat.', options: ['der', 'den', 'dem', 'das'], answer: 1 },
      { kind: 'gap', before: 'Verstehen Sie', after: '? (eu)', answer: ['mich'], hint: 'ich no Akkusativ.' }
    ]
  },

  // ═══ 10 · Negação: nicht, kein & doch ═══
  {
    id: 'a11-negation',
    level: 'a11',
    num: '10',
    title: 'Negação: nicht, kein & doch',
    subtitle: 'Os dois jeitos de dizer não — e a palavra mágica que o português não tem',
    shape: 'cross',
    minutes: 35,
    vocabTags: ['gramatica', 'frases'],
    sections: [
      {
        kind: 'text',
        title: 'Um "não" vira três',
        body: 'O português resolve toda negação com uma palavra: NÃO. O alemão divide o serviço em três:\n• nicht — nega verbos, adjetivos, advérbios e coisas específicas\n• kein — nega substantivos (é o "nenhum" embutido no artigo)\n• doch — responde "sim!" a uma pergunta negativa\nQuem tenta traduzir "não" ao pé da letra produz frases como "Ich nicht habe Auto" — três erros em quatro palavras. Quem aprende a divisão uma vez nega qualquer frase do A1 sem pensar. Vamos à divisão.'
      },
      {
        kind: 'text',
        title: 'kein — o negador de substantivos',
        body: 'kein nega substantivos que, na frase positiva, teriam ein ou NENHUM artigo:\n• Ich habe ein Auto. → Ich habe kein Auto.\n• Ich habe Zeit. → Ich habe keine Zeit. (Zeit vinha sem artigo)\n• Er trinkt Kaffee. → Er trinkt keinen Kaffee.\n\nO ein-Test: monte a frase positiva mentalmente. Ela usa ein/eine ou substantivo pelado? → negue com kein. A frase tem der/die/das, possessivo, ou você não está negando substantivo nenhum? → nicht.\nkein já significa "não... nenhum": Ich habe kein Auto = Não tenho carro (nenhum). Não precisa de mais nada.'
      },
      {
        kind: 'table',
        title: 'Declinação de kein (Nominativ e Akkusativ)',
        head: ['Gênero', 'Nominativ', 'Akkusativ', 'Exemplo'],
        rows: [
          ['masculino', 'kein', 'keinen', 'Ich habe keinen Hunger.'],
          ['feminino', 'keine', 'keine', 'Wir haben keine Zeit.'],
          ['neutro', 'kein', 'kein', 'Er hat kein Auto.'],
          ['plural', 'keine', 'keine', 'Sie hat keine Kinder.']
        ],
        note: 'kein se comporta exatamente como ein (+ a forma de plural keine). E como sempre no Akkusativ: só o masculino muda — keinen.'
      },
      {
        kind: 'table',
        title: 'As 5 posições do nicht',
        head: ['Regra', 'Exemplo', 'Tradução'],
        rows: [
          ['1. Negando a frase toda → nicht no FIM', 'Ich verstehe das nicht.', 'Eu não entendo isso.'],
          ['2. Antes de adjetivo', 'Das Haus ist nicht groß.', 'A casa não é grande.'],
          ['3. Antes de advérbio', 'Er fährt nicht schnell.', 'Ele não dirige rápido.'],
          ['4. Antes de preposição + lugar', 'Wir wohnen nicht in Berlin.', 'Não moramos em Berlim.'],
          ['5. Antes do elemento contrastado', 'Das ist nicht Paulo, das ist Pedro.', 'Esse não é o Paulo, é o Pedro.']
        ],
        note: 'Resumo prático: nicht tende ao fim da frase, MAS pula para a frente do elemento específico que você nega (adjetivo, advérbio, lugar, nome).'
      },
      {
        kind: 'tip',
        title: 'O fluxograma de 3 segundos',
        body: 'Negando um substantivo que teria ein ou nada na frente? → kein (concordando em gênero e caso).\nQualquer outra coisa — verbo, adjetivo, lugar, der/die/das, possessivo? → nicht.\nFrases-âncora para gravar o par: keine Zeit, keinen Hunger, kein Problem | nicht müde, nicht hier, nicht der Chef, nicht mein Auto.'
      },
      {
        kind: 'examples',
        title: 'kein em ação',
        items: [
          { de: 'Ich habe keine Zeit und keine Lust.', pt: 'Não tenho tempo nem vontade.' },
          { de: 'Er trinkt keinen Alkohol.', pt: 'Ele não bebe álcool.' },
          { de: 'Das ist kein Problem.', pt: 'Isso não é problema (nenhum).' },
          { de: 'Wir haben keine Kinder.', pt: 'Não temos filhos.' },
          { de: 'Es gibt hier keinen Supermarkt.', pt: 'Não tem supermercado aqui.' },
          { de: 'Sie isst kein Fleisch.', pt: 'Ela não come carne.' }
        ]
      },
      {
        kind: 'examples',
        title: 'nicht em ação',
        items: [
          { de: 'Ich verstehe dich nicht.', pt: 'Eu não te entendo.' },
          { de: 'Der Film ist nicht gut.', pt: 'O filme não é bom.' },
          { de: 'Wir kommen heute nicht.', pt: 'Nós não vamos hoje.' },
          { de: 'Ich wohne nicht in München.', pt: 'Não moro em Munique.' },
          { de: 'Das ist nicht mein Handy.', pt: 'Este não é o meu celular.' },
          { de: 'Er arbeitet nicht gern am Wochenende.', pt: 'Ele não gosta de trabalhar no fim de semana.' }
        ]
      },
      {
        kind: 'text',
        title: 'doch — a palavra que o português não tem',
        body: 'Pergunta NEGATIVA em alemão tem três respostas possíveis:\nHast du keinen Hunger? (Você não está com fome?)\n• Nein. = confirmo o não: não estou com fome mesmo.\n• Doch! = contradigo a negação: estou com fome SIM!\n• (Ja não se usa aqui — ficaria ambíguo, e o alemão simplesmente evita.)\n\ndoch cancela a negação da pergunta. Em português precisamos de uma frase inteira ("não, pelo contrário, eu TÔ com fome!"); o alemão resolve com uma sílaba. É uma das palavras favoritas de quem aprende — porque faz falta em todas as outras línguas.'
      },
      {
        kind: 'dialog',
        title: 'Doch! — ein Mini-Drama',
        lines: [
          { who: 'Lena', de: 'Paulo, du kommst nicht zu meiner Party, oder?', pt: 'Paulo, você não vem para a minha festa, né?' },
          { who: 'Paulo', de: 'Doch! Natürlich komme ich!', pt: 'Venho SIM! Claro que venho!' },
          { who: 'Lena', de: 'Wirklich? Du hast keine Zeit...', pt: 'Sério? Você não tem tempo...' },
          { who: 'Paulo', de: 'Doch, ich habe Zeit. Samstag passt perfekt.', pt: 'Tenho sim. Sábado encaixa perfeitamente.' },
          { who: 'Lena', de: 'Und du magst keine Partys.', pt: 'E você não gosta de festas.' },
          { who: 'Paulo', de: 'Doch! Ich mag Partys — ich tanze nur nicht gern.', pt: 'Gosto sim! Eu só não gosto de dançar.' },
          { who: 'Lena', de: 'Kein Problem, es gibt auch Pizza.', pt: 'Sem problema, também vai ter pizza.' },
          { who: 'Paulo', de: 'Pizza? Dann tanze ich vielleicht doch!', pt: 'Pizza? Então talvez eu até dance, afinal!' },
          { who: 'Lena', de: 'Also bis Samstag?', pt: 'Então até sábado?' },
          { who: 'Paulo', de: 'Ja, bis Samstag!', pt: 'Sim, até sábado!' }
        ]
      },
      {
        kind: 'table',
        title: 'As palavras negativas',
        head: ['Positivo', 'Negativo', 'Exemplo'],
        rows: [
          ['etwas (algo)', 'nichts (nada)', 'Ich sehe nichts.'],
          ['jemand (alguém)', 'niemand (ninguém)', 'Niemand ist da.'],
          ['immer (sempre)', 'nie (nunca)', 'Er trinkt nie Bier.'],
          ['schon (já)', 'noch nicht (ainda não)', 'Ich bin noch nicht fertig.'],
          ['noch (ainda)', 'nicht mehr (não mais)', 'Sie wohnt nicht mehr hier.'],
          ['noch + substantivo', 'kein ... mehr', 'Wir haben kein Brot mehr.']
        ],
        note: 'kein ... mehr abraça o substantivo: kein Geld mehr, keine Zeit mehr = "acabou" o dinheiro / o tempo.'
      },
      {
        kind: 'text',
        title: 'Dupla negação? Não existe.',
        body: 'O português empilha negações com orgulho: "NÃO tenho NADA", "NUNCA vi NINGUÉM". O alemão usa exatamente UMA palavra negativa por ideia:\n• Não tenho nada. → Ich habe nichts. (jamais "Ich habe nicht nichts")\n• Nunca bebo cerveja. → Ich trinke nie Bier. (nie já contém o "não")\n• Ninguém está aqui. → Niemand ist hier.\nSe a frase já tem nichts, nie, niemand ou kein — pronto, está negada. Colocar um nicht por cima ou inverte o sentido ou simplesmente soa errado. Ao traduzir do português, corte todos os "não" extras.'
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich habe nicht ein Auto.', richtig: 'Ich habe kein Auto.', why: 'ein + substantivo se nega com kein, nunca com "nicht ein".' },
          { falsch: 'Ich habe kein Hunger.', richtig: 'Ich habe keinen Hunger.', why: 'Hunger é masculino e objeto de haben → keinen (Akkusativ).' },
          { falsch: 'Ich nicht verstehe.', richtig: 'Ich verstehe nicht.', why: 'O verbo fica na 2ª posição; nicht vai para o fim. A ordem do português não se aplica.' },
          { falsch: 'Niemand versteht mich nicht.', richtig: 'Niemand versteht mich.', why: 'Uma negação por frase: niemand já nega tudo. Dupla negação não existe em alemão.' },
          { falsch: 'Hast du keine Zeit? — Ja! (querendo dizer "tenho sim")', richtig: '— Doch!', why: 'Resposta afirmativa a pergunta negativa é doch. Ja fica ambíguo e não se usa.' },
          { falsch: 'Sie ist nicht Lehrerin.', richtig: 'Sie ist keine Lehrerin.', why: 'Profissão vem sem artigo → nega-se com kein, seguindo o ein-Test.' }
        ]
      },
      {
        kind: 'text',
        title: 'Afinando: gar, noch nicht vs. nicht mehr',
        body: '• gar intensifica a negação: gar nicht (nem um pouco), gar kein (nenhum mesmo), gar nichts (absolutamente nada): Ich verstehe gar nichts!\n• noch nicht = ainda não (mas vai acontecer): Der Bus ist noch nicht da.\n• nicht mehr = não mais (acontecia, acabou): Ich arbeite dort nicht mehr.\n• kein ... mehr = o estoque acabou: Es gibt keinen Kaffee mehr.\n\nE um aviso de radar: doch tem uma segunda vida como partícula de ênfase no meio de frases (Komm doch mit! = Vem, vai!). Você vai ouvir isso o tempo todo — por enquanto, só reconheça e não se assuste: nem toda doch é resposta.'
      },
      {
        kind: 'tip',
        title: 'Método: negue o seu dia',
        body: 'Pegue 10 frases que você já sabe dizer e negue todas em voz alta, decidindo kein ou nicht pelo ein-Test: Ich habe Zeit → Ich habe keine Zeit. Ich bin müde → Ich bin nicht müde.\nDepois treine o reflexo do doch fazendo as duas vozes: — Du sprichst kein Deutsch! — Doch! / — Du lernst nicht! — Doch! O doch precisa virar reflexo sonoro, não conhecimento de leitura.'
      }
    ],
    quiz: [
      { kind: 'choice', prompt: 'Ich habe ___ Zeit.', options: ['nicht', 'keine', 'kein', 'nichts'], answer: 1, hint: 'Zeit vinha sem artigo → kein, feminino.' },
      { kind: 'gap', before: 'Ich habe', after: 'Hunger.', answer: ['keinen'], hint: 'Hunger é masculino + Akkusativ.' },
      { kind: 'choice', prompt: 'A negação de "Ich verstehe das." é...', options: ['Ich nicht verstehe das.', 'Ich verstehe nicht das.', 'Ich verstehe das nicht.', 'Ich verstehe kein das.'], answer: 2, hint: 'nicht no fim da frase.' },
      { kind: 'choice', prompt: 'Hast du keinen Hunger? — Você QUER comer. Sua resposta:', options: ['Ja!', 'Nein!', 'Doch!', 'Bitte!'], answer: 2, hint: 'Contradizer pergunta negativa = doch.' },
      { kind: 'gap', before: 'Das ist', after: 'mein Auto.', answer: ['nicht'], hint: 'Possessivo → nicht, não kein.' },
      { kind: 'choice', prompt: 'A negação de jemand (alguém) é...', options: ['nichts', 'niemand', 'nie', 'kein'], answer: 1 },
      { kind: 'gap', before: 'Wir haben kein Brot', after: '. (acabou!)', answer: ['mehr'], hint: 'kein ... mehr = acabou.' },
      { kind: 'order', words: ['Er', 'trinkt', 'nie', 'Alkohol'], answer: 'Er trinkt nie Alkohol', hint: 'nie depois do verbo; sem nicht extra.' },
      { kind: 'choice', prompt: '"Não vejo nada" em alemão:', options: ['Ich sehe nicht nichts.', 'Ich sehe nichts.', 'Ich nicht sehe nichts.', 'Ich sehe niemand.'], answer: 1, hint: 'Uma negação só.' },
      { kind: 'gap', before: 'Sie ist', after: 'Lehrerin, sie ist Ärztin.', answer: ['keine'], hint: 'Profissão (substantivo sem artigo) nega com kein.' },
      { kind: 'choice', prompt: 'Der Bus ist ___ da. (ainda não chegou)', options: ['nicht mehr', 'noch nicht', 'nie', 'kein'], answer: 1, hint: 'ainda não = noch nicht.' },
      { kind: 'choice', prompt: 'Das Haus ist ___ groß.', options: ['kein', 'keine', 'nicht', 'nichts'], answer: 2, hint: 'Adjetivo → nicht.' },
      { kind: 'order', words: ['Ich', 'wohne', 'nicht', 'in', 'Berlin'], answer: 'Ich wohne nicht in Berlin', hint: 'nicht antes de preposição + lugar.' }
    ]
  },

  // ═══ 11 · Possessivartikel ═══
  {
    id: 'a11-possessiv',
    level: 'a11',
    num: '11',
    title: 'Possessivartikel',
    subtitle: 'mein, dein, sein, ihr — de quem é o quê',
    shape: 'square',
    minutes: 30,
    vocabTags: ['familia'],
    sections: [
      {
        kind: 'text',
        title: 'A ideia',
        body: 'Possessivos dizem de quem algo é — e no alemão eles se comportam como o artigo "ein": a TERMINAÇÃO concorda com a coisa possuída (gênero, número, caso), enquanto a ESCOLHA do possessivo depende do dono.\nDois eixos ao mesmo tempo: dono → mein/dein/sein/ihr…; coisa → -ø/-e/-en.',
      },
      {
        kind: 'table',
        title: 'Um possessivo para cada dono',
        head: ['Dono', 'Possessivo', 'Exemplo'],
        rows: [
          ['ich', 'mein', 'mein Bruder, meine Mutter'],
          ['du', 'dein', 'dein Auto, deine Schwester'],
          ['er / es', 'sein', 'sein Hund (DELE)'],
          ['sie (ela)', 'ihr', 'ihre Katze (DELA)'],
          ['wir', 'unser', 'unsere Familie'],
          ['ihr (vocês)', 'euer', 'euer Haus, eure Kinder'],
          ['sie (eles)', 'ihr', 'ihre Eltern'],
          ['Sie (formal)', 'Ihr', 'Ihre Telefonnummer'],
        ],
        note: 'ihr aparece 3 vezes (dela / deles / formal maiúsculo) — o contexto decide.',
      },
      {
        kind: 'table',
        title: 'Terminação concorda com a COISA (Nominativ)',
        head: ['Gênero da coisa', 'Forma', 'Exemplo'],
        rows: [
          ['masculino', 'mein', 'mein Vater'],
          ['feminino', 'meine', 'meine Mutter'],
          ['neutro', 'mein', 'mein Kind'],
          ['plural', 'meine', 'meine Eltern'],
        ],
      },
      {
        kind: 'table',
        title: 'No Akkusativ só o masculino muda',
        head: ['Gênero', 'Nominativ', 'Akkusativ'],
        rows: [
          ['masculino', 'mein Bruder', 'Ich sehe MEINEN Bruder.'],
          ['feminino', 'meine Tante', 'Ich sehe meine Tante. (igual)'],
          ['neutro', 'mein Auto', 'Ich sehe mein Auto. (igual)'],
          ['plural', 'meine Cousins', 'Ich sehe meine Cousins. (igual)'],
        ],
        note: 'Mesma regra de ein→einen que você já conhece do Akkusativ.',
      },
      {
        kind: 'tip',
        title: 'sein vs. ihr — o teste do dono',
        body: 'Pergunte: quem é o dono? Homem/coisa (er/es) → sein. Mulher (sie) → ihr. A terminação depois disso concorda com a coisa: seine Mutter (a mãe DELE — Mutter é feminina, por isso -e). "seine" não significa "dela"!',
      },
      {
        kind: 'tip',
        title: 'euer perde o -e-',
        body: 'euer + terminação → cai o e do meio: euer Haus, mas EURE Kinder, EUREN Bruder. Nunca "euere".',
      },
      {
        kind: 'table',
        title: 'A família completa (die Familie)',
        head: ['Alemão', 'Português'],
        rows: [
          ['der Großvater / Opa', 'avô'],
          ['die Großmutter / Oma', 'avó'],
          ['die Großeltern (Pl.)', 'avós'],
          ['der Onkel', 'tio'],
          ['die Tante', 'tia'],
          ['der Cousin', 'primo'],
          ['die Cousine', 'prima'],
          ['der Neffe', 'sobrinho'],
          ['die Nichte', 'sobrinha'],
          ['die Geschwister (Pl.)', 'irmãos (conjunto)'],
          ['der Schwiegervater', 'sogro'],
          ['die Schwiegermutter', 'sogra'],
          ['der Ehemann / die Ehefrau', 'marido / esposa'],
        ],
      },
      {
        kind: 'examples',
        title: 'O padrão na orelha',
        items: [
          { de: 'Meine Mutter heißt Ana.', pt: 'Minha mãe se chama Ana.' },
          { de: 'Wie ist Ihre Telefonnummer?', pt: 'Qual é o seu telefone? (formal)' },
          { de: 'Sein Bruder wohnt in München.', pt: 'O irmão DELE mora em Munique.' },
          { de: 'Ihre Schwester ist Ärztin.', pt: 'A irmã DELA é médica.' },
          { de: 'Unsere Großeltern haben einen Garten.', pt: 'Nossos avós têm um jardim.' },
          { de: 'Ich besuche meinen Onkel am Sonntag.', pt: 'Visito meu tio no domingo.' },
          { de: 'Sind das eure Kinder?', pt: 'Esses são os filhos de vocês?' },
          { de: 'Wessen Tasche ist das? — Das ist ihre Tasche.', pt: 'De quem é essa bolsa? — É a bolsa dela.' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Das Familienfoto',
        lines: [
          { who: 'Lena', de: 'Ist das deine Familie auf dem Foto?', pt: 'Essa é a sua família na foto?' },
          { who: 'Paulo', de: 'Ja! Das sind meine Eltern. Mein Vater heißt Carlos.', pt: 'Sim! Esses são meus pais. Meu pai se chama Carlos.' },
          { who: 'Lena', de: 'Und wer ist die Frau links?', pt: 'E quem é a mulher à esquerda?' },
          { who: 'Paulo', de: 'Das ist meine Schwester Julia mit ihrem Mann.', pt: 'É minha irmã Julia com o marido dela.' },
          { who: 'Lena', de: 'Ihre Kinder sind süß! Wie alt sind sie?', pt: 'Os filhos dela são fofos! Que idade têm?' },
          { who: 'Paulo', de: 'Ihr Sohn ist drei und ihre Tochter ist ein Jahr alt.', pt: 'O filho dela tem três e a filha um ano.' },
          { who: 'Lena', de: 'Und dein Bruder? Wo wohnt er?', pt: 'E seu irmão? Onde ele mora?' },
          { who: 'Paulo', de: 'Sein Haus ist in São Paulo, bei unseren Eltern.', pt: 'A casa dele é em São Paulo, perto dos nossos pais.' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Das ist der Bruder von mir.', richtig: 'Das ist mein Bruder.', why: 'Possessivo direto — "von mir" soa infantil em alemão.' },
          { falsch: 'Sie liebt seine Katze. (querendo dizer "a gata dela")', richtig: 'Sie liebt ihre Katze.', why: 'sein = dele. Dona mulher → ihr.' },
          { falsch: 'Ich sehe mein Bruder.', richtig: 'Ich sehe meinen Bruder.', why: 'Bruder é masculino e objeto direto → Akkusativ meinen.' },
          { falsch: 'euere Wohnung', richtig: 'eure Wohnung', why: 'euer perde o -e- do meio quando ganha terminação.' },
        ],
      },
      {
        kind: 'tip',
        title: 'Método',
        body: 'Descreva sua família REAL em voz alta usando 8 possessivos diferentes ("Meine Mutter…, ihr Bruder…, unser Haus…"). Família é o território natural dos possessivos — treine neles juntos.',
      },
    ],
    quiz: [
      { kind: 'gap', before: '', after: ' Mutter heißt Ana. (minha)', answer: ['Meine'] },
      { kind: 'gap', before: 'Das ist Paul. ', after: ' Hund heißt Rex. (dele)', answer: ['Sein'] },
      { kind: 'gap', before: 'Das ist Maria. ', after: ' Katze ist schwarz. (dela)', answer: ['Ihre'] },
      { kind: 'choice', prompt: '"Nossa família" =', options: ['unser Familie', 'unsere Familie', 'euer Familie', 'ihre Familie'], answer: 1 },
      { kind: 'gap', before: 'Ich besuche ', after: ' Onkel. (meu — der Onkel, Akkusativ!)', answer: ['meinen'] },
      { kind: 'choice', prompt: '"os filhos de vocês" =', options: ['euere Kinder', 'eure Kinder', 'ihre Kinder', 'deine Kinder'], answer: 1, hint: 'euer perde o e' },
      { kind: 'choice', prompt: 'Wie ist ___ Telefonnummer? (formal)', options: ['deine', 'Ihre', 'ihre', 'eure'], answer: 1, hint: 'formal = maiúscula' },
      { kind: 'gap', before: 'Julia liebt ', after: ' Mann. (dela — der Mann, Akk.)', answer: ['ihren'] },
      { kind: 'order', words: ['Sein', 'Bruder', 'wohnt', 'in', 'München'], answer: 'Sein Bruder wohnt in München' },
      { kind: 'choice', prompt: '"die Nichte" é…', options: ['a prima', 'a sobrinha', 'a sogra', 'a tia'], answer: 1 },
    ],
  },

  // ═══ 12 · Länder, Sprachen & Berufe ═══
  {
    id: 'a11-laender',
    level: 'a11',
    num: '12',
    title: 'Länder, Sprachen & Berufe',
    subtitle: 'De onde você vem, o que fala, o que faz',
    shape: 'triangle',
    minutes: 30,
    vocabTags: ['laender', 'berufe', 'apresentacao'],
    sections: [
      {
        kind: 'text',
        title: 'O trio da identidade',
        body: 'Toda conversa inicial em alemão passa por três perguntas: Woher kommst du? (origem), Welche Sprachen sprichst du? (línguas), Was machst du beruflich? (profissão). Este módulo fecha o kit.',
      },
      {
        kind: 'table',
        title: 'País → língua → nacionalidade',
        head: ['Land', 'Sprache', 'Ele / Ela'],
        rows: [
          ['Brasilien', 'Portugiesisch', 'Brasilianer / Brasilianerin'],
          ['Deutschland', 'Deutsch', 'Deutscher / Deutsche'],
          ['Portugal', 'Portugiesisch', 'Portugiese / Portugiesin'],
          ['Spanien', 'Spanisch', 'Spanier / Spanierin'],
          ['Frankreich', 'Französisch', 'Franzose / Französin'],
          ['England', 'Englisch', 'Engländer / Engländerin'],
          ['Italien', 'Italienisch', 'Italiener / Italienerin'],
          ['die USA (Pl.)', 'Englisch', 'Amerikaner / Amerikanerin'],
          ['die Schweiz', 'Deutsch/Französisch/Italienisch', 'Schweizer / Schweizerin'],
          ['die Türkei', 'Türkisch', 'Türke / Türkin'],
          ['Österreich', 'Deutsch', 'Österreicher / Österreicherin'],
        ],
        note: 'A maioria dos países NÃO tem artigo. Exceções: die Schweiz, die Türkei, die USA (plural), der Iran…',
      },
      {
        kind: 'table',
        title: 'aus + país (origem)',
        head: ['Tipo de país', 'Forma', 'Exemplo'],
        rows: [
          ['sem artigo (maioria)', 'aus + nome', 'Ich komme aus Brasilien.'],
          ['feminino (die)', 'aus der …', 'Er kommt aus der Schweiz / aus der Türkei.'],
          ['plural (die)', 'aus den …', 'Sie kommt aus den USA.'],
        ],
      },
      {
        kind: 'tip',
        title: 'Falar línguas — os níveis',
        body: 'Ich spreche Portugiesisch (fluente por padrão) · ein bisschen Deutsch (um pouco) · sehr gut Englisch (muito bem) · gar kein Französisch (nada). Pergunta: Welche Sprachen sprichst du? / Sprechen Sie Deutsch?',
      },
      {
        kind: 'table',
        title: 'Profissões — masculino e feminino',
        head: ['Er ist…', 'Sie ist…', 'Português'],
        rows: [
          ['Lehrer', 'Lehrerin', 'professor(a)'],
          ['Arzt', 'Ärztin', 'médico(a)'],
          ['Ingenieur', 'Ingenieurin', 'engenheiro(a)'],
          ['Verkäufer', 'Verkäuferin', 'vendedor(a)'],
          ['Koch', 'Köchin', 'cozinheiro(a)'],
          ['Kellner', 'Kellnerin', 'garçom / garçonete'],
          ['Entwickler / Programmierer', 'Entwicklerin / Programmiererin', 'desenvolvedor(a)'],
          ['Polizist', 'Polizistin', 'policial'],
          ['Krankenpfleger', 'Krankenschwester', 'enfermeiro(a)'],
          ['Student', 'Studentin', 'estudante universitário(a)'],
        ],
        note: 'Regra geral: feminino = +in (às vezes com umlaut: Arzt→Ärztin, Koch→Köchin).',
      },
      {
        kind: 'tip',
        title: 'Profissão SEM artigo',
        body: 'Ich bin Lehrer. / Sie ist Ärztin. — sem "ein"! Também: Ich arbeite als Entwickler (trabalho como…) e Ich arbeite bei Google (na empresa…). "Ich bin ein Lehrer" soa errado.',
      },
      {
        kind: 'examples',
        title: 'O kit completo em frases',
        items: [
          { de: 'Ich komme aus Brasilien, aber ich wohne in Berlin.', pt: 'Venho do Brasil, mas moro em Berlim.' },
          { de: 'Meine Mutter kommt aus der Schweiz.', pt: 'Minha mãe vem da Suíça.' },
          { de: 'Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch.', pt: 'Falo português, inglês e um pouco de alemão.' },
          { de: 'Was sind Sie von Beruf?', pt: 'Qual é a sua profissão? (formal)' },
          { de: 'Ich bin Entwickler und arbeite bei einer Softwarefirma.', pt: 'Sou desenvolvedor e trabalho numa empresa de software.' },
          { de: 'Meine Schwester ist Ärztin. Sie arbeitet im Krankenhaus.', pt: 'Minha irmã é médica. Trabalha no hospital.' },
          { de: 'Er arbeitet als Kellner im Restaurant.', pt: 'Ele trabalha como garçom no restaurante.' },
          { de: 'Welche Sprachen sprichst du?', pt: 'Quais línguas você fala?' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Woher kommst du?',
        lines: [
          { who: 'Lena', de: 'Woher kommst du eigentlich, Paulo?', pt: 'De onde você vem, afinal, Paulo?' },
          { who: 'Paulo', de: 'Ich komme aus Brasilien, aus São Paulo.', pt: 'Venho do Brasil, de São Paulo.' },
          { who: 'Lena', de: 'Cool! Und was sprichst du zu Hause?', pt: 'Legal! E o que você fala em casa?' },
          { who: 'Paulo', de: 'Portugiesisch natürlich. Und du? Sprichst du nur Deutsch?', pt: 'Português, claro. E você? Só fala alemão?' },
          { who: 'Lena', de: 'Nein, ich spreche auch Englisch und ein bisschen Spanisch.', pt: 'Não, também falo inglês e um pouco de espanhol.' },
          { who: 'Paulo', de: 'Was machst du beruflich?', pt: 'O que você faz profissionalmente?' },
          { who: 'Lena', de: 'Ich bin Studentin. Ich studiere Medizin. Und du?', pt: 'Sou estudante. Estudo medicina. E você?' },
          { who: 'Paulo', de: 'Ich bin Entwickler. Ich arbeite bei einer kleinen Firma.', pt: 'Sou desenvolvedor. Trabalho numa empresa pequena.' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich bin ein Lehrer.', richtig: 'Ich bin Lehrer.', why: 'Profissão sem artigo.' },
          { falsch: 'Ich komme aus die Schweiz.', richtig: 'Ich komme aus der Schweiz.', why: 'aus pede Dativo: die → der.' },
          { falsch: 'Ich spreche portugiesisch. (minúscula)', richtig: 'Ich spreche Portugiesisch.', why: 'Nome de língua é substantivo → maiúscula.' },
          { falsch: 'Sie ist Arzt.', richtig: 'Sie ist Ärztin.', why: 'Mulher → forma feminina com -in (e umlaut).' },
          { falsch: 'Ich arbeite in Google.', richtig: 'Ich arbeite bei Google.', why: 'Empresa → bei.' },
        ],
      },
      {
        kind: 'tip',
        title: 'Método',
        body: 'Monte SEU cartão de identidade em alemão (origem + línguas + profissão) e fale em voz alta até sair sem pensar — são as 3 primeiras perguntas de QUALQUER conversa e da prova oral.',
      },
    ],
    quiz: [
      { kind: 'gap', before: 'Ich komme ', after: ' Brasilien.', answer: ['aus'] },
      { kind: 'gap', before: 'Er kommt aus ', after: ' Schweiz. (die Schweiz)', answer: ['der'] },
      { kind: 'choice', prompt: '"Sou desenvolvedor" =', options: ['Ich bin ein Entwickler.', 'Ich bin Entwickler.', 'Ich bin der Entwickler.', 'Ich habe Entwickler.'], answer: 1 },
      { kind: 'gap', before: 'Sie kommt aus ', after: ' USA.', answer: ['den'], hint: 'USA é plural' },
      { kind: 'choice', prompt: 'Feminino de "Arzt":', options: ['Arztin', 'Ärztin', 'Arztfrau', 'Ärzterin'], answer: 1 },
      { kind: 'gap', before: 'Ich arbeite ', after: ' Google. (empresa)', answer: ['bei'] },
      { kind: 'choice', prompt: 'Quem vem da França fala…', options: ['Franzose', 'Frankreich', 'Französisch', 'Französin'], answer: 2 },
      { kind: 'order', words: ['Welche', 'Sprachen', 'sprichst', 'du', '?'], answer: 'Welche Sprachen sprichst du ?' },
      { kind: 'gap', before: 'Ich spreche ein ', after: ' Deutsch.', answer: ['bisschen'] },
      { kind: 'choice', prompt: '"trabalho COMO garçom" =', options: ['Ich arbeite wie Kellner.', 'Ich arbeite als Kellner.', 'Ich arbeite für Kellner.', 'Ich arbeite bei Kellner.'], answer: 1 },
    ],
  },

  // ═══ 13 · Tagesablauf & Häufigkeit ═══
  {
    id: 'a11-tagesablauf',
    level: 'a11',
    num: '13',
    title: 'Tagesablauf & Häufigkeit',
    subtitle: 'A rotina inteira — do despertador à cama',
    shape: 'circle',
    minutes: 30,
    vocabTags: ['tempo', 'alltag', 'verbos'],
    sections: [
      {
        kind: 'text',
        title: 'A ideia',
        body: 'Descrever a rotina é o exercício mais rentável do A1: junta horas, verbos separáveis, inversão e advérbios de frequência numa história que você conta todos os dias — a SUA.',
      },
      {
        kind: 'table',
        title: 'O dia em verbos (na ordem)',
        head: ['Ação', 'Exemplo'],
        rows: [
          ['aufstehen (separável)', 'Ich stehe um 6:30 Uhr auf.'],
          ['duschen', 'Dann dusche ich.'],
          ['frühstücken', 'Ich frühstücke um sieben.'],
          ['zur Arbeit fahren', 'Ich fahre mit dem Bus zur Arbeit.'],
          ['arbeiten', 'Ich arbeite von neun bis fünf.'],
          ['Mittagspause machen', 'Um zwölf mache ich Mittagspause.'],
          ['Feierabend haben', 'Um 17 Uhr habe ich Feierabend.'],
          ['einkaufen (separável)', 'Manchmal kaufe ich noch ein.'],
          ['zu Abend essen', 'Wir essen um 19 Uhr zu Abend.'],
          ['fernsehen (separável)', 'Abends sehe ich fern.'],
          ['ins Bett gehen', 'Ich gehe um 23 Uhr ins Bett.'],
        ],
        note: 'der Feierabend = o "fim do expediente" — palavra que não existe em PT e os alemães amam.',
      },
      {
        kind: 'table',
        title: 'Advérbios de frequência — a escala',
        head: ['Advérbio', '%', 'Exemplo'],
        rows: [
          ['immer', '100%', 'Ich trinke immer Kaffee.'],
          ['meistens', '~80%', 'Meistens stehe ich früh auf.'],
          ['oft', '~60%', 'Ich koche oft.'],
          ['manchmal', '~30%', 'Manchmal gehe ich ins Kino.'],
          ['selten', '~10%', 'Ich sehe selten fern.'],
          ['nie', '0%', 'Ich trinke nie Bier.'],
        ],
      },
      {
        kind: 'tip',
        title: 'Onde fica o advérbio',
        body: 'Depois do verbo (Ich koche OFT) — ou na 1ª posição para dar ênfase, empurrando o sujeito: MANCHMAL gehe ich ins Kino. O verbo NUNCA sai da 2ª posição.',
      },
      {
        kind: 'table',
        title: 'Conectores de sequência',
        head: ['Conector', 'Significa', 'Exemplo'],
        rows: [
          ['zuerst', 'primeiro', 'Zuerst dusche ich.'],
          ['dann', 'então, depois', 'Dann frühstücke ich.'],
          ['danach', 'depois disso', 'Danach fahre ich zur Arbeit.'],
          ['später', 'mais tarde', 'Später mache ich Sport.'],
          ['zum Schluss', 'por fim', 'Zum Schluss gehe ich ins Bett.'],
        ],
        note: 'Todos abrem a frase → inversão: conector + VERBO + sujeito.',
      },
      {
        kind: 'tip',
        title: 'Wie oft? — quantas vezes',
        body: 'einmal/zweimal/dreimal pro Woche (1×/2×/3× por semana) · jeden Tag (todo dia) · jeden Montag (toda segunda) · am Wochenende (no fim de semana). "Wie oft machst du Sport?" — "Zweimal pro Woche."',
      },
      {
        kind: 'examples',
        title: 'Uma rotina completa (ouça e imite)',
        items: [
          { de: 'Ich stehe jeden Tag um halb sieben auf.', pt: 'Levanto todo dia às seis e meia.' },
          { de: 'Zuerst dusche ich, dann frühstücke ich.', pt: 'Primeiro tomo banho, depois tomo café.' },
          { de: 'Morgens trinke ich immer Kaffee, nie Tee.', pt: 'De manhã sempre tomo café, nunca chá.' },
          { de: 'Ich fahre mit der U-Bahn zur Arbeit.', pt: 'Vou de metrô para o trabalho.' },
          { de: 'Mittags esse ich meistens in der Kantine.', pt: 'Ao meio-dia como quase sempre no refeitório.' },
          { de: 'Nach der Arbeit kaufe ich manchmal ein.', pt: 'Depois do trabalho às vezes faço compras.' },
          { de: 'Abends sehe ich fern oder lese ein Buch.', pt: 'À noite vejo TV ou leio um livro.' },
          { de: 'Zum Schluss gehe ich gegen elf ins Bett.', pt: 'Por fim, vou para a cama lá pelas onze.' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Wie ist dein Tag?',
        lines: [
          { who: 'Lena', de: 'Wann stehst du normalerweise auf?', pt: 'Quando você costuma levantar?' },
          { who: 'Paulo', de: 'Um halb sieben. Zuerst dusche ich, dann trinke ich Kaffee.', pt: 'Às seis e meia. Primeiro banho, depois café.' },
          { who: 'Lena', de: 'Frühstückst du nicht?', pt: 'Você não toma café da manhã?' },
          { who: 'Paulo', de: 'Doch, aber nur Brot mit Käse. Und du?', pt: 'Sim (tomo), mas só pão com queijo. E você?' },
          { who: 'Lena', de: 'Ich frühstücke nie. Ich habe morgens keinen Hunger.', pt: 'Nunca tomo café da manhã. De manhã não tenho fome.' },
          { who: 'Paulo', de: 'Wie oft machst du Sport?', pt: 'Com que frequência você faz esporte?' },
          { who: 'Lena', de: 'Dreimal pro Woche. Meistens jogge ich am Morgen.', pt: 'Três vezes por semana. Quase sempre corro de manhã.' },
          { who: 'Paulo', de: 'Ich mache selten Sport… aber ab Montag jeden Tag!', pt: 'Faço esporte raramente… mas a partir de segunda, todo dia!' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Morgens ich trinke Kaffee.', richtig: 'Morgens trinke ich Kaffee.', why: 'Advérbio na frente → verbo na 2ª posição, sujeito depois.' },
          { falsch: 'Ich aufstehe um sieben.', richtig: 'Ich stehe um sieben auf.', why: 'Verbo separável: prefixo voa para o FIM.' },
          { falsch: 'Ich mache Sport dois vezes… → zwei Mal in der Woche?', richtig: 'zweimal pro Woche', why: 'Frequência idiomática: -mal pro Woche/Monat.' },
          { falsch: 'Ich gehe im Bett.', richtig: 'Ich gehe ins Bett.', why: 'Direção (Wohin?) → ins. "im Bett" = já deitado.' },
        ],
      },
      {
        kind: 'tip',
        title: 'Método',
        body: 'Narre sua rotina real em voz alta com 5 conectores (zuerst→dann→danach→später→zum Schluss) e 3 advérbios de frequência. Repetir 3 dias seguidos = automatiza inversão + separáveis de graça.',
      },
    ],
    quiz: [
      { kind: 'order', words: ['Morgens', 'trinke', 'ich', 'Kaffee'], answer: 'Morgens trinke ich Kaffee', hint: 'verbo na 2ª posição' },
      { kind: 'gap', before: 'Ich stehe um sieben ', after: '.', answer: ['auf'] },
      { kind: 'gap', before: 'Ich trinke ', after: ' Bier. (nunca)', answer: ['nie'] },
      { kind: 'gap', before: '', after: ' gehe ich ins Kino. (às vezes)', answer: ['Manchmal'] },
      { kind: 'choice', prompt: '"quase sempre" =', options: ['manchmal', 'selten', 'meistens', 'nie'], answer: 2 },
      { kind: 'gap', before: 'Ich mache ', after: ' pro Woche Sport. (2×)', answer: ['zweimal'] },
      { kind: 'choice', prompt: '"der Feierabend" é…', options: ['a festa', 'o fim do expediente', 'o feriado', 'a noite de sexta'], answer: 1 },
      { kind: 'order', words: ['Danach', 'fahre', 'ich', 'zur', 'Arbeit'], answer: 'Danach fahre ich zur Arbeit', hint: 'conector abre → inversão' },
      { kind: 'gap', before: 'Abends sehe ich ', after: '. (fernsehen)', answer: ['fern'] },
      { kind: 'choice', prompt: 'Ich gehe um elf ___ Bett.', options: ['im', 'ins', 'in die', 'zur'], answer: 1 },
    ],
  },

  // ═══ 14 · Hobbys & Freizeit ═══
  {
    id: 'a11-hobbys',
    level: 'a11',
    num: '14',
    title: 'Hobbys & Freizeit',
    subtitle: 'gern, lieber, am liebsten — falar do que você ama',
    shape: 'half',
    minutes: 30,
    vocabTags: ['hobbys', 'frases'],
    sections: [
      {
        kind: 'text',
        title: 'A ideia',
        body: 'Hobby é o assunto nº 1 de small talk e da prova oral. O segredo do alemão: não se diz "eu gosto de nadar" com um verbo "gostar" — se diz "eu nado COM PRAZER": Ich schwimme GERN.',
      },
      {
        kind: 'table',
        title: 'gern → lieber → am liebsten (a gradação)',
        head: ['Grau', 'Significa', 'Exemplo'],
        rows: [
          ['gern', 'gosto de', 'Ich koche gern.'],
          ['lieber', 'prefiro', 'Ich koche gern, aber ich backe lieber.'],
          ['am liebsten', 'o que MAIS gosto', 'Am liebsten esse ich — nur Spaß!'],
          ['nicht gern', 'não gosto de', 'Ich jogge nicht gern.'],
        ],
        note: 'gern gruda no verbo: verbo + gern. Não existe "Ich gern koche".',
      },
      {
        kind: 'table',
        title: 'Hobbys — com o verbo certo',
        head: ['Hobby', 'Alemão', 'Verbo'],
        rows: [
          ['futebol', 'Fußball spielen', 'spielen (jogos/instrumentos)'],
          ['violão', 'Gitarre spielen', 'spielen'],
          ['nadar', 'schwimmen', 'verbo próprio'],
          ['correr', 'joggen / laufen', 'verbo próprio'],
          ['trilha', 'wandern', 'verbo próprio'],
          ['bicicleta', 'Rad fahren', 'fahren (sobre rodas)'],
          ['esqui', 'Ski fahren', 'fahren'],
          ['ler', 'lesen', 'verbo próprio'],
          ['cozinhar / assar', 'kochen / backen', 'verbos próprios'],
          ['fotografar', 'fotografieren', 'verbo próprio'],
          ['desenhar', 'zeichnen', 'verbo próprio'],
          ['dançar', 'tanzen', 'verbo próprio'],
          ['ouvir música', 'Musik hören', 'hören'],
          ['ver filmes', 'Filme sehen', 'sehen'],
          ['viajar', 'reisen', 'verbo próprio'],
          ['musculação/exercício', 'Sport machen', 'machen (genérico)'],
        ],
        note: 'spielen = jogos e instrumentos · fahren = coisas com roda/lâmina · machen = genérico.',
      },
      {
        kind: 'tip',
        title: 'Duas formas de dizer o hobby',
        body: 'Com verbo: "Ich schwimme gern und spiele Fußball." Com substantivo: "Mein Hobby ist Schwimmen. / Meine Hobbys sind Sport und Musik." O verbo substantivado ganha maiúscula: das Schwimmen, das Lesen.',
      },
      {
        kind: 'table',
        title: 'Convidar, aceitar, recusar',
        head: ['Função', 'Frase', 'Tradução'],
        rows: [
          ['convidar', 'Kommst du mit?', 'Você vem junto?'],
          ['convidar', 'Hast du Lust auf Kino?', 'Está a fim de cinema?'],
          ['convidar', 'Wollen wir zusammen kochen?', 'Vamos cozinhar juntos?'],
          ['aceitar', 'Ja, gern! / Klar!', 'Sim, claro!'],
          ['aceitar', 'Gute Idee!', 'Boa ideia!'],
          ['recusar', 'Ich kann leider nicht.', 'Infelizmente não posso.'],
          ['recusar', 'Ich habe keine Zeit.', 'Não tenho tempo.'],
          ['recusar', 'Ich habe keine Lust.', 'Não estou a fim. (direto!)'],
        ],
        note: '"keine Lust" é honesto demais para PT-BR, mas normal em alemão.',
      },
      {
        kind: 'examples',
        title: 'Frases-modelo',
        items: [
          { de: 'Was machst du gern in deiner Freizeit?', pt: 'O que você gosta de fazer no tempo livre?' },
          { de: 'Ich spiele gern Fußball und höre Musik.', pt: 'Gosto de jogar futebol e ouvir música.' },
          { de: 'Ich lese lieber Bücher als Zeitungen.', pt: 'Prefiro ler livros a jornais.' },
          { de: 'Am liebsten reise ich mit meiner Familie.', pt: 'O que mais amo é viajar com minha família.' },
          { de: 'Meine Hobbys sind Kochen und Fotografieren.', pt: 'Meus hobbies são cozinhar e fotografar.' },
          { de: 'Ich fahre am Wochenende gern Rad.', pt: 'Gosto de andar de bicicleta no fim de semana.' },
          { de: 'Spielst du ein Instrument? — Ja, Gitarre.', pt: 'Você toca um instrumento? — Sim, violão.' },
          { de: 'Ich mache dreimal pro Woche Sport.', pt: 'Faço esporte três vezes por semana.' },
        ],
      },
      {
        kind: 'dialog',
        title: 'Dialog — Kommst du mit?',
        lines: [
          { who: 'Lena', de: 'Was machst du am Samstag?', pt: 'O que você vai fazer no sábado?' },
          { who: 'Paulo', de: 'Nichts Besonderes. Warum?', pt: 'Nada de especial. Por quê?' },
          { who: 'Lena', de: 'Ich gehe schwimmen. Kommst du mit?', pt: 'Vou nadar. Vem junto?' },
          { who: 'Paulo', de: 'Hmm, ich schwimme nicht so gern…', pt: 'Hmm, não gosto muito de nadar…' },
          { who: 'Lena', de: 'Und was machst du gern?', pt: 'E do que você gosta?' },
          { who: 'Paulo', de: 'Ich spiele lieber Fußball. Am liebsten am Sonntag im Park.', pt: 'Prefiro jogar futebol. Melhor ainda: domingo no parque.' },
          { who: 'Lena', de: 'Gute Idee! Sonntag Fußball, Samstag schwimmen?', pt: 'Boa ideia! Domingo futebol, sábado natação?' },
          { who: 'Paulo', de: 'Okay, ich komme mit. Aber ich schwimme langsam!', pt: 'Ok, eu vou. Mas nado devagar!' },
        ],
      },
      {
        kind: 'fehler',
        title: 'Erros clássicos de brasileiros',
        pairs: [
          { falsch: 'Ich gern schwimme.', richtig: 'Ich schwimme gern.', why: 'gern vem DEPOIS do verbo, nunca antes.' },
          { falsch: 'Ich gosto → Ich mag schwimmen gern.', richtig: 'Ich schwimme gern. (ou: Ich mag Schwimmen.)', why: 'Ou verbo+gern, ou mögen+substantivo — não os dois.' },
          { falsch: 'Ich spiele Fahrrad.', richtig: 'Ich fahre Rad.', why: 'Coisas com roda usam fahren, não spielen.' },
          { falsch: 'Mein Hobby ist schwimmen. (minúscula)', richtig: 'Mein Hobby ist Schwimmen.', why: 'Verbo virou substantivo → maiúscula.' },
          { falsch: 'Ich prefiro… → Ich preferiere lesen.', richtig: 'Ich lese lieber.', why: 'Preferência = lieber, não um verbo "preferir".' },
        ],
      },
      {
        kind: 'tip',
        title: 'Método',
        body: 'Prepare seu "top 3" de hobbies com a gradação exata (gern → lieber → am liebsten) e um motivo de 1 frase para cada. É resposta garantida na prova e em qualquer conversa.',
      },
    ],
    quiz: [
      { kind: 'gap', before: 'Ich schwimme ', after: '. (gosto)', answer: ['gern'] },
      { kind: 'choice', prompt: '"prefiro ler" =', options: ['Ich lese gern.', 'Ich lese lieber.', 'Ich lese am liebsten.', 'Ich mag lese.'], answer: 1 },
      { kind: 'gap', before: 'Am ', after: ' reise ich mit meiner Familie. (o que MAIS gosto)', answer: ['liebsten'] },
      { kind: 'choice', prompt: 'Andar de bicicleta =', options: ['Fahrrad spielen', 'Rad fahren', 'Rad machen', 'Fahrrad gehen'], answer: 1 },
      { kind: 'choice', prompt: 'Qual usa "spielen"?', options: ['schwimmen', 'Gitarre', 'joggen', 'reisen'], answer: 1 },
      { kind: 'order', words: ['Was', 'machst', 'du', 'gern', 'in', 'deiner', 'Freizeit', '?'], answer: 'Was machst du gern in deiner Freizeit ?' },
      { kind: 'gap', before: 'Kommst du ', after: '? (junto)', answer: ['mit'] },
      { kind: 'choice', prompt: 'Recusar educadamente:', options: ['Nein.', 'Ich habe keine Lust auf dich.', 'Ich kann leider nicht.', 'Ich gehe weg.'], answer: 2 },
      { kind: 'gap', before: 'Meine Hobbys ', after: ' Sport und Musik.', answer: ['sind'] },
      { kind: 'choice', prompt: '"Hast du Lust auf Kino?" significa…', options: ['Você tem tempo pro cinema?', 'Está a fim de cinema?', 'Você gosta de cinema?', 'Você vai ao cinema?'], answer: 1 },
    ],
  },
]
