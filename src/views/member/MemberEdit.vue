
<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="prenom"
            :rules="nameRules"
            label="Prénom"
            required
          />
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="nom"
            :rules="nameRules"
            label="Nom"
            required
          />
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />
        </v-flex>
      </v-layout>
     <v-btn @click="submit">
Ajouter
</v-btn>
    </v-container>
  </v-form>
</template>
<script>
export default {
	data: () => ({
		valid: false,
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
	})
};
</script>