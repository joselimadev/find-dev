<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-lg-12 col-md-12 col-4">
        <img :src="profile.avatar_url" class="img-fluid avatar mx-auto d-block p-3" />
      </div>
      <div class="col-lg-12 col-md-12 col-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <h6 class="card-subtitle">
            <a :href="profile.html_url" target="_blank">{{ profile.login }}</a>
          </h6>
          <p class="card-text">
            {{ profile.bio }}
          </p>
          <p class="card-text" v-if="profile.public_repos">
            <span class="badge badge-pill badge-primary">{{ profile.public_repos }}</span>
            Repositories
          </p>
          <p class="card-text" v-if="profile.location">
            <i class="fa fa-map-marker text-primary"></i> {{ profile.location }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    profile: Object,
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 100%;
}

.card-subtitle {
  margin-bottom: 0.75rem;
  font-weight: 200;
}

.btn {
  border-radius: 25px;
  margin-bottom: 0.75rem;
}
</style>
