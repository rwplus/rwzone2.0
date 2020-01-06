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
    <v-list nav
          class="py-0">
      <v-list-item two-line>
            <v-list-item-avatar color="red" small>
<span class="white--text headline">WK</span>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>weeknd</v-list-item-title>
              <v-list-item-subtitle>weeknd.su@hotmail.com</v-list-item-subtitle>
            </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      </v-list>
   <v-list shaped>
      <v-list-item-group v-model="item" color="black">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" size="24"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" class="caption"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      item: 0,
      items: [
        { text: '任务', icon: 'mdi-clock' },
        { text: '信息', icon: 'mdi-account' },
        { text: '标记', icon: 'mdi-flag' },
        { text: '日志', icon: 'mdi-math-log' },
        { text: '表格', icon: 'mdi-table-edit' },
        { text: '标记', icon: 'mdi-flag' },
      ],
    }),
  }
</script>