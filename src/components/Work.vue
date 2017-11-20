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
              </div>
          </div>
        </template>
        <div v-if="showing === index" >
          <span v-if="showingScreenshot === null" v-for="(picture, i) in item.screenshots"> <img @click="showScreenshot(i)" style="width:25%;margin: 1%;z-index: 99" :src="picture"> </span>
          <span v-if="showingScreenshot === i" v-for="(picture,i) in item.screenshots"> <img @click="hideScreenshot()" style="width:80%;margin: 1% z-index: 99" :src="picture"> </span>
        </div>
        <div :class="{'lg-block': showingSize === index}" v-if="showing === null" class="block" :style="{backgroundImage : 'url(' + item.image + ')'}">
        </div>
        <button v-else @click="goBack()" style="width: auto !important" class="button btn details">
          Back to gallery
        </button>
        <a v-if="showing === index && item.linkTitle" target="_blank" class="button btn codepen">
          {{ item.linkTitle }}
        </a>
        <div v-if="showing === index">
          <i @click="prevItem(index)" class="fa-social fa fa-4x fa-chevron-circle-left" aria-hidden="true"></i>
          <i @click="nextItem(index)" class="fa-social fa fa-4x fa-chevron-circle-right" aria-hidden="true"></i>
        </div>
        <div style="font-size: 22px;" v-if="showing === index"> {{ item.description }} </div>
        <img v-if="showing === index" style="margin: 10px" v-for="url in item.tags" :src="url">
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
      showingScreenshot: null,
      items: [
        {
          name: 'Pita pit',
          details: 'View Details',
          image: require('@/assets/images/pitapit.png'),
          description: 'Pita pit online ordering website',
          tags: [
            'https://img.shields.io/badge/Node.js-v6.11.2-brightgreen.svg',
            'https://img.shields.io/badge/Vue.js-v3.4.10-brightgreen.svg',
            'https://img.shields.io/badge/Express-v4.16.2-brightgreen.svg',
            'https://img.shields.io/badge/Babel-v6.23.0-brightgreen.svg'
          ],
          screenshots: [
            require('@/assets/images/pitapit.png'),
            require('@/assets/images/pitapitmap.png'),
            require('@/assets/images/pitapitmenu.png'),
            require('@/assets/images/pitapittopping.png'),
            require('@/assets/images/pitapitprofile.png')
          ]
        }
      ]
    }
  },
  methods: {
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
  img:hover {
    opacity: 0.8;
    cursor: pointer;
  }
</style>