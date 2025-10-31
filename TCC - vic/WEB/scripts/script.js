// script.js - funções para especialidades

function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

const especialidadesData = {
  artes: [
    { id: 'ceramica', nome: 'Cerâmica', descricao: 'Trabalhos com argila e modelagem.' },
    { id: 'pintura', nome: 'Pintura', descricao: 'Técnicas básicas de pintura em tela e mural.' },
  ],
  ciencia: [
    { id: 'biologia', nome: 'Biologia', descricao: 'Noções de ecologia, anatomia e observação.' },
    { id: 'quimica', nome: 'Química', descricao: 'Experimentos simples e segurança de laboratório.' },
  ],
  esportes: [
    { id: 'basquete', nome: 'Basquete', descricao: 'Fundamentos, dribles, arremessos e regras.' },
    { id: 'atletismo', nome: 'Atletismo', descricao: 'Corrida, salto e arremesso.' },
  ],
  natureza: [
    { id: 'observacao_passaros', nome: 'Observação de Pássaros', descricao: 'Identificação e registro de espécies locais.' },
    { id: 'conservacao', nome: 'Conservação Ambiental', descricao: 'Práticas de proteção e recuperação ambiental.' },
  ]
};

// Requisitos por especialidade (chave: título da página)
const requisitosPorEspecialidade = {
  'Administração': [
    'Completar 12 horas de formação em práticas administrativas.',
    'Elaborar um plano simples de organização ou evento demonstrando controle de recursos.',
    'Apresentar relatório com registro de execução de uma atividade administrativa.'
  ],
  'Alfaiataria': [
    'Confeccionar duas peças completas (ex.: calça, saia ou blusa) com acabamento aceitável.',
    'Demonstrar conhecimento de corte, medidas e ajustes em um corpo piloto.',
    'Usar corretamente máquina de costura e ferramentas de corte.'
  ],
  'Alvenaria': [
    'Executar serviços de assentamento de tijolos e nivelamento sob supervisão.',
    'Conhecer e aplicar normas básicas de segurança em obra.',
    'Medir, calcular e preparar argamassa para um pequeno serviço prático.'
  ],
  'Bandeiras Náuticas': [
    'Identificar as principais bandeiras e seus significados.',
    'Sinalizar corretamente mensagens simples utilizando bandeiras.',
    'Demonstrar procedimentos de segurança marítima relacionados à sinalização.'
  ],
  'Barbearia': [
    'Realizar cortes básicos e acabamento em penteados masculinos.',
    'Demonstrar higiene e segurança no atendimento ao cliente.',
    'Conhecer técnicas de uso de navalha e tesouras com segurança.'
  ],
  'Biblioteconomia': [
    'Catalogar ao menos 20 itens seguindo um sistema simples de classificação.',
    'Organizar um pequeno acervo por tema e elaborar ficha de controle.',
    'Aplicar procedimentos de conservação preventiva em livros.'
  ],
  'Blogs': [
    'Criar e publicar ao menos 3 posts com formatação adequada.',
    'Demonstrar conhecimentos básicos de SEO e divulgação em redes sociais.',
    'Configurar e manter um blog funcional (tema, plugins e backups).' 
  ],
  'Cães - Cuidado e Treinamento': [
    'Demonstrar técnicas básicas de manejo e cuidados higiênicos.',
    'Ensinar ao menos três comandos básicos (sentar, ficar, vir).',
    'Elaborar plano de cuidados e alimentação para um cão adulto.'
  ],
  'Carpintaria': [
    'Construir uma peça simples em madeira (ex.: banco ou prateleira).',
    'Usar ferramentas manuais e elétricas com segurança.',
    'Aplicar acabamentos básicos (lixamento e verniz ou óleo).' 
  ],
  'Código Morse': [
    'Reconhecer e traduzir mensagens simples em código Morse.',
    'Emitir sinais básicos com dispositivo de áudio ou luz.',
    'Demonstrar velocidade mínima de leitura de mensagens simples.'
  ],
  'Código Semafórico': [
    'Montar mensagens simples utilizando a bandeira semafórica.',
    'Interpretar sinais enviados por outro sinalizador com precisão.',
    'Conhecer procedimentos de segurança ao sinalizar em campo.'
  ],
  'Colocação de Papel de Parede': [
    'Preparar superfícies e calcular a metragem necessária para aplicação.',
    'Aplicar corretamente painéis de papel de parede com alinhamento adequado.',
    'Corrigir bolhas e recortes em cantos e tomadas.'
  ],
  'Computação I': [
    'Utilizar editor de texto, planilha e navegador com proficiência básica.',
    'Salvar, abrir e organizar arquivos e pastas.',
    'Executar exercícios práticos de digitação com precisão mínima.'
  ],
  'Computação II': [
    'Criar planilhas com fórmulas simples e formatar documentos.',
    'Utilizar conceitos de apresentação eletrônica e boas práticas.',
    'Realizar backup e manutenção básica de arquivos.'
  ],
  'Computação III': [
    'Conhecer noções de redes e administração básica de sistemas.',
    'Instalar e configurar softwares comuns e resolver problemas simples.',
    'Aplicar rotinas de segurança digital (antivírus, senhas e atualizações).'
  ],
  'Computação IV': [
    'Trabalhar com ferramentas avançadas de produtividade e automação.',
    'Desenvolver scripts simples para automatizar tarefas.',
    'Configurar serviços em nuvem básicos para armazenamento e compartilhamento.'
  ],
  'Computação V': [
    'Dominar ferramentas especializadas e técnicas de troubleshooting.',
    'Implementar soluções práticas para problemas reais de usuário.',
    'Documentar procedimentos e rotinas de manutenção.'
  ],
  'Conserto de Sapatos': [
    'Realizar consertos básicos (troca de sola, costura de partes soltas).',
    'Identificar materiais e técnicas apropriadas para diferentes tipos de calçado.',
    'Aplicar acabamento que respeite estética e durabilidade.'
  ],
  'Contabilidade': [
    'Registrar entradas e saídas simples em um livro-caixa.',
    'Elaborar um balancete básico e entender conceitos de receita e despesa.',
    'Conhecer obrigações fiscais elementares para pequena organização.'
  ],
  'Corte e Costura': [
    'Confecionar peças simples com uso de máquina de costura.',
    'Interpretar moldes e ajustar medidas ao corpo.',
    'Aplicar acabamentos e costuras reforçadas onde necessário.'
  ],
  'Corte e Costura Avançado': [
    'Aplicar técnicas de modelagem complexa e acabamento profissional.',
    'Executar forros, zíperes invisíveis e acabamentos finos.',
    'Desenvolver uma peça completa com nível de qualidade comercial.'
  ],
  'Cuidados e Manutenção de Violão': [
    'Realizar afinação e regulagem básica do instrumento.',
    'Substituir cordas e ajustar ação e entonação.',
    'Executar manutenção preventiva para conservação do violão.'
  ],
  'Datilografia': [
    'Alcançar velocidade mínima de digitação com precisão (ex.: 35 ppm).',
    'Utilizar postura correta e técnicas de economia de movimento.',
    'Realizar exercícios práticos de ditado e transcrição.'
  ],
  'Desenvolvimento de Software': [
    'Desenvolver e entregar um pequeno projeto de software funcional.',
    'Usar controle de versão (git) para gerenciar o código.',
    'Escrever documentação mínima e testes para funcionalidades entregues.'
  ],
  'Eletricidade': [
    'Realizar instalações elétricas residenciais simples com segurança.',
    'Interpretar esquemas básicos e identificar componentes elétricos.',
    'Aplicar normas de segurança e uso correto de EPI.'
  ],
  'Eletrônica': [
    'Montar circuitos simples e identificar componentes eletrônicos.',
    'Medir tensões e correntes básicas com multímetro corretamente.',
    'Entender princípios de funcionamento de amplificadores e fontes.'
  ],
  'Encadernação': [
    'Executar ao menos dois métodos de encadernação artesanal.',
    'Restaurar e reforçar lombadas e capas simples.',
    'Escolher materiais corretos para conservação do acervo.'
  ],
  'Evangelismo': [
    'Comunicar mensagens de forma clara e respeitosa a pequenos grupos.',
    'Planejar e organizar uma ação de evangelismo local.',
    'Demonstrar sensibilidade cultural e ética ao abordar pessoas.'
  ],
  'Fotografia': [
    'Produzir um portfólio com 10 fotos que demonstrem composição e iluminação.',
    'Controlar exposição manualmente e entender balanço de branco.',
    'Editar imagens em software básico preservando qualidade.'
  ],
  'Hidráulica': [
    'Instalar e reparar pontos hidráulicos simples (torneiras, registros).',
    'Identificar e corrigir vazamentos comuns.',
    'Compreender layout de redes hidráulicas residenciais.'
  ],
  'Informática Programável': [
    'Programar microcontroladores em linguagem básica (ex.: Arduino).',
    'Ler esquemas e conectar sensores e atuadores simples.',
    'Desenvolver um pequeno projeto prático com integração HW/SW.'
  ],
  'Internet': [
    'Criar e gerenciar contas em serviços online com segurança.',
    'Pesquisar e validar informações na web de forma crítica.',
    'Usar ferramentas de comunicação online e colaborar em documentos.'
  ],
  'Internet Avançada': [
    'Configurar redes básicas e entender conceitos de endereçamento e roteamento.',
    'Montar páginas web simples e publicar conteúdo online.',
    'Aplicar práticas de segurança e privacidade na web.'
  ],
  'Intérprete de Língua de Sinais': [
    'Demonstrar vocabulário básico e estruturas gramaticais em Libras.',
    'Interpretar mensagens simples entre língua oral e de sinais.',
    'Manter postura ética e confidencialidade no atendimento.'
  ],
  'Jornalismo': [
    'Produzir ao menos 3 matérias com apuração e fontes identificadas.',
    'Aplicar técnicas de redação objetiva e checagem de fatos.',
    'Conhecer noções de ética jornalística e direitos de imagem.'
  ],
  'Magistério': [
    'Planejar e ministrar uma aula com objetivos claros e avaliação.',
    'Utilizar métodos de ensino adequados a diferentes faixas etárias.',
    'Avaliar e registrar o progresso de alunos em atividades práticas.'
  ],
  'Manutenção de Bicicletas': [
    'Realizar regulagens de freios e câmbio e substituição de pneus.',
    'Fazer manutenção preventiva e lubrificação correta.',
    'Diagnosticar problemas comuns e propor soluções simples.'
  ],
  'Marcenaria': [
    'Projetar e construir uma peça de mobiliário simples.',
    'Usar ferramentas com segurança e realizar medições precisas.',
    'Aplicar colagens e fixações adequadas para resistência.'
  ],
  'Marketing': [
    'Elaborar um plano de divulgação básico para um produto ou evento.',
    'Criar materiais de comunicação simples (ex.: panfleto, post).',
    'Avaliar resultados básicos e ajustar estratégias.'
  ],
  'Marketing Avançado': [
    'Desenvolver estratégias segmentadas e mensurar resultados.',
    'Utilizar ferramentas de análise e automação de marketing.',
    'Criar campanhas com objetivos e indicadores mensuráveis.'
  ],
  'Mecânica Automotiva': [
    'Diagnosticar problemas simples em sistemas do veículo (freios, motor).',
    'Realizar manutenção preventiva básica e trocar fluidos.',
    'Seguir normas de segurança ao trabalhar com veículos.'
  ],
  'Mecânica Automotiva Avançada': [
    'Executar reparos mais complexos em motor e transmissão sob supervisão.',
    'Utilizar ferramentas e equipamentos de diagnóstico automotivo.',
    'Documentar procedimentos e resultados de manutenção.'
  ],
  'Mecânica de Pequenos Motores': [
    'Desmontar e remontar pequenos motores e identificar falhas comuns.',
    'Ajustar carburadores e sistemas de ignição simples.',
    'Realizar manutenção preventiva e testes de funcionamento.'
  ],
  'Modelagem Têxtil': [
    'Criar moldes básicos e adaptar medidas a diferentes corpos.',
    'Aplicar técnicas de gradação e acabamento em peças.',
    'Interpretar padrões e desenvolver protótipos.'
  ],
  'Montagem e Manutenção de Computadores': [
    'Montar, configurar e testar um computador desktop.',
    'Diagnosticar problemas de hardware e substituir componentes.',
    'Instalar sistemas operacionais e drivers básicos.'
  ],
  'Noções de Economia': [
    'Elaborar um orçamento doméstico simples e identificar despesas essenciais.',
    'Compreender noções de oferta, demanda e preço.',
    'Planejar metas financeiras básicas de curto prazo.'
  ],
  'Ofício Alfaiate': [
    'Executar ajustes profissionais em roupas com precisão.',
    'Conhecer técnicas de acabamento e reforço de costuras.',
    'Fazer medições e moldagens para consertos sob encomenda.'
  ],
  'Operação e Manutenção de Impressoras': [
    'Instalar e configurar impressoras comuns e solucionar atolamentos.',
    'Realizar manutenção preventiva e troca de consumíveis.',
    'Calibrar impressão para qualidade adequada.'
  ],
  'Pintura de Parede Exteriores': [
    'Preparar superfícies externas e escolher tintas adequadas.',
    'Aplicar técnicas de pintura com uniformidade e acabamento durável.',
    'Garantir segurança em trabalhos em altura e condições externas.'
  ],
  'Pintura de Parede Interiores': [
    'Preparar superfícies internas e aplicar acabamentos finos.',
    'Escolher materiais adequados para cada ambiente.',
    'Executar pintura com controle de respingos e alinhamento.'
  ],
  'Produção de Vídeo': [
    'Planejar e executar a captação de um vídeo curto (roteiro, enquadramento).',
    'Editar e exportar vídeo com qualidade mínima para publicação.',
    'Conhecer formatos e processos de publicação em plataformas comuns.'
  ],
  'Rádioeletrônica': [
    'Montar circuitos de rádio simples e identificar componentes de RF.',
    'Medir sinais com equipamentos básicos e ajustar antenas.',
    'Aplicar noções de segurança em trabalhos com transmissores.'
  ],
  'Radioamadorismo': [
    'Operar uma estação básica seguindo regulamentação local.',
    'Emitir comunicados claros e registrar contatos realizados.',
    'Conhecer procedimentos de emergência e uso ético do espectro.'
  ],
  'Restauro e Conservação Documental': [
    'Aplicar técnicas básicas de limpeza e estabilização de documentos.',
    'Identificar materiais e intervenções adequadas para conservação.',
    'Documentar intervenções e condições dos acervos.'
  ],
  'Secretariado': [
    'Executar atividades administrativas de recepção e organização documental.',
    'Gerir agendas e correspondências com eficiência.',
    'Aplicar noções de atendimento ao público e comunicação profissional.'
  ],
  'Serviço de Rádio ao Cidadão': [
    'Organizar programação voltada à comunidade e transmitir informações úteis.',
    'Operar equipamentos de transmissão com segurança.',
    'Promover participação cidadã e boas práticas de comunicação.'
  ],
  'Silvicultura': [
    'Conhecer técnicas de plantio e manejo de mudas florestais.',
    'Aplicar práticas de conservação do solo e práticas de reflorestamento.',
    'Planejar ciclos de manejo de pequena área.'
  ],
  'Soldagem': [
    'Executar cordões de solda simples com acabamento adequado.',
    'Conhecer tipos de solda e equipamentos de proteção.',
    'Inspecionar juntas soldadas e reconhecer defeitos comuns.'
  ],
  'Taquigrafia': [
    'Transcrever ditado curto com velocidade e precisão.',
    'Aplicar símbolos taquigráficos básicos em anotações.',
    'Manter organização e rapidez na tomada de notas.'
  ],
  'Tipografia': [
    'Compreender princípios de composição tipográfica e impressão.',
    'Preparar arte-final simples para impressão.',
    'Operar equipamentos básicos de impressão analógica/digital.'
  ],
  'Torno Mecânico': [
    'Operar torno para usinagem de peças simples com segurança.',
    'Medir peças usinadas e ajustar ferramentas conforme tolerâncias.',
    'Entender princípios de corte e velocidades adequadas.'
  ],
  'Vendas': [
    'Demonstrar técnicas de atendimento e abordagem ao cliente.',
    'Elaborar argumento de vendas e fechamento básico.',
    'Registrar transações e manter controle de estoque simples.'
  ],
  'Web Designer': [
    'Criar layouts básicos e protótipos de páginas web.',
    'Aplicar boas práticas de usabilidade e acessibilidade.',
    'Implementar páginas simples com HTML/CSS funcionais.'
  ],
  'Web Designer Avançado': [
    'Desenvolver sites responsivos com técnicas modernas.',
    'Integrar interatividade e otimização de desempenho.',
    'Documentar e versionar projetos para manutenção contínua.'
  ]
};

