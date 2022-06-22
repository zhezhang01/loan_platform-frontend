<template>
  <div class="personal-main">
    <div class="personal-money">
      <h3><i>Fund records</i></h3>

      <div class="personal-moneylist" style="margin-top: 40px;">
        <div class="pmain-contitle">
          <span class="pmain-title1 fb" style="width: 150px;">
            Trading time
          </span>
          <span class="pmain-title2 fb" style="width: 120px;">
            Trading type
          </span>
          <span class="pmain-title3 fb" style="width: 120px;">
            Trading amount
          </span>
          <span class="pmain-title1 fb" style="width: 300px;">annotation</span>
        </div>
        <ul>
          <li
            v-for="transFlow in transFlowList"
            :key="transFlow.id"
            style="width:100%"
          >
            <span class="pmain-title1 pmain-height" style="width: 150px;">
              {{ transFlow.createTime }}
            </span>
            <span class="pmain-title2 pmain-height" style="width: 120px;">
              {{ transFlow.transTypeName }}
            </span>
            <span class="pmain-title3 pmain-height" style="width: 120px;">
              {{ transFlow.transAmount }}
            </span>
            <span
              :title="transFlow.memo"
              class="pmain-title1 pmain-height"
              style="width: 500px; overflow: hidden;"
            >
              {{ transFlow.memo }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transFlowList: [],
    };
  },

  created() {
    this.fetchTransFlowList();
  },

  methods: {
    fetchTransFlowList() {
      this.$axios.$get('/api/core/transFlow/list').then((response) => {
        this.transFlowList = response.data.list;
      });
    },
  },
};
</script>
