<template>
  <div>
    <p>山登録画面</p>

    <div>
      <div class="form_base">
        <div>
          山名：<input v-model='mountain_name' placeholder='山名'>
        </div>

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
        mountain_name : ''
      }
    },
    methods: {
      add (){
        let data = {
          name     : this. mountain_name
        }

        firebase.db.collection('mountains').doc("99").set(data);

        alert("登録完了！！");
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