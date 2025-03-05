// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'danielpetterson', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/ set base to '/<REPO_NAME>',
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['gitname/my-project1', 'gitname/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'danielpetterson/probGLSAlgorithm',
          'danielpetterson/generative-aRt-particles',
          'danielpetterson/DownQuiltDesigner',
          // 'danielpetterson/Seabird_Light_Overlap',
        ], // List of repository names to display. example: ['gitname/my-project1', 'gitname/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Estimating Exposure of Vulnerable Seabird Populations to Offshore Light Pollution',
          description:
            'Research into tracking the migration patterns of vulnerable seabirds using data obtained from light-level loggers. This data was also used to determine the geographic and temporal distribution of artificial light events that pose a threat to these species.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docnewzealand.shinyapps.io/seabird_ALAN/',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Daniel Petterson',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'korovanapole',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'daniel-petterson@outlook.com',
    orcid: '0000-0002-0158-172X',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'R',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Shiny',
    'Power BI',
    'Tableau',
  ],
  experiences: [
    // {
    //   company: '',
    //   position: '',
    //   from: '',
    //   to: '',
    //   companyLink: '',
    // },
    {
      company: 'Statistics Without Borders',
      position: 'Volunteer',
      from: 'October 2024',
      to: 'Present',
      companyLink: 'https://www.statisticswithoutborders.org/',
    },
    {
      company: 'Datasquared',
      position: 'Data Consultant',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'datasqua.red',
    },
    {
      company: 'AviaNZ',
      position: 'Research Assistant',
      from: 'November 2022',
      to: 'February 2023',
      companyLink: 'https://www.avianz.net/',
    },
    {
      company: 'Australian Institute of Business',
      position: 'Performance Insights Analyst',
      from: 'October 2021',
      to: 'May 2022',
      companyLink: 'https://www.aib.edu.au/',
    },
    {
      company: 'Department of Conservation',
      position: 'Technical Support Analyst',
      from: 'November 2021',
      to: 'February 2022',
      companyLink: 'https://www.doc.govt.nz/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Victoria University of Wellington',
      degree: 'Master of Data Science',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'University of Auckland',
      degree: 'Postgraduate Diploma - Medical Statistics',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'University of Auckland',
      degree: "Bachelors Degree - Statistics and Psychology",
      from: '2013',
      to: '2016',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'danielpetterson', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: false,
};

export default CONFIG;