// Gera requisitos mais específicos automaticamente com base no título
function gerarRequisitosPorTitulo(titulo) {
  const t = (titulo || '').toLowerCase();

  if (t.includes('acampamento')) {
    return [
      'Participar de ao menos 12 horas de atividade de acampamento sob supervisão.',
      'Demonstrar montagem correta de barracas, defesa contra intempéries e manutenção do acampamento.',
      'Aplicar práticas de segurança e higiene no ambiente de acampamento.'
    ];
  }

  if (t.includes('arco') || t.includes('flecha')) {
    return [
      'Demonstrar segurança no manejo do arco e flecha e equipes de proteção.',
      'Alcançar precisão mínima em alvos a distâncias graduadas.',
      'Executar manutenção básica do equipamento e verificar alinhamento.'
    ];
  }

  if (t.includes('natação') || t.includes('natacao') || t.includes('salvamento') || t.includes('segurança na água')) {
    return [
      'Demonstrar técnicas básicas de nado e respiração com segurança.',
      'Participar de exercícios de segurança aquática e resgate simples.',
      'Conhecer procedimentos de prevenção de acidentes em ambientes aquáticos.'
    ];
  }

  if (t.includes('mergulho')) {
    return [
      'Completar treinamento prático de segurança em mergulho e uso de equipamento.',
      'Demonstrar procedimentos de equalização, flutuação e retorno à superfície seguros.',
      'Planejar e executar um mergulho supervisionado com checklists e registro.'
    ];
  }

  if (t.includes('excursionismo') || t.includes('excursionismo') || t.includes('trilha') || t.includes('mochila')) {
    return [
      'Planejar rota, calcular tempo e preparar mochila adequadamente para atividade.',
      'Demonstrar técnicas de navegação e orientação básicas (mapa/bússola/GPS).',
      'Aplicar práticas de segurança, prevenção de riscos e mínimo impacto ambiental.'
    ];
  }

  if (t.includes('escalada') || t.includes('rapel') || t.includes('rapel instrutor')) {
    return [
      'Demonstrar nós, ancoragens e técnicas básicas de progressão em corda.',
      'Executar subida/descida com segurança usando equipamento apropriado.',
      'Conhecer e aplicar procedimentos de verificação e inspeção do material.'
    ];
  }

  if (t.includes('canoa') || t.includes('canoagem') || t.includes('remo') || t.includes('caiaque')) {
    return [
      'Demonstrar técnicas básicas de remada e equilíbrio em embarcações leves.',
      'Conhecer procedimentos de embarque/desembarque e segurança na água.',
      'Participar de uma saída prática com equipamentos e coletes adequados.'
    ];
  }

  if (t.includes('ciclismo') || t.includes('mountain bike')) {
    return [
      'Demonstrar técnicas de pilotagem segura e manutenção básica da bicicleta.',
      'Realizar correção de problemas comuns (troca de pneu, ajuste de freio).',
      'Participar de percurso prático demonstrando comportamento seguro no trânsito/trilha.'
    ];
  }

  if (t.includes('liderança') || t.includes('lideranca')) {
    return [
      'Conduzir uma atividade prática liderando grupo e demonstrando organização.',
      'Planejar tarefas e delegar funções com clareza.',
      'Avaliar e relatar os resultados da atividade, refletindo sobre melhorias.'
    ];
  }

  if (t.includes('mapa') || t.includes('bússola') || t.includes('bussola') || t.includes('orientação') || t.includes('gps') || t.includes('navegação')) {
    return [
      'Interpretar mapas e usar bússola ou GPS para determinar posição e rumo.',
      'Planejar rota simples e verificar erros de navegação em prática.',
      'Demonstrar técnicas de orientação em diferentes tipos de terreno.'
    ];
  }

  if (t.includes('fogueira') || t.includes('cozinha') || t.includes('forno')) {
    return [
      'Preparar fogueira segura e controlar chamas para cozinha ao ar livre.',
      'Cozinhar ao ar livre seguindo boas práticas de higiene e segurança.',
      'Demonstrar limpeza e encerramento seguro do local após uso.'
    ];
  }

  if (t.includes('nós') || t.includes('nos e amarras') || t.includes('amarras')) {
    return [
      'Demonstrar domínio de nós essenciais para acampamento e navegação.',
      'Aplicar nós em projetos práticos de pioneirismo e amarração segura.',
      'Explicar a escolha de nós adequados para diferentes situações.'
    ];
  }

  if (t.includes('pioneir') || t.includes('pioneirias') || t.includes('pioneirismo')) {
    return [
      'Projetar e construir uma estrutura simples usando técnicas de pioneirismo.',
      'Aplicar nós e amarras para garantir segurança e estabilidade da construção.',
      'Avaliar o projeto quanto à funcionalidade e segurança.'
    ];
  }

  if (t.includes('geocaching') || t.includes('letterboxing') || t.includes('exploração') || t.includes('colecionador') || t.includes('filatelia') || t.includes('numismática') || t.includes('numismatica')) {
    return [
      'Organizar e documentar ao menos uma atividade prática relacionada à coleção ou busca.',
      'Demonstrar técnicas de preservação e registro do objeto/achado.',
      'Explicar regras e ética da atividade (respeito ao patrimônio e propriedade).' 
    ];
  }

  // esportes genéricos
  if (/basquete|futebol|futsal|handebol|vole?i|tenis|softbol|skate|patins|triathlon|triathlon/.test(t)) {
    return [
      'Demonstrar habilidades básicas técnicas e táticas do esporte.',
      'Participar de jogos ou treinos demonstrando espírito de equipe e fair play.',
      'Conhecer regras básicas e procedimentos de segurança do esporte.'
    ];
  }

  // fallback padrão (sem mapeamento específico)
  return [
    `Completar ao menos 8 horas de prática relacionadas a ${titulo}.`,
    `Demonstrar competência prática em tarefas básicas de ${titulo.toLowerCase()}.`,
    `Apresentar um trabalho ou demonstração que comprove os conhecimentos em ${titulo.toLowerCase()}.`
  ];
}

