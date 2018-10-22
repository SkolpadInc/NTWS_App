<template>
    <div class="row">
      <div class="col-md-12">
      <h4 class="title" style="color:#2F2F2F">Encode Bills</h4>
      <div class="col-lg-12">
        <br>
      </div>
    </div>
    <br>
    <div class="col-md-12 card">
      <div class="card-content row">
        <div class="col-sm-12">
          <div class="pull-right">
            <br>
            <label>
              <input type="search" class="form-control input-sm" placeholder="Search user" v-model="searchQuery" aria-controls="datatables">
            </label>
          </div>
        </div>
        <div class="col-sm-10">
        <br>
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
          <br>
          <br>
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
            <el-table-column
              :min-width="200"
              fixed="right"
              label="Meter Reading">
              <template slot-scope="props">
                <div class="col-sm-10">
              <input type="text"
                     name="name"
                     class="form-control">
            </div>
              </template>
            </el-table-column>
            <el-table-column
              :min-width="120"
              fixed="right"
              label="Actions">
              <template slot-scope="props">
                <a class="btn btn-simple btn-xs btn-warning btn-icon edit" @click="handleEdit(props.$index, props.row)"><i class="ti-save"></i></a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="col-lg-12">
        <br>
        <button type="submit" class="button pull-right" @click="openNewUser">Save</button>
      </div>
        <div class="col-sm-6 pagination-info">
          <br>
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} users</p>
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
          perPage: 5,
          currentPage: 1,
          perPageOptions: [5, 10, 25, 50],
          total: 0
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
        searchQuery: '',
        propsToSearch: ['name', 'email', 'age'],
        tableColumns: [
          {
            prop: 'name',
            label: 'Barangay',
            minWidth: 200
          },
          {
            prop: 'email',
            label: 'Cluster',
            minWidth: 250
          },
          {
            prop: 'name',
            label: 'Name',
            minWidth: 200
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
        alert(`Your want to save ${row.name}`)
      },
      handleDelete (index, row) {
        let indexToDelete = this.tableData.findIndex((tableRow) => tableRow.id === row.id)
        if (indexToDelete >= 0) {
          this.tableData.splice(indexToDelete, 1)
        }
      },
      openNewUser () {
        alert(`Save completed`)
      }
    }
  }
</script>
<style>
</style>
