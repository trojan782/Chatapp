<template>
  <div class="relative h-10 m-1">
    <div style="border-top: solid #e6e6e6" class="grid grid-cols-6">
      <input
        type="text"
        v-model="message"
        @keyup.enter="sendMessage()"
        placeholder="say something..."
        class="col-span-5 outline-none p-1"
      />

      <button class="bg-grey-200 p-1 hover:bg-purple-500" @click="sendMessage()">
        Send
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {
      message: ''
    };
  },
  props: ["room"],
  methods: {
    sendMessage() {
      if( this.message == ' ') {
          return;
      }
      axios.post('/chat/room/' + this.room.id + '/message',  {
          message: this.message
      })
      .then( response => {
        if( response.status == 201 ) {
          this.message = '';
          $this.$emit('messagesent')
        }
      })
      .catch( error => {
        console.log(error)
      })
    }
  },
};
</script>

<style lang="scss" scoped></style>
