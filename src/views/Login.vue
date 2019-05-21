<template>
    <v-app id="inspire">
        <v-content>
            <v-container fill-height fluid>
                <v-layout align-center justify-center>
                    <v-flex md4 sm8 xs12>
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark>
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <v-spacer />
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn :href="source" icon large target="_blank" v-on="on">
                                            <v-icon large>
                                                code
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Source</span>
                                </v-tooltip>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                href="https://codepen.io/johnjleider/pen/wyYVVj"
                                                icon
                                                large
                                                target="_blank"
                                                v-on="on"
                                        >
                                            <v-icon large>
                                                mdi-codepen
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Codepen</span>
                                </v-tooltip>
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
                                <v-btn color="primary">
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

	props: {
		source: {
			type: String,
			default: null
		}
	},

	data: () => ({
		drawer: null
	})
};
</script>
