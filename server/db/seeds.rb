Profession.create([
  { name: 'Pastor', code: 'Indisponível' },
  { name: 'Especialista', code: 'Indisponível' },
  { name: 'Especialista', code: 'Indisponível' },
  { name: 'Psicólogo', code: '251510'},
  { name: 'Psiquiatra', code: '225133'}
])

Status.create([
  { name: 'Na Fila', description: 'Aguardanco aprovação do administrador', slug: 'queue' },
  { name: 'Aprovado', description: 'Solicitação aprovada pelo administrador', slug: 'approved' },
  { name: 'Reprovado', description: 'Solicitação reprovada pelo administrador', slug: 'repproved' }
])

LevelAddiction.create([
  { name: 'Muito depedente', description: 'Não tenho mais controle algum sobre meu consumo de drogas.', slug: 'high' },
  { name: 'Depedente', description: 'Sinto que ainda tenho algum controle, mas não sei até quando conseguirei.', slug: 'medium' },
  { name: 'Pouco depedente', description: 'Aguardanco aprovação do administrador', slug: 'low' }
])

LevelFamilyRelationship.create([
  { name: 'Péssima', description: 'Tenho uma péssima relação com minha família.', slug: 'bad' },
  { name: 'Ruim', description: 'Tenho uma mediana relação com minha família.', slug: 'mean' },
  { name: 'Boa', description: 'Tenho uma boa relação com minha família.', slug: 'good' },
  { name: 'Ótima', description: 'Tenho uma ótima relação com minha família.', slug: 'great' }
])

MediaCategory.create([
  { name: 'avatar', description: 'Describes an user profile photo', slug: 'avatar' },
  { name: 'thumbnail', description: 'Describes an image thumbnail for articles, documentaries, testimonies etc.', slug: 'thumbnail' },
  { name: 'documents', description: 'Describes documents that proves the profession of an expert', slug: 'documents' }
])
