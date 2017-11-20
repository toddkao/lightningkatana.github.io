<template>
  <ul class="nav nav-pills">
    <template v-for="menu in menus">
      <li @click="goTo(menu)">
        <div style="height: 110px;">
          <span class="fa-stack fa-3x">
            <i class="menu-circle fa fa-circle fa-stack-2x"></i>
            <i :class="[{'active': $route.name === menu.route}, menu.icon]" class="menu-icon fa fa-inverse fa-stack-1x">
              <p :class="{'active': $route.name === menu.route}"> {{menu.name}} </p>
            </i>
          </span>
        </div>
      </li>
    </template>
  </ul>
</template>


<script>
export default {
  name: 'navbar',
  data () {
    return {
      menus: [
        {
          name: 'About',
          route: 'home',
          icon: 'fa-user'
        },
        {
          name: 'Work',
          route: 'work',
          icon: 'fa-briefcase'
        },
        {
          name: 'Projects',
          route: 'projects',
          icon: 'fa-tasks'
        },
        {
          name: 'CV',
          link: 'http://google.com',
          icon: 'fa-file-text'
        }
      ]
    }
  },
  methods: {
    goTo (menu) {
      if (menu.route) {
        this.$router.push({'name': menu.route})
      } else if (menu.link) {
        window.open(menu.link, '_blank')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  margin-bottom: 10px;
  width: 100vw;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
}

li {
  text-align:center;
}
p {
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  margin-top: -35px;
  font-size: 18px;
  color:white;
}
i:hover, .active{
  color:lightgreen;
  cursor: pointer;
}
</style>
