<template>
  <v-app id="layout">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="goTo('login')">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goTo('member.index')">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Membres</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Be member</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text pa-4">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import MemberIndex from "./views/member/MemberIndex";

export default {
  components: {
    MemberIndex
  },
  props: {
    source: {
      type: String,
      default: ``
    }
  },

  data: () => ({
    drawer: null
  }),

  methods: {
    goTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>