const backend = {
  node: {
    name: 'Node.js', level: 'expert', img: '/skill_icons/nodejs.png',
    sub_skills: [
      {name: 'express', level: 'expert'},
      {name: 'ActionHeroJS', level: 'skilled'},
      {name: 'winston', level: 'skilled'},
      {name: 'sequelize', level: 'skilled'},
      {name: 'mongoose', level: 'skilled'},
      {name: 'mocha/chai', level: 'skilled'}
    ]
  },
  express: {
    name: 'express', level: 'expert', img: '/skill_icons/express.png',
    sub_skills: [
      {name: 'multer', level: 'expert'}
    ]
  },
  mongodb: {
    name: 'MongoDB', level: 'skilled', img: '/skill_icons/mongodb.png',
    sub_skills: [{name: 'Replica Set', level: 'skilled'},
      {name: 'v4.0^', level: 'skilled'},
      {name: 'ACID Transaction', level: 'skilled'}
    ]
  },
  mysql: {name: 'MySQL(MariaDB)', level: 'skilled', img: '/skill_icons/mysql.jpg'}
};

const frontend = {
  angular: {
    name: 'Angular', level: 'skilled', img: '/skill_icons/angularjs.png',
    sub_skills: [
      {name: 'Angular Material', level: 'skilled'},
      {name: 'FlexLayout', level: 'skilled'}
    ]
  },
  vue: {
    name: 'Vue', level: 'skilled', img: '/skill_icons/vuejs.png',
    sub_skills: [
      {name: 'Nuxt', level: 'skilled'},
      {name: 'Vuetify', level: 'skilled'}
    ]
  },
  nuxt: {
    name: 'Nuxt', level: 'skilled', img: '/skill_icons/nuxtjs.jpg',
    sub_skills: [
      {name: '@nuxt/auth', level: 'skilled'},
      {name: '@nuxt/axios', level: 'skilled'},
      {name: '@nuxt/markdownit', level: 'skilled'},
    ]
  },
  meteor: {
    name: 'Meteor', level: 'basic', img: '/skill_icons/meteor.png'
  },
  material: {
    name: 'Material Design', level: 'skilled', img: '/skill_icons/material.jpg',
    sub_skills: [
      {name: 'Angular Material', level: 'skilled'},
      {name: 'Vuetify', level: 'skilled'}
    ]
  },
  bootstrap: {name: 'Bootstrap', level: 'skilled', img: '/skill_icons/bootstrap.png'},
  android: {
    name: 'Android', level: 'skilled', img: '/skill_icons/android.jpg',
    sub_skills: [
      {name: 'Since Eclair', level: 'skilled'}
    ]
  },
  iod: {name: 'iOS', level: 'basic', img: '/skill_icons/ios.jpg'}
};

const planguage = {
  javascript: {
    name: 'Javascript', level: 'skilled', img: '/skill_icons/javascript.png',
    sub_skills: [
      {name: 'ES 5~7', level: 'skilled'},
      {name: 'TypeScript', level: 'skilled'},
      {name: 'I like Lodash', level: 'skilled'}
    ]
  },
  java: {
    name: 'java', level: 'skilled', img: '/skill_icons/java.png',
    sub_skills: [
      {name: 'Replica Set', level: 'skilled'},
      {name: 'v4.0^', level: 'skilled'},
      {name: 'ACID Transaction', level: 'skilled'}
    ]
  },
  cpp: {
    name: 'C/C++', level: 'skilled', img: '/skill_icons/cpp.png',
    sub_skills: [
      {name: 'Replica Set', level: 'skilled'},
      {name: 'v4.0^', level: 'skilled'},
      {name: 'ACID Transaction', level: 'skilled'}
    ]
  },
  bash: {
    name: 'Bash Script', level: 'skilled', img: '/skill_icons/bash.png',
  },
  python: {
    name: 'Python', level: 'skilled', img: '/skill_icons/python.png',
    sub_skills: [
      {name: '2.7.x', level: 'skilled'},
      {name: '3.5.x', level: 'skilled'},
      {name: 'flask', level: 'basic'}
    ]
  },
};

const hlanguage = [
  // Native or bilingual proficiency
  // Professional working proficiency
  // Elementary proficiency
  {
    name: 'Korean', level: 'expert', img: null,
    sub_skills: [
      {name: 'Native', level: 'expert'}
    ]
  },
  {
    name: 'English', level: 'skilled', img: null,
    sub_skills: [
      {name: 'Professional working proficiency', level: 'skilled'}
    ]
  },
  {
    name: 'Japanese', level: 'basic', img: null,
    sub_skills: [
      {name: 'Elementary proficiency', level: 'basic'}
    ]
  }
];

const comportable = {
  linux: {
    name: 'Linux', level: 'skilled', img: '/skill_icons/linux.png',
    sub_skills: [
      {name: 'I like Vim', level: 'skilled'},
      {name: 'I like Gnome', level: 'skilled'}
    ]
  },
  docker: {
    name: 'Docker', level: 'skilled', img: '/skill_icons/docker.png',
    sub_skills: [
      {name: 'docker-compose', level: 'skilled'}
    ]
  },
  ansible: {
    name: 'Ansible', level: 'skilled', img: '/skill_icons/ansible.png',
    sub_skills: []
  },
  git: {
    name: 'Git', level: 'expert', img: '/skill_icons/git.png',
    sub_skills: [
      {name: 'prefer CLI', level: 'expert'},
    ]
  },
  svn: {
    name: 'SVN', level: 'expert', img: '/skill_icons/svn.png',
    sub_skills: []
  },
};

const knowledge = {
  msa: {
    name: 'Micro Service Architecture', level: 'skilled', img: '/skill_icons/msa.png',
    sub_skills: []
  },
  restful: {
    name: 'RESTful API Design', level: 'skilled', img: '/skill_icons/restful.jpg',
    sub_skills: []
  },
  crypto: {
    name: 'Cryptography', level: 'skilled', img: '/skill_icons/crypto.png',
    sub_skills: [{
      name: 'Master Degree', level: 'skilled'
    }]
  }
};

export const skills = {
  backend, frontend, planguage, hlanguage, comportable, knowledge
};

export default {
  skills
}
