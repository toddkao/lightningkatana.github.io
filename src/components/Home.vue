<template>
<div>
  <div v-cloak class="content">
    <el-card :body-style="cardStyle" class="main-card">
      <vue-typer v-if="!getTyped" class="typer" :text="typed" :repeat="0" @completed='doneTyping'></vue-typer>
      <div v-show="getTyped">
        <div class="title transition">
          <div> Todd Kao </div>
          <div>
            <img class="profile" src="../assets/images/profile.jpg"/>
          </div>
          <vue-typer v-if="getTyped" class="typer" :text="titles"></vue-typer>
        </div>
        <p class="transition">I'm currently working with the <a href="https://vuejs.org/" target="_blank"> Vue.js Framework </a> to create SPA/Web Apps.
        I'm always looking for opportunities to learn more about web, software development, mobile app development, database systems, AI and other computer/system/network related technologies.
        </p>
        <p>I am experienced with <a href="https://vuejs.org/" target="_blank"> Vue.js</a>,
          <a href="http://www.codereadability.com/what-are-javascript-linters/" target="_blank"> JSLint</a>,
          <a href="http://es6-features.org/#Constants" target="_blank">ES6</a>,
          <a href="https://git-scm.com/" target="_blank">git/git-cli</a>,
          <a href="https://trello.com/" target="_blank">trello</a>/<a href="https://www.atlassian.com/software/jira" target="_blank">jira</a>,
          centralized state management <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">(Vuex)</a>,
          <a href="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1" target="_blank">functional javascript</a>
          <!-- <a href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank">responsive design </a> -->
        </p>
        <div class="flex-center social">
          <a href="https://github.com/toddkao" target="_blank"><i class="fa fa-github fa-3x hover" aria-hidden="true"/></a>
          <a href="https://www.linkedin.com/in/toddkao/" target="_blank"><i class="fa fa-linkedin-square fa-3x hover" aria-hidden="true"/></a>
        </div>
        <div>
          <div class="small">vuex + persisted state is used so the initial animation isn't repeated each time you refresh the page,
            <a @click.stop.prevent="init(true)" href="">click here </a>if you would like to see it again. </div>
        </div>
      </div>
    </el-card>
  </div>
  <canvas class="bg"/>
</div>
</template>

<script>
import Particles from 'particlesjs'
import anime from 'animejs'
import { VueTyper } from 'vue-typer'
import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'

export default {
  name: 'Home',
  components: {
    VueTyper
  },
  mounted () {
    this.init()
  },
  data: () => ({
    cardStyle: {
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'padding': '20px',
      'max-width': '85vw',
      'width': '500px',
      'flex-direction': 'column',
      'transition-duration': '10s'
    },
    typed: [
      `Hi, I'm Todd Kao`,
      `I'm a web developer from Toronto`
    ],
    titles: [
      'Web Developer',
      'Software Developer',
      'Programmer',
      'Lifelong Learner'
    ],
    ready: false
  }),
  computed: {
    ...mapGetters([
      'getTyped'
    ])
  },
  methods: {
    ...mapActions([
      'setTyped',
      'clearTyped'
    ]),
    init (reset = false) {
      if (reset === true) this.clearTyped()
      Particles.init({
        selector: '.bg',
        color: ['#1abc9c', '#404B69', '#6c5ce7'],
        maxParticles: 100,
        connectParticles: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 50,
              color: ['#1abc9c', '#404B69', '#6c5ce7'],
              connectParticles: false
            }
          },
          {
            breakpoint: 320,
            options: {
              maxParticles: 0,
              color: ['#1abc9c', '#404B69', '#6c5ce7'],
              connectParticles: false
            }
          }
        ]
      })
      if (this.getTyped === false) {
        this.cardStyle['max-height'] = '34px'
        $('.transition').css({opacity: 0.5})
      }
      anime({
        targets: '.bg',
        opacity: 1,
        easing: 'easeOutQuint',
        duration: 5000
      })
    },
    doneTyping () {
      setTimeout(() => {
        this.setTyped(true)
        $('.main-card .el-card__body').addClass('autoHeight')
        anime({
          targets: '.transition',
          opacity: 1,
          easing: 'easeOutQuint',
          duration: 3000
        })
      }, 1000)
      console.log('test')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.hover:hover {
  cursor:pointer;
  opacity:0.5;
}
.small {
  font-size: 12px;
}
.social .fa {
  margin: 10px;
  color:black;
}
.flex-center{
  align-items:center;
  display:flex;
  justify-content:center;
}
.column {
  flex-direction:column;
}
[v-cloak] { display: none; }
.title .profile {
  width: 150px;
  border-radius: 50%;
}
.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.autoHeight {
  transition-timing-function: ease-out;
  max-height: 50000px!important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.typer {
  font-size: 25px;
  font-weight: bold;
}
html, body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
.el-card {
  position: relative;
  opacity: 0.8;
}
.el-card img {
  width:100%;
}
.bg {
  background-color:#2c3e50;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}

.content {
  width:100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
