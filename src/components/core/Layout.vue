<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      expand-on-hover
      clipped
      floating
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
     app
     clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
       <v-toolbar-title class="font-weight-bold">
        <span class="error--text">RW</span>
        <span class="orange--text">ZONE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
            <template v-if="$vuetify.breakpoint.smAndUp">
               <v-divider class="mx-4" vertical></v-divider>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" text v-on="on">
              <v-avatar size="35">
                <v-icon dark>face</v-icon>
              </v-avatar>
              <span class="ml-2 black--text">{{ $store.state.user }}</span>
              <v-icon class="ml-2">mdi-arrow-down-bold</v-icon>
            </v-btn>
          </template>
          <v-list>
        <v-list-item><v-icon class="mr-2">settings</v-icon>profile</v-list-item>
        <v-list-item><v-icon class="mr-2">mdi-location-exit</v-icon>exit</v-list-item>
        </v-list>
        </v-menu>
      </template>
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
    }),
  }
</script>