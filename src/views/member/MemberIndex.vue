<template>
  <div>
    <h1>Member Index</h1>
    
    <v-data-table 
      :headers="headers"
      :items="localMembersList"
      :rows-per-page-items="[5, 10,20, {'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
      class="elevation-1">
      
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.lastname }}</td>
        <td class="text-xs-left">{{ props.item.firstname }}</td>
        <td class="text-xs-left">{{ props.item.emailadress }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
    <v-btn
          v-on:click="formTitle = 'Nouveau membre'"
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
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
								v-model="editedItem.lastname"
								:rules="nameRules"
								label="Nom"
								required
							/>
              <v-text-field
								v-model="editedItem.firstname"
								:rules="nameRules"
								label="Prénom"
								required
							/>
              <v-text-field
								v-model="editedItem.emailadress"
								:rules="emailValidator"
								label="E-mail"
								required
							/>
              <small class="grey--text">* This doesn't actually save.</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Annuler</v-btn>
              <v-btn flat color="primary" @click="save">Valider</v-btn>
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
      localMembersList: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
				firstname: '',
				lastname: '',
				emailadress: ''
        },
        defaultItem: {
        id: 0,
				firstname: '',
				lastname: '',
				emailadress: ''
        },
      newId: 0,
			dialog: false,
			firstname: ``,
			lastname: ``,
			nameRules: [
				v => !!v || `Veuillez completer ce champ`,
			],
			email: ``,
			emailValidator: [
				v => !!v || `Veuillez completer ce champ`,
				v => /.+@.+/.test(v) || `Entrez une adresse email valide`
			]
    };
  },
  
  created () {
    this.initialize()
  },
  
  mounted() {
    //this.$store.dispatch("getAllMembers");
  },

  methods: {

    initialize () {
        this.localMembersList = this.membersList;
    },

    editItem (item) {
        
        this.editedIndex = this.localMembersList.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.formTitle = 'Modification';
        this.dialog =! this.dialog;
        
    },

    deleteItem (item) {
        const index = this.localMembersList.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.localMembersList.splice(index, 1)
    },

    close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
    },

    save () {
        if (this.editedIndex > -1) {
          Object.assign(this.localMembersList[this.editedIndex], this.editedItem)
        } else {
          this.computeNewId();
          this.editedItem.id = this.newId;
          this.localMembersList.push(this.editedItem)
        }
        this.close()
    },

    computeNewId() {
      let ids = this.localMembersList.map(a => a.id);
      this.newId = Math.max.apply(Math, ids) + 1;
    }

  }
   
};
</script>
