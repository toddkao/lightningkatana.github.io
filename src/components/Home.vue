<template>
<div>
  <el-dialog v-if="active === 2"
    style="min-width:50%"
    :title="selectedItem.name"
    :visible.sync="dialogVisible"
    width="80%">
    <span> {{ selectedItem.desc }}</span>
    <div style="width:100%">
      <img style="margin: 10px" v-for="url in selectedItem.tags" :src="url">
    </div>
    <div style="width:100%">
      <img v-for="screenshot in selectedItem.screenshots" :src="screenshot" style="width:50%;max-width: 100%;">
    </div>
    <a v-if="selectedItem.link" :href="selectedItem.link" target="_blank" class="button btn codepen">
      {{ selectedItem.linkTitle }}
    </a>
    
    <span slot="footer" class="dialog-footer">
      <!-- <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">Confirm</el-button> -->
    </span>
  </el-dialog>

  <!-- <el-dialog v-if="active === 3"
    style="min-width:50%"
    :title="selectedItem.name"
    :visible.sync="dialogVisible"
    width="80%">
    <span> {{ selectedItem.desc }}</span>
    <div style="width:100%">
      <img style="margin: 10px" v-for="url in selectedItem.tags" :src="url">
    </div>
    <div style="width:100%">
      <img :src="selectedItem.image" style="width: 50%;max-width: 100%;">
    </div>
    <a v-if="selectedItem.link" :href="selectedItem.link" target="_blank" class="button btn codepen">
      {{ selectedItem.linkTitle }}
    </a>
    <span slot="footer" class="dialog-footer">
    </span>
  </el-dialog> -->

  <v-tabs icons-and-text centered dark color="cyan" noscroll>
    <v-tab class="hover body-1" :class="{'active': active === i + 1}" @click="setActive(i+1)" ripple :key="i" v-for="(menu, i) in menus" id="i">
        <span :class="{'active': active === i + 1}" class="tab-item-name" style="color:white;text-decoration:none!important"> {{ menu.name }} </span>
        <v-icon :class="{'active': active === i + 1}" color="white" style="text-decoration:none!important"> {{ menu.icon }}</v-icon>
    </v-tab>
    <v-tab-item v-for="(menu, i) in menus" :key="i">
        <v-card flat>
          <template v-if="menu.content === 2">
            <div v-for="(item, index) in work" :key="index" class="col-md-3">
              <v-card class="elevation-10 body-1" style="margin:20px;height:400px">
                <v-card-media :src="item.image" style="background-size:contain;background-position:center" height="200px">
                </v-card-media>
                <v-card-title style="display:flex;justify-content:center;align-items:center" primary-title>
                  <div>
                    <h3 class="headline mb-0"> {{ item.name }}</h3>
                    <div> {{ item.desc }} </div>
                  </div>
                </v-card-title>
                <v-card-actions style="display:flex;justify-content:center;align-items:center">
                  <button v-ripple class="button btn" style="background-color:lightblue" @click="setModal(item)" >Details </button>
                  <!-- <v-btn flat color="orange">Explore</v-btn> -->
                </v-card-actions>
              </v-card>
            </div>
          </template>
          <template v-if="active === 1">
            <v-card-text v-html="menu.content"> </v-card-text>
            <div class="col-md-12 flex-center">
              <div class="flex-center vertical">
                <i v-ripple @click="openBlank('https://github.com/toddkao')" class="fa-social fa fa-4x fa-github" aria-hidden="true"></i>
                <div class="body-1">
                  Github
                </div>
              </div>
              <div class="flex-center vertical">
                <i v-ripple @click="openBlank('https://linkedin.com/in/toddkao')" class="fa-social fa fa-4x fa-linkedin-square" aria-hidden="true"></i>
                <div class="body-1">
                  Linkedin
                </div>
              </div>
              <div class="flex-center vertical">
                <i v-ripple @click="openBlank('../static/resume/toddkao.pdf')" class="fa-social fa fa-4x fa-file-code-o" aria-hidden="true"></i>
                <div class="body-1">
                  Resume
                </div>
              </div>
            </div>
          </template>
        </v-card>
    </v-tab-item>



  </v-tabs>
