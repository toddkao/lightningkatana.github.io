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
          <img v-for="screenshot in selectedItem.screenshots" :src="screenshot" style="width: 500px;max-width: 100%;">
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
      
      <el-carousel arrow="always" indicator-position="none" :interval="4000" type="card" height="200px">
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
      showingScreenshot: null,
      items: [
        {
          name: 'Pita pit',
          details: 'View Details',
          image: require('@/assets/images/pitapit/pitapit.png'),
          description: 'Pita pit online ordering website',
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
          description: 'Ginos Pizza online ordering website',
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
          description: 'Williams Cafe digital signage with real time content updates',
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
          description: 'Waxon frahchise inventory management system',
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
          description: 'Osmows updated website in development',
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
    }
  },
  methods: {
    setModal (item) {
      this.selectedItem = item
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