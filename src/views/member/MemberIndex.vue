<template>
  <div>
    <h1>Member Index</h1>
    
    <v-data-table :headers="headers" :items="membersList" class="elevation-1">
      
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.lastname }}</td>
        <td class="text-xs-left">{{ props.item.firstname }}</td>
        <td class="text-xs-left">{{ props.item.emailadress }}</td>
        <td class="text-xs-right">
          <v-btn :to="`/members/${props.item.id}/edit`">Modifier</v-btn>
        </td>
      </template>
    </v-data-table>
    <v-btn
          fab
          small
          color="indigo"
          bottom
          left
          relative
          @click="dialog = !dialog"
        >
        <v-icon class="white--text">add</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-text-field
								v-model="nom"
								:rules="nameRules"
								label="Nom"
								required
							/>
              <v-text-field
								v-model="prenom"
								:rules="nameRules"
								label="Prénom"
								required
							/>
              <v-text-field
								v-model="email"
								:rules="emailRules"
								label="E-mail"
								required
							/>
              <small class="grey--text">* This doesn't actually save.</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="dialog = false">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["membersList"])
  },
  data() {
    return {
      headers: [
        {
          text: "#",
          align: "left",
          sortable: true,
          value: "id"
        },
        { text: "Nom", align: "left", value: "lastname" },
        { text: "Prénom", align: "left", value: "firstname" },
        { text: "Email", align: "left", value: "Email" },
        { text: "",
          align: "right",
          sortable: false,
          value: "actions" }
      ],
			dialog: false,
			firstname: ``,
			lastname: ``,
			nameRules: [
				v => !!v || `Veuillez completer ce champ`,
			],
			email: ``,
			emailRules: [
				v => !!v || `Veuillez completer ce champ`,
				v => /.+@.+/.test(v) || `Entrez une adresse email valide`
			]
    };
  },
  mounted() {
    //this.$store.dispatch("getAllMembers");
  }
};
</script>
