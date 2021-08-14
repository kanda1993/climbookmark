<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-check-circle-outline</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <nuxt-link
      to="/mountain/register" 
    >新しい山を登録する</nuxt-link>

  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: '富士山', src: '', flex: 6 },
        { title: '高尾山', src: '', flex: 6 },
        { title: '三つ峠', src: '', flex: 6 },
      ],
    }),
  }
</script>