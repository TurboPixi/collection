<template>
  <section class="page">
    <button class="btn btn-info" @click="handle('row:add')">添加行</button>
    <!-- <button class="btn btn-info" @click="handle('col:add')">添加列</button> -->
    <table class="table">
      <template v-for="(row, i) in rows">
        <tr>
          <td v-for="x in row"
            v-if="!x.collapse"
            :rowspan="x.rowspan ? x.rowspan : 1"
            :colspan="x.colspan ? x.colspan : 1"
          >
            <template v-if="x.fixed">
              <i v-text="x.value"></i>
            </template>
            <template v-else>
              <input readonly type="text" v-model="x.value" class="form-control"
                @click="handle('input:click', $event)"
                @blur="handle('input:blur', $event)"
              >
            </template>
          </td>
        </tr>
      </template>
    </table>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        click: {target: null, stamp: 0},
        row: 1,
        col: 8,
        list: [
          {value: '=====', fixed: true},
          {value: '星期一', fixed: true},
          {value: '星期二', fixed: true},
          {value: '星期三', fixed: true},
          {value: '星期四', fixed: true},
          {value: '星期五', fixed: true},
          {value: '星期六', fixed: true},
          {value: '星期☀', fixed: true}
        ]
      }
    },

    computed: {
      rows() {
        return Array.from({length: this.row}, (_, i) => {
          return this.list.slice(i * this.col, (i + 1) * this.col)
        })
      }

    },

    methods: {
      handle(...args) {
        switch (args[0]) {
          case 'input:click': {
            const
              target = args[1].target,
              click = this.click,
              now = performance.now()

            if (click.target) {
              click.target.isSameNode(target) &&
              now - click.stamp < 200 &&
              target.removeAttribute('readonly')
            }
            click.target = target
            click.stamp = now
            break
          }

          case 'input:blur': {
            const target = args[1].target
            target.setAttribute('readonly', '')
            // this.raw.list = this.raw.list
            this.filter()
            break
          }

          case 'row:add': {
            this.row++
            this.list.push(...Array.from({length: this.col}, () => {
              return {value: '', fixed: false, rowspan: 1, colspan: 1, collapse: false}
            }))
          }
        }
      },

      filter() {
        const list = this.list

        /* reset */
        for (const item of list) {
          item.colspan =
          item.rowspan = 1
          item.collapse = false
        }

        /* 行遍历 */
        for (let i = 1; i < this.row; i++) {
          for (let j = 1; j < this.col; j++) {
            const
              m = i * this.col + j,
              n = j,
              current = list[m]
            for (let k = 1; k + n < this.col; k++) {
              const next = list[m + k]
              if (current.value === next.value && current.value !== '') {
                current.colspan++
                j++
                next.collapse = true
              } else break
            }
          }
        }

        /* 列遍历 */
        for (let i = 1; i < this.col; i++) {
          for (let j = 1; j < this.row; j++) {
            const
              m = j * this.col + i,
              n = j,
              current = list[m]
            for (let k = 1; k + n < this.row; k++) {
              const next = list[m + k * this.col]
              if (current.value === next.value && current.value !== '') {
                current.rowspan++
                j++
                next.collapse = true
              } else break
            }
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  table {
    border-collapse: collapse;
    grid-gap: 2px;

    td {
      text-align: center;
      padding: .5rem 0;
      border: 1px solid #ccc;
      vertical-align: middle;

      input {
        width: 100%;
        &[readonly] {
          background-color: transparent;
          border: 0;
          text-align: center;
        }
      }
    }
  }
</style>
