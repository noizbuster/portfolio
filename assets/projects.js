import * as _ from 'lodash';

const project_template = {
  name: 'My Awesome Project',
  hint: 'use it to become awesome',
  dev_period: '2013-02-26 ~ 2013-02-28 (2 days)',
  service_period: '2013-03-01 ~ 2014',
  members: [
    {role: 'Management', related: true, count: 1},
    {role: 'Designing', related: false, count: 2},
    {role: 'ServerProgramming', related: true, count: 1}
  ],
  roles: ['Design', 'Android Development'],
  discription: '2,475$ Advertising revenue in 6 month (2013-03-01 ~ 2013-09-23)',
  technologies: [
    {name: 'frontend.android'}
  ],
  tags: [
    {name: 'adam(advertise module)', level: 'skilled'}
  ]
};

const puzzleanddragon = {
  name: 'Puzzle & Dragon Encyclopedia',
  hint: 'Gamer Support App',
  dev_period: '2013-02-26 ~ 2013-02-28 (2 days)',
  service_period: '2013-03-01 ~ 2014',
  members: [
    {role: 'Everything', related: true, count: 1}
  ],
  roles: ['Design', 'Android Development'],
  discription: '2,475$ Advertising revenue in 6 month ' +
    '(2013-03 ~ 2013-09)',
  technologies: [
    {name: 'frontend.android'}
  ],
  tags: [
    {name: 'adam(advertise module)', level: 'skilled'}
  ]
};

//It provides functions such as traffic control and route optimization by linking AAA and BBB services to CCCC.
const rocon_fms = {
  name: 'Fleet Management System',
  hint: 'Fleet Management System for Gocart Service',
  discription: 'This software make concert able to operate ' +
    'complex service scenario like a fleet control\n' +
    'It provides functions such as traffic control and route optimization integrate "Concert Site Configuration" and "IoT Operator" into "Concert Core"\n',
  dev_period: '2017-08-28 ~ present',
  service_period: '2017-08-28 ~ present',
  members: [
    {role: 'Management', related: false, count: 1},
    {role: 'Software Development', related: true, count: 1}
  ],
  roles: [
    'data modeling',
    'RESTful API design',
    'software design',
    'software implementation'
  ],
  technologies: [
    {name: 'backend.node'},
    {name: 'comportable.git'},
    {name: 'comportable.docker'},
    {name: 'comportable.ansible'},
  ],
  base_technologies: [
    {name: 'planguage.bash'},
    {name: 'planguage.python'}
  ],
  tags: [
    {name: 'JSDoc', level: 'skilled'},
    {name: 'docker-compose', level: 'skilled'},
    {name: 'OpenAPI(aka. Swagger)', level: 'skilled'}
  ]
};

const rocon_fmui = {
  name: 'Fleet Management UI',
  hint: 'Web App for using Fleet Management System',
  discription: 'This Web App is specialized for monitoring ' +
    '& management facilities, resources and robots ' +
    'in 2 Dimensions place.',
  dev_period: '2017-08-28 ~ present',
  service_period: '2017-08-28 ~ present',
  members: [
    {role: 'Management', related: false, count: 1},
    {role: 'Software Development', related: true, count: 2}
  ],
  roles: [
    'software design',
    'software implementation'
  ],
  technologies: [
    {name: 'backend.node'},
    {name: 'comportable.git'},
    {name: 'comportable.docker'},
    {name: 'comportable.ansible'},
  ],
  base_technologies: [
    {name: 'planguage.bash'},
    {name: 'planguage.python'}
  ],
  tags: [
    {name: 'JSDoc', level: 'skilled'},
    {name: 'docker-compose', level: 'skilled'},
    {name: 'OpenAPI(aka. Swagger)', level: 'skilled'}
  ]
};

