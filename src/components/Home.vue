<template>
  <div class="body">
    <div v-cloak class="content">
      <div class="main-card">
        <vue-typer
          v-if="!getTyped"
          class="typer"
          :text="typed"
          :repeat="0"
          @completed="doneTyping"
        ></vue-typer>
        <div v-show="getTyped">
          <div class="title transition">
            <div>Todd Kao</div>
            <div>
              <img class="profile" src="../assets/images/profile.jpg" />
            </div>
            <vue-typer v-if="getTyped" class="typer" :text="titles"></vue-typer>
          </div>
          <p class="transition">
            I'm currently working at
            <a
              href="https://www.crunchbase.com/organization/indigo-fair"
              class="bold"
              target="_blank"
              >Faire</a
            >. I'm experienced at writing beautiful and efficient
            <span class="bold">WebApps</span> using
            <span
              v-for="(technology, index) in technologies"
              :key="technology"
              class="bold"
            >
              {{ technology
              }}<template v-if="index < technologies.length - 1">,</template
              ><template v-else>.</template>
            </span>
          </p>
          <p>
            I'm always looking for opportunities to learn more about software
            development and game development.
          </p>
          <div class="flex-center social">
            <a href="https://github.com/toddkao" target="_blank"
              ><i class="fa fa-github fa-3x hover" aria-hidden="true"
            /></a>
            <a href="https://www.linkedin.com/in/toddkao/" target="_blank"
              ><i class="fa fa-linkedin-square fa-3x hover" aria-hidden="true"
            /></a>
          </div>
          <div>
            <div class="small">
              localStorage is used so the initial animation isn't repeated each
              time you refresh the page,
              <a @click.stop.prevent="init(true)" href="">click here </a>if you
              would like to see it again.
            </div>
          </div>
        </div>
      </div>
    </div>
    <canvas class="bg" />
  </div>
</template>

<script>
import Particles from "particlesjs";
import anime from "animejs";
import { VueTyper } from "vue-typer";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";

export default {
  name: "Home",
  components: {
    VueTyper
  },
  mounted() {
    this.initBg();
    this.init();
  },
  data: () => ({
    typed: [`Hi, I'm Todd Kao`, `I'm a Frontend Engineer from Toronto`],
    titles: ["Frontend Engineer", "Software Developer", "Lifelong Learner"],
    technologies: [
      "React",
      "Typescript",
      "MobX",
      "Jest",
      "Cypress",
      "styled-components (CSS-in-js)",
      "Storybook (Reusable UI components)"
    ]
  }),
  computed: {
    ...mapGetters(["getTyped"])
  },
  methods: {
    ...mapActions(["setTyped", "clearTyped"]),
    init(reset = false) {
      if (reset === true) {
        this.clearTyped();
      }
      if (this.getTyped === false) {
        $(".main-card").css({ "max-height": "65px" });
      }
    },
    initBg() {
      Particles.init({
        selector: ".bg",
        color: ["#1abc9c", "#404B69", "#6c5ce7"],
        maxParticles: 50,
        connectParticles: true,
        move: {
          speed: 3
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 0,
              color: ["#1abc9c", "#404B69", "#6c5ce7"],
              connectParticles: false
            }
          }
        ]
      });
      anime({
        targets: ".bg",
        opacity: 1,
        easing: "easeOutQuint",
        duration: 5000
      });
    },
    doneTyping() {
      setTimeout(() => {
        this.setTyped(true);
        $(".main-card").addClass("autoHeight");
        anime({
          targets: ".transition",
          opacity: 1,
          easing: "easeOutQuint",
          duration: 3000
        });
      }, 1000);
      console.log("test");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@media screen and (min-height: 550px) {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 768px) {
  .typer {
    font-size: 16px !important;
  }
  p {
    font-size: 13px !important;
  }
  .title {
    font-size: 18px !important;
  }
  .small {
    font-size: 10px !important;
  }
}
body {
  overflow: hidden;
  position: relative;
  height: 100vh;
}
.bold {
  font-weight: bold;
}
.hover:hover {
  cursor: pointer;
  opacity: 0.5;
}
.small {
  font-size: 12px;
}
.social .fa {
  margin: 10px;
  color: black;
}
.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}
.column {
  flex-direction: column;
}
[v-cloak] {
  display: none;
}
.title .profile {
  width: 150px;
  border-radius: 50%;
  margin: 10px;
}
.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.autoHeight {
  transition-timing-function: ease-out;
  max-height: 50000px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.typer {
  height: 34px;
  font-size: 25px;
  font-weight: bold;
}
html,
body {
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
}
.el-card {
  position: relative;
  opacity: 0.8;
}
.el-card img {
  width: 100%;
}
.bg {
  background-color: #2c3e50;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100vh !important;
  z-index: -1;
  opacity: 0;
}

.main-card {
  border-radius: 4px;
  border: 1px solid #e6ebf5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #2d2f33;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  width: 500px;
  flex-direction: column;
  opacity: 0.8;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .main-card {
    width: 100%;
    min-height: 100%;
  }
}

.content {
  height: 100%;
}
.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
