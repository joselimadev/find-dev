<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">
          <i class="fa fa-book text-primary"></i>
          &nbsp;<a class="name" :href="repository.html_url" target="_blank">{{
            repository.name
          }}</a>
        </h5>
        <p class="card-text">
          {{ repository.description }}
        </p>
      </div>
      <div class="card-footer-pers d-flex justify-content-between">
        <span class="text-left">
          <i class="fa fa-code text-primary" v-if="repository.language"></i>
          {{ repository.language }}
        </span>
        <span class="text-right">
          <i class="fa fa-star text-primary"></i>
          <span class="stars">{{ repository.stargazers_count }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repository',
  props: {
    repository: Object,
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  .card-title {
    font-size: 16px;
  }

  .card-text {
    font-size: 14px;
  }
}

.card-footer-pers {
  padding: 0.75rem 1.25rem 1.25rem;
  span {
    font-size: 14px;
  }
}
</style>
