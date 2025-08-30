export default defineAppConfig({
  docus: {
    title: '建筑插件文档',
    description: '',
    image: '/cover.png',
    socials: {
      github: 'https://github.com/Lala-0x3f/Builders-guide',

    },
    github: {
      dir: '/content',
      branch: 'master',
      repo: 'Builders-guide',
      owner: 'Lala-0x3f',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      fluid: true,
      textLinks: [
        {
          text: "萌ICP备20244447号",
          href: "https://icp.gov.moe/?keyword=20244447",
          target: "_blank",
        },
        {
          text: "使用 Vercel 部署",
          href: "https://vercel.com/home",
          target: "_blank"
        },
      ],
    },

  }
})
