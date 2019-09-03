<template>
	<v-dialog
			v-model="visible"
			:max-width="width"
	>
		<v-card>
			<v-card-title class="headline">
				<slot name="title">Confirmer la suppression ?</slot>
			</v-card-title>

			<v-card-text>
				<slot name="content">Attention ça va couper.</slot>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn
						color="green darken-1"
						flat="flat"
						@click="$emit(`canceled`, true)"
				>
					NOK
				</v-btn>

				<v-btn
						color="green darken-1"
						flat="flat"
						@click="$emit(`confirmed`, true)"
				>
					OK
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: {
		width: {
			type: Number,
			default: 280
		},
		visible: {
			type: Boolean,
			default: false
		}
	},
};
</script>

<style scoped>

</style>