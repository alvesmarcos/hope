Profile.create([
  { name: 'Dependente', slug: 'dependente', description: 'Sofro com dependência química e busco ajuda' },
  { name: 'Co-depente', slug: 'co-depente', description: 'Quero ajudar um familiar ou amigo dependente' },
  { name: 'Ex-dependente', slug: 'ex-dependente', description: 'Saí do mundo das drogas e busco ajudar outras pessoas' },
  { name: 'Especialista', slug: 'especialista', description: 'Sou um especialista e desejo ajudar mais pessoas' }
])

Role.create([
  { name: 'Administrador', slug: 'superuser', description: 'Controla todas as ações e conteúdos do sistema' },
  { name: 'Usuário', slug: 'user', description: 'Tem acesso a todos os conteúdos do sistema' },
])

MediaCategory.create([
  { name: 'avatar', description: 'Describes an user profile photo', slug: 'avatar' },
  { name: 'thumbnail', description: 'Describes an image thumbnail for articles, documentaries, testimonies etc.', slug: 'thumbnail' },
  { name: 'documents', description: 'Describes documents that proves the profession of an expert', slug: 'documents' }
])
