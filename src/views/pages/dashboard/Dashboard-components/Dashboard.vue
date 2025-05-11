<script setup>
import chartCarousel from './ChartCarousel.vue'
</script>

<template>
  <div class="container py-4">
    <h1 class="h3 mb-4 d-flex align-items-center gap-2">
      <i class="bi bi-bar-chart-fill text-primary fs-1"></i>
      Bienvenida al Dashboard 🎯
    </h1>

    <!-- RESUMEN GENERAL -->
    <section class="mb-5 p-5">
      <h2 class="h5 border-bottom pb-2 mb-4 text-secondary d-flex align-items-center gap-2">
        <i class="bi bi-graph-up-arrow text-primary"></i>
        Resumen General
      </h2>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow rounded text-center p-3 h-100">
            <chart-carousel />
          </div>
        </div>

        <div class="col-lg-6 mb-4">
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <div class="card text-center border-success shadow h-100">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-check-circle-fill"></i> Contratos Aceptados</h5>
                  <p class="display-6">23 <i class="bi bi-arrow-down bg-primary-100"></i></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center border-info shadow h-100">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-person-badge-fill"></i> En Contrato</h5>
                  <p class="display-6">15 <i class="bi bi-graph-down-arrow"></i></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center border-warning shadow h-100">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-patch-question-fill"></i> Por Expirar</h5>
                  <p class="display-6">4 <i class="bi bi-graph-up-arrow"></i></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center border-secondary shadow h-100">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-bag-dash-fill"></i> Finalizados</h5>
                  <p class="display-6">10 <i class="bi bi-arrow-up bg-primary-100"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <!-- CONTRATACIONES -->
    <section id="contrataciones" class="mb-5 p-5 gap-2">
      <h2 class="h5 border-bottom pb-2 mb-4 text-secondary d-flex align-items-center gap-2">
        <i class="bi bi-file-earmark-text-fill text-primary"></i>
        Contrataciones
      </h2>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow rounded text-center p-3 h-100">
            <chart-carousel />
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <div class="card text-center border-warning shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-hourglass-split"></i> En Proceso</h5>
                  <p class="display-6">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
    </section>


    <hr>
    <!-- EMPLEADOS -->
    <section id="empleados" class="mb-6 p-6 gap-2">
      <h2 class="h5 border-bottom pb-2 mb-4 text-secondary d-flex align-items-center gap-2">
        <i class="bi bi-people-fill text-primary"></i>
        Empleados
      </h2>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow rounded text-center p-3 h-100">
            <chart-carousel />
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <div class="card text-center border-warning shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-people-fill"></i> Activos</h5>
                  <p class="display-6">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
    </section>
<hr>
    <!-- EVALUACIONES -->
    <section id="evaluaciones" class="mb-6 p-6 gap-2">
      <h2 class="h5 border-bottom pb-2 mb-4 text-secondary d-flex align-items-center gap-2">
        <i class="bi bi-clipboard2-check-fill text-primary"></i>
        Evaluaciones
      </h2>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow rounded text-center p-3 h-100">
            <chart-carousel />
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <div class="card text-center border-success shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-award-fill"></i> Completadas</h5>
                  <p class="display-6">18</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center border-danger shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-exclamation-circle-fill"></i> Pendientes</h5>
                  <p class="display-6">7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr>
    <!-- NÓMINA -->
    <section id="nomina" class="mb-5 p-5 gap-2">
      <h2 class="h5 border-bottom pb-2 mb-4 text-secondary d-flex align-items-center gap-2">
        <i class="bi bi-cash-stack text-primary"></i>
        Nómina
      </h2>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow rounded text-center p-3 h-100">
            <chart-carousel />
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <div class="card text-center border-success shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-check-circle-fill"></i> Pagadas</h5>
                  <p class="display-6">30</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center border-danger shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-x-circle-fill"></i> Fallidas</h5>
                  <p class="display-6">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
    </section>
    <hr>

    <!-- TICKETS -->
    <section id="tickets" class="mb-5 p-5 gap-3">
      <h2 class="h5 border-bottom pb-2 mb-4 text-secondary d-flex align-items-center gap-2">
        <i class="bi bi-ticket-perforated-fill text-primary"></i>
        Tickets
      </h2>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow rounded text-center p-3 h-100">
            <chart-carousel />
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <div class="card text-center border-info shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-envelope-open-fill"></i> Abiertos</h5>
                  <p class="display-6">9</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center border-success shadow">
                <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-check-circle-fill"></i> Resueltos</h5>
                  <p class="display-6">14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
