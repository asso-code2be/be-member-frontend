<template>
    <v-app id="inspire">
        <v-content>
            <v-container fill-height fluid>
                <v-layout align-center justify-center>
                    <v-flex md4 sm8 xs12>
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark>
                                <v-toolbar-title>Authentification</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Login" name="login" prepend-icon="person" type="text" />
                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="lock"
                                            type="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn @click="attempt" color="primary">
                                    Login
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
	name: `Login`,

	methods: {
		attempt() {
			// todo : attempt to login the user using store.dispatch('authAttempt')(credentials)

			this.$router.push({ name: `dashboard` });
		}
	}
};
</script>
