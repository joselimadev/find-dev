<template>
  <div>
    <nav aria-label="pagination">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: page === 1 }">
          <a class="page-link" href="#" @click="navigate($event, page - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="pg in pages"
          v-bind:key="pg"
          v-bind:class="{ active: page === pg }"
        >
          <a class="page-link pg" @click="navigate($event, pg)" href="#">{{ pg }}</a>
        </li>
        <li class="page-item" :class="{ disabled: Math.round(this.repos / 15) + 1 }">
          <a class="page-link" href="#" @click="navigate($event, page + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { range } from 'lodash';

export default {
  name: 'Pagination',
  props: ['page', 'repos'],
  methods: {
    navigate(ev, page) {
      ev.preventDefault();
      this.$emit('navigate', page);
    },
  },
  computed: {
    pages() {
      if (Math.round(this.repos / 15) + 1 < 30) {
        return range(1, Math.round(this.repos / 15) + 1);
      }
      return range(1, 31);
    },
  },
};
</script>

<style lang="scss" scoped></style>
