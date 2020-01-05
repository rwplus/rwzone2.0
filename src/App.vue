<template>
  <v-app>
   <app-layout v-if="$store.state.auth.isLogged" />
   <v-content>
    <v-container grid-list-xs>
        <router-view />
    </v-container>
    </v-content>
    <v-snackbar
        :value="$store.state.snackbar.snackbar.show"
        :multi-line="$store.state.snackbar.snackbar.multiLine"
        :top="$store.state.snackbar.snackbar.top === 'top' "
        :bottom="$store.state.snackbar.snackbar.bottom === 'bottom' "
        :color="$store.state.snackbar.snackbar.color"
      >
        {{$store.state.snackbar.snackbar.message}}
      <v-btn dark text @click="$store.commit('snackbar/setSnackbarShow',false)" color="red">close</v-btn>
 </v-snackbar>
  </v-app>
</template>

<script>
import AppLayout from '@/components/core/Layout'

export default {
  name: "App",
  components:{
    AppLayout
  },
  data: () => ({
    //
  })
};
</script>