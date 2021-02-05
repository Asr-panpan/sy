<template>
  <div>
    <Menu :accordion="true">
      <Submenu v-bind:name="item.id" v-for="item in list" :key="item.id">
        <template slot="title">
          {{ item.title }}
          <Icon type="ios-paper" />
        </template>
        <!-- v-for 一个it 循环 item里的content v-bind(绑定的是每个id)-->
        <MenuItem v-for="it in item.content" :key="it.id" name="it.id">{{
          it.item_son
        }}</MenuItem>
        <!-- <MenuItem name="1-2"></MenuItem>
        <MenuItem name="1-3"></MenuItem> -->
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {
      
    };
  },
  created() {
    
  },
};
</script>
<style lang="less" scoped>
.ivu-menu,.ivu-menu-light,.ivu-menu-vertical {
  width: 100% !important;

}
.ivu-menu-submenu {
  width: 100% !important;
}
</style>