</div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    active: 1,
    menus: [
      {
        name: 'About',
        route: 'home',
        icon: 'fa-user',
        content: `
        <img src="${require('@/assets/images/pic.jpg')}">
          <h2 class="display-1"> Todd Kao </h2>
          <p class="text subheading">
            Hi, I'm a Web Developer from Toronto. I studied Computer Science at Ryerson University. I love minimalistic designs and neat, readable code. Some other fields of interest include mobile app development, software development, AI/bots, networking, security and game development.
          </p>
        `
      },
      {
        name: 'Work',
        route: 'work',
        icon: 'fa-briefcase',
        content: 2
      }
    ],
    dialogVisible: false,
    selectedItem: [],
    showing: null,
    showingSize: null,
    showingOverlay: true,
    showingScreenshot: null,
    project: [
      {
        name: 'RESTful API Server',
        details: 'View Details',
        link: 'https://github.com/toddkao/RESTful-API-with-MongoDB',
        linkTitle: 'View Github',
        image: require('@/assets/images/restfulApi.png'),
        desc: 'RESTful API Server with mongoDB Schema, GET, POST, PUT, DELETE methods',
        tags: [
          'https://img.shields.io/badge/Node.js-v6.11.2-brightgreen.svg',
          'https://img.shields.io/badge/MongoDB-v3.4.10-brightgreen.svg',
          'https://img.shields.io/badge/Express-v4.16.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ]
      },
      {
        name: 'Tic Tac Toe',
        details: 'View Details',
        link: 'https://codepen.io/toddkao/pen/EZBJyj',
        linkTitle: 'View Codepen',
        image: require('@/assets/images/tictactoe.jpg'),
        desc: 'Tic Tac Toe made with React, I followed React Tutorial page and added a restart game button',
        tags: [
          'https://img.shields.io/badge/React.js-v15.4.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ]
      },
      {
        name: 'Conditional Rendering',
        details: 'View Details',
        link: 'https://codepen.io/toddkao/pen/QvpOgO',
        linkTitle: 'View Codepen',
        image: require('@/assets/images/conditional.jpg'),
        desc: 'Conditional Rendering with React js and Babel ES6',
        tags: [
          'https://img.shields.io/badge/React.js-v15.4.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ]
      }
    ],
    work: [
      {
        name: 'Pita pit',
        details: 'View Details',
        image: require('@/assets/images/pitapit/pitapit.png'),
        desc: 'Pita pit online ordering website',
        tags: [
          'https://img.shields.io/badge/Node.js-v6.11.2-brightgreen.svg',
          'https://img.shields.io/badge/Vue.js-v3.4.10-brightgreen.svg',
          'https://img.shields.io/badge/Express-v4.16.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ],
        screenshots: [
          require('@/assets/images/pitapit/pitapit.png'),
          require('@/assets/images/pitapit/pitapitmap.png'),
          require('@/assets/images/pitapit/pitapitmenu.png'),
          require('@/assets/images/pitapit/pitapittopping.png'),
          require('@/assets/images/pitapit/pitapitprofile.png')
        ]
      },
      {
        name: 'Ginos Pizza',
        details: 'View Details',
        image: require('@/assets/images/ginospizza/ginos1.png'),
        desc: 'Ginos Pizza online ordering website',
        tags: [
          'https://img.shields.io/badge/Node.js-v6.11.2-brightgreen.svg',
          'https://img.shields.io/badge/Vue.js-v3.4.10-brightgreen.svg',
          'https://img.shields.io/badge/Express-v4.16.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ],
        screenshots: [
          require('@/assets/images/ginospizza/ginos1.png'),
          require('@/assets/images/ginospizza/ginos2.png'),
          require('@/assets/images/ginospizza/ginos3.png'),
          require('@/assets/images/ginospizza/ginos4.png'),
          require('@/assets/images/ginospizza/ginos5.png')
        ]
      },
      {
        name: 'Williams Cafe',
        details: 'View Details',
        image: require('@/assets/images/superfresh/superfresh.png'),
        desc: 'Williams Cafe digital signage with real time content updates',
        tags: [
          'https://img.shields.io/badge/Node.js-v6.11.2-brightgreen.svg',
          'https://img.shields.io/badge/Vue.js-v3.4.10-brightgreen.svg',
          'https://img.shields.io/badge/Express-v4.16.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ],
        screenshots: [
          require('@/assets/images/superfresh/superfresh.png'),
          require('@/assets/images/superfresh/superfresh2.png'),
          require('@/assets/images/superfresh/superfresh3.png')
        ]
      },
      {
        name: 'Waxon',
        details: 'View Details',
        image: require('@/assets/images/waxon/waxon1.png'),
        desc: 'Waxon frahchise inventory management system',
        tags: [
          'https://img.shields.io/badge/Node.js-v6.11.2-brightgreen.svg',
          'https://img.shields.io/badge/Vue.js-v3.4.10-brightgreen.svg',
          'https://img.shields.io/badge/Express-v4.16.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ],
        screenshots: [
          require('@/assets/images/waxon/waxon1.png'),
          require('@/assets/images/waxon/waxon2.png'),
          require('@/assets/images/waxon/waxon3.png'),
          require('@/assets/images/waxon/waxon4.png'),
          require('@/assets/images/waxon/waxon5.png'),
          require('@/assets/images/waxon/waxon6.png')
        ]
      },
      {
        name: 'Osmows',
        details: 'View Details',
        image: require('@/assets/images/osmows/osmows1.png'),
        desc: 'Osmows updated website in development',
        tags: [
          'https://img.shields.io/badge/Node.js-v6.11.2-brightgreen.svg',
          'https://img.shields.io/badge/Vue.js-v3.4.10-brightgreen.svg',
          'https://img.shields.io/badge/Express-v4.16.2-brightgreen.svg',
          'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
        ],
        screenshots: [
          require('@/assets/images/osmows/osmows1.png')
        ]
      }
    ]
  }),
  methods: {
    openBlank (val) {
      window.open(val)
    },
    setActive (index) {
      if (index !== 3) {
        this.active = index
      } else {
        window.open('../static/resume/toddkao.pdf')
      }
    },
    setModal (item) {
      this.selectedItem = []
      this.$forceUpdate()
      this.selectedItem = item
      console.log(this.menusactive)
      console.log(item)
      this.dialogVisible = true
    },
    showScreenshot (index) {
      this.showingScreenshot = index
    },
    hideScreenshot () {
      this.showingScreenshot = null
    },
    showDetails (index) {
      // this.items.
      this.showing = index
      this.showingSize = index
      this.showingOverlay = false
    },
    goBack () {
      this.showing = null
      setTimeout(() => {
        this.showingSize = null
        setTimeout(() => {
          this.showingOverlay = true
        }, 500)
      }, 50)
    },
    prevItem (index) {
      console.log('p')
      if (index === 0) {
        this.showing = 0
        this.showingSize = 0
      } else {
        this.showing--
        this.showingSize--
      }
    },
    nextItem (index) {
      console.log('n')
      if (index === this.items.length - 1) {
        this.showing = 0
        this.showingSize = 0
      } else {
        this.showing++
        this.showingSize++
      }
    }
  }
}
</script>

<style scoped> 
.hover:hover {
  cursor: pointer;
}
.active {
  background-color:#5AD2F4!important;
  color:#363732!important;
}
.tabs__items {
  margin-top: 50px;
}
a:focus, a:hover {
  text-decoration: none !important;
}
</style>

<style>
.el-dialog {
  margin-top:5vh !important;
}
.card__media__background {
  background-size:contain!important;
}
.tabs__content
 {
   /* height:calc(100vh - 73px) !important; */
 }
 .flex-center{
  display:flex;
  justify-content:center;
  align-items:center;
 }
 .vertical {
   flex-direction:column
 }
</style>