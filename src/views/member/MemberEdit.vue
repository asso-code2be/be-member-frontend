<template>
    <v-container>
        <h1>&Eacute;dition d'un membre</h1>

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
                    <v-text-field label="E-mail" type="email" required v-model="member.email" />
                </v-container>
            </v-flex>
        </v-layout>

        <v-btn @click="save">
            Enregistrer
        </v-btn>

        <!-- todo: add delete button -->
    </v-container>
</template>

<script>
import store from '../../store/index';
import cloneDeep from 'lodash/cloneDeep';

export default {
	name: `MemberEdit`,

	props: {
		id: {
			type: Number,
			default: null,
		}
	},

	data() {
		return {
			member: cloneDeep(store.state.member),
			saving: false,
		};
	},

	async beforeRouteEnter(to, from, next) {
		try {
			await store.getters.getMemberById(to.params.id);
			next();
		} catch (e) {
			console.log(e);
			console.log(`Erreur lors de la récupération du membre.`);
		}
	},

	methods: {
		async save() {
			this.saving = true;
			try {
				await store.dispatch(`updateMember`, this.member);
			} catch (e) {
				console.log(e);
				console.log(`Erreur lors de la mise à jour du membre.`);
			}
			this.saving = false;
			this.$router.push({name:`member.index`});
		},

		delete() {
			// todo : delete this member
		}
	}
};
</script>
