<template>
  <v-app dark>

    <!-- ヘッダーツールバー -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="indigo darken-2"
      dark
    >

    <v-btn
      icon
      @click.stop="leftDrawer = !leftDrawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>


      <!-- タイトル -->
      <nuxt-link
        to="/home" 
        tag="div"
      >ClimBookmark</nuxt-link>
      
      <v-spacer />
    </v-app-bar>
  

    <!-- ナビゲーション -->
    <v-navigation-drawer
      v-model="leftDrawer"
      :naviDraw="naviDraw"
      temporary
      fixed
    >

      <v-btn
        icon
        @click="leftDrawer = !leftDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home-variant',
          title: 'home',
          to: '/home'
        },
        {
          icon: 'mdi-account',
          title: 'account',
          to: '/account'
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      miniVariant: false,
      naviDraw: false,
      leftDrawer: false,
      title: 'ClimBookmark'
    }
  }
}
</script>
