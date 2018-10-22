<template>
  <div class="card">
    <form class="form-horizontal">
      <div class="card-header">
        <h4 class="card-title">
          Print Bills
        </h4>
      </div>
      <div class="card-content">
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Date</label>
            <div class="col-sm-6">
            <el-select
            class="select-default"
            v-model="date.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in date.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Barangay</label>
            <div class="col-sm-6">
            <el-select
            class="select-default"
            v-model="barangay.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in barangay.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Cluster</label>
            <div class="col-sm-6">
            <el-select
            class="select-default"
            v-model="cluster.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in cluster.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="card-footer text-center">
        <button type="submit" @click.prevent="validate" class="button">Print Bills</button>
      </div>
    </form>

  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'

  export default {
    computed: {
      ...mapFields(['name', 'username', 'address', 'number', 'url', 'password', 'confirm_password'])
    },
    data () {
      return {
        radios: {
          radio1: '1',
          radio2: '2',
          radio3: '2'
        },
        barangay: {
          perPage: 'San Pablo',
          currentPage: 1,
          perPageOptions: ['San Pablo', 'Del Rosario', 'Marga', 'Cawilan', 'Poblacion', 'Motorpool (1,2,3)', 'Motorpool (pingaping 4,5,6)'],
          total: 0
        },
        cluster: {
          perPage: 12,
          currentPage: 1,
          perPageOptions: [12, 39, 46, 53, 72, 75],
          total: 0
        },
        date: {
          perPage: 'Jan 2019',
          currentPage: 1,
          perPageOptions: ['Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019'],
          total: 0
        },
        model: {
          name: '',
          username: '',
          address: '',
          number: '',
          url: '',
          password: '',
          confirm_password: ''
        },
        modelValidations: {
          name: {
            required: true
          },
          username: {
            required: true
          },
          address: {
            required: true
          },
          number: {
            required: true,
            decimal: true
          },
          url: {
            required: true,
            url: true
          },
          password: {
            required: true
          },
          confirm_password: {
            required: true,
            confirmed: 'password'
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          alert(`Printing Bills...`)
        })
      }
    }
  }
</script>
<style>
</style>
