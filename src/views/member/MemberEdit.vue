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

    <v-btn @click="save">Enregistrer</v-btn>
    <v-btn @click="confirmDeleteMember">Supprimer</v-btn>
    <modal-delete
      :visible.sync="modalDeleteVisibility"
      :width="450"
      @canceled="modalDeleteVisibility=false"
      @confirmed="deleteMember"
      v-if="modalMemberToDelete"
    >
      <template
        v-slot:content
      >Êtes vous sur de vouloir supprimer {{ modalMemberToDelete.firstname }} {{ modalMemberToDelete.lastname }} ?</template>
    </modal-delete>
  </v-container>
</template>

<script>
import store from "../../store/index";
import cloneDeep from "lodash/cloneDeep";
import ModalDelete from "../../components/ModalDelete";

export default {
  name: `MemberEdit`,

  props: {
    id: {
      type: Number,
      default: null
    }
  },

  components: {
    ModalDelete
  },

  data() {
    return {
      member: cloneDeep(this.$store.getters.getMemberById(this.$route.params.id)),
      saving: false,
      modalDeleteVisibility: false,
      modalMemberToDelete: null
    };
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

		confirmDeleteMember(member) {
      this.modalMemberToDelete = member;
      this.modalDeleteVisibility = true;
    },

    async deleteMember() {
      this.modalDeleteVisibility = true;
      try {
        await store.dispatch(`deleteMemberById`, this.member.id);
      } catch (e) {
        console.log(e);
        console.log(`Erreur durant la suppression du membre.`);
      }
      this.deleting = false;
      this.$router.push({ name: `member.index` });
    }
  }
};
</script>
