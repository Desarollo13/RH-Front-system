<template>
  <footer class="text-center text-white py-4" style="background: linear-gradient(135deg, #0a1f44, #1d5aa6);">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p class="mb-2 mb-md-3 d-flex align-items-center justify-content-center gap-2">
            <img src="@/assets/img/logo-nexen-sinfondo.png" alt="Nexen Logo" style="height: 30px;" />
            © {{ currentYear }} NexeneLog. Todos los derechos reservados.
          </p>
          <div>
            <a href="#" class="text-white me-3 fs-5"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white me-3 fs-5"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white me-3 fs-5"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-white fs-5"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
