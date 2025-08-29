export default defineAppConfig({
  docus: {
    title: 'SenCraft 指南',
    description: 'SenCraft 是一个公益的我的世界建筑服务器。森服指南宗旨为方便建筑师查询森各种工具，指令和解决疑难杂症',
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
