<template>
    <v-app v-if="$route.name === 'login'">
        <router-view />
    </v-app>
    <v-app id="layout" v-else>
        <v-navigation-drawer app fixed v-model="drawer">
            <v-list dense>
                <v-list-tile @click="goTo('dashboard')">
                    <v-list-tile-action>
                        <v-icon>dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Tableau de bord</v-list-tile-title>
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
                <v-list-tile @click="logout">
                    <v-list-tile-action>
                        <v-icon>logout</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app color="indigo" dark fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Be member</v-toolbar-title>
        </v-toolbar>

        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: null
	}),

	methods: {
		goTo(name) {
			this.$router.push({ name });
		},

		logout() {
			// todo : do logout
		}
	}
};
</script>