const rocon_configuration = {
  name: 'Concert Site Configuration',
  hint: 'Facilities and Resource Management',
  discription: 'This service manage facilities and IoT devices ' +
    'like a elevator, autodoor, locations, zones as a resource',
  dev_period: '2017-04-13 ~ present',
  service_period: '2017-04-13 ~ present',
  members: [
    {role: 'Management', related: false, count: 1},
    {role: 'Software Development', related: true, count: 1}
  ],
  roles: [
    'data modeling',
    'RESTful API design',
    'software design',
    'software implementation'
  ],
  technologies: [
    {name: 'backend.node'},
    {name: 'comportable.git'},
    {name: 'comportable.docker'},
    {name: 'comportable.ansible'},
  ],
  base_technologies: [
    {name: 'planguage.bash'},
    {name: 'planguage.python'}
  ],
  tags: [
    {name: 'JSDoc', level: 'skilled'},
    {name: 'docker-compose', level: 'skilled'},
    {name: 'OpenAPI(aka. Swagger)', level: 'skilled'}
  ]
};

const rocon_devops = {
  name: 'DevOps in YujinRobot',
  hint: 'Responsive on build & deployment and make bunch of tools for developers',
  discription: 'I developed modules(Logging, Configuration, Document) that ' +
    'all the software developed by our team used in common.\n' +
    'And I am responsible for building and distributing each project.',
  dev_period: '2016-01-18 ~ present',
  members: [
    {role: 'Management', related: false, count: 1},
    {role: 'DevOps', related: true, count: 1}
  ],
  roles: [
    'Scripting',
    'Development Common Modules',
    'Implement Document Building'
  ],
  technologies: [
    {name: 'backend.node'},
    {name: 'comportable.git'},
    {name: 'comportable.docker'},
    {name: 'comportable.ansible'},
  ],
  base_technologies: [
    {name: 'planguage.bash'},
    {name: 'planguage.python'}
  ],
  tags: [
    {name: 'JSDoc', level: 'skilled'},
    {name: 'docker-compose', level: 'skilled'},
    {name: 'OpenAPI(aka. Swagger)', level: 'skilled'}
  ]
};

const rocon_scheduler = {
  name: 'Concert Scheduler',
  hint: 'Distributed Job Scheduler for Robots',
  discription: 'This is one of core modules of the "Concert" system.\n' +
    'This software provides distributed workers and job monitoring and handling',
  dev_period: '2016-12-28 ~ present',
  service_period: '2016-12-28 ~ present',
  members: [
    {role: 'Software Design', related: true, count: 1},
    {role: 'Implementation', related: true, count: 1}
  ],
  roles: [
    'data modeling',
    'RESTful API design',
    'software design',
    'software implementation'
  ],
  technologies: [
    {name: 'backend.node'},
    {name: 'backend.express'},
    {name: 'backend.mongodb'},
    {name: 'knowledge.restful'},
    {name: 'knowledge.msa'}
  ],
  base_technologies: [
    {name: 'comportable.docker'},
    {name: 'comportable.git'}
  ],
  tags: [
    {name: 'Distributed System', level: 'skilled'}
  ]
};

const rocon_balcony = {
  name: 'Balcony',
  hint: 'WebUI for Managing Workers(Robots) and Jobs in "Concert"',
  discription: 'This is a core Web App for "Concert" system.\n' +
    'it provide UI for monitoring & managing jobs and workers(robots)',
  dev_period: '2016-01-27 ~ present',
  service_period: '2016-01-27 ~ present',
  members: [
    {role: 'Software Design', related: true, count: 1},
    {role: 'Implementation', related: true, count: 2}
  ],
  roles: ['software design', 'software implementation'],
  technologies: [
    {name: 'frontend.angular'},
    {name: 'frontend.material'},
    {name: 'frontend.bootstrap'}
  ],
  base_technologies: [
    {name: 'comportable.docker'},
    {name: 'comportable.git'}
  ],
  tags: [
    {name: 'SPA(Single Page Application', level: 'skilled'},
    {name: 'Responsive', level: 'skilled'}
  ]
};

export const projects = {
  personal_projects: {puzzleanddragon},
  company_projects: {rocon_fms, rocon_devops, rocon_balcony, rocon_scheduler, rocon_configuration}
};

export default projects
