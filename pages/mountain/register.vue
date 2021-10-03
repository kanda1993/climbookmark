<template>
  <div>
    <p>山登録画面</p>

    <div>
      <div class="form_base">
        <div>
          id: <input v-model='mountain_id' placeholder='id'>
        </div>
        <div>
          山名：<input v-model='mountain_name' placeholder='山名'>
        </div>
        <div>
          読みかな：<input v-model='mountain_name_ruby' placeholder='かな'>
        </div>
        <div>
          標高：<input v-model='mountain_elevation' placeholder='標高(m)'>
        </div>

        <ul>
          
            <li v-for="(mountain, index) in mountain_addresses" :key="mountain[index]">
              住所：<input v-model="mountain_addresses[index]" >

            <v-btn
              icon
              color="red"
              @click="address_remove(index)"
            >
              <v-icon>mdi-timeline-minus-outline</v-icon>
            </v-btn>
          </li>

          <v-btn
            icon
            color="blue"
            @click="address_add"
          >
            <v-icon>mdi-timeline-plus-outline</v-icon>
          </v-btn>
         
        </ul>

        <v-btn
          @click='add'
          elevation="2"
        >登録</v-btn>
      </div>
    </div>




  </div>

</template>

<script>
  import firebase from '@/plugins/firebase'

  export default {
    data () {
      return {
        mountain_id : Math.random().toString(36).slice(-8),
        mountain_name : '',
        mountain_ruby : '',
        mountain_elevation: '',
        mountain_addresses: ['']
      }
    },
    methods: {
      add (){
        let data = {
          id       : this.mountain_id,
          name     : this. mountain_name,
          name_ruby : this.mountain_name_ruby,
          elevation : this.mountain_elevation,
          address : this.mountain_addresses
        }

        firebase.db.collection('mountains').doc(data.id).set(data);

        alert("登録完了！！");
      },
      address_add () {
        this.mountain_addresses.push("");
      },
      address_remove(index) {
        this.mountain_addresses.splice(index,1);
      }

    }
  }
</script>


<style>
  .form_base {
    border-radius: 2%;
    color: black;
    padding: 2rem;
  }
</style>