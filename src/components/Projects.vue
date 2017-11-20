<template>
  <div class="body">
    <div class="container">
      <div class="toolbar">
        <span>
          <i style="color:red" class="fa fa-circle"></i>
          <i style="color:yellow" class="fa fa-circle"></i>
          <i style="color:white" class="fa fa-circle"></i>
        </span>
      </div>
      <template v-for="(item, index) in items">
        <template v-if="showingOverlay">
          <div :class="{'lg-block': showing === index}" v-if="showing === index || showing === null" class="overlay block">
            <div>
              {{ item.name }}
            </div>
              <div>
                <button v-if="showing === null" @click="showDetails(index)" class="button btn details">
                  {{ item.details}}
                </button>
                <button v-else @click="goBack()" class="button btn details">
                  Back to gallery
                </button>
                <a v-if="showing === index" :href="item.link" target="_blank" class="button btn codepen">
                  {{ item.linkTitle }}
                </a>
              </div>
          </div>
        </template>
        <div :class="{'lg-block': showingSize === index}" v-if="showing === index || showing === null" class="block" :style="{backgroundImage : 'url(' + item.image + ')'}">
        </div>
        <div v-if="showing === index">
          <i @click="prevItem(index)" class="fa-social fa fa-4x fa-chevron-circle-left" aria-hidden="true"></i>
          <i @click="nextItem(index)" class="fa-social fa fa-4x fa-chevron-circle-right" aria-hidden="true"></i>
        </div>
        <div style="font-size: 22px;" v-if="showing === index"> {{ item.description }} </div>
        <img style="margin: 10px" v-if="showing === index" v-for="url in item.tags" :src="url">
      </template>
      </div>

        <i class="fa-social fa fa-4x fa-github" aria-hidden="true"></i>
        <i class="fa-social fa fa-4x fa-linkedin-square" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      showing: null,
      showingSize: null,
      showingOverlay: true,
      items: [
        {
          name: 'RESTful API Server',
          details: 'View Details',
          link: 'https://github.com/toddkao/RESTful-API-with-MongoDB',
          linkTitle: 'View Github',
          image: require('@/assets/images/restfulApi.png'),
          description: 'RESTful API Server with mongoDB Schema, GET, POST, PUT, DELETE methods',
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
          description: 'Tic Tac Toe made with React, I followed React Tutorial page and added a restart game button',
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
          description: 'Conditional Rendering with React js and Babel ES6',
          tags: [
            'https://img.shields.io/badge/React.js-v15.4.2-brightgreen.svg',
            'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
          ]
        }
      ]
    }
  },
  methods: {
    showDetails (index) {
      // this.items.
      this.showing = index
      this.showingSize = index
    },
    goBack () {
      this.showingOverlay = false
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