import { CardCvInfo } from '@/lib/definitions'

export const curriculum: CardCvInfo[] = [
  // {
  //   title: '',
  //   year: '',
  //   position: '',
  //   accomplishments: '',
  //   tools: '',
  // },
  // {
  //   title: '',
  //   year: '',
  //   position: '',
  //   accomplishments: '',
  //   tools: '',
  // },
  {
    title: 'Metrics - Truextend/Numecent',
    year: '',
    position: 'Software Developer (Outsourcing)',
    about:
      'This is a project designed to ***visualize analysis of Numecent systems***, such as user statuses, applications, services, and servers.',
    frontend:
      'The ***frontend*** work includes starting the project from scratch by preparing a ***Grafana*** image in ***ECR*** and deploying the container in ***ECS***. This involves creating general Grafana configurations and implementing dashboards to ***display analytical graphs***, such as the number of users, daily application connections, user locations, server uptime status, cloud observation data, and more.',
    backend:
      'The ***backend*** work involves implementing the ***CloudWatch service*** for sessions and token servlets hosted in Tomcat. The ***servlets were refactored*** to send data to CloudWatch, and several ***AWS functions were implemented to extract data from ELB and Route 53 in CloudWatch***. Scheduled function events were set up to extract and move data to logs in databases. Among other tasks, documentation was created for the implementation and configurations made in AWS CLI, as well as unit and end-to-end (E2E) tests, including updates for new features in the servlets.',
    tools:
      'Java 8, Tomcat 8.5, Grafana, Serverless Framework, AWS CLI ECR-ECS-ELB-Route53, Cloudwatch, Typescript, Ivy, Ant, npm, Docker, JUnit, JMeter, Mysql, GIT, GitLab, Jira, Eclipse IDE.',
  },
  {
    title: 'Visual Device Emulator - Truextend/GlobeRanger',
    year: '',
    position: 'Software Developer (Outsourcing)',
    about: 'It is an ***IoT device emulator***.',
    frontend:
      'On the frontend, work was done on ***migrating the user interface*** appearance from ***Infragistics and Windows Forms to DevExpress***.',
    backend:
      'I worked on the YAML file for the CI/CD pipeline in Azure DevOps and created the MS installer with Wix as part of the DevOps task.',
    tools:
      '.NET Framework 4.8, Infragistics, DevExpress 22.1.5, Azure DevOps, Wix Toolset, GIT, Jira.',
  },
  {
    title: ' TrueRewards - Truextend',
    year: '',
    position: 'Software Developer',
    about:
      'It is a web application service focused on ***managing rewards*** offered by the company based on points earned by registered users.',
    frontend:
      'On the ***frontend***, work was done on the user profile card, ***creating new posts***, nominating people to give and receive points, a list of available rewards, and securing routes.',
    backend:
      'On the ***backend***, I developed the ***database model***, started the ***project from scratch***, and created the initial ***API endpoints*** related to the user interface features. MySQL was used as the database.',
    tools:
      'React, TypeScript, Sass, HTML, Spring Boot 2, Java 17, PostMan, Mysql, GIT, GitLab.',
    imgs: [
      {
        img: '/images/r1.png',
      },
      {
        img: '/images/r2.png',
      },
      {
        img: '/images/r3.png',
      },
      {
        img: '/images/r4.png',
      },
      {
        img: '/images/r5.png',
      },
    ],
  },
  {
    title: 'Time and Attendance - Truextend',
    year: '',
    position: 'Software Developer',
    about:
      'It is a web application service focused on ***managing employee vacation requests***.',
    frontend:
      'On the ***frontend***, work was done on linear and circular ***analytical graphs***, refactoring existing views, lists, and filters. I ***proposed and refactored the vacation request workflow***, customized a day selection calendar, created multiple vacation requests, added progress bars showing vacation status, and a modal displaying vacation information during the process.',
    backend:
      'On the ***backend***, I ***created and refactored endpoints***, developed statistics for circular and line charts on the user interface, created a public endpoint for the asset tracking service, and ***performed a code migration to handle and support UIDs*** instead of numeric identifiers. Additionally, I migrated the Java version from 1.8 to 17, ***updated Docker files for successful deployment*** on the server, and worked with MySQL to progressively migrate all numeric identifiers to UIDs in tables and their relationships using an upward strategy. ***Unit tests*** were conducted with JUnit 5, MockMvc, and Mockito. I coordinated daily meetings, calculated sprint tasks, ***assisted team members*** with code, delivered presentations, and explained new features in sprint demos.',
    tools:
      'React, Semantic UI, Tx-UI-Kit, CSS, HTML, Java 1.8, Java 17, Spring Boot 2, Maven, npm, Docker, PostMan, JUnit 5, Mysql, GIT, GitLab.',
    imgs: [
      {
        img: '/images/taa.png',
      },
      {
        img: '/images/taa2.png',
      },
      {
        img: '/images/taa3.png',
      },
    ],
  },
  {
    title: ' Projects Microservice - Truextend',
    year: '',
    position: 'Junior Developer',
    about:
      'It is an API and ***microservice designed to store and manage information*** about users and the projects they are assigned to.',
    frontend: '',
    backend:
      '***Refactorings were implemented*** to enable it to work with updates made in the Time and Attendance service, such as the migration from numeric IDs to UIDs. In the database, I ***implemented a migration*** of some tables **from numeric IDs to UIDs.**',
    tools: 'Node JS, Express, TypeScript, PostgreSQL, GIT.',
  },
]
