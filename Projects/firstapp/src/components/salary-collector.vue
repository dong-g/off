<template>
    <div>
      <div>
        <span>每月基本收入:</span>
        <input type="text" v-model="salaryCollection.salary"/>
      </div>
      <div>
        <span>五险一金:</span>
        <input type="text" v-model="salaryCollection.fundation"/>
      </div>
      <div>
        <span>专项扣除:</span>
        <input type="text" v-model="salaryCollection.extra"/>
      </div>
    </div>
    <div>
      <button @click="calculateTax"></button>
    </div>
    <div>
      <span v-model ="taxResults"></span>>
    </div>
</template>

<script>
    import * as util from '../../../js/Util'
    export default {
      data () {
        return {
          salaryCollection: {
            salay: 0,
            fundation: 0,
            extra: 0
          },
          taxResults: ""
        }
      },
      methods: {
        calculate () {
          this.taxResults = util.calculateTax(this.salaryCollection.salay, this.salaryCollection.extra, this.salaryCollection.fundation);
        }
      }
    }
</script>

<style scoped>
</style>
