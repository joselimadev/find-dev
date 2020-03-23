<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-8 col-6">
            <h5 class="card-title">
              <i class="fa fa-book"></i>
              &nbsp;<a :href="repository.html_url" target="_blank">{{ repository.name }}</a>
            </h5>
          </div>
          <div class="col-md-4 col-6 text-right">
            <i class="fa fa-star text-primary"></i> {{ repository.stargazers_count }}
          </div>
        </div>

        <p class="card-text">
          {{ repository.description }}
        </p>
        <p class="card-text">
          <small class="text-muted">updated at {{ repository.updated_at | formatDate }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default {
  name: 'Repository',
  props: {
    repository: Object,
  },
  filters: {
    formatDate(value) {
      let val = value;
      if (!val) return '';
      val = format(parseISO(val), 'dd/MM/yyyy', { locale: pt });
      return val;
    },
  },
};
</script>

<style lang="sass" scoped></style>
