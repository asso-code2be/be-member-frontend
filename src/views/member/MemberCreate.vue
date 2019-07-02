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

        <v-btn @click="save">
            Ajouter
        </v-btn>
</div>
</template>

<script>
import store from '../../store/index';

export default {
	name: `MemberCreate`,

	data() {
		return {
			member: {
				firstname: ``,
				lastname: ``,
				email: ``,
			},
            saving: false,
		};
	},

	methods: {
		async save() {
			this.saving = true;
			try {
				await store.dispatch(`createMember`, this.member);
			} catch (e) {
				console.log(e);
				console.log(`Erreur lors de l'ajout du membre.`);
			}
			this.saving = false;
			this.$router.push({name:`member.index`});
		}
	}
};
</script>
