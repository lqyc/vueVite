<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
<van-circle
  v-model:current-rate="currentRate"
  rate=44
  :stroke-width="60"
  layer-color="#ebedf0"
  text="宽度定制"
/>
  <van-switch v-model="checked" />
  <van-rate v-model="value" allow-half />
  <div class="dist">
      <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model:show="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>

</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    msg: String
  },
  setup() {
    const show = ref(false);
    const count = ref(2)
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const checked = ref(false)
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
      },
    ];
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
      count,
      checked
    };
  },
};

</script>
<style lang="less">
.dist {
  border: 1px solid #879054;
  width: 500px;
  margin: 30px auto;
}
</style>
