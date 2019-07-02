<template>
    <v-container>
        <h1>
            Liste des membres
        </h1>

        <v-btn :to="{name : `member.create`}" color="green" dark icon>
            <v-icon>
                add
            </v-icon>
        </v-btn>

        <v-data-table :headers="headers" :items="membersList" class="elevation-1">
            <template v-slot:items="props">
                <td>{{ props.item.id }}</td>
                <td>
                    {{ props.item.lastname }}
                </td>
                <td>
                    {{ props.item.firstname }}
                </td>
                <td class="text-xs-right">
                    <v-btn @click="editMember(props.item.id)" small icon>
                        <v-icon dark small>
                            edit
                        </v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
	data() {
		return {
			headers: [
				{ text: `#`, value: `id` },
				{ text: `Nom`, value: `lastname` },
				{ text: `Prénom`, value: `firstname` },
				{ text: ``, value: `actions`, sortable: false }
			]
		};
	},

	computed: {
		...mapState([`membersList`])
	},

	async beforeRouteEnter(to, from, next) {
		try {
			// todo : load members
			next();
		} catch (e) {
			console.log(e);
			console.log(`Erreur lors de la récupération des membres.`);
		}
	},

    methods: {
	    editMember(id) {
            this.$router.push({name:`member.edit`, params: {id}});
        }
    },
};
</script>
