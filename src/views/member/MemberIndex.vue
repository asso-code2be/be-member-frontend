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

        <v-data-table :headers="headers" :items="members" class="elevation-1">
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
                    <v-btn @click="confirmDeleteMember(props.item)" small icon>
                        <v-icon dark small>
                            delete
                        </v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
        <modal-delete :visible.sync="modalDeleteVisibility" :width="450"
                      @canceled="modalDeleteVisibility=false" @confirmed="deleteMember">
            <template v-slot:content>
                Êtes vous sur de vouloir supprimer {{ modalMemberToDelete.firstname }} {{ modalMemberToDelete.lastname
                }} ?
            </template>
        </modal-delete>
    </v-container>
</template>

<script>
import store from '../../store/index';
import cloneDeep from 'lodash/cloneDeep';
import ModalDelete from '../../components/ModalDelete';

export default {
	name: `MemberIndex`,
	components: {
		ModalDelete,
	},
	data() {
		return {
			headers: [
				{text: `#`, value: `id`},
				{text: `Nom`, value: `lastname`},
				{text: `Prénom`, value: `firstname`},
				{text: ``, value: `actions`, sortable: false}
			],
			members: cloneDeep(store.state.members),
			modalDeleteVisibility: false,
			modalMemberToDelete: {},
		};
	},

	methods: {
		confirmDeleteMember(member) {
			this.modalMemberToDelete = member;
			this.modalDeleteVisibility = true;
		},
		async deleteMember() {
			this.modalDeleteVisibility = false;
            try {
                await store.dispatch(`deleteMemberById`, this.modalMemberToDelete.id);
            } catch (e) {
                // todo use snackbar instead of console.log https://v15.vuetifyjs.com/en/components/snackbars
                console.log(`Erreur durant la suppression du membre.`);
            }
            this.members = cloneDeep(store.state.members);
            this.deleting = false;
        },
		editMember(id) {
			this.$router.push({name: `member.edit`, params: {id}});
		},
	},
};
</script>
