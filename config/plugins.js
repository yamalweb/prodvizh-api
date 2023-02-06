module.exports = ({env})=>({
  ckeditor: true,
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'mail@pro-dvizh.ru',
        defaultReplyTo: 'mail@pro-dvizh.ru',
      },
    },
  },

  menus: {
    config: {
      layouts: {
        menuItem: {

          link: [
            {
              input: {
                label: 'Описание',
                name: 'description',
                type: 'text',
              },
            },
            {
              input: {
                label: 'Обложка',
                name: 'cover',
                type: 'media',
              },

            },
          ],
          news: [
            {
              input: {
                label: 'Обложка новости',
                name: 'newsCover',
                type: 'media',
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Описание новости',
                name: 'newsDescription',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],
          article: [
            {
              input: {
                label: 'Обложка статьи',
                name: 'articleCover',
                type: 'media',
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Описание статьи',
                name: 'articleDescription',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],
          event: [
            {
              input: {
                label: 'Обложка события',
                name: 'eventCover',
                type: 'media',
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Описание события',
                name: 'eventDescription',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],
          learn: [
            {
              input: {
                label: 'Обложка обучения',
                name: 'learnCover',
                type: 'media',
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Описание обучения',
                name: 'learnDescription',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],
          rent: [
            {
              input: {
                label: 'Обложка аренды',
                name: 'rentCover',
                type: 'media',
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Описание аренды',
                name: 'rentDescription',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],

          video: [
            {
              input: {
                label: 'Обложка видео',
                name: 'videoCover',
                type: 'media',
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Описание видео',
                name: 'videoDescription',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
})
