export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6077469e44db383465cdbd0d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7ku2x7sa',
                  apiId: 'fc512730-504f-4706-85e8-34a0fbb4859e'
                },
                {
                  buildHookId: '6077469e3e57a232f0a71f56',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1vcfkxqx',
                  apiId: 'f2ec5aa7-b1c8-4356-8c39-cf8740f9683d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TVuongWebGRC/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1vcfkxqx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
