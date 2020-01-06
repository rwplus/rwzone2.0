<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      expand-on-hover
      clipped
      fixed
      floating
    >
   <v-list shaped>
      <v-list-item-group v-model="item" color="black">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" small></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" class="caption"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar
     app
     clipped-left
     color="#212121"
     dark
     dense

    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
       <v-toolbar-title class="font-weight-bold">
        <span class="error--text">RW</span>
        <span class="orange--text">Zone .</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-text-field
        dense
        rounded
        solo
        hide-details
        color="grey"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon tile><v-icon small>mdi-settings</v-icon></v-btn>

      <v-btn icon tile><v-icon small>mdi-mail</v-icon></v-btn>
      <v-btn icon tile><v-icon small>mdi-calendar</v-icon></v-btn>
      <v-avatar color="red" size="36">
      <span class="white--text caption">WK</span>
        </v-avatar>
    </v-app-bar>
  </div>
</template>
    </v-app-bar>
</div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
  }
</script>