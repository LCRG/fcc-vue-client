<template>
  <section>
    {{ description }}
  </section>
</template>

<script>
export default {
  name: 'Description',
  props: ['challenge'],
  data: () => ({}),
  computed: {
    description() {
      console.log(this.challenge.description)
      return this.challenge.description
    }
  }
}
</script>
