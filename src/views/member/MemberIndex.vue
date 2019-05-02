<template>
  <div>
    <h1>Member Index</h1>
    <v-data-table :headers="headers" :items="membersList" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">
{{ props.item.lastname }}
</td>
        <td class="text-xs-right">
{{ props.item.firstname }}
</td>
        <td class="text-xs-right">
          <v-btn :to="`/members/${props.item.id}/edit`">
Modifier
</v-btn>
        </td>
      </template>
    </v-data-table>
    <div>
      <v-flex text-xs-center align-center>
        <v-btn :to="`/members/add`" class="text-md-center">
Ajouter
</v-btn>
      </v-flex>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState([`membersList`])
	},
	data() {yarn 
		return {
			headers: [
				{
					text: `#`,
					align: `left`,
					sortable: true,
					value: `id`
				},
				{ text: `Nom`, value: `lastname` },
				{ text: `Prénom`, value: `firstname` },
				{ text: ``, value: `actions` }
			]
		};
	},
	mounted() {
		//this.$store.dispatch("getAllMembers");
	}
};
</script>