// Top 100 títulos de Recreativas (ordem conforme index.html) - serão populados em requisitosPorEspecialidade
const topRecreativas = [
  'Acampamento I','Acampamento II','Acampamento III','Acampamento IV','Acampamento em Baixas Temperaturas','Acampamento Seguro','Acampamento Seguro Avançado','Arco e Flecha','Arco e Flecha Avançado','Arte de Acampar',
  'Atletismo','Barco a Motor','Basquete','Boliche','Caiaque','Canoagem','Carrinho de Rolimã','Ciclismo','Ciclismo Avançado','Colecionador',
  'Construção de Canoas','Cozinha com Forno Horlandês','Cultura Física','Equitação','Equitação Avançada','Escalada em Árvores','Escalada','Escalada Avançado','Esportes Adaptados','Esqui Aquático',
  'Esqui Aquático Avançado','Esqui Cross Country','Esqui Downhill','Evolução em Ordem Unida','Excursionismo Pedestre','Excursionismo Pedestre Avançado','Excursionismo com Mochila','Excursionismo com Mochila Avançado','Excursionismo na Neve','Excursionismo na Neve Avançado',
  'Exploração de Cavernas','Fanfarra','Filatelia','Filatelia Avançado','Fogueira e Cozinha ao Ar Livre','Futebol de Botão','Futebol','Futsal','Geocaching','Geocaching Avançado',
  'Ginástica Acrobática','Ginástica Acrobática Avançado','Handebol','Letterboxing','Letterboxing Avançado','Liderança Campestre','Liderança Campestre Avançado','Liderança na Selva','Liderança na Selva Avançado','Mapa e Bússola',
  'Mergulho Autônomo','Mergulho Autônomo Avançado','Mergulho Livre','Monociclo','Mountain Bike','Natação Avançada','Natação Intermediário I','Natação Intermediário II','Natação Principiante I','Natação Principiante II',
  'Navegação','Nós e Amarras','Nós e Amarras Avançado','Numismática','Ordem Unida','Ordem Unida Avançado','Ordem Unida Instrutor','Orientação com GPS','Patins','Pião',
  'Pioneirias','Pioneirias Avançado','Pioneirismo','Pipas','Rapel','Rapel Instrutor','Remo','Saltos Ornamentais','Salvamento de Afogados','Salvamento de Afogados Avançado',
  'Segurança Básica na Água','Skate','Softbol','Telecartofilia','Telecartofilia Avançado','Tênis de Mesa','Triathlon','Triathlon Avançado','Vela','Viagem e Turismo'
];

