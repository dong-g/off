<template>
  <div>
    <div class = "inputMessage">
      <div>
        <span>每月基本收入:</span>
        <input type="text" class="inputBox" v-model="salaryCollection.salary"/>
      </div>
      <div>
        <span>五险一金:</span>
        <input type="text" class="inputBox" v-model="salaryCollection.fundation"/>
      </div>
      <div>
        <span>专项扣除:</span>
        <input type="text" class="inputBox" v-model="salaryCollection.extra"/>
      </div>
    </div>
    <div class="btn-div">
      <button class="btn-basic" @click="calculateTax">{{calculateStr}}</button>
    </div>
    <div>
      <span v-model ="taxResults"></span>
    </div>
  </div>
</template>

<script>
    import * as util from '../../js/Util'
    export default {
      data () {
        return {
          salaryCollection: {
            salary: 0,
            fundation: 0,
            extra: 0
          },
          calculateStr: '计算',
          taxResults: ''
        }
      },
      methods: {
        calculate () {
          this.taxResults = util.calculateTax(this.salaryCollection.salay, this.salaryCollection.extra, this.salaryCollection.fundation);
        }
      }
    }
</script>

<style>
  .inputMessage {
    font-size: 15px;
    color: black;
    padding: 20px;
  }
  .inputMessage > div{
    margin: 10px;
  }
  .inputBox{
    border: 1px solid #c0c0c0;
  }
  .btn-div{
    padding: 0 20px 0 20px;
  }
  .btn-basic{
    margin: 0 10px 0 10px;
    color: black;
    height: 40px;
    font-size: 15px;
  }
</style>