<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
  :style="{marginLeft: gutter/2 + 'px', marginRight: gutter/2 + 'px'}"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ShanyaodanCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
    },
    created() {
      console.log('col created=>', this.$children)
    },
    mounted() {
      console.log('col mounted el=>', this.$children)
    },
    data() {
      return {
        gutter: 0,
      }
    }
  }
</script>
<style scoped lang="scss">
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
  //scss循环，col-col-1 #{} 是scss的取值操作  对标js ${}
  // 生成 col.col-1
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  // 循环生成offset空隙
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
