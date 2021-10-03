<template>
  <div>
    {{ $config.HOGE }}
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="mountains in mountains"
            :key="mountains.id"
            :cols="6"
          >
            <v-card>

                <v-card-title>
                  <ruby>
                    {{ mountains.name }}
                    <rt> {{ mountains.name_ruby }} </rt>
                  </ruby>
                </v-card-title>
                
                <div>
                  <span>標高 {{ mountains.elevation }}m</span>
                </div>
                <span v-for="(address, index) in mountains.address" :key="address[index]">
                  {{ address }}、
                </span>

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
  import firebase from '@/plugins/firebase'

  export default {
    data: () => ({
      mountains: [],
    }),
    methods: {
      getMontains : async function(){
        //
        let temp = await firebase.db.collection('mountains').get()

        temp.forEach(doc => {
          //データ部分を取得
          let temp = doc.data();
          
          this.mountains.push(temp);
        });
      }
    },
    created : function() {
      this.getMontains();
    }
  }
</script>