<template>
	<div>
	<h1>
		Member Index
	</h1>
	<v-data-table :headers="headers" :items="membersList" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
	</div>
</template>

<script>
import { mapState } from "vuex";

  export default {
		computed : {
			...mapState([
			  'membersList',
			]),
		},
    data () {
      return {
        headers: [
          {
            text: 'Nom',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
      }
    },
		mounted () {
		  this.$store.dispatch('getAllMembers');
		}
  }
</script>
