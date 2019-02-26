<template>
    <v-app>
        <v-toolbar app>
            <router-link :to="{ name: 'dashboard'}">
                <v-toolbar-title class="headline text-uppercase">
                    <span>Code2.BE </span>
                    <span class="font-weight-light">Be member</span>
                </v-toolbar-title>
            </router-link>

            <router-link :to="{ name: 'member.index'}">
                <v-btn flat>Membres</v-btn>
            </router-link>

            <v-spacer></v-spacer>
            
            <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
                <span class="mr-2">Déconnexion</span>
            </v-btn>
        </v-toolbar>

        <v-content>
            <HelloWorld/>
        </v-content>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'

    export default {
        name: `App`,
        components: {
            HelloWorld
        },
        data() {
            return {
                //
            }
        }
    }
</script>
