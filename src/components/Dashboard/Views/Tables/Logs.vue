<template>
    <div class="row">
      <div class="col-md-12">
      <h4 class="title" style="color:#2F2F2F">NTWS Records</h4>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="col-md-12 card">
      <div class="card-content row">
        <div class="col-sm-6">
        <br>
          <el-select
            class="select-default"
            v-model="pagination.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in pagination.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <br>
            <label>
              <input type="search" class="form-control input-sm" placeholder="Search logs" v-model="searchQuery" aria-controls="datatables">
            </label>
          </div>
        </div>
        <div class="col-sm-12">
          <el-table class="table-striped"
                    :data="queriedData"
                    border
                    style="width: 100%">
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
            </el-table-column>
          </el-table>
        </div>
        <div class="col-sm-6 pagination-info">
          <br>
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} logs</p>
        </div>
        <div class="col-sm-6">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="pagination.total">
          </p-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn, Select, Option} from 'element-ui'
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import users from './users'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default{
    components: {
      PPagination
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      /***
       * Searches through table data and returns a paginated array.
       * Note that this should not be used for table with a lot of data as it might be slow!
       * Do the search and the pagination on the server and display the data retrieved from server instead.
       * @returns {computed.pagedData}
       */
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        pagination: {
          perPage: 25,
          currentPage: 1,
          perPageOptions: [25, 50, 100],
          total: 0
        },
        searchQuery: '',
        propsToSearch: ['name', 'email', 'age'],
        tableColumns: [
          {
            prop: 'name',
            label: 'Time Stamp',
            minWidth: 200
          },
          {
            prop: 'email',
            label: 'Username',
            minWidth: 250
          },
          {
            prop: 'age',
            label: 'Action',
            minWidth: 320
          }
        ],
        tableData: users
      }
    },
    methods: {
      handleLike (index, row) {
        alert(`Your want to like ${row.name}`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.name}`)
      },
      handleDelete (index, row) {
        let indexToDelete = this.tableData.findIndex((tableRow) => tableRow.id === row.id)
        if (indexToDelete >= 0) {
          this.tableData.splice(indexToDelete, 1)
        }
      },
      openNewUser () {
        this.$router.push({ name: 'New User' })
      }
    }
  }
</script>
<style>
</style>
