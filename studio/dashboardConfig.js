export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7464f155efc0aeaca772a6',
                  title: 'Sanity Studio',
                  name: 'jmp-studio',
                  apiId: 'e45ade5c-3241-456a-b1b0-78d7725a65fb'
                },
                {
                  buildHookId: '5d7464f1d6e05ea9d1e7c9f8',
                  title: 'Blog Website',
                  name: 'jmp-web',
                  apiId: '37ade587-3db7-4ec8-89d0-abea65cbff12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshpoll/jmp',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jmp-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
