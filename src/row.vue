<template>
  <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px',}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ShanyaodanRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    created() {
      console.log('row created=>', this.$children)
    },
    mounted() {
      console.log('row mounted el=>', this.$children)
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>
<style scoped lang="scss">
.row {
  display: flex;
}
</style>
