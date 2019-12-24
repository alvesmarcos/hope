profiles = Profile.create([
  { name: 'Administrator', slug: 'administrator', description: 'Can control all the contents of the mobile app'},
  { name: 'Common', slug: 'common', description: 'Can access all features provide by the mobile app' },
  { name: 'Community', slug: 'community', description: 'Can send tips and exchange messages to users that have Common as profile' }
])