// Popula requisitosPorEspecialidade com entradas geradas para o top 100 (se ainda não existirem)
topRecreativas.forEach(t => {
  if (!requisitosPorEspecialidade[t]) {
    requisitosPorEspecialidade[t] = gerarRequisitosPorTitulo(t);
  }
});

function mostrarEspecialidades(area) {
  const titulo = document.getElementById('titulo-area');
  const list = document.getElementById('especialidades-list');
  titulo.textContent = document.querySelector(`#area-list li[onclick*="${area}"]`).textContent;

  list.innerHTML = '';
  const items = especialidadesData[area] || [];
  if (items.length === 0) {
    list.innerHTML = '<li>Nenhuma especialidade encontrada.</li>';
    return;
  }

  items.forEach(e => {
    const li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = `
      <h3>${e.nome}</h3>
      <p>${e.descricao}</p>
      <a href="#" onclick="mostrarDetalhes('${area}','${e.id}'); return false;">Ver detalhes</a>
    `;
    list.appendChild(li);
  });
}

function mostrarDetalhes(area, id) {
  const item = (especialidadesData[area] || []).find(x => x.id === id);
  if (!item) return alert('Especialidade não encontrada');

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="document.body.removeChild(this.parentElement)">&times;</span>
      <h2>${item.nome}</h2>
      <p>${item.descricao}</p>
      <p><strong>Requisitos:</strong> Em construção...</p>
    </div>
  `;
  document.body.appendChild(modal);
}


// Inicializa com a primeira área
document.addEventListener('DOMContentLoaded', () => {
  // Se estivermos na página de índice de especialidades, inicializa normalmente
  if (document.getElementById('especialidades-list')) {
    mostrarEspecialidades('artes');
  }

  // Injetar requisitos automaticamente em páginas individuais de especialidades
  try {
    const titulo = document.querySelector('h1');
    if (titulo) {
      // Se a página já contém seções relevantes (pré-requisitos, requisitos, critérios, evidências),
      // não injetamos para evitar duplicação (caso típico: páginas ADRA já têm conteúdo completo).
      const hasExistingSection = Array.from(document.querySelectorAll('h2')).some(h2 => {
        const txt = h2.textContent.toLowerCase();
        return txt.includes('pré-requis') || txt.includes('pré requisitos') || txt.includes('requisitos') || txt.includes('critério') || txt.includes('evidên');
      });

      if (!hasExistingSection) {
        const chave = titulo.textContent.trim();
        let requisitos = requisitosPorEspecialidade[chave];
        // Se não houver requisitos mapeados, gerar requisitos baseados no título
        if (!requisitos) {
          requisitos = gerarRequisitosPorTitulo(chave);
        }

        if (requisitos && requisitos.length) {
          // Não duplicar se já existe outro container com a mesma classe
          if (!document.querySelector('.requisitos-especialidade')) {
            const container = document.createElement('div');
            container.className = 'requisitos-especialidade';
            let html = '<h2>Requisitos</h2><ul>';
            requisitos.forEach(r => { html += `<li>${r}</li>`; });
            html += '</ul>';
            container.innerHTML = html;
            // inserir após o parágrafo introdutório, se existir
            const pIntro = document.querySelector('.dashboard-container p');
            if (pIntro && pIntro.parentElement) pIntro.parentElement.insertBefore(container, pIntro.nextSibling);
            else if (titulo.parentElement) titulo.parentElement.appendChild(container);
          }
        }
      }
    }
  } catch (e) {
    console.error('Erro ao injetar requisitos:', e);
  }
});
