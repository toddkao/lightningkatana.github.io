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
      <div class="content">
          <img :src="profile">
          <h2> Todd Kao </h2>
          <p class="text">
            Hi, I'm a Web Developer from Toronto. I studied Computer Science at Ryerson University. I love minimalistic designs and neat, readable code. Some other fields of interest include mobile app development, software development, AI/bots, networking, security and game development.
          </p>
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
    }
  },
  computed: {
    profile () {
      return require('@/assets/images/pic.jpg')
    }
  }
}
</script>