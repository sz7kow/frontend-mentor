import {JobOffer} from '~job-offers/types/job-offer';

const JOB_OFFERS_SOURCE: JobOffer[] = [
  {
    id: '1',
    employer: {
      company: 'Scoot',
      websiteUrl: 'https://example.com/scoot',
      logo: {
        source: '/assets/svgs/logo-scoot.svg',
        backgroundColor: '#ea9310',
      },
    },
    details: {
      position: 'Senior Software Engineer',
      description:
        'Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.',
      contract: 'Full Time',
      location: 'United Kingdom',
      applyUrl: 'https://example.com/scoot/apply',
      requirements: {
        content:
          'The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.',
        items: [
          '5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.',
          'Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.',
          'Extremely data-driven.',
          'Ability to debug complex systems.',
        ],
      },
      role: {
        content:
          'We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.',
        items: [
          'This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.',
          'Translate the product roadmap into engineering requirements and own the engineering roadmap',
          'Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.',
          'Collaborate with product, design, and external engineering teammates as needed.',
        ],
      },
    },
    metadata: {
      createdAt: '5h ago',
    },
  },
  {
    id: '2',
    employer: {
      company: 'Blogr',
      websiteUrl: 'https://example.com/blogr',
      logo: {
        source: '/assets/svgs/logo-blogr.svg',
        backgroundColor: '#e54b24',
      },
    },
    details: {
      position: 'Haskell and PureScript Dev',
      description:
        'Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.',
      contract: 'Part Time',
      location: 'United States',
      applyUrl: 'https://example.com/blogr/apply',
      requirements: {
        content:
          'We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).',
        items: [
          'You have a knack for UI design',
          'Have Haskell or Purescript knowledge/hacking under your belt.',
          'An experienced engineer familiar with automated testing and deployment.',
          'Experienced with functional programming and domain-driven design or simply interested and capable of learning on the job.',
        ],
      },
      role: {
        content:
          'The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.',
        items: [
          'Build up our tech stack around Haskell and introduce best practices',
          'Contribute to the design of our conversational engine and the architecture supporting it',
          'Design new UIs, working closely with users, stakeholders and the backend team.',
          'Maximize robustness, performance, and scalability of solutions',
        ],
      },
    },
    metadata: {
      createdAt: '20h ago',
    },
  },
  {
    id: '3',
    employer: {
      company: 'Vector',
      websiteUrl: 'https://example.com/vector',
      logo: {
        source: '/assets/svgs/logo-vector.svg',
        backgroundColor: '#353641',
      },
    },
    details: {
      position: 'Midlevel Back End Engineer',
      description:
        'We are looking for a Mid-level Back End Engineer to join our growing software engineering organization. The right person will help move our platform to the next level. You’ll be working as part of a skilled, collaborative team to jointly design and implement high visibility applications.',
      contract: 'Part Time',
      location: 'Russia',
      applyUrl: 'https://example.com/vector/apply',
      requirements: {
        content:
          'As our ideal candidate, you have previous experience in Ruby on Rails and are eager to continue to develop professionally. You work well in an agile environment, and collaborate well with other Software Engineers, Test Automation Engineers, Product Managers, and Designers. You thrive in a fast-paced environment, and are able to adapt when needed.',
        items: [
          'Active participation on a software development team designing, coding, testing, and releasing functionality to our customers',
          'Close collaboration with other engineers and product managers to become a valued member of an autonomous, cross-functional team',
          'Operational responsibility for the services that are owned by your team, potentially including taking part in an on-call rotation',
        ],
      },
      role: {
        content:
          'This is an IDEAL job if you already have a few years of software engineering experience under your belt, and you want to be part of a small, intensely skilled team, who feel total ownership of their work, and can’t imagine a day without learning & coding. You will play a crucial role in the Vector platform and everything you do will matter.',
        items: [
          'Design, code, deploy, and test applications according to the user stories/requirements and industry best practices.',
          'Follow industry standard software lifecycle process when developing software',
          'Conduct code-review with other developers',
          'Assist in development and peer review of plans, technical solutions, and related documentation.',
        ],
      },
    },
    metadata: {
      createdAt: '1d ago',
    },
  },
  {
    id: '4',
    employer: {
      company: 'Office Lite',
      websiteUrl: 'https://example.com/officelite',
      logo: {
        source: '/assets/svgs/logo-officelite.svg',
        backgroundColor: '#2f4fc6',
      },
    },
    details: {
      position: 'Senior Application Engineer',
      description:
        'Office Lite is seeking a talented and enthusiastic Senior Application Engineer whose primary responsibility is software architecture and development for Office Lite systems. Additional responsibilities include participation in project time/task estimation, code and architecture reviews, providing support for junior developers, documentation of system architecture and a supporting role for all phases of the development life-cycle (project definition, process mapping, architecture, coding, acceptance testing, installation, turnover to support, etc.).',
      contract: 'Full Time',
      location: 'Japan',
      applyUrl: 'https://example.com/officelite/apply',
      requirements: {
        content:
          'As a hands-on subject matter expert, you will use expert-level engineering knowledge to provide technical support and help translate customer requirements into exciting new product features. You will be working within multi-disciplinary teams to create pervasive simulation solutions, advance your industry knowledge, and grow the business impact.​',
        items: [
          'Expert Node.js proficiency in a production environment',
          'Proficiency in developing REST APIs',
          'Expert proficiency with relational databases (MySQL) and optimizing SQL queries',
          'Extensive experience with microservices-based architecture in production',
          'Experience with CircleCI, Jenkins or similar CI/CD applications',
        ],
      },
      role: {
        content:
          "You'll work alongside a skilled team of Senior Engineers across five countries participating in system design, architecture, maintenance, and refactoring decisions. You'll be working on new features and integrations and be active in code reviews and coordinating engineering efforts across teams and products.",
        items: [
          'Administering and configuring software',
          'Identify opportunity and help to implement a monitoring solution for proactive and predictable operations.',
          'Triaging problems with applications - identifying known errors and problem trends and finding permanent solutions through root cause analysis.',
          'Providing level 2 and 3 application support.',
        ],
      },
    },
    metadata: {
      createdAt: '2d ago',
    },
  },
  {
    id: '5',
    employer: {
      company: 'Pod',
      websiteUrl: 'https://example.com/pod',
      logo: {
        source: '/assets/svgs/logo-pod.svg',
        backgroundColor: '#132034',
      },
    },
    details: {
      position: 'Remote DevOps Engineer',
      description:
        'Join our dynamic team in developing Pod’s core products and supporting infrastructure. Our software is currently written in Java, VB.Net, React Native, React JS and others. You will help lead new initiatives to build and improve the testing, staging and deployment solutions. You will interact with all development teams, development leadership and our hosting/IT staff to define requirements and goals for the Dev Ops Platform.',
      contract: 'Part Time',
      location: 'Japan',
      applyUrl: 'https://example.com/pod/apply',
      requirements: {
        content:
          'We are looking for talented and motivated engineers who can hit the ground running and take our products to the next level. The engineers who are building our platform across the stack are always willing to go the extra mile to deliver the highest quality software and client experiences. Ideally, you would have:',
        items: [
          "Bachelor's degree preferred, strong preference for Computer Science field of study",
          'Minimum of 5 years of relevant work experience',
          'Hands-on experience with configuring and maintaining resources on AWS',
          'Experience and solid understanding to deploy and maintain container orchestration platforms such as ECS or Kubernetes',
          'Knowledge of networking fundamentals',
          'Expertise with cloud security, understand the principle of least privilege',
          'Strong written and verbal communication skills',
        ],
      },
      role: {
        content:
          'You will work closely with development teams to implement automation solutions using technologies like Amazon Web Services (AWS), Ansible, Jenkins, and Kubernetes to automatically build, test, integrate, and deploy complex, modern systems. You will leverage the full power of the cloud to configure highly resilient and scalable applications that support zero downtime. This position is open to a mid-level to senior professional depending on experience and background.',
        items: [
          'Configure and maintain resources on AWS',
          'Maintain infrastructure as code using Terraform, CloudFormation, and/or Ansible',
          'Responsible for production deployments using Jenkins, CodeDeploy, GitHub Actions',
          'Manage security groups and access controls',
          'Use ticket management system such as Jira and Confluence to manage work priorities',
          'Ability to clearly articulate and communicate complex technical ideas to non-DevOps colleagues',
        ],
      },
    },
    metadata: {createdAt: '2d ago'},
  },
  {
    id: '6',
    employer: {
      company: 'Creative',
      websiteUrl: 'https://example.com/creative',
      logo: {
        source: '/assets/svgs/logo-creative.svg',
        backgroundColor: '#4e1853',
      },
    },
    details: {
      position: 'Desktop Support Manager',
      description:
        'Creative is seeking a Desktop Support Manager responsible for managing and leading a high-performance team in a dynamic environment. The ideal candidate should have management experience, a strong technical skillset, exceptional client service skills and enjoy mentoring a team.',
      contract: 'Part Time',
      location: 'Germany',
      applyUrl: 'https://example.com/creative/apply',
      requirements: {
        content:
          'You are likely someone with a solid background in end-user support and troubleshooting, as this position involves dealing with a large, and often changing, number of day-to-day issues which arise in supporting the information technology requirements of our applications.',
        items: [
          'Bachelor’s degree in IT or related field',
          '5+ years demonstrating strong technical skills supporting end users',
          '3+ years in a leadership capacity (Team Lead, Supervisor, or Manager)',
          'Experience using Professional Services Automation (PSA) tools or ticketing platforms such as ConnectWise, Autotask, ServiceNow, etc.',
          'Possess and demonstrate excellent interpersonal/communication skills',
        ],
      },
      role: {
        content:
          'This is an 80% management and 20% hands-on supervisory role where you will be responsible for the support of automation technologies and managing a team of support engineers in a 24x7 high-volume environment.',
        items: [
          'Lead, coach and manage service desk teams on a daily basis to improve customer service and efficiency',
          'Implement best practices and standardize service desk processes to provide exceptional “white glove” service and deliverable',
          'Oversee the work performed by the team to help prioritize open tickets and tasks',
          'Provide guidance and direction on technical issues',
          'Develop and maintain KPIs for measuring team performance and improving customer experience',
          'Provide status reports to management and collaborate on new initiatives and technical planning',
        ],
      },
    },
    metadata: {
      createdAt: '4d ago',
    },
  },
  {
    id: '7',
    employer: {
      company: 'Pomodoro',
      websiteUrl: 'https://example.com/pomodoro',
      logo: {
        source: '/assets/svgs/logo-pomodoro.svg',
        backgroundColor: '#4721c4',
      },
    },
    details: {
      position: 'iOS Engineer',
      description:
        'We are looking for thoughtful, well-rounded iOS engineer to join our team. We’re looking for someone to help build out the foundation of the app and infrastructure. If you are interested in taking part in building an application that millions of people use every day to increase their productivity, this is the perfect opportunity. You will play an important part in our mobile engineering practice, implementing new features, improving performance, and building beautiful user interfaces.',
      contract: 'Full Time',
      location: 'United States',
      applyUrl: 'https://example.com/pomodoro/apply',
      requirements: {
        content:
          'You are an experienced mobile engineer looking to make Pomodoro one of the best mobile experiences out there. You are someone who excels at customer-centric product development and has a passion for working on application architecture and design, and making smooth, delightful experiences. You care deeply about quality, are energized by partnership and collaboration, and you strive to enable others around you to excel.',
        items: [
          'Strong programming skills in Objective-C and/or Swift',
          'Previous experience developing mobile applications on iOS',
          'Experience working closely across a variety of teams, including product management, design, and engineering',
          'Knowledge of core CS concepts such as common data structures and algorithms, profiling, and optimization',
        ],
      },
      role: {
        content:
          'You will be responsible for building infrastructure and abstractions to help us double our engineering velocity.  You will work at all layers of the stack and closely with partners across engineering, data science, research, product, and design. You will help our codebase stay ahead of the curve of the constantly evolving development ecosystem.',
        items: [
          'Design and develop UI components that make feature development faster, baking in consistency and accessibility to the designs',
          'Build frameworks and infrastructure to make product development faster, safer, and more consistent',
          'Improve the performance and stability of the mobile app',
          'Strive to keep the mobile codebase secure',
        ],
      },
    },
    metadata: {
      createdAt: '1w ago',
    },
  },
  {
    id: '8',
    employer: {
      company: 'Maker',
      websiteUrl: 'https://example.com/maker',
      logo: {
        source: '/assets/svgs/logo-maker.svg',
        backgroundColor: '#21437d',
      },
    },
    details: {
      position: 'Senior EJB Developer',
      description:
        'We are seeking an experienced EJB Developer who will join our fast-growing engineering team, working on mission-critical applications. Searching for a Senior Java Developer who thrives on working with enterprises in multiple industries with unique business challenges requiring sophisticated solution design.',
      contract: 'Full Time',
      location: 'United Kingdom',
      applyUrl: 'https://example.com/maker/apply',
      requirements: {
        content:
          'The candidate must have work experience in all aspects of designing and constructing J2EE/EJB systems and developing system requirements and design specifications, and J2EE/EJB Coding for new and existing applications.',
        items: [
          'Computer Science degree or equivalent',
          'Experience with EJB, J2EE,Tomcat, JBoss andrelational databases such as MySQL, MSSQL, Oracle',
          'At least three years of post-graduate experience',
          'Deep understanding of OO programming principals and commitment to clean, efficient, well documented code.',
        ],
      },
      role: {
        content:
          'Job responsibilities will include developing scalable Java applications while providing expertise in the full software development lifecycle, from concept and design to testing.',
        items: [
          "Design and develop high-volume, low-latency applications that enhance Maker's core platform",
          'Create well designed, testable, efficient code',
          'Participate in all phases of the development lifecycle',
          'Investigate alternatives and technologies and present them for architectural review, in order to support continuous improvement',
        ],
      },
    },
    metadata: {
      createdAt: '1w ago',
    },
  },
  {
    id: '9',
    employer: {
      company: 'Coffeeroasters',
      websiteUrl: 'https://example.com/coffeeroasters',
      logo: {
        source: '/assets/svgs/logo-coffeeroasters.svg',
        backgroundColor: '#f2ddca',
      },
    },
    details: {
      position: 'Senior Frontend Developer',
      description:
        'We’re looking for an experienced Frontend Developer with an eye for Product Design along with a honed set of coding skills and who shares our values around technology. Most importantly, we’d like someone who is collaborative and can work closely with the rest of our team shaping product.',
      contract: 'Part Time',
      location: 'Singapore',
      applyUrl: 'https://example.com/coffeeroasters/apply',
      requirements: {
        content:
          'You will be responsible for executing high quality solutions for customers and contributing to the day-to-day technical excellence of a delivery team. You should have a deep understanding of Modern JavaScript, HTML and CSS, the software development life cycle, and possess the ability to implement and execute standard software architecture patterns.',
        items: [
          '4+ years of experience of Frontend Development',
          'Expertise with React required',
          'Expertise with Next.js, Apollo, Typescript, and GraphQL preferred',
        ],
      },
      role: {
        content:
          'Beyond working closely with our team to build an exciting app, you’ll be leading Frontend development of our React/Next.js product. You’ll be coming up with UI/UX for the app and making architectural decisions for the frontend.',
        items: [
          'Use your thorough understanding of core client-side technologies to architect complex user interactions for desktop and mobile browsers using React',
          'Create universal JS modules to be used on both the client and the server',
          'Lead, direct and mentor more junior team members (including code review)',
          'Cover your code with unit and integration tests written with Jest and Mocha',
          'Take part in decision-making around major architectural choices of the front-end team',
        ],
      },
    },
    metadata: {
      createdAt: '1w ago',
    },
  },
  {
    id: '10',
    employer: {
      company: 'Mastercraft',
      websiteUrl: 'https://example.com/mastercraft',
      logo: {
        source: '/assets/svgs/logo-mastercraft.svg',
        backgroundColor: '#1f1f1f',
      },
    },
    details: {
      position: 'App & Website Designer',
      description:
        'Mastercraft is looking for a UX/UI Designer to turn our software into easy-to-use products for our clients. Responsibilities include gathering user requirements, designing graphic elements and building software component',
      contract: 'Freelance',
      location: 'United States',
      applyUrl: 'https://example.com/mastercraft/apply',
      requirements: {
        content:
          'To be successful in this role, you should have experience with design software and wireframe tools preferably Figma. You should also have a portfolio of professional design projects that includes work with web/mobile applications.',
        items: [
          'At least 3 years of experience in a related field.',
          'Portfolio of design projects.',
          'Degree in Design, UX or relevant field.',
          'Experience with design process and systematic approach to organization, workflow',
        ],
      },
      role: {
        content:
          'You’ll create both functional and appealing features that address our clients’ needs and help us grow our customer base. We expect you to have experience with market/user research and stay current with most recent trends, tools, workflows.',
        items: [
          'Gather and evaluate user requirements in collaboration with UX/UI manager or stakeholders.',
          'Illustrate design ideas using storyboards, process flows and sitemaps.',
          'Develop UI mockups and prototypes that clearly illustrate how sites function and look like.',
          'Create original graphic designs (eg. images, sketches and tables).',
          'Identify and troubleshoot UX problems',
          'Conduct layout adjustments based on user feedback.',
        ],
      },
    },
    metadata: {
      createdAt: '2w ago',
    },
  },
  {
    id: '11',
    employer: {
      company: 'Crowdfund',
      websiteUrl: 'https://example.com/crowdfund',
      logo: {
        source: '/assets/svgs/logo-crowdfund.svg',
        backgroundColor: '#37c890',
      },
    },
    details: {
      position: 'Fullstack Developer',
      description:
        'Crowdfund is currently expanding and working on revolutionizing the world of raising funds for any project – creative, entrepreneurial or cause-related. Come and join us in this growth! We are looking for an exceptionally talented Fullstack Developer who will become an integral part of the company’s exciting new chapter.',
      contract: 'Part Time',
      location: 'New Zealand',
      applyUrl: 'https://example.com/crowdfund/apply',
      requirements: {
        content:
          "We'd love to hear from you if you take ownership of your work and continuously want to improve the products you've built. We're looking for developers who have an uncanny abilithy to work very well cross-functionality in a flat startup.",
        items: [
          '4+ years of web development experience',
          'Strong CS fundamentals and problem solving skills',
          'Production expertise with Ruby on Rails [preferred], Python, PHP, Java, or your favorite modern stack',
          'Excellent debugging skills & strong belief in automated testing and coverage',
          'Team player who enjoys mentoring and agile environments',
          'Passion, drive, energy, a sense of humor and a great attitude!',
        ],
      },
      role: {
        content:
          'At Crowdfund, you will have the opportunity to literally change the world and people’s lives by developing new features for our consumer platform to make it even more robust. You’ll work with exceptional developers and there are lots of interesting technical challenges to tackle, including projects dealing with heavy transaction volume, scalability and Big Data.',
        items: [
          'Build a marketplace that empowers people to follow their dreams!',
          'Architect, design and implement beautiful, performant & scalable Ruby code.',
          'Create features for the international payment system which sees millions of transactions per day.',
          'Extend the reach of our platform APIs.',
        ],
      },
    },
    metadata: {
      createdAt: '1mo ago',
    },
  },
  {
    id: '12',
    employer: {
      company: 'Typemaster',
      websiteUrl: 'https://example.com/typemaster',
      logo: {
        source: '/assets/svgs/logo-typemaster.svg',
        backgroundColor: '#f26818',
      },
    },
    details: {
      position: 'Technical Lead Engineer',
      description:
        'We are looking for a talented tech lead to join a team that creates large-scale, highly-performant web applications. This team creates highly visible and responsive user interfaces used by millions of people.',
      contract: 'Part Time',
      location: 'United Kingdom',
      applyUrl: 'https://example.com/typemaster/apply',
      requirements: {
        content:
          'Our work is not just about the code: we seek a tech lead who cares deeply about user experience and how their work impacts users. An ideal candidate has extensive experience as a full-stack software engineer, including experience with both Django and React/Redux, our stack. This role is perfect for a seasoned full-stack developer who is looking to grow both as an engineer and technical product owner. We want someone who takes the initiative to learn, enjoys thoughtful code review, and has a history collaborating with other software engineers to develop best patterns and practices.',
        items: [
          '5-7 years of experience in infrastructure engineering of applications',
          'Experience in web application security analysis and resolution.',
          'Experience working within a modern Javascript workflow through technologies such as: GitHub, CSS Preprocessors, Styled Components, Single Page Application frameworks and Module Bundlers (Webpack etc.)',
          'Experience in implementing A/B Tests',
          'Hands on experience with React/Redux in a production application',
        ],
      },
      role: {
        content:
          "Here's the role: sling code, architect new systems, mentor junior engineers, and manage product as a tech lead on Typemaster’s growing dev team. You will work directly with Typemaster’s two technical co-founders and other engineers in a culture that includes clean code, extensive testing, rapid iteration, and the values you bring to the table. You will come to own one of our product lines, and will have the ability to contribute to multiple projects.",
        items: [
          'Security audit of web application with an emphasis on commerce/transactional flows',
          'Maintain and improve security skills, knowledge, and training through professional development, including participating in tech conferences and wider tech community forums',
          'Work on a modern stack including React and Django.',
          'Enforce code quality through test driven development via unit tests and automated tests.',
        ],
      },
    },
    metadata: {
      createdAt: '1mo ago',
    },
  },
  {
    id: '13',
    employer: {
      company: 'Crowdfund',
      websiteUrl: 'https://example.com/crowdfund',
      logo: {
        source: '/assets/svgs/logo-crowdfund.svg',
        backgroundColor: '#37c890',
      },
    },
    details: {
      position: 'Front-end Developer',
      description:
        'We’re hiring a Front-end Developer to help create the front-end experience for Crowdfund’s management interface. As our ideal candidate, you’re an adept user of the front-end stack (React, Yarn, webpack, Babel, SCSS, JSX, GraphQL) and an avid learner of new frameworks. You enjoy building excellent user experiences as well as reusable components that other developers can use to solve similar problems. You love open-source and being part of a thriving developer community and understand that strong businesses enable great enduring communities.',
      contract: 'Full Time',
      location: 'New Zealand',
      applyUrl: 'https://example.com/crowdfund/apply',
      requirements: {
        content:
          'As a mid-level developer, we expect you to have a complete understanding of JavaScript, CSS, and HTML, and proven experience building and deploying single-page applications at scale. Experience with modern JavaScript application frameworks is a given, but you also have the ability to think outside the frameworks.',
        items: [
          'Multiple years of React experience',
          'Good eye for detail',
          'Passion for great user experience and API design',
          'Comfortable working with cross-functional and cross-cultural teams',
        ],
      },
      role: {
        content:
          'We want people who are passionate about building apps that you and your peers will love. We are looking for an experienced Front-end Developer who shares our passion for making complex applications appear simple for our customers. We’ll give you the freedom to do what you do best, so you should feel comfortable owning your work from start to finish, as well as bringing fresh ideas to the table that can make our products, development experience, and team better. You’ll have the opportunity to work closely with designers, product managers, and other engineers across the stack to make ideas a reality.',
        items: [
          'Working with our team to build out our React/Typescript/GraphQL stack',
          'Collaborating with product and design to increase conversions and improve user experience',
          'Building new, efficient, and scalable front-end applications that will interface with public and internal APIs',
          'Writing clean, maintainable, and testable code',
          'Work with backend teams to solve complex problems',
        ],
      },
    },
    metadata: {
      createdAt: '1mo ago',
    },
  },
  {
    id: '14',
    employer: {
      company: 'Coffeeroasters',
      websiteUrl: 'https://example.com/coffeeroasters',
      logo: {
        source: '/assets/svgs/logo-coffeeroasters.svg',
        backgroundColor: '#f2ddca',
      },
    },
    details: {
      position: 'Junior Full-Stack Developer',
      description:
        'We’re looking for a Junior Full-Stack Developer to join our Product and Engineering team. This is an exciting opportunity to work on building our core web application.',
      contract: 'Full Time',
      location: 'Singapore',
      applyUrl: 'https://example.com/coffeeroasters/apply',
      requirements: {
        content:
          'This is an entry level full stack developer position that will assist in developing the next generation apps and APIs. You will be a contributor to agile teams by providing services that ensure Coffeeroasters is aligning technology efforts with business information needs. The intent is to develop a junior full stack developer to become a well-rounded API developer ready to take on any challenging opportunity.',
        items: [
          'A degree in Computer Science or an equivalent engineering foundation.',
          'Experience in Python and/or JavaScript.',
          'Ability to thrive in a fast-paced startup.',
          'Someone who loves to learn and is passionate about helping others.',
        ],
      },
      role: {
        content:
          "We're looking for a dynamic individual who is no stranger to building well-designed, performant and effective front-end web applications that support complex business rules/flows. You will start by learning from the experiences of our current team and our current offerings and become intimately familiar with our codebase. You will leverage your experience to establish best practices for web development and drive the team and the codebase to a higher level.",
        items: [
          'Write frontend code and build UI to implement new features. Includes taking in data from our API, structuring that data, and displaying it.',
          'Build backend code for API.',
          'Consistently improve our platform so we can deliver features quickly with high reliability and scalability.',
          'Apply user experience methodology and best practices to translate user needs and business requirements into engaging user-centered design.',
          'Write/maintain documentation for the client and other team members.',
        ],
      },
    },
    metadata: {
      createdAt: '1mo ago',
    },
  },
  {
    id: '15',
    employer: {
      company: 'Blogr',
      websiteUrl: 'https://example.com/blogr',
      logo: {
        source: '/assets/svgs/logo-blogr.svg',
        backgroundColor: '#e54b24',
      },
    },
    details: {
      position: 'Midweight Front-end Developer',
      description:
        'We’re looking for a Frontend Developer who values user experience, performance and accessibility. Through our enduring interest in how people use our products, Blogr embraces a model of software development that is iterative and gradual. Like high-performance engines, our products are built through a process of continuous refinement (usually on two week release cycles). We’re looking for someone who is comfortable embodying this approach.',
      contract: 'Full Time',
      location: 'United States',
      applyUrl: 'https://example.com/blogr/apply',
      requirements: {
        content:
          'You will be responsible for writing and debugging your code while writing your own unit tests. We are looking for self-motivated developers who are interested in learning and can quickly pick up new technologies. We’re a relatively small team in a stable yet fast growing company and would love for you to join us.',
        items: [
          'Experience in JavaScript software development, preferably in a product company',
          'Experience with React and state management libraries (such as Redux or Mobx)',
          'Understand cross-browser compatibility issues and ways to work around them.',
          'English language fluency, excellent communication skills',
        ],
      },
      role: {
        content:
          "In this role, you are part of our Product team comprised of Frontend & Backend Developers, UX & UI Specialists and Product Owners. You'll work on mission critical projects from the first day on, support other engineers, share your knowledge with your colleagues, and contribute to agile projects.",
        items: [
          'Help define our software engineering culture',
          'Write high quality software for the frontend',
          'Do code reviews',
          'Proactively solve the problems most important to the business',
        ],
      },
    },
    metadata: {
      createdAt: '1mo ago',
    },
  },
];

export {JOB_OFFERS_SOURCE};
