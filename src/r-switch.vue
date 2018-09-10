<template>
  <span :class="[css.component, {[css.on]:value}]" @click="toggle"><i :class="[css.block]"></i></span>
</template>
<script>
export default {
  name: 'r-switch',
  model: {
    event: 'toggle',
    prop: 'value'
  },
  props: {
    value: Boolean
  },
  methods: {
    toggle () {
      this.$emit('toggle', !this.value)
    }
  }
}
</script>
<style lang="scss" module="css">
  $color-primary: #00aeff;

  .component {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 15px;
    width: 80px;
    font-size: 12px;
    overflow: hidden;
    background-color: #ccc;
    color: white;
    transition: border-color 0.3s ease;

    &.on {
      border-color: $color-primary;
      background-color: $color-primary;
    }

    &::before,
    &::after {
      line-height: 28px;
      flex: 1;
      text-align: center;
    }

    &::before {
      content: "OFF";
    }

    &::after {
      content: "ON";
    }
  }

  .block {
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    transition: left 0.3s ease-out;
    height: 28px;
    width: 45px;
    background-color: white;
    left: 35px;
    border-radius: 18px;
  }

  .on .block {
    left: 0;
  }
</style>
