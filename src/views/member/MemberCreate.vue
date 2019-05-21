<template>
    <div>
        <h1>Nouveau membre</h1>

        <v-layout row wrap>
            <v-flex md4 xs12>
                <v-container grid-list-8>
                    <v-text-field label="Nom" required v-model="member.firstname" />
                </v-container>
            </v-flex>

            <v-flex md4 xs12>
                <v-container grid-list-8>
                    <v-text-field label="Prénom" required v-model="member.lastname" />
                </v-container>
            </v-flex>

            <v-flex md4 xs12>
                <v-container grid-list-8>
                    <v-text-field label="E-mail" required v-model="member.email" />
                </v-container>
            </v-flex>
        </v-layout>

        <!-- todo: add save button -->
    </div>
</template>

<script>
export default {
	name: `MemberCreate`,

	data() {
		return {
			member: {
				firstname: ``,
				lastname: ``,
				email: ``,
			},
		};
	},

	methods: {
		save() {
			// todo : create this member using this.$store.actions('createMember')
		},
	}
};
</script>
