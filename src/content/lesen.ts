import type { Reading } from './types'

// Textos de leitura do Deutsch Studio — 12 leituras (6 × A1.1, 6 × A1.2)
// Cada leitura: parágrafos DE/PT, glossário e perguntas de compreensão.

export const READINGS: Reading[] = [
  // ═══ Ich heiße Lena ═══
  {
    id: 'lesen-ich-heisse-lena',
    level: 'a11',
    title: 'Ich heiße Lena',
    kind: 'geschichte',
    source: 'Deutsch Studio',
    minutes: 3,
    intro: 'Lena se apresenta: nome, idade, cidade, estudos e hobbies. O texto perfeito para as suas primeiras frases em alemão.',
    paragraphs: [
      {
        de: 'Hallo! Ich heiße Lena Fischer. Ich bin 24 Jahre alt. Ich komme aus München. München ist eine große Stadt in Süddeutschland.',
        pt: 'Olá! Eu me chamo Lena Fischer. Tenho 24 anos. Venho de Munique. Munique é uma cidade grande no sul da Alemanha.',
      },
      {
        de: 'Ich bin Studentin. Ich studiere Medizin. Das Studium ist schwer, aber es macht Spaß. Meine Kurse sind sehr interessant.',
        pt: 'Sou estudante. Estudo medicina. O curso é difícil, mas é divertido. Minhas aulas são muito interessantes.',
      },
      {
        de: 'Ich spreche drei Sprachen. Deutsch ist meine Muttersprache. Englisch spreche ich gut. Und ich lerne ein bisschen Spanisch mit einer App.',
        pt: 'Falo três línguas. Alemão é minha língua materna. Inglês eu falo bem. E estou aprendendo um pouco de espanhol com um aplicativo.',
      },
      {
        de: 'Meine Hobbys sind Schwimmen, Lesen und Musik. Ich schwimme zweimal pro Woche. Am Abend lese ich gern Bücher. Meine Lieblingsmusik ist Pop.',
        pt: 'Meus hobbies são natação, leitura e música. Nado duas vezes por semana. À noite gosto de ler livros. Minha música favorita é pop.',
      },
      {
        de: 'Ich wohne in einer kleinen Wohnung. Ich wohne nicht allein: Ich habe einen Kater. Er heißt Felix und ist drei Jahre alt.',
        pt: 'Moro em um apartamento pequeno. Não moro sozinha: tenho um gato. Ele se chama Felix e tem três anos.',
      },
      {
        de: 'Felix schläft sehr viel und ist ein bisschen faul. Aber er ist auch sehr süß. Ich liebe meinen Kater!',
        pt: 'O Felix dorme muito e é um pouco preguiçoso. Mas ele também é muito fofo. Eu amo o meu gato!',
      },
    ],
    glossar: [
      { de: 'die Muttersprache', pt: 'a língua materna' },
      { de: 'das Studium', pt: 'o curso universitário, os estudos' },
      { de: 'schwer', pt: 'difícil; pesado' },
      { de: 'Spaß machen', pt: 'ser divertido, dar prazer' },
      { de: 'die Sprache', pt: 'a língua, o idioma' },
      { de: 'ein bisschen', pt: 'um pouco' },
      { de: 'zweimal pro Woche', pt: 'duas vezes por semana' },
      { de: 'gern', pt: 'com prazer (gostar de fazer algo)' },
      { de: 'die Wohnung', pt: 'o apartamento' },
      { de: 'der Kater', pt: 'o gato (macho)' },
      { de: 'faul', pt: 'preguiçoso' },
      { de: 'süß', pt: 'fofo; doce' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Woher kommt Lena?', options: ['Aus Berlin', 'Aus München', 'Aus Hamburg', 'Aus Wien'], answer: 1 },
      { kind: 'choice', prompt: 'Was studiert Lena?', options: ['Musik', 'Englisch', 'Medizin', 'Sport'], answer: 2 },
      { kind: 'choice', prompt: 'Welche Sprache lernt Lena mit einer App?', options: ['Englisch', 'Spanisch', 'Französisch', 'Italienisch'], answer: 1 },
      { kind: 'choice', prompt: 'Wie oft schwimmt Lena?', options: ['Jeden Tag', 'Einmal pro Woche', 'Zweimal pro Woche', 'Nur am Wochenende'], answer: 2 },
      { kind: 'gap', before: 'Lenas Kater heißt', after: 'und ist drei Jahre alt.', answer: ['Felix'] },
      { kind: 'order', words: ['Ich', 'bin', '24', 'Jahre', 'alt'], answer: 'Ich bin 24 Jahre alt', hint: 'Comece com o sujeito.' },
    ],
  },

  // ═══ Meine Familie ═══
  {
    id: 'lesen-meine-familie',
    level: 'a11',
    title: 'Meine Familie',
    kind: 'geschichte',
    source: 'Deutsch Studio',
    minutes: 3,
    intro: 'Paulo é brasileiro e mora em Berlim. Aqui ele apresenta a família dele — vocabulário de parentesco e profissões.',
    paragraphs: [
      {
        de: 'Ich heiße Paulo Silva. Ich komme aus São Paulo, aber ich wohne jetzt in Berlin. Ich arbeite hier als Programmierer. Meine Familie wohnt in Brasilien.',
        pt: 'Meu nome é Paulo Silva. Sou de São Paulo, mas agora moro em Berlim. Trabalho aqui como programador. Minha família mora no Brasil.',
      },
      {
        de: 'Mein Vater heißt Carlos. Er ist 58 Jahre alt. Er ist Lehrer und arbeitet an einer Schule. Er liebt Fußball und Musik.',
        pt: 'Meu pai se chama Carlos. Ele tem 58 anos. É professor e trabalha em uma escola. Ele ama futebol e música.',
      },
      {
        de: 'Meine Mutter heißt Ana. Sie ist 55 Jahre alt. Sie ist Krankenschwester und arbeitet in einem Krankenhaus. Sie kocht fantastisch — ihre Feijoada ist die beste!',
        pt: 'Minha mãe se chama Ana. Ela tem 55 anos. É enfermeira e trabalha em um hospital. Ela cozinha maravilhosamente — a feijoada dela é a melhor!',
      },
      {
        de: 'Ich habe auch eine Schwester. Sie heißt Julia, ist 30 Jahre alt und arbeitet in einer Bank. Sie ist verheiratet. Ihr Mann heißt Marcos. Sie haben einen Sohn: Der kleine Theo ist zwei Jahre alt.',
        pt: 'Também tenho uma irmã. Ela se chama Julia, tem 30 anos e trabalha em um banco. É casada. O marido dela se chama Marcos. Eles têm um filho: o pequeno Theo tem dois anos.',
      },
      {
        de: 'Meine Familie ist weit weg. Das ist manchmal schwer. Ich vermisse meine Eltern, meine Schwester und den kleinen Theo sehr.',
        pt: 'Minha família está longe. Isso às vezes é difícil. Sinto muita falta dos meus pais, da minha irmã e do pequeno Theo.',
      },
      {
        de: 'Aber wir haben ein Ritual: Am Sonntag machen wir immer einen Videoanruf. Wir sprechen ein oder zwei Stunden. Dann ist Brasilien ganz nah.',
        pt: 'Mas temos um ritual: no domingo sempre fazemos uma videochamada. Conversamos uma ou duas horas. Aí o Brasil fica bem pertinho.',
      },
    ],
    glossar: [
      { de: 'der Programmierer', pt: 'o programador' },
      { de: 'der Lehrer', pt: 'o professor' },
      { de: 'die Krankenschwester', pt: 'a enfermeira' },
      { de: 'das Krankenhaus', pt: 'o hospital' },
      { de: 'die Bank', pt: 'o banco (instituição)' },
      { de: 'verheiratet', pt: 'casado, casada' },
      { de: 'der Sohn', pt: 'o filho' },
      { de: 'weit weg', pt: 'longe, distante' },
      { de: 'manchmal', pt: 'às vezes' },
      { de: 'vermissen', pt: 'sentir falta de' },
      { de: 'der Videoanruf', pt: 'a videochamada' },
      { de: 'nah', pt: 'perto, próximo' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Wo wohnt Paulo jetzt?', options: ['In São Paulo', 'In Berlin', 'In München', 'In Lissabon'], answer: 1 },
      { kind: 'choice', prompt: 'Was ist Paulos Vater von Beruf?', options: ['Arzt', 'Programmierer', 'Lehrer', 'Koch'], answer: 2 },
      { kind: 'choice', prompt: 'Wo arbeitet Paulos Mutter?', options: ['In einer Schule', 'In einem Krankenhaus', 'In einem Büro', 'In einem Restaurant'], answer: 1 },
      { kind: 'choice', prompt: 'Wer ist Theo?', options: ['Paulos Bruder', 'Julias Sohn', 'Paulos Vater', 'Julias Mann'], answer: 1 },
      { kind: 'gap', before: 'Am Sonntag macht die Familie immer einen', after: '.', answer: ['Videoanruf'], hint: 'Palavra composta: vídeo + chamada.' },
      { kind: 'choice', prompt: 'Wie lange sprechen sie am Sonntag?', options: ['Zehn Minuten', 'Eine halbe Stunde', 'Ein oder zwei Stunden', 'Den ganzen Tag'], answer: 2 },
    ],
  },

  // ═══ Ein ganz normaler Tag ═══
  {
    id: 'lesen-ein-tag',
    level: 'a11',
    title: 'Ein ganz normaler Tag',
    kind: 'geschichte',
    source: 'Deutsch Studio',
    minutes: 4,
    intro: 'Um dia típico de Lena, das 6h30 até a hora de dormir, com horários e verbos separáveis como aufstehen e fernsehen.',
    paragraphs: [
      {
        de: 'Lena steht um halb sieben auf. Sie duscht und macht Frühstück. Sie isst Brot mit Käse und trinkt eine Tasse Kaffee. Ihr Kater Felix bekommt sein Futter.',
        pt: 'Lena se levanta às seis e meia. Toma banho e prepara o café da manhã. Come pão com queijo e toma uma xícara de café. O gato dela, Felix, ganha a ração.',
      },
      {
        de: 'Um Viertel nach sieben fährt Lena mit dem Bus zur Universität. Die Fahrt dauert 30 Minuten. Im Bus hört sie Musik.',
        pt: 'Às sete e quinze, Lena vai de ônibus para a universidade. O trajeto dura 30 minutos. No ônibus ela escuta música.',
      },
      {
        de: 'Von acht bis zwölf Uhr hat sie Vorlesungen. Heute lernt sie Anatomie. Das Thema ist schwer, aber interessant. Um zwölf isst Lena in der Mensa zu Mittag.',
        pt: 'Das oito ao meio-dia ela tem aulas. Hoje estuda anatomia. O tema é difícil, mas interessante. Ao meio-dia, Lena almoça no restaurante universitário.',
      },
      {
        de: 'Am Nachmittag lernt Lena in der Bibliothek. Sie liest und schreibt Notizen. Um vier Uhr macht sie eine Pause und trinkt einen Kaffee mit ihrer Freundin Marie.',
        pt: 'À tarde, Lena estuda na biblioteca. Ela lê e faz anotações. Às quatro horas faz uma pausa e toma um café com a amiga Marie.',
      },
      {
        de: 'Um halb sechs geht Lena ins Schwimmbad. Sie schwimmt eine Stunde. Danach kauft sie im Supermarkt ein: Gemüse, Nudeln und Obst.',
        pt: 'Às cinco e meia, Lena vai à piscina. Nada por uma hora. Depois faz compras no supermercado: legumes, macarrão e frutas.',
      },
      {
        de: 'Um halb acht kocht sie das Abendessen. Heute gibt es Nudeln mit Tomatensoße. Beim Essen telefoniert sie mit ihrer Mutter.',
        pt: 'Às sete e meia ela prepara o jantar. Hoje tem macarrão ao molho de tomate. Durante o jantar, fala ao telefone com a mãe.',
      },
      {
        de: 'Am Abend sieht Lena eine Stunde fern. Ihre Lieblingsserie ist eine Krimiserie. Um halb elf geht sie ins Bett. Sie ist müde und schläft schnell ein.',
        pt: 'À noite, Lena assiste uma hora de televisão. A série favorita dela é uma série policial. Às dez e meia vai para a cama. Está cansada e adormece rápido.',
      },
    ],
    glossar: [
      { de: 'aufstehen', pt: 'levantar-se (da cama)' },
      { de: 'das Futter', pt: 'a ração (comida de animal)' },
      { de: 'Viertel nach sieben', pt: 'sete e quinze' },
      { de: 'dauern', pt: 'durar' },
      { de: 'die Vorlesung', pt: 'a aula na universidade' },
      { de: 'die Mensa', pt: 'o restaurante universitário' },
      { de: 'zu Mittag essen', pt: 'almoçar' },
      { de: 'die Bibliothek', pt: 'a biblioteca' },
      { de: 'das Schwimmbad', pt: 'a piscina (pública)' },
      { de: 'einkaufen', pt: 'fazer compras' },
      { de: 'das Abendessen', pt: 'o jantar' },
      { de: 'fernsehen', pt: 'assistir televisão' },
      { de: 'einschlafen', pt: 'adormecer' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Wann steht Lena auf?', options: ['Um sechs Uhr', 'Um halb sieben', 'Um sieben Uhr', 'Um halb acht'], answer: 1, hint: 'halb sieben = 6h30.' },
      { kind: 'choice', prompt: 'Wie kommt Lena zur Universität?', options: ['Mit dem Auto', 'Mit dem Fahrrad', 'Mit dem Bus', 'Zu Fuß'], answer: 2 },
      { kind: 'choice', prompt: 'Wo isst Lena zu Mittag?', options: ['Zu Hause', 'Im Café', 'In der Mensa', 'Im Restaurant'], answer: 2 },
      { kind: 'choice', prompt: 'Was macht Lena um halb sechs?', options: ['Sie kocht', 'Sie schwimmt', 'Sie lernt in der Bibliothek', 'Sie sieht fern'], answer: 1 },
      { kind: 'gap', before: 'Am Abend sieht Lena eine Stunde', after: '.', answer: ['fern'], hint: 'Verbo separável fernsehen — o prefixo fica no fim da frase.' },
      { kind: 'order', words: ['Lena', 'steht', 'um', 'halb', 'sieben', 'auf'], answer: 'Lena steht um halb sieben auf', hint: 'aufstehen é separável: auf vai para o final.' },
    ],
  },

  // ═══ Im Café ═══
  {
    id: 'lesen-im-cafe',
    level: 'a11',
    title: 'Im Café',
    kind: 'dialog',
    source: 'Deutsch Studio',
    minutes: 3,
    intro: 'Lena e Paulo se conhecem em um café de Berlim. Apresentações e pedido de bebidas — o diálogo clássico do A1.',
    paragraphs: [
      {
        de: 'Paulo: Entschuldigung, ist hier noch frei?',
        pt: 'Paulo: Com licença, este lugar está livre?',
      },
      {
        de: 'Lena: Ja, klar. Bitte schön!',
        pt: 'Lena: Sim, claro. Fique à vontade!',
      },
      {
        de: 'Paulo: Danke! Ich heiße Paulo. Und wie heißt du?',
        pt: 'Paulo: Obrigado! Eu me chamo Paulo. E você, como se chama?',
      },
      {
        de: 'Lena: Ich bin Lena. Freut mich! Woher kommst du, Paulo?',
        pt: 'Lena: Eu sou a Lena. Prazer! De onde você vem, Paulo?',
      },
      {
        de: 'Paulo: Ich komme aus Brasilien, aus São Paulo. Ich wohne und arbeite jetzt hier in Berlin. Ich bin Programmierer. Und du? Was machst du?',
        pt: 'Paulo: Venho do Brasil, de São Paulo. Agora moro e trabalho aqui em Berlim. Sou programador. E você? O que você faz?',
      },
      {
        de: 'Lena: Ich komme aus München. Ich studiere hier Medizin, im vierten Semester.',
        pt: 'Lena: Eu venho de Munique. Estudo medicina aqui, no quarto semestre.',
      },
      {
        de: 'Kellnerin: Hallo zusammen! Was möchtet ihr trinken?',
        pt: 'Garçonete: Olá! O que vocês gostariam de beber?',
      },
      {
        de: 'Paulo: Ich nehme einen Kaffee, bitte. Mit Milch, ohne Zucker.',
        pt: 'Paulo: Eu vou querer um café, por favor. Com leite, sem açúcar.',
      },
      {
        de: 'Lena: Und für mich einen Tee mit Zitrone, bitte.',
        pt: 'Lena: E para mim um chá com limão, por favor.',
      },
      {
        de: 'Kellnerin: Gern! Ein Kaffee mit Milch und ein Tee mit Zitrone — kommt sofort!',
        pt: 'Garçonete: Pois não! Um café com leite e um chá com limão — já trago!',
      },
    ],
    glossar: [
      { de: 'Entschuldigung', pt: 'com licença; desculpe' },
      { de: 'Ist hier noch frei?', pt: 'Este lugar está livre?' },
      { de: 'Bitte schön!', pt: 'por favor, fique à vontade; aqui está' },
      { de: 'Freut mich!', pt: 'prazer em conhecer!' },
      { de: 'das Semester', pt: 'o semestre' },
      { de: 'die Kellnerin', pt: 'a garçonete' },
      { de: 'möchten', pt: 'gostaria de (forma educada de querer)' },
      { de: 'nehmen', pt: 'pegar; (num pedido) escolher, querer' },
      { de: 'die Milch', pt: 'o leite' },
      { de: 'der Zucker', pt: 'o açúcar' },
      { de: 'die Zitrone', pt: 'o limão' },
      { de: 'sofort', pt: 'imediatamente, já' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Wo sind Lena und Paulo?', options: ['In der Universität', 'Im Café', 'Im Restaurant', 'Im Büro'], answer: 1 },
      { kind: 'choice', prompt: 'Was ist Paulo von Beruf?', options: ['Student', 'Kellner', 'Programmierer', 'Lehrer'], answer: 2 },
      { kind: 'choice', prompt: 'Was studiert Lena?', options: ['Informatik', 'Medizin', 'Musik', 'Deutsch'], answer: 1 },
      { kind: 'choice', prompt: 'Was trinkt Paulo?', options: ['Einen Tee mit Zitrone', 'Einen Kaffee mit Milch, ohne Zucker', 'Ein Wasser', 'Einen Kaffee mit Zucker'], answer: 1 },
      { kind: 'gap', before: 'Lena möchte einen Tee mit', after: '.', answer: ['Zitrone'] },
      { kind: 'order', words: ['Was', 'machst', 'du', 'in', 'Berlin'], answer: 'Was machst du in Berlin', hint: 'Pergunta com palavra interrogativa: verbo na segunda posição.' },
    ],
  },

  // ═══ Drei Wohnungsanzeigen ═══
  {
    id: 'lesen-wohnungsanzeigen',
    level: 'a11',
    title: 'Drei Wohnungsanzeigen',
    kind: 'anzeige',
    source: 'Deutsch Studio',
    minutes: 4,
    intro: 'Três anúncios de apartamento no estilo da prova Goethe A1 (Lesen, Teil 3). Leia com atenção e descubra qual anúncio serve para cada pessoa.',
    paragraphs: [
      {
        de: 'Wohnungen in und um Berlin — drei Anzeigen aus der Zeitung von heute.',
        pt: 'Apartamentos em Berlim e arredores — três anúncios do jornal de hoje.',
      },
      {
        de: 'Anzeige 1 — Kreuzberg: Schöne 2-Zimmer-Wohnung in Berlin-Kreuzberg, 55 m². Hell und modern, mit Balkon. Küche neu. Miete: 850 Euro. Ab 1. September frei. Telefon: 030 555 12 34.',
        pt: 'Anúncio 1 — Kreuzberg: Belo apartamento de 2 cômodos em Berlin-Kreuzberg, 55 m². Claro e moderno, com varanda. Cozinha nova. Aluguel: 850 euros. Livre a partir de 1º de setembro. Telefone: 030 555 12 34.',
      },
      {
        de: 'Anzeige 2 — Neukölln: WG-Zimmer frei! 16 m² in einer 3er-WG, perfekt für Studenten. Küche und Bad teilst du mit zwei netten Studentinnen. Miete: nur 400 Euro, Internet inklusive. E-Mail: wg-neukoelln@post.de.',
        pt: 'Anúncio 2 — Neukölln: Quarto livre em república! 16 m² em uma república de 3 pessoas, perfeito para estudantes. Você divide a cozinha e o banheiro com duas estudantes simpáticas. Aluguel: só 400 euros, internet inclusa. E-mail: wg-neukoelln@post.de.',
      },
      {
        de: 'Anzeige 3 — Kleinmachnow: Große 3-Zimmer-Wohnung mit Garten, 90 m². Sehr ruhig und grün, 20 Minuten mit dem Auto bis Berlin. Perfekt für Familien mit Kindern. Miete: 1200 Euro. Garage möglich. Telefon: 033203 44 55 66.',
        pt: 'Anúncio 3 — Kleinmachnow: Apartamento grande de 3 cômodos com jardim, 90 m². Muito tranquilo e verde, a 20 minutos de carro de Berlim. Perfeito para famílias com crianças. Aluguel: 1200 euros. Garagem opcional. Telefone: 033203 44 55 66.',
      },
    ],
    glossar: [
      { de: 'die Anzeige', pt: 'o anúncio' },
      { de: 'die 2-Zimmer-Wohnung', pt: 'apartamento de 2 cômodos (quarto + sala)' },
      { de: 'hell', pt: 'claro, com boa luz' },
      { de: 'die Miete', pt: 'o aluguel' },
      { de: 'ab 1. September frei', pt: 'livre a partir de 1º de setembro' },
      { de: 'die WG (Wohngemeinschaft)', pt: 'a república, moradia compartilhada' },
      { de: 'das WG-Zimmer', pt: 'o quarto em república' },
      { de: 'teilen', pt: 'dividir, compartilhar' },
      { de: 'inklusive', pt: 'incluso' },
      { de: 'ruhig', pt: 'tranquilo, silencioso' },
      { de: 'der Garten', pt: 'o jardim' },
      { de: 'möglich', pt: 'possível' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Familie Weber hat zwei Kinder. Sie sucht eine ruhige Wohnung mit Garten. Welche Anzeige passt?', options: ['Anzeige 1', 'Anzeige 2', 'Anzeige 3'], answer: 2 },
      { kind: 'choice', prompt: 'Tomás ist Student und hat wenig Geld. Er sucht ein Zimmer, keine ganze Wohnung. Welche Anzeige passt?', options: ['Anzeige 1', 'Anzeige 2', 'Anzeige 3'], answer: 1 },
      { kind: 'choice', prompt: 'Frau Klein arbeitet in Kreuzberg. Sie sucht eine Wohnung mit Balkon für maximal 900 Euro. Welche Anzeige passt?', options: ['Anzeige 1', 'Anzeige 2', 'Anzeige 3'], answer: 0 },
      { kind: 'choice', prompt: 'Was kostet das WG-Zimmer in Neukölln?', options: ['850 Euro', '400 Euro', '1200 Euro', '600 Euro'], answer: 1 },
      { kind: 'choice', prompt: 'Ab wann ist die Wohnung in Kreuzberg frei?', options: ['Ab 1. August', 'Ab 1. September', 'Ab 1. Oktober', 'Sofort'], answer: 1 },
      { kind: 'gap', before: 'Die Wohnung in Kleinmachnow hat einen', after: '.', answer: ['Garten'] },
    ],
  },

  // ═══ Der süße Brei ═══
  {
    id: 'lesen-der-suesse-brei',
    level: 'a11',
    title: 'Der süße Brei',
    kind: 'maerchen',
    source: 'Brüder Grimm — adaptação A1',
    minutes: 5,
    intro: 'O Mingau Doce, dos Irmãos Grimm, recontado em alemão bem simples. Uma panela mágica que só para de cozinhar com a palavra certa.',
    paragraphs: [
      {
        de: 'Ein armes Mädchen wohnt mit seiner Mutter in einem kleinen Haus. Sie haben kein Geld und oft nichts zu essen. Das Mädchen ist hungrig und traurig.',
        pt: 'Uma menina pobre mora com a mãe em uma casinha. Elas não têm dinheiro e muitas vezes não têm nada para comer. A menina está com fome e triste.',
      },
      {
        de: 'Das Mädchen geht in den Wald. Dort trifft es eine alte Frau. Die Frau sagt: „Du bist hungrig, ich weiß. Hier, nimm dieses Töpfchen. Es ist magisch."',
        pt: 'A menina vai à floresta. Lá encontra uma senhora idosa. A mulher diz: "Você está com fome, eu sei. Tome, pegue esta panelinha. Ela é mágica."',
      },
      {
        de: 'Die alte Frau erklärt: „Sag: Töpfchen, koche! Dann kocht es süßen Brei. Sag: Töpfchen, steh! Dann stoppt es wieder." Das Mädchen dankt der Frau und läuft schnell nach Hause.',
        pt: 'A velhinha explica: "Diga: Panelinha, cozinhe! Aí ela cozinha mingau doce. Diga: Panelinha, pare! Aí ela para de novo." A menina agradece à mulher e corre para casa.',
      },
      {
        de: 'Zu Hause sagt das Mädchen: „Töpfchen, koche!" Und das Töpfchen kocht süßen Brei. Die Mutter und das Mädchen essen und sind satt. Jetzt haben sie jeden Tag genug Essen.',
        pt: 'Em casa, a menina diz: "Panelinha, cozinhe!" E a panelinha cozinha mingau doce. A mãe e a menina comem e ficam satisfeitas. Agora elas têm comida suficiente todos os dias.',
      },
      {
        de: 'Eines Tages ist das Mädchen nicht zu Hause. Die Mutter ist allein und hat Hunger. Sie sagt: „Töpfchen, koche!" Das Töpfchen kocht, und die Mutter isst den süßen Brei.',
        pt: 'Um dia, a menina não está em casa. A mãe está sozinha e com fome. Ela diz: "Panelinha, cozinhe!" A panelinha cozinha, e a mãe come o mingau doce.',
      },
      {
        de: 'Aber dann kommt das Problem: Die Mutter vergisst das richtige Wort. Sie ruft: „Töpfchen, stopp! Töpfchen, Ende! Töpfchen, genug!" Aber das Töpfchen kocht weiter und weiter.',
        pt: 'Mas aí vem o problema: a mãe esquece a palavra certa. Ela grita: "Panelinha, stop! Panelinha, fim! Panelinha, chega!" Mas a panelinha continua cozinhando sem parar.',
      },
      {
        de: 'Der Brei läuft aus dem Töpfchen. Er läuft durch die Küche, durch das Haus und auf die Straße. Bald ist die ganze Stadt voll Brei. Nur ein Haus ist noch frei!',
        pt: 'O mingau transborda da panelinha. Escorre pela cozinha, pela casa e vai para a rua. Logo a cidade inteira está cheia de mingau. Só uma casa ainda está livre!',
      },
      {
        de: 'Endlich kommt das Mädchen nach Hause. Es sagt nur zwei Worte: „Töpfchen, steh!" Das Töpfchen stoppt sofort. Und die Leute? Sie essen einen Weg durch den Brei zurück in die Stadt. So endet das Märchen.',
        pt: 'Finalmente a menina volta para casa. Ela diz só duas palavras: "Panelinha, pare!" A panelinha para na hora. E as pessoas? Elas comem um caminho pelo mingau de volta para a cidade. Assim termina o conto.',
      },
    ],
    glossar: [
      { de: 'der Brei', pt: 'o mingau' },
      { de: 'das Töpfchen', pt: 'a panelinha' },
      { de: 'arm', pt: 'pobre' },
      { de: 'hungrig', pt: 'com fome, faminto' },
      { de: 'der Wald', pt: 'a floresta' },
      { de: 'treffen', pt: 'encontrar (alguém)' },
      { de: 'danken', pt: 'agradecer' },
      { de: 'satt', pt: 'satisfeito, saciado' },
      { de: 'genug', pt: 'suficiente, bastante' },
      { de: 'vergessen', pt: 'esquecer' },
      { de: 'das Wort', pt: 'a palavra' },
      { de: 'weiter', pt: 'continuar a... (kocht weiter = continua cozinhando)' },
      { de: 'die Leute', pt: 'as pessoas' },
      { de: 'das Märchen', pt: 'o conto de fadas' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Warum sind das Mädchen und die Mutter traurig?', options: ['Sie sind krank', 'Sie sind arm und haben oft nichts zu essen', 'Sie haben kein Haus', 'Sie haben Streit'], answer: 1 },
      { kind: 'choice', prompt: 'Wen trifft das Mädchen im Wald?', options: ['Einen Mann', 'Eine alte Frau', 'Ein Kind', 'Einen Hund'], answer: 1 },
      { kind: 'gap', before: 'Das Mädchen sagt: „Töpfchen,', after: '!" — und das Töpfchen kocht.', answer: ['koche'], hint: 'É o imperativo de kochen.' },
      { kind: 'choice', prompt: 'Was ist das Problem der Mutter?', options: ['Sie mag keinen Brei', 'Sie vergisst das richtige Wort', 'Sie findet das Töpfchen nicht', 'Sie ist krank'], answer: 1 },
      { kind: 'choice', prompt: 'Wer stoppt das Töpfchen am Ende?', options: ['Die Mutter', 'Die alte Frau', 'Das Mädchen', 'Die Leute'], answer: 2 },
      { kind: 'choice', prompt: 'Was machen die Leute am Ende?', options: ['Sie verkaufen den Brei', 'Sie essen einen Weg durch den Brei', 'Sie waschen die Stadt', 'Sie kaufen neue Töpfe'], answer: 1 },
    ],
  },

  // ═══ E-Mail aus Berlin ═══
  {
    id: 'lesen-email-aus-berlin',
    level: 'a12',
    title: 'E-Mail aus Berlin',
    kind: 'brief',
    source: 'Deutsch Studio',
    minutes: 4,
    intro: 'Lena escreve um e-mail para a amiga Anna: a mudança para Berlim, o apartamento novo e um convite para agosto. Formato típico do Goethe A1.',
    paragraphs: [
      {
        de: 'Liebe Anna, wie geht es dir? Mir geht es super! Ich habe große Neuigkeiten: Ich bin nach Berlin umgezogen! Seit zwei Monaten wohne ich jetzt hier.',
        pt: 'Querida Anna, como você está? Eu estou ótima! Tenho grandes novidades: eu me mudei para Berlim! Já faz dois meses que moro aqui.',
      },
      {
        de: 'Meine neue Wohnung ist klein, aber gemütlich. Sie hat zwei Zimmer, eine Küche und einen kleinen Balkon. Sie liegt in Friedrichshain. Die Miete ist hoch, aber das ist normal in Berlin.',
        pt: 'Meu apartamento novo é pequeno, mas aconchegante. Tem dois cômodos, uma cozinha e uma varandinha. Fica em Friedrichshain. O aluguel é alto, mas isso é normal em Berlim.',
      },
      {
        de: 'Ich studiere hier weiter Medizin. Die Uni ist groß und die Professoren sind nett. Am Wochenende arbeite ich in einem Café. Der Job macht Spaß und ich verdiene ein bisschen Geld.',
        pt: 'Continuo estudando medicina aqui. A universidade é grande e os professores são simpáticos. No fim de semana trabalho em um café. O trabalho é divertido e ganho um dinheirinho.',
      },
      {
        de: 'Berlin ist fantastisch! Ich habe schon nette Leute kennengelernt. Letzte Woche habe ich das Brandenburger Tor besucht und bin mit dem Fahrrad durch den Tiergarten gefahren. Die Stadt ist nie langweilig.',
        pt: 'Berlim é fantástica! Já conheci pessoas legais. Semana passada visitei o Portão de Brandemburgo e andei de bicicleta pelo parque Tiergarten. A cidade nunca é entediante.',
      },
      {
        de: 'Jetzt meine Frage: Willst du mich im August besuchen? Du kannst bei mir auf dem Sofa schlafen. Wir können zusammen die Stadt besichtigen und abends Currywurst essen. Bitte sag Ja!',
        pt: 'Agora a minha pergunta: você quer me visitar em agosto? Você pode dormir no meu sofá. Podemos conhecer a cidade juntas e comer Currywurst à noite. Por favor, diga sim!',
      },
      {
        de: 'Antworte mir bald! Viele Grüße, deine Lena',
        pt: 'Responda logo! Um abraço, sua Lena',
      },
    ],
    glossar: [
      { de: 'die Neuigkeiten', pt: 'as novidades' },
      { de: 'umziehen (ich bin umgezogen)', pt: 'mudar-se (de casa, de cidade)' },
      { de: 'gemütlich', pt: 'aconchegante' },
      { de: 'die Miete', pt: 'o aluguel' },
      { de: 'hoch', pt: 'alto, alta' },
      { de: 'weiter studieren', pt: 'continuar estudando' },
      { de: 'verdienen', pt: 'ganhar (dinheiro)' },
      { de: 'kennenlernen', pt: 'conhecer (pessoas)' },
      { de: 'besichtigen', pt: 'visitar (pontos turísticos)' },
      { de: 'langweilig', pt: 'entediante, chato' },
      { de: 'bald', pt: 'logo, em breve' },
      { de: 'Viele Grüße', pt: 'saudações (fecho de carta/e-mail)' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Was ist Lenas große Neuigkeit?', options: ['Sie hat einen neuen Job', 'Sie ist nach Berlin umgezogen', 'Sie hat geheiratet', 'Sie hat einen Hund'], answer: 1 },
      { kind: 'choice', prompt: 'Wie ist Lenas neue Wohnung?', options: ['Groß und teuer', 'Klein, aber gemütlich', 'Alt und dunkel', 'Groß, mit Garten'], answer: 1 },
      { kind: 'choice', prompt: 'Was macht Lena am Wochenende?', options: ['Sie lernt in der Bibliothek', 'Sie arbeitet in einem Café', 'Sie fährt nach München', 'Sie schläft den ganzen Tag'], answer: 1 },
      { kind: 'choice', prompt: 'Was hat Lena letzte Woche gemacht?', options: ['Sie hat das Brandenburger Tor besucht', 'Sie hat Anna besucht', 'Sie hat ein Auto gekauft', 'Sie hat einen Kurs angefangen'], answer: 0 },
      { kind: 'gap', before: 'Anna soll Lena im', after: 'besuchen.', answer: ['August'] },
      { kind: 'choice', prompt: 'Wo kann Anna schlafen?', options: ['Im Hotel', 'Auf Lenas Sofa', 'Bei Freunden', 'Im Hostel'], answer: 1 },
    ],
  },

  // ═══ Ein Ausflug nach München ═══
  {
    id: 'lesen-ausflug-muenchen',
    level: 'a12',
    title: 'Ein Ausflug nach München',
    kind: 'geschichte',
    source: 'Deutsch Studio',
    minutes: 5,
    intro: 'Paulo conta no Perfekt (passado) o passeio de um dia a Munique: trem, Marienplatz, Weißwurst e o gigantesco Deutsches Museum.',
    paragraphs: [
      {
        de: 'Am Samstag hat Paulo einen Ausflug nach München gemacht. Er ist schon um fünf Uhr aufgestanden und um sechs Uhr mit dem Zug gefahren. Die Fahrt hat vier Stunden gedauert. Im Zug hat er gefrühstückt und ein bisschen geschlafen.',
        pt: 'No sábado, Paulo fez um passeio a Munique. Levantou já às cinco horas e às seis pegou o trem. A viagem durou quatro horas. No trem, tomou café da manhã e dormiu um pouco.',
      },
      {
        de: 'In München ist er zuerst zum Marienplatz gegangen. Dort hat er das Neue Rathaus besichtigt und das Glockenspiel gesehen. Paulo hat viele Fotos gemacht und sie seiner Familie geschickt.',
        pt: 'Em Munique, ele foi primeiro à Marienplatz. Lá visitou a Prefeitura Nova e viu o Glockenspiel (o carrilhão da torre). Paulo tirou muitas fotos e as mandou para a família.',
      },
      {
        de: 'Um zwölf Uhr hat Paulo Hunger bekommen. Er ist in ein typisch bayerisches Restaurant gegangen. Dort hat er Weißwurst mit Brezel gegessen und eine Apfelschorle getrunken. Das Essen hat ihm super geschmeckt.',
        pt: 'Ao meio-dia, Paulo ficou com fome. Foi a um restaurante tipicamente bávaro. Lá comeu Weißwurst (salsicha branca) com Brezel e bebeu uma Apfelschorle (suco de maçã com água com gás). Ele achou a comida deliciosa.',
      },
      {
        de: 'Am Nachmittag ist er ins Deutsche Museum gegangen. Das Museum ist riesig — es ist das größte Technikmuseum der Welt! Paulo hat die alten Flugzeuge und die Schiffe besonders interessant gefunden. Er ist drei Stunden dort geblieben.',
        pt: 'À tarde, ele foi ao Deutsches Museum. O museu é gigante — é o maior museu de tecnologia do mundo! Paulo achou os aviões antigos e os navios especialmente interessantes. Ficou três horas lá.',
      },
      {
        de: 'Danach hat er im Englischen Garten eine Pause gemacht. Er hat einen Kaffee getrunken und die Surfer am Eisbach beobachtet. Ja, richtig: In München surfen die Leute mitten in der Stadt — im Fluss!',
        pt: 'Depois, fez uma pausa no Englischer Garten (Jardim Inglês). Tomou um café e observou os surfistas no rio Eisbach. Sim, é isso mesmo: em Munique as pessoas surfam no meio da cidade — no rio!',
      },
      {
        de: 'Um acht Uhr abends ist Paulo zum Hauptbahnhof zurückgegangen. Aber der Zug hat eine Stunde Verspätung gehabt. Er ist erst um ein Uhr nachts in Berlin angekommen. Er war total müde — aber der Tag war wunderbar!',
        pt: 'Às oito da noite, Paulo voltou para a estação central. Mas o trem teve uma hora de atraso. Ele só chegou em Berlim à uma da manhã. Estava exausto — mas o dia foi maravilhoso!',
      },
    ],
    glossar: [
      { de: 'der Ausflug', pt: 'o passeio, a excursão' },
      { de: 'der Zug', pt: 'o trem' },
      { de: 'dauern', pt: 'durar' },
      { de: 'das Rathaus', pt: 'a prefeitura' },
      { de: 'besichtigen', pt: 'visitar (monumento, museu)' },
      { de: 'schicken', pt: 'enviar, mandar' },
      { de: 'die Weißwurst', pt: 'a salsicha branca bávara' },
      { de: 'die Brezel', pt: 'o pretzel' },
      { de: 'schmecken', pt: 'ter gosto bom (es hat ihm geschmeckt = ele gostou da comida)' },
      { de: 'riesig', pt: 'gigante, enorme' },
      { de: 'beobachten', pt: 'observar' },
      { de: 'der Fluss', pt: 'o rio' },
      { de: 'die Verspätung', pt: 'o atraso' },
      { de: 'ankommen (ist angekommen)', pt: 'chegar' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Wie ist Paulo nach München gefahren?', options: ['Mit dem Auto', 'Mit dem Bus', 'Mit dem Zug', 'Mit dem Flugzeug'], answer: 2 },
      { kind: 'choice', prompt: 'Wie lange hat die Fahrt gedauert?', options: ['Zwei Stunden', 'Drei Stunden', 'Vier Stunden', 'Fünf Stunden'], answer: 2 },
      { kind: 'choice', prompt: 'Was hat Paulo im Restaurant gegessen?', options: ['Currywurst mit Pommes', 'Weißwurst mit Brezel', 'Schnitzel mit Salat', 'Pizza'], answer: 1 },
      { kind: 'choice', prompt: 'Wie lange ist Paulo im Deutschen Museum geblieben?', options: ['Eine Stunde', 'Zwei Stunden', 'Drei Stunden', 'Den ganzen Tag'], answer: 2 },
      { kind: 'choice', prompt: 'Was hat Paulo im Englischen Garten gesehen?', options: ['Ein Fußballspiel', 'Die Surfer am Eisbach', 'Ein Konzert', 'Viele Tiere'], answer: 1 },
      { kind: 'gap', before: 'Der Zug hat eine Stunde', after: 'gehabt.', answer: ['Verspätung'] },
      { kind: 'order', words: ['Paulo', 'hat', 'viele', 'Fotos', 'gemacht'], answer: 'Paulo hat viele Fotos gemacht', hint: 'Perfekt: haben na 2ª posição, particípio no fim.' },
    ],
  },

  // ═══ Beim Arzt ═══
  {
    id: 'lesen-beim-arzt',
    level: 'a12',
    title: 'Beim Arzt',
    kind: 'dialog',
    source: 'Deutsch Studio',
    minutes: 4,
    intro: 'Paulo está doente e vai à médica. Sintomas, exame, receita e conselhos com o verbo sollen — e o clássico Gute Besserung no final.',
    paragraphs: [
      {
        de: 'Ärztin: Guten Tag, Herr Silva. Was fehlt Ihnen denn?',
        pt: 'Médica: Bom dia, senhor Silva. O que o senhor está sentindo?',
      },
      {
        de: 'Paulo: Guten Tag, Frau Doktor. Ich fühle mich nicht gut. Ich habe starke Kopfschmerzen und Fieber.',
        pt: 'Paulo: Bom dia, doutora. Não estou me sentindo bem. Estou com dor de cabeça forte e febre.',
      },
      {
        de: 'Ärztin: Seit wann haben Sie die Schmerzen?',
        pt: 'Médica: Desde quando o senhor está com essas dores?',
      },
      {
        de: 'Paulo: Seit drei Tagen. Ich bin auch sehr müde und mein Hals tut weh.',
        pt: 'Paulo: Há três dias. Também estou muito cansado e minha garganta dói.',
      },
      {
        de: 'Ärztin: Machen Sie bitte den Mund auf. ... Ja, der Hals ist ganz rot. Sie haben eine Erkältung.',
        pt: 'Médica: Abra a boca, por favor. ... Sim, a garganta está bem vermelha. O senhor está com um resfriado.',
      },
      {
        de: 'Paulo: Ist das schlimm? Ich muss am Montag wieder arbeiten.',
        pt: 'Paulo: É grave? Preciso voltar a trabalhar na segunda-feira.',
      },
      {
        de: 'Ärztin: Nein, keine Sorge. Aber Sie sollen drei Tage im Bett bleiben. Ich schreibe Sie krank.',
        pt: 'Médica: Não, não se preocupe. Mas o senhor deve ficar três dias de cama. Vou lhe dar um atestado.',
      },
      {
        de: 'Paulo: Danke. Und was soll ich gegen die Schmerzen machen?',
        pt: 'Paulo: Obrigado. E o que devo fazer contra as dores?',
      },
      {
        de: 'Ärztin: Hier ist ein Rezept für Tabletten. Nehmen Sie die Tabletten dreimal am Tag nach dem Essen.',
        pt: 'Médica: Aqui está uma receita de comprimidos. Tome os comprimidos três vezes ao dia, depois das refeições.',
      },
      {
        de: 'Paulo: Gut. Und wie lange soll ich sie nehmen?',
        pt: 'Paulo: Certo. E por quanto tempo devo tomar?',
      },
      {
        de: 'Ärztin: Eine Woche. Trinken Sie viel Tee und schlafen Sie viel. Gute Besserung, Herr Silva!',
        pt: 'Médica: Uma semana. Beba bastante chá e durma muito. Melhoras, senhor Silva!',
      },
      {
        de: 'Paulo: Vielen Dank, Frau Doktor. Auf Wiedersehen!',
        pt: 'Paulo: Muito obrigado, doutora. Até logo!',
      },
    ],
    glossar: [
      { de: 'Was fehlt Ihnen?', pt: 'o que o senhor está sentindo? (lit.: o que lhe falta?)' },
      { de: 'sich fühlen', pt: 'sentir-se' },
      { de: 'die Kopfschmerzen', pt: 'a dor de cabeça' },
      { de: 'das Fieber', pt: 'a febre' },
      { de: 'der Hals', pt: 'a garganta; o pescoço' },
      { de: 'wehtun (tut weh)', pt: 'doer' },
      { de: 'die Erkältung', pt: 'o resfriado' },
      { de: 'schlimm', pt: 'grave, ruim' },
      { de: 'keine Sorge', pt: 'não se preocupe' },
      { de: 'krankschreiben', pt: 'dar atestado médico' },
      { de: 'das Rezept', pt: 'a receita médica' },
      { de: 'die Tablette', pt: 'o comprimido' },
      { de: 'dreimal am Tag', pt: 'três vezes ao dia' },
      { de: 'Gute Besserung!', pt: 'melhoras!' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Welche Symptome hat Paulo?', options: ['Bauchschmerzen und Husten', 'Kopfschmerzen, Fieber und Halsschmerzen', 'Rückenschmerzen', 'Nur Fieber'], answer: 1 },
      { kind: 'choice', prompt: 'Seit wann hat Paulo die Schmerzen?', options: ['Seit gestern', 'Seit drei Tagen', 'Seit einer Woche', 'Seit heute Morgen'], answer: 1 },
      { kind: 'choice', prompt: 'Was hat Paulo?', options: ['Eine Grippe', 'Eine Allergie', 'Eine Erkältung', 'Nichts'], answer: 2 },
      { kind: 'choice', prompt: 'Wie oft soll Paulo die Tabletten nehmen?', options: ['Einmal am Tag', 'Zweimal am Tag', 'Dreimal am Tag', 'Nur am Abend'], answer: 2 },
      { kind: 'choice', prompt: 'Wie lange soll Paulo im Bett bleiben?', options: ['Einen Tag', 'Zwei Tage', 'Drei Tage', 'Eine Woche'], answer: 2 },
      { kind: 'gap', before: 'Die Ärztin sagt am Ende: „Gute', after: ', Herr Silva!"', answer: ['Besserung'] },
    ],
  },

  // ═══ Die Sterntaler (Grimm, adaptação A1.2) ═══
  {
    id: 'lesen-die-sterntaler',
    level: 'a12',
    title: 'Die Sterntaler',
    kind: 'maerchen',
    source: 'Brüder Grimm — adaptação A1',
    minutes: 5,
    intro: 'Um dos contos mais curtos e amados dos Irmãos Grimm: a menina que dá tudo o que tem — e o céu responde. Adaptado para A1.2.',
    paragraphs: [
      { de: 'Es war einmal ein kleines Mädchen. Das Mädchen hat keinen Vater und keine Mutter mehr. Es ist ganz arm. Es hat kein Zimmer und kein Bett. Es hat nur seine Kleider und ein Stück Brot in der Hand.', pt: 'Era uma vez uma menina pequena. A menina não tem mais pai nem mãe. É muito pobre. Não tem quarto nem cama. Tem só suas roupas e um pedaço de pão na mão.' },
      { de: 'Das Mädchen ist gut und fromm. Es geht allein auf das Feld. Da kommt ein armer Mann. Er sagt: „Ich habe Hunger. Gib mir etwas zu essen!" Das Mädchen gibt ihm das ganze Brot und sagt: „Gott segne es dir."', pt: 'A menina é boa e piedosa. Vai sozinha para o campo. Então vem um homem pobre. Ele diz: "Tenho fome. Dá-me algo para comer!" A menina dá a ele o pão inteiro e diz: "Deus o abençoe."' },
      { de: 'Dann kommt ein Kind. Es weint und sagt: „Mein Kopf ist so kalt. Gib mir deine Mütze!" Das Mädchen gibt ihm die Mütze. Danach kommt noch ein Kind. Es hat keine Jacke und friert. Das Mädchen gibt ihm auch die Jacke.', pt: 'Então vem uma criança. Chora e diz: "Minha cabeça está tão fria. Dá-me a sua touca!" A menina dá a touca. Depois vem mais uma criança. Não tem casaco e está congelando. A menina dá também o casaco.' },
      { de: 'Später kommt noch ein Kind und möchte das Kleid. Das gute Mädchen gibt auch das Kleid. Jetzt ist es Nacht und dunkel. Das Mädchen hat gar nichts mehr — aber es hat ein gutes Herz.', pt: 'Mais tarde vem mais uma criança e quer o vestido. A boa menina dá também o vestido. Agora é noite e está escuro. A menina não tem mais nada — mas tem um bom coração.' },
      { de: 'Da fallen auf einmal die Sterne vom Himmel! Aber es sind keine Sterne — es sind Taler aus Silber und Gold. Und das Mädchen hat plötzlich ein neues Kleid an.', pt: 'De repente as estrelas caem do céu! Mas não são estrelas — são moedas de prata e ouro. E a menina de repente está com um vestido novo.' },
      { de: 'Das Mädchen sammelt die Taler und ist reich — für sein ganzes Leben. Es hat alles gegeben und alles bekommen.', pt: 'A menina recolhe as moedas e fica rica — para a vida toda. Ela deu tudo e recebeu tudo.' },
    ],
    glossar: [
      { de: 'es war einmal', pt: 'era uma vez' },
      { de: 'arm', pt: 'pobre' },
      { de: 'fromm', pt: 'piedosa, devota' },
      { de: 'das Feld', pt: 'o campo' },
      { de: 'die Mütze', pt: 'a touca, o gorro' },
      { de: 'frieren', pt: 'congelar, passar frio' },
      { de: 'das Herz', pt: 'o coração' },
      { de: 'der Stern (die Sterne)', pt: 'a estrela' },
      { de: 'der Taler', pt: 'o táler (moeda antiga)' },
      { de: 'das Silber / das Gold', pt: 'a prata / o ouro' },
      { de: 'plötzlich', pt: 'de repente' },
      { de: 'sammeln', pt: 'recolher, juntar' },
      { de: 'reich', pt: 'rico' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Was hat das Mädchen am Anfang?', options: ['Ein Haus und ein Bett', 'Nur Kleider und ein Stück Brot', 'Viel Geld', 'Eine Familie'], answer: 1 },
      { kind: 'choice', prompt: 'Wem gibt das Mädchen das Brot?', options: ['Einem Kind', 'Einem armen Mann', 'Seiner Mutter', 'Einem Hund'], answer: 1 },
      { kind: 'choice', prompt: 'Was gibt das Mädchen NICHT weg?', options: ['Die Mütze', 'Die Jacke', 'Das Kleid', 'Sein gutes Herz'], answer: 3 },
      { kind: 'choice', prompt: 'Was fällt vom Himmel?', options: ['Regen', 'Schnee', 'Taler aus Silber und Gold', 'Sterne aus Papier'], answer: 2 },
      { kind: 'gap', before: 'Das Mädchen hat alles gegeben und alles ', after: '.', answer: ['bekommen'] },
    ],
  },

  // ═══ Einkaufen am Samstag (A1.2) ═══
  {
    id: 'lesen-einkaufen-samstag',
    level: 'a12',
    title: 'Einkaufen am Samstag',
    kind: 'geschichte',
    source: 'Deutsch Studio',
    minutes: 5,
    intro: 'O sábado de compras da Lena: mercado, loja de roupas, um vestido caro demais — e o final feliz no café. Vocabulário de Einkaufen & Kleidung em ação.',
    paragraphs: [
      { de: 'Samstag ist Einkaufstag! Lena macht zuerst eine Einkaufsliste: Brot, Käse, Milch, Äpfel, Tomaten und Kaffee. Ohne Liste kauft sie immer zu viel.', pt: 'Sábado é dia de compras! Lena primeiro faz uma lista: pão, queijo, leite, maçãs, tomates e café. Sem lista ela sempre compra demais.' },
      { de: 'Um zehn Uhr geht sie zum Markt. Das Obst ist hier frisch und billig. Ein Kilo Äpfel kostet nur zwei Euro. Der Verkäufer ist nett und gibt ihr eine Orange gratis.', pt: 'Às dez ela vai ao mercado. A fruta aqui é fresca e barata. Um quilo de maçãs custa só dois euros. O vendedor é simpático e dá a ela uma laranja de graça.' },
      { de: 'Danach geht Lena in ein Kaufhaus. Sie braucht ein Kleid für die Party von Paulo. Im ersten Geschäft sieht sie ein rotes Kleid. Es ist sehr schön! Sie fragt: „Kann ich das anprobieren?"', pt: 'Depois Lena vai a uma loja de departamentos. Precisa de um vestido para a festa do Paulo. Na primeira loja vê um vestido vermelho. É muito bonito! Ela pergunta: "Posso experimentar?"' },
      { de: 'Das Kleid passt ihr perfekt und steht ihr sehr gut. Aber dann sieht sie den Preis: 129 Euro! Das ist zu teuer. Schade!', pt: 'O vestido serve perfeitamente e fica muito bem nela. Mas então ela vê o preço: 129 euros! Caro demais. Que pena!' },
      { de: 'Im zweiten Geschäft findet sie ein blaues Kleid. Es kostet nur 45 Euro und gefällt ihr auch. Größe 38 passt. Sie zahlt mit Karte und ist glücklich.', pt: 'Na segunda loja ela encontra um vestido azul. Custa só 45 euros e também agrada. Tamanho 38 serve. Ela paga com cartão e fica feliz.' },
      { de: 'Zum Schluss trinkt Lena einen Kaffee im Café am Markt. Sie hat heute alles gefunden: das Essen, das Kleid — und ein Stück Schokoladenkuchen. Das hat sie nicht geplant, aber es hat sehr gut geschmeckt!', pt: 'Por fim, Lena toma um café no café do mercado. Hoje ela encontrou tudo: a comida, o vestido — e um pedaço de bolo de chocolate. Isso ela não planejou, mas estava delicioso!' },
    ],
    glossar: [
      { de: 'die Einkaufsliste', pt: 'a lista de compras' },
      { de: 'frisch', pt: 'fresco' },
      { de: 'billig / teuer', pt: 'barato / caro' },
      { de: 'gratis', pt: 'de graça' },
      { de: 'das Kaufhaus', pt: 'a loja de departamentos' },
      { de: 'das Geschäft', pt: 'a loja' },
      { de: 'anprobieren', pt: 'experimentar (roupa)' },
      { de: 'passen (+Dativ)', pt: 'servir, caber' },
      { de: 'stehen (+Dativ)', pt: 'ficar bem (roupa)' },
      { de: 'der Preis', pt: 'o preço' },
      { de: 'Schade!', pt: 'Que pena!' },
      { de: 'die Größe', pt: 'o tamanho' },
      { de: 'mit Karte zahlen', pt: 'pagar com cartão' },
      { de: 'schmecken', pt: 'ter bom gosto (comida)' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Warum macht Lena eine Einkaufsliste?', options: ['Sie vergisst alles', 'Ohne Liste kauft sie zu viel', 'Der Markt ist groß', 'Paulo möchte eine Liste'], answer: 1 },
      { kind: 'choice', prompt: 'Was bekommt Lena gratis?', options: ['Einen Apfel', 'Eine Orange', 'Einen Kaffee', 'Tomaten'], answer: 1 },
      { kind: 'choice', prompt: 'Warum kauft Lena das rote Kleid nicht?', options: ['Es passt ihr nicht', 'Es steht ihr nicht', 'Es ist zu teuer', 'Es ist zu groß'], answer: 2 },
      { kind: 'gap', before: 'Das blaue Kleid kostet nur ', after: ' Euro.', answer: ['45', 'fünfundvierzig'] },
      { kind: 'choice', prompt: 'Wie zahlt Lena?', options: ['Bar', 'Mit Karte', 'Mit dem Handy', 'Paulo zahlt'], answer: 1 },
      { kind: 'choice', prompt: 'Was hat Lena NICHT geplant?', options: ['Das Kleid', 'Den Markt', 'Den Schokoladenkuchen', 'Den Kaffee'], answer: 2 },
    ],
  },

  // ═══ Der Wetterbericht (A1.2, Sachtext) ═══
  {
    id: 'lesen-wetterbericht',
    level: 'a12',
    title: 'Der Wetterbericht',
    kind: 'sachtext',
    source: 'Deutsch Studio',
    minutes: 4,
    intro: 'Um boletim do tempo típico da TV alemã — norte chuvoso, sul ensolarado — com direito a comparação com o Brasil no final.',
    paragraphs: [
      { de: 'Guten Abend! Hier ist der Wetterbericht für Deutschland für morgen, Samstag, den zwölften Juli.', pt: 'Boa noite! Aqui está a previsão do tempo para a Alemanha para amanhã, sábado, doze de julho.' },
      { de: 'Im Norden ist das Wetter morgen leider schlecht. In Hamburg und Bremen regnet es den ganzen Tag. Es ist windig und kühl — nur zwölf Grad. Nehmen Sie einen Regenschirm mit!', pt: 'No norte o tempo amanhã infelizmente está ruim. Em Hamburgo e Bremen chove o dia inteiro. Está ventoso e fresco — só doze graus. Leve um guarda-chuva!' },
      { de: 'Im Süden ist es ganz anders: In München und Stuttgart scheint die Sonne. Es ist warm — 24 Grad. Perfektes Wetter für einen Ausflug an den See oder in die Berge!', pt: 'No sul é bem diferente: em Munique e Stuttgart o sol brilha. Está quente — 24 graus. Tempo perfeito para um passeio ao lago ou às montanhas!' },
      { de: 'In Berlin und im Osten ist es bewölkt, aber trocken. Die Temperatur liegt bei 18 Grad. Am Abend kann es ein bisschen regnen.', pt: 'Em Berlim e no leste está nublado, mas seco. A temperatura fica em 18 graus. À noite pode chover um pouco.' },
      { de: 'Am Sonntag wird das Wetter überall besser: viel Sonne und bis zu 26 Grad. Ein perfekter Tag für den Biergarten!', pt: 'No domingo o tempo melhora em toda parte: muito sol e até 26 graus. Um dia perfeito para o Biergarten!' },
      { de: 'Übrigens: In Brasilien ist jetzt Winter! Wenn es in Deutschland Sommer ist, ist es in São Paulo kühl. Die Jahreszeiten sind dort umgekehrt.', pt: 'Aliás: no Brasil agora é inverno! Quando na Alemanha é verão, em São Paulo está fresco. As estações lá são invertidas.' },
    ],
    glossar: [
      { de: 'der Wetterbericht', pt: 'o boletim do tempo' },
      { de: 'es regnet', pt: 'chove' },
      { de: 'windig', pt: 'ventoso' },
      { de: 'kühl', pt: 'fresco (temperatura)' },
      { de: 'der Grad', pt: 'o grau' },
      { de: 'der Regenschirm', pt: 'o guarda-chuva' },
      { de: 'die Sonne scheint', pt: 'o sol brilha' },
      { de: 'der Ausflug', pt: 'o passeio, a excursão' },
      { de: 'der See', pt: 'o lago' },
      { de: 'bewölkt', pt: 'nublado' },
      { de: 'trocken', pt: 'seco' },
      { de: 'überall', pt: 'em toda parte' },
      { de: 'umgekehrt', pt: 'invertido, ao contrário' },
    ],
    questions: [
      { kind: 'choice', prompt: 'Wie ist das Wetter morgen in Hamburg?', options: ['Sonnig und warm', 'Es regnet den ganzen Tag', 'Bewölkt aber trocken', 'Es schneit'], answer: 1 },
      { kind: 'choice', prompt: 'Wie viel Grad sind es in München?', options: ['12 Grad', '18 Grad', '24 Grad', '26 Grad'], answer: 2 },
      { kind: 'choice', prompt: 'Wie ist das Wetter in Berlin?', options: ['Es regnet stark', 'Bewölkt, aber trocken', 'Sonnig und heiß', 'Es ist neblig'], answer: 1 },
      { kind: 'gap', before: 'Im Norden soll man einen ', after: ' mitnehmen.', answer: ['Regenschirm'] },
      { kind: 'choice', prompt: 'Warum ist in Brasilien jetzt Winter?', options: ['Brasilien ist kalt', 'Die Jahreszeiten sind umgekehrt', 'Es regnet viel', 'Brasilien hat keinen Sommer'], answer: 1 },
    ],
  },
]
