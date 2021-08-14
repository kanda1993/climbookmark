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
  export default {
    data () {
      return {
      
      }
    },
    methods: {
      add (){
        alert("登録完了（嘘です。まだ未実装です）");
      }
    }
  }
</script>


<style>
  .form_base {
    border-radius: 2%;
    background-color: whitesmoke;
    color: black;
    padding: 2rem;
  }
</style>