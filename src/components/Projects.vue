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
      <el-dialog
        style="min-width:50%"
        :title="selectedItem.name"
        :visible.sync="dialogVisible"
        width="50%">
        <span> {{ selectedItem.description }}</span>
        <div style="width:100%">
          <img :src="selectedItem.image" style="width: 500px;max-width: 100%;">
        </div>
        <a v-if="selectedItem.link" :href="selectedItem.link" target="_blank" class="button btn codepen">
          {{ selectedItem.linkTitle }}
        </a>
        <img style="margin: 10px" v-for="url in selectedItem.tags" :src="url">
        
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button> -->
        </span>
      </el-dialog>
      <el-carousel arrow="always" indicator-position="none" :interval="4000" type="card" width="30vw" height="200px">
        <el-carousel-item v-for="(item, index) in items" :key="item">
          <div @click="setModal(item)" :class="{'lg-block': showingSize === index}" v-if="showing === index || showing === null" class="block" :style="{backgroundImage : 'url(' + item.image + ')'}">
        </div>
        </el-carousel-item>
      </el-carousel>
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
      dialogVisible: false,
      selectedItem: [],
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
    setModal (item) {
      this.selectedItem = item
      console.log(item)
      this.dialogVisible = true
    },
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