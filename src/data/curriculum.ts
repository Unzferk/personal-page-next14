import { CardCvInfo } from '@/lib/definitions'

export const curriculum: CardCvInfo[] = [
  {
    title: 'Metrics - Truextend/Numecent',
    year: '',
    position: 'Software Developer **(Outsourcing)**',
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
    title: 'Ecommerce - Truextend/Hinda',
    year: '',
    position: 'Software Developer **(Outsourcing)**',
    about:
      'It is a **ecommerce project** where the clients has an **entire platform to manage** and offer their **products** including shipping.',
    frontend:
      'The frontend collaborations were **giving support and fix bugs in their functionallities** like, fix button behaviors, refactor different card components showing and hidding data based in the role user and other support issues.',
    backend:
      'Same as frontend work, my role was basically give support and fix bugs related with the components I was working on.',
    tools: 'AngularJS, .NET Framework 4.8, PostgreSQL, GIT, Jira.',
  },
  {
    title: 'Visual Device Emulator - Truextend/GlobeRanger',
    year: '',
    position: 'Software Developer **(Outsourcing)**',
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

export const curriculumES: CardCvInfo[] = [
  // {
  //   title: 'Sincpro',
  //   year: '',
  //   position: 'Staff Developer',
  //   about: '',
  //   frontend: '',
  //   backend: '',
  //   tools: '',
  // },
  {
    title: 'Metrics - Truextend/Numecent',
    year: '',
    position: 'Software Developer **(Outsourcing)**',
    about:
      ' Es un proyecto destinado a **visualizar análisis de los sistemas de Numecent** como estados de usuarios, aplicaciones, servicios y servidores.',
    frontend:
      ' El trabajo **frontend** incluye comenzar el proyecto desde cero preparando una imagen de **Grafana** en **ECR** e implementando el contenedor en **ECS**. Se trata de la creación de Grafana general configuraciones e implementación de Dashboards para mostrar gráficos analíticos, como el número de usuarios, conexiones diarias en las aplicaciones, ubicaciones de los usuarios, estado del tiempo de actividad del servidor, datos de observación de la nube y otros.',
    backend:
      'El trabajo de **backend** implica **implementar el servicio cloudwatch** en servlets de token alojados en Tomcat. Los **servlets se refactorizaron** para enviar datos a Cloudwatch y se implementaron varias **funciones de AWS para extraer datos de ELB y Route53 de Cloudwatch**. Se implementaron eventos de funciones programadas para extraer y mover datos a registros en bases de datos. Entre otras tareas, se creó documentación para la implementación y configuraciones realizadas en AWS CLI, pruebas Unit y E2E. incluido y actualizado para nuevas funciones en los servlets.',
    tools:
      'Java 8, Tomcat 8.5, Grafana, Serverless Framework, AWS CLI ECR-ECS-ELB-Route53, Cloudwatch, Typescript, Ivy, Ant, npm, Docker, JUnit, JMeter, Mysql, GIT, GitLab, Jira, Eclipse IDE.',
  },
  {
    title: 'Ecommerce - Truextend/Hinda',
    year: '',
    position: 'Software Developer **(Outsourcing)**',
    about:
      'Es un **proyecto de comercio electrónico** donde los clientes tienen una **plataforma completa para administrar** y ofrecer sus **productos**, incluido el envío',
    frontend:
      'Las colaboraciones de frontend fueron **dar soporte y corregir errores en sus funcionalidades** como, por ejemplo, corregir comportamientos de botones, refactorizar diferentes componentes de tarjetas que muestran y ocultan datos según el rol del usuario y otros problemas de soporte.',
    backend:
      'Al igual que el trabajo de frontend, mi función era básicamente brindar soporte y corregir errores relacionados con los componentes en los que estaba trabajando.',
    tools: 'AngularJS, .NET Framework 4.8, PostgreSQL, GIT, Jira.',
  },
  {
    title: 'Visual Device Emulator - Truextend/GlobeRanger',
    year: '',
    position: 'Software Developer **(Outsourcing)**',
    about: ' Es un **emulador de dispositivos IOT.**',
    frontend:
      'En **frondend** se trabajo en la **migración de la apariencia** de la interfaz de usuario de **infragistics y windows forms a DevExpress.**',
    backend:
      'Trabajé en el archivo YAML para la canalización CI/CD en Azure DevOps y creé el instalador MS con Wix como parte de la tarea de DevOps.',
    tools:
      '.NET Framework 4.8, Infragistics, DevExpress 22.1.5, Azure DevOps, Wix Toolset, GIT, Jira.',
  },
  {
    title: ' TrueRewards - Truextend',
    year: '',
    position: 'Software Developer',
    about:
      ' Es un servicio de aplicación web centrado en **gestionar las recompensas** ofrecidas por la empresa **en función de los puntos** obtenidos por los usuarios registrados.',
    frontend:
      'En la parte **Frontend** se trabajó el perfil de usuario tarjeta, **crear nuevas publicaciones**, nominar personas para dar y recibir puntos, lista de recompensas disponibles, protecció de rutas.',
    backend:
      ' En **Backend** se hizo el modelo de base de datos, **iniciar el proyecto desde cero**, crear los primeros endpoints de API en relación con las características de la interfaz de usuario. Trabajar con SQL Server como base de datos.',
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
      ' Es un servicio de aplicación web enfocado a la **gestión de solicitudes de vacaciones** de los empleados.',
    frontend:
      '**Frontend** trabajado, **gráficos análiticos** lineares y circulares, refactorizar vistas, listas y filtrado existentes. **Proponer y refactorizar el flujo de trabajo de solicitudes**, personalizar un calendario de selección de días, crear múltiples solicitudes de vacaciones, barras de progreso con el estado de vacaciones, modal con la información de vacaciones del proceso.',
    backend:
      '**Backend** trabajado, **crear y refactorizar endpoints**, estadísticas para gráficos circulares y de líneas en la interfaz de usuario, crear un endpoint público para el servicio de seguimiento de activos, realizar una **migración de código** para manejar y admitir uids en lugar de identificadores numéricos, realizar una migración de la versión de Java de 1.8 a 17, actualizar los archivos de Docker para una implementación exitosa en el servidor. Trabajar con MySQL base de datos la migración progresiva de todos los identificadores numéricos a uids en las tablas y sus relaciones siguiendo una estrategia ascendente. **Pruebas unitarias con JUnit 5**, simulacro y Mockito. Coordiné reuniones diarias, calcule tareas de sprint, ayude a los miembros del equipo con el código, realicé presentaciones y explique novedades en demostraciones de sprint.',
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
      'Es una **API y microservicio** para guardar y administrar información sobre los usuarios y proyectos donde están asignados.',
    frontend: '',
    backend:
      'Se **implementaron refactorizaciones** para permitirle funcionar con las actualizaciones realizadas en el servicio de Time and Attendance como una migración de Ids numéricos a UIDs. En Base de datos **implementé una Migración de algunas tablas de ids numéricos a Uids.**',
    tools: 'Node JS, Express, TypeScript, PostgreSQL, GIT.',
  },
]
