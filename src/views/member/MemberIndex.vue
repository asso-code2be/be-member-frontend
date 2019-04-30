<template>
  <div>
    <h1>Member Index</h1>
    <v-data-table :headers="headers" :items="membersList" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.lastname }}</td>
        <td class="text-xs-right">{{ props.item.firstname }}</td>
        <td class="text-xs-right">
          <router-link :to="`/members/${props.item.id}/edit`">TEST</router-link>
          <v-btn :href="`/members/${props.item.id}/edit`">Modifier</v-btn>
        </td>
      </template>
    </v-data-table>
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
        { text: "Nom", value: "lastname" },
        { text: "Prénom", value: "firstname" },
        { text: "", value: "actions" }
      ]
    };
  },
  mounted() {
    //this.$store.dispatch("getAllMembers");
  }
};
</script>